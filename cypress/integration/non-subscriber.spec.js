const { createUser } = require("../support/utils");

describe("NonSubscriber", () => {
  it("blocks early content", () => {
    cy.logInNonSubscriber();
    cy.contains("Subscribers only").should("exist");
    cy.contains("Become a full adventurer now to unlock access.").should(
      "exist"
    );
    cy.get(".story-previews")
      .find("a.button")
      .should("have.length", 2);
  });
});
