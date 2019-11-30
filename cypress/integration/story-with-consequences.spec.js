describe('Story with consequences and history', () => {
  beforeEach(() => {
    cy.logIn()
      .visit('/test/story-with-consequences?storyNode=start')
  });

  const chooseAvocadoToast = () => {
    cy.contains('It\'s a monday')
      .get('button')
      .contains('wake up')
      .click();

    cy.contains('You could really go for a meal')
      .get('button')
      .contains('avocado toast')
      .click();
  }

  const chooseCoffee = () => {
    cy.contains('It\'s a monday')
      .get('button')
      .contains('wake up')
      .click();

    cy.contains('You could really go for a meal')
      .get('button')
      .contains('coffee')
      .click();
  }

  it('Filters choices based on previous decisions and consequences', () => {
    chooseAvocadoToast();

    cy.contains('?');
  })

  it('back button does not exist on start of story', () => {
    cy.get('button')
    .url().should('contain', 'start')
    .get('button')
    .contains('go back')
    .should('not.exist');
  })

  it('goes back to previous node on back button click', () => {
    cy.get('button')
    .contains('wake up')
    .click()
    .get('button')
    .contains('go back')
    .click()
    .url().should('contain', 'start')
    .get('button')
    .contains('go back')
    .should('not.exist');
  })

  it('Allows option after second go around with consequence', () => {
    chooseAvocadoToast();

    cy.get('button')
      .contains('?')
      .get('button')
      .contains('Guess you')
      .click()

    cy.get('button')
      .contains('well')
      .click();

    cy.get('button')
      .contains('coffee')
      .click();

    cy.get('button')
      .contains('Drive car')
      .click()
      .get('p')
      .contains('Yay, cars are fun')
      .get('button')
      .contains('well')
      .click()
      .get('p')
      .contains('You could really go for')
  });

  it('resets consequences from previous decisions when "starting over" ', () => {
    chooseCoffee();

    cy.contains('Drive car')
      .click();

    cy.contains('well, time to start over')
      .click();

    cy.contains('coffee')
      .click();

    cy.contains('Drive car')
  });
});
