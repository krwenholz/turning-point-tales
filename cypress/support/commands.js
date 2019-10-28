Cypress.Commands.add('logIn', () => {
  cy.visit('/user/login');
  cy.get('#email').type('jeff@h2wib.com');
  cy.get('#password').type('foo');
  cy.contains('Log in').click();
});

Cypress.Commands.add('logInNonSubscriber', () => {
  cy.visit('/user/login');
  cy.get('#email').type('test-nonsubscriber@h2wib.com');
  cy.get('#password').type('foo');
  cy.contains('Log in').click();
});