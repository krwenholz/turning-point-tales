describe("unauthenticated redirects", () => {
  it("redirects to landing", () => {
    cy.visit("/")
      .url().should("match", /\//);

    cy.contains("Adventures you choose,")
      .contains("tales you get lost in")
  });

  it("allows direct navigation to the landing page", () => {
    cy.visit("/")
      .url().should("match", /\//);

    cy.contains("Adventures you choose,", { timeout: 5000 })
    .contains("tales you get lost in", { timeout: 5000 })
  });

  it("redirects to landing when visiting auth-only content", () => {
    cy.visit("/story/1");
    cy.url().should("match", /\//);

    cy.contains("Adventures you choose,", { timeout: 5000 })
      .contains("tales you get lost in", { timeout: 5000 })
  });
});

describe("authenticated", () => {
  it("redirects to root after login", () => {
    cy.logIn()
      .url()
      .should("contain", "/")
      .get("[data-cy=user-name]")
      .should("contain", "Subscriber");
  });

  it("should be able to access auth-only pages", () => {
    cy.logIn();
    cy.contains("Continue...").click();
    cy.url().should("match", /\/story\/[a-z0-9-]+\?storyNode=start/);
  });
});

describe("content", () => {
  it("provides details on landing", () => {
    cy.visit("/")
      .url().should("match", /\//);

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

  it("visits teaser story", () => {
    cy.visit("/")
      .get(".landing h1")
      .click();

    cy.contains("A day aboard an intergalactic starship")
      .click()
      .url()
      .should("match", /\/teaser-story/);
  });
});
