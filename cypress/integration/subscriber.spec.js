const stories = require("../../stories/index.js");
const { testIds } = require('../../src/lib/test-ids.js');

describe("Subscriber", () => {
  beforeEach(() => {
    cy.logIn();
  });

  it("Displays all the stories for a subscriber", () => {
    cy.url()
      .should("contain", "/")
      .get(`[data-test-id^='${testIds.STORY_CARD}']`)
      .should("have.length", stories.length);
  });
});
