describe("NonSubscriber", () => {
  beforeEach(() => {
    cy.logInNonSubscriber();
  });

  it("displays ads", () => {
    cy.contains("Continue...").click();
    cy.contains(
      /(Reading recommendations from the founders and creators|Reading adjacent things|Reading orthogonal things)/
    ).click();
    cy.contains("Now back to the regularly scheduled programming....")
      .click()
      .url()
      .should("match", /\/story\/[a-z0-9-]+\?storyNode=start/);
  });

  it("blocks early content", () => {
    cy.contains("Subscribers only before ").should("exist");
    cy.contains("Become a full adventurer now to unlock access.").should(
      "exist"
    );
    cy.get(".story-previews")
      .find("button")
      .should("have.length", 1);
  });
});
