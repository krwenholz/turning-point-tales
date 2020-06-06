describe("Stories", () => {
  beforeEach(() => {
    cy.logIn();
  });

  it("displays earned badges", () => {
    cy.get('span').should('contain', "📁");
    cy.get("span").should("contain", "only a small number remaining");
  });

  it("displays badges when earned", () => {
    cy.get('a').contains("Read").click();
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
    cy.get('a').contains("Read").click();

    cy.location().then(loc => {
      cy.visit(loc.pathname + "?storyNode=stop_the_clocks");
    });

    cy.contains("restart").should("exist");
    cy.contains("go back").should("exist");
    cy.contains("Explore other stories").should("exist");
  });
});
