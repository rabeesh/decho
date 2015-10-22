var decho = require('./../decho.js');
var morgan = require('morgan');

var e = new decho();

e.use(morgan('combined'));

e.use(function(req, res, next) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

e.run(3000);

