import { expect } from "chai";
import testUtils from "./utils";

describe("application launch", () => {
  beforeEach(testUtils.beforeEach);
  afterEach(testUtils.afterEach);

  it("shows hello world text on screen after launch", function() {
    this.app.client.getText("#greet").then(text => {
      expect(text).to.equal("Hello World!");
    });
  });

  it("is not display: none;", function () {
    this.app.client.getCssProperty('#app', 'display').then(prop => {
      expect(prop.value).to.equal('block')
    });
  });

  it("is accessible", function () {
    this.app.client.auditAccessibility().then(function (audit) {
      expect(audit.failed).to.equal(false);
      if (audit.failed) {
        console.log(audit.message);
      }
    });
  });
});
