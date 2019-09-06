Cypress.Commands.add('logIn', () => {
  cy.visit('/user/login');
  cy.get('#email').type('jeff@h2wib.com');
  cy.get('#password').type('foo');
  cy.contains('Log in').click();
});