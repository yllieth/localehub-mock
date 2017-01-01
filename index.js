var express      = require('express');
var bodyParser   = require('body-parser');
var chalk        = require('chalk');
var login        = require('./src/login');
var projects     = require('./src/projects');
var organizations= require('./src/organizations');
var translations = require('./src/translations');
var app = express();
var port = 3002;

function requestHasValidToken(request) {
  var pattern = new RegExp(/[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}/);

  if (request.hasOwnProperty('headers') === false || request.headers.hasOwnProperty('authorization') === false) {
    return false;
  }

  return pattern.test(request.headers.authorization);
}
function isAuthenticatedRequest(request) {
  return requestHasValidToken(request)
    ? chalk.green.bold('✓')
    : chalk.red.bold('✘');
}
function notSecuredRequest(request) {
  var notSecuredUrls = ['/login'];
  return notSecuredUrls.indexOf(request.originalUrl) >= 0;
}

// middlewares
function setupCors(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.STUBAPI_ORIGINS || 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', process.env.STUBAPI_METHODS || 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', process.env.STUBAPI_HEADERS || 'content-type,authorization,cache-control');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', process.env.STUBAPI_CREDENTIALS || true);

  // Pass to next layer of middleware
  next();
}
function formatConsoleoutput(req, res, next) {
  var hasAuthorizationHeader = requestHasValidToken(req);

  if (req.method !== 'OPTIONS') {
    if      (req.method === 'GET')    { console.log('mock>    ' + chalk.green(req.method) + ' ' + isAuthenticatedRequest(req) + ' ' + req.originalUrl); }
    else if (req.method === 'POST')   { console.log('mock>   ' + chalk.blue(req.method)   + ' ' + isAuthenticatedRequest(req) + ' ' + req.originalUrl); }
    else if (req.method === 'PATCH')  { console.log('mock>  ' + chalk.magenta(req.method) + ' ' + isAuthenticatedRequest(req) + ' ' + req.originalUrl); }
    else if (req.method === 'DELETE') { console.log('mock> ' + chalk.grey(req.method)     + ' ' + isAuthenticatedRequest(req) + ' ' + req.originalUrl); }
    else                              { console.log('mock> ' + req.method                 + ' ' + isAuthenticatedRequest(req) + ' ' + req.originalUrl); }
  }

  next();
}
function authentication(req, res, next) {
  if (req.method === 'OPTIONS' || notSecuredRequest(req) === true || requestHasValidToken(req) === true) {
    next();
  } else {
    res.status(401).send({
      status: 401,
      message: "Invalid token"
    });
  }
}

// middleware
app.use(bodyParser.json());
app.use(setupCors);
app.use(formatConsoleoutput);
app.use(authentication);

// resources
app.use('/login', login);
app.use('/projects', projects);
app.use('/organizations', organizations);
app.use('/translations', translations);

// application
app.listen(port, function() {
  console.log('Mock server started on port ' + port);
});