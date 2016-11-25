var express      = require('express');
var bodyParser   = require('body-parser');
var chalk        = require('chalk');
var projects     = require('./src/projects');
var translations = require('./src/translations');
var app = express();

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
  if (req.method !== 'OPTIONS') {
    if      (req.method === 'GET')    { console.log('mock>    ' + chalk.green(req.method) + ' ' + req.originalUrl); }
    else if (req.method === 'POST')   { console.log('mock>   ' + chalk.blue(req.method)   + ' ' + req.originalUrl); }
    else if (req.method === 'PATCH')  { console.log('mock>  ' + chalk.magenta(req.method) + ' ' + req.originalUrl); }
    else if (req.method === 'DELETE') { console.log('mock> ' + chalk.grey(req.method)     + ' ' + req.originalUrl); }
    else                              { console.log('mock> ' + req.method + ' ' + req.originalUrl); }
  }

  next();
}
function authentication(req, res, next) {
  var pattern = new RegExp(/[a-f0-9]{8}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{4}\-[a-f0-9]{12}/);
  if (req.method !== 'OPTIONS' && pattern.test(req.headers.authorization) !== true) {
    res.status(401).send({
      status: 401,
      message: "Invalid token"
    })
  } else {
    next();
  }
}

// middleware
app.use(bodyParser.json());
app.use(setupCors);
app.use(formatConsoleoutput);
app.use(authentication);

// resources
app.use('/projects', projects);
app.use('/translations', translations);

// application
app.listen(3002, function() {
  console.log('Mock server started on port 3002');
});