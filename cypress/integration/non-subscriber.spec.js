const stories = require("../../stories/index.js");
const { createUser } = require("../support/utils");

describe("NonSubscriber", () => {
  it("blocks early content", () => {
    cy.logInNonSubscriber();
    cy.contains("Subscribe now").should("exist");
    cy.get(".story-previews")
      .find("a.button")
      .should("have.length", stories.length);
  });
});
