var Browser = require("zombie");
var app = require("../app");
var browser = new Browser();;
app.listen(3000, '127.0.0.1');

describe("The frontpage", function () {
  var onFrontpage = function (expectation) {
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
  };

  it("should greet vienna.js", function () {
    onFrontpage(function () {
      expect(browser.text("h1")).toEqual("Ahoy, vienna.js!");
    });
  });
});
