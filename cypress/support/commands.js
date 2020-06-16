Cypress.Commands.add("logIn", (email = "test-subscriber@h2wib.com") => {
  cy.visit("/user/login");
  cy.get("#email").type(email);
  cy.get("#password").type("foo");
  cy.contains("Log in").click();
});

Cypress.Commands.add("logInNonSubscriber", () => {
  cy.visit("/user/login")
    .get("#email")
    .type("test-nonsubscriber@h2wib.com")
    .get("#password")
    .type("foo");

  cy.contains("Log in").click();
});
