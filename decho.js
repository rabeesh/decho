var http = require('http');
var noop = function noop(){};

function Decho() {
    this.middlewares = [];
    this.handler = noop;
}

module.exports = Decho;

Decho.prototype.use = function (middleware) {
    this.middlewares.push(function (next) {
        return function (req, res) {
            middleware(req, res, function () {
                next(req, res);
            });
        }
    });

    this.handler = build(this.middlewares);
};

Decho.prototype.run = function (port) {
    var server = http.createServer(this.handler.bind(this));
    server.listen(port, "127.0.0.1");
    console.log("Server running on http://localhost:" + port + "/");
};


function build(middlewares) {
    var h = noop;
    for(var i = middlewares.length - 1; i >= 0 ; i--) {
        h = middlewares[i](h);
    }
    return h;
}
