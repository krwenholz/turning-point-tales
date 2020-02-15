const skipTypedInto = () => {
  cy.visit('/')
    .get(".landing h1")
    .click();
}

const clickGoToBriefingButton = () => {
  cy.contains('Start your pre-adventure briefing')
    .click();
}

describe("brand new visitor", () => {
  beforeEach(skipTypedInto);

  it("redirects new visitors (who do not visit the briefing) back to landing page upon subsequent visits", () => {
    cy.url().should("match", /\//);

    cy.contains("Adventures you choose,")
    .contains("tales you get lost in")

    cy.visit('/')

    cy.contains("Adventures you choose,")
    .contains("tales you get lost in")
  });

  it("redirects new visitors to story home-page (after completing briefing) on subsequent visists", () => {
    clickGoToBriefingButton();

    cy.contains('Start reading').click();

    cy.contains('Where will your next tale take you?')
      .visit('/')
      .contains('Where will your next tale take you?');
  });

  it("vists the pre-adventure briefing, and continues on to signup", () => {
    clickGoToBriefingButton();

    cy.url().should("match", /\/briefing/);
  });
});

describe("authenticated", () => {
  beforeEach(skipTypedInto);

  it("redirects to root after login", () => {
    cy.logIn()
      .url()
      .should("contain", "/")
      .get("[data-cy=user-name]")
      .should("contain", "Subscriber");
  });

  it("should be able to access auth-only pages", () => {
    cy.logIn();

    cy.url()
      .should("match", /\//);
  });
});
