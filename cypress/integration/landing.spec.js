const skipTypedInto = () => {
  cy.visit('/')
    .get(".landing h1")
    .click();
}

describe("unauthenticated redirects", () => {
  beforeEach(skipTypedInto);

  it("redirects to landing", () => {
    cy.url().should("match", /\//);

    cy.contains("Adventures you choose,")
      .contains("tales you get lost in")
  });

  it("allows direct navigation to the landing page", () => {
    cy.url().should("match", /\//);

    cy.contains("Adventures you choose,", { timeout: 5000 })
    .contains("tales you get lost in", { timeout: 5000 })
  });

  it("redirects to landing when visiting auth-only content", () => {
    cy.visit("/story/1")
      .url().should("match", /\//);

    cy.contains("Adventures you choose,", { timeout: 5000 })
      .contains("tales you get lost in", { timeout: 5000 })
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

    cy.contains("Continue...")
      .click();

    cy.url()
      .should("match", /\/story\/[a-z0-9-]+\?storyNode=start/);
  });
});

describe("learn more", () => {
  beforeEach(skipTypedInto);

  it("provides details on landing", () => {
    cy.url().should("match", /\//);

    cy.contains("Adventures you choose,", { timeout: 5000 })
      .contains("tales you get lost in", { timeout: 5000 });

    cy.get('button')
      .contains("A day aboard an intergalactic");

    cy.get("button")
      .contains("Create an account")

    cy.contains('Learn more about the site').click()

    cy.contains("This is for you.");

    cy.contains("We are glad you came.");
  });
});

describe('navigation buttons', () => {
  beforeEach(skipTypedInto);

  it("visits the 'create an account' page", () => {
    cy.get("button")
    .contains("Create an account")
    .click()
    .url()
    .should("match", /\/user\/new/);
  });

  it("visits teaser story", () => {
      cy.get('button')
      .contains("A day aboard an intergalactic starship")
      .click()
      .url()
      .should("match", /\/teaser-story/);
  });
})
