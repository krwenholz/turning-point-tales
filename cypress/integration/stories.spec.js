describe("Stories", () => {
  beforeEach(() => {
    cy.logIn();
  });

  it("displays badges when earned", () => {
    cy.contains("Continue...").click();
    cy.location()
      .then(loc => {
        cy.visit(
          loc.pathname +
            "?storyNode=optional_priveledge_and_adjustment_reconciliation_form"
        );
      })
      .contains("Yes")
      .click();
    cy.contains("You whined, and it felt good", { timeout: 3000 }).should(
      "exist"
    );
  });

  it("displays earned badges", () => {
    cy.contains("📁").should("exist");
    cy.contains("😫").should("exist");
    // TODO(kyle): Add badges so these display
    cy.contains("... only a small number remaining.").should("exist");
    cy.contains("... many more to discover.").should("exist");
  });
});
