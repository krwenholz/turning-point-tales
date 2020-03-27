describe("Subscriber", () => {
  beforeEach(() => {
    cy.logIn();
  });

  it("displays the super cool things", () => {
    cy.url().should("contain", "/");
    cy.contains("Subscribers only").should("exist");
    cy.contains("Become a full adventurer to unlock access").should(
      "not.exist"
    );
    cy.get(".story-previews")
      .find("a")
      .should("have.length", 7);
  });
});
