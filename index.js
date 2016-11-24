var express    = require('express');
var bodyParser = require('body-parser');
var chalk      = require('chalk');
var projects   = require('./src/projects');
var app = express();

function setupCors(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.STUBAPI_ORIGINS || 'http://localhost:8002');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', process.env.STUBAPI_METHODS || 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', process.env.STUBAPI_HEADERS || 'x-from-state,content-type,authorization,cache-control,x-requested-with,x-mock-response,x-body-sent');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', process.env.STUBAPI_CREDENTIALS || true);

  // Pass to next layer of middleware
  next();
}
function formatConsoleoutput(req, res, next) {
  if (req.method !== 'OPTIONS') {
    if      (req.method === 'GET')    { console.log('>    ' + chalk.green(req.method) + ' ' + req.originalUrl); }
    else if (req.method === 'POST')   { console.log('>   ' + chalk.blue(req.method)   + ' ' + req.originalUrl); }
    else if (req.method === 'PATCH')  { console.log('>  ' + chalk.magenta(req.method) + ' ' + req.originalUrl); }
    else if (req.method === 'DELETE') { console.log('> ' + chalk.grey(req.method)     + ' ' + req.originalUrl); }
    else                              { console.log('> ' + req.method + ' ' + req.originalUrl); }
  }

  next();
}
function authentication(req, res, next) {
  if (req.method !== 'OPTIONS' && req.headers.authorization === 'Bearer no-token-defined') {
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

// application
app.listen(3002, function() {
  console.log('Mock server started on port 3002');
});