const stories = require("../../stories/index.js");

describe("Subscriber", () => {
  beforeEach(() => {
    cy.logIn();
  });

  it("displays the super cool things", () => {
    cy.url().should("contain", "/");
    cy.get(".story-previews")
      .find("a")
      .should("have.length", stories.length);
  });
});
