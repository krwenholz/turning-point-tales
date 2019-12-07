describe("unauthenticated redirects", () => {
  it("redirects to landing", () => {
    cy.visit("/");
    cy.url().should("match", /\//);
    cy.contains("Adventures you choose, tales you get lost in.", {
      timeout: 5000
    }).should("exist");
  });

  it("allows direct navigation to the landing page", () => {
    cy.visit("/");
    cy.url().should("match", /\//);
    cy.contains("Adventures you choose, tales you get lost in.", {
      timeout: 5000
    }).should("exist");
  });

  it("redirects to landing when visiting auth-only content", () => {
    cy.visit("/story/1");
    cy.url().should("match", /\//);
    cy.contains("Adventures you choose, tales you get lost in.", {
      timeout: 5000
    }).should("exist");
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
    cy.visit("/");
    cy.url().should("match", /\//);
    cy.contains("Adventures you choose, tales you get lost in.", {
      timeout: 5000
    }).should("exist");

    cy.contains("Learn more about the site").should("exist");
    cy.contains("Experience a day aboard an intergalactic starship").should(
      "exist"
    );
    cy.contains("Adventure now").should("exist");

    cy.contains("Learn more about the site").click();
    cy.contains("This is for you.").should("exist");
    cy.contains("Learn more about the site").click();
    cy.contains("Learn more about the site").click();
    cy.contains("Learn more about the site").click();
    cy.contains("Learn more about the site").click();
    cy.contains("We are glad you came.").should("exist");
    cy.contains("Learn more about the site").should("not.exist");
  });

  it("visits teaser story", () => {
    cy.visit("/")
      .get(".landing .text h1")
      .click();
    cy.contains("Experience a day aboard an intergalactic starship")
      .click()
      .url()
      .should("match", /\/teaser-story/);
  });
});
