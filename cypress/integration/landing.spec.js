describe('unauthenticated redirects', () => {
  it('redirects to landing', () => {
    cy.visit('/')
    cy.url().should('match', /\/landing/);
  });

  it('allows direct navigation to the landing page', () => {
    cy.visit('/landing')
    cy.url().should('match', /\/landing/);
  });

  it('redirects to landing when visiting auth-only content', () => {
    cy.visit('/story/1')
    cy.url().should('match',  /\/landing/);
  });
});

describe('authenticated', () => {
  it('redirects to root after login', () => {
    cy.fakeLogin()
    .url().should('match', /\/$/)
  });

  it('should be able to access auth-only pages', () => {
    cy.fakeLogin()
    .visit('/story/1')
    .url().should('match', /\/story\/1/)
  })
});
