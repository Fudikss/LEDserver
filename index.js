var express = require('express'), http = require('http'), path = require('path');
var static = require('serve-static'), bodyParser = require('body-parser'),
expressErrorHandler = require('express-error-handler'), 
cookieParser = require('cookie-parser'),
expressSession = require('express-session');

var test = {express, http, path, static, bodyParser, expressErrorHandler, cookieParser
, expressSession};

module.exports = test;

