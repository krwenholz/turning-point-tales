// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const getEncodedLogin = () => {
  const date = new Date;
  return Buffer.from(
    `Cody and KC are cool guy. ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`,
  ).toString('base64');
}

Cypress.Commands.add('fakeLogin', () => {
  cy.visit('/')
  .get('[data-cy=test-login-hook]')
  .invoke('attr', 'href', `/auth/fake_login?encodedLogin=${getEncodedLogin()}`)
  .click({ force: true });
});