var Decho = require("../decho");
var assert = require('chai').assert;

describe('dechojs', function () {

    var decho;

    describe("constructor", function () {
        var decho = new Decho();
        it("Should have zero middleware at first", function () {
            assert.ok(decho.middlewares.length == 0);
        });
    });


    describe("Use build middleware's", function () {
        var decho = new Decho();
        var called = '';

        it("Should add middleware into stack", function () {
             decho.use(function(req, res, next){
                called += "first";
                next();
            });

            decho.use(function(req, res, next){
                called += "second";
                next();
            });
            assert.ok(decho.middlewares.length  == 2);
        });

        it("Should build middleware orderly", function () {
            decho.handler();
            assert.ok(called == "firstsecond");
        });
    });

});
