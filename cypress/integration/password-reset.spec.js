describe("Password Reset Flow: Submit an email", () => {
  it("can visit the page without authentication", () => {
    cy.visit("/password-reset");
  });

  it("displays errors and success on reset flow", () => {
    cy.logIn()
      .visit("/user/login")
      .get('[data-cy="password-reset"]')
      .invoke("attr", "href")
      .then(cy.visit);

    cy.get("input")
      .type("jefh2wib.com")
      .get("button")
      .click()
      .get(".error-msg")
      .should("contain", "Could not find");

    cy.get("input")
      .clear()
      .type("test-subscriber@h2wib.com")
      .get("button")
      .click();

    cy.get("h3").should("contain", "You have been sent an email");
  });
});

describe("Password Reset Flow: Reset your password", () => {
  const dummyToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

  it("can visit the page without authentication", () => {
    cy.visit(`/password-reset?id=0&token=${dummyToken}`);
  });

  it("displays error on expired or fake id/token data", () => {
    cy.visit(`/password-reset?id=0&token=${dummyToken}`)
      .get("input")
      .type("fake-password")
      .get("button")
      .click()
      .get(".error-msg")
      .should("contain", "Unable to update your password");
  });
});
