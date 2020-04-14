const clickGoToBriefingButton = () => {
  cy.contains("is here.").click();
};

describe("brand new visitor", () => {
  it("vists the pre-adventure briefing, and continues on to signup", () => {
    cy.visit("/");
    clickGoToBriefingButton();

    cy.url().should("match", /\/briefing/);
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

    cy.url().should("match", /\//);
  });
});
