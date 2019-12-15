const assertNoExtraNavigation = () => {
  cy.contains('go back').should('not.exist');
  cy.contains('restart').should('not.exist');
}

const assertHasNormalNavigation = () => {
  cy.contains("Create an account");
  cy.contains("Learn about us");
}

const skipIntro = () => {
  cy.get('button')
    .contains('continue')
    .click()
    .contains('continue')
    .click()
    .contains('continue')
    .click()
}

describe("teaser-story", () => {
  beforeEach(() => {
    cy.visit('/teaser-story?storyNode=start')
    skipIntro();
  });

  it("presents two options to the reader", () => {
    cy.contains("Time to solve this problem the right way");
    cy.contains("Only through paperwork");

    assertNoExtraNavigation();
  });

  it("shows first option route", () => {
      cy.contains("Time to solve this problem")
        .click();

      assertHasNormalNavigation();

      assertNoExtraNavigation();

      cy.contains("Create an account")
        .click()
        .url().should('match', /\/user\/new/)
  });

  it("shows second option route", () => {
    cy.contains("Only through paperwork")
      .click();

    assertHasNormalNavigation();
    assertNoExtraNavigation();

    cy.contains("Learn about us")
    .click()
    .url().should('match', /\/about/)
  });
});
