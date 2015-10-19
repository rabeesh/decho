var Decho = require('./../decho.js');

var e = new Decho();

e.use(function(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return next();
});

e.use(function(req, res, next) {
    res.end('Hello World\n');
});

e.run(3000);
