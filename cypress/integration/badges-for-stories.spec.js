describe("Stories", () => {
  beforeEach(() => {
    cy.logIn();
  });

  it("displays earned badges", () => {
    cy.contains("📁", { timeout: 3000 }).should("exist");
    cy.contains("... only a small number remaining.").should("exist");
    cy.contains("... many more to discover.").should("exist");
  });

  it("displays badges when earned", () => {
    cy.contains("Read").click();
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

  it("displays correct options at end", () => {
    cy.contains("Read").click();
    cy.location().then(loc => {
      cy.visit(loc.pathname + "?storyNode=stop_the_clocks");
    });
    cy.contains("restart").should("exist");
    cy.contains("go back").should("exist");
    cy.contains("Explore other stories").should("exist");
  });
});
