const { logInAs, logOut, createUser, deleteUser } = require('../support/utils');

describe('creating and deleting accounts', () => {
  it('creates and deletes, duh!', () => {
    const user = createUser(cy);

    cy.get('header nav span')
      .should('have.text', user.firstName);

    deleteUser(cy);

    cy.url()
      .should('match', /\/landing/)
      .get('header nav span')
      .contains('Login');
  });

  it(' creates an account, logs out, and can log back into previous account', () => {
    const user = createUser(cy);

    logOut(cy);

    cy.url()
      .should('match', /\/landing/)
      .get('header nav span')
      .contains('Login');

    logInAs(cy, user);

    cy.url()
      .get('header nav span')
      .contains(user.firstName);

    deleteUser(cy)
  });
});