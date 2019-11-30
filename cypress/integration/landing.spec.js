describe("unauthenticated redirects", () => {
  it("redirects to landing", () => {
    cy.visit("/");
    cy.url().should("match", /\//);
    cy.contains("Adventures you choose, tales you get lost in.").should(
      "exist"
    );
  });

  it("allows direct navigation to the landing page", () => {
    cy.visit("/");
    cy.url().should("match", /\//);
    cy.contains("Adventures you choose, tales you get lost in.").should(
      "exist"
    );
  });

  it("redirects to landing when visiting auth-only content", () => {
    cy.visit("/story/1");
    cy.url().should("match", /\//);
    cy.contains("Adventures you choose, tales you get lost in.").should(
      "exist"
    );
  });
});

describe("authenticated", () => {
  it("redirects to root after login", () => {
    cy.logIn()
      .url()
      .should("contain", "/")
      .get('[data-cy=user-name]').should("contain", "Subscriber");
  });

  it("should be able to access auth-only pages", () => {
    cy.logIn();
    cy.contains("Continue...").click();
    cy.url().should("match", /\/story\/[a-z0-9-]+\?storyNode=start/);
  });
});

describe("content", () => {
  it("visits teaser story", () => {
    cy.visit("/")
      .get('[data-cy=landing-text-scroll]')
      .click()
      .get('button')
      .contains("A day in the life of Mr. Banks")
      .click()
      .url().should("match", /\/teaser-story\?storyNode=start/);
  });
});
