var Browser = require("zombie");
var app = require("../app");
var browser = new Browser();;

describe("The frontpage", function () {
  var onFrontpage = function (expectation) {
    var server = app.listen(3000, '127.0.0.1');
    var browserReady = false;

    runs(function () {
      browser.visit("http://localhost:3000/", function () {
        browserReady = true;
      });
    });

    waitsFor(function () {
      return browserReady;
    });

    runs(expectation);

    runs(function() {
      server.close();
    });
  };

  it("should greet vienna.js", function () {
    onFrontpage(function () {
      expect(browser.text("h1")).toEqual("Ahoy, vienna.js!");
    });
  });
});
