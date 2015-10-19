var finalhandler = require('finalhandler');
var http         = require('http');
var Router       = require('router');
var Decho = require('./../decho.js');


var router = Router();

router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Hello World!!')
})

// create echo
var e = new Decho();

e.use(function(req, res, next) {
    router(req, res, finalhandler(req, res))
    return next();
})

e.run(3000);
