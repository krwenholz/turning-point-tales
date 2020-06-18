const stories = require("../../stories/index.js");
const { createUser, logInAs } = require("../support/utils");

export const visitAFinalNode = cy => {
  cy.visit("/");
  cy.get("a")
    .contains("Read")
    .click();
  cy.location()
    .then(loc => {
      cy.visit(
        loc.pathname +
          "?storyNode=optional_priveledge_and_adjustment_reconciliation_form"
      );
    })
    .contains("Yes")
    .click();
  cy.contains("You whined, and it felt good", { timeout: 3000 }).should(
    "exist"
  );
};

describe("NonSubscriber", () => {
  it("allows a first free read", () => {
    visitAFinalNode(cy);
    cy.getCookies().then(cookies => {
      cy.log(`${JSON.stringify(cookies)} xxxxxx`);
    });

    cy.visit("/");
    cy.get(".story-previews")
      .find('a[href="/user/new"]')
      .should("have.length", stories.length - 1);
    cy.get(".story-previews")
      .contains("Read")
      .should("exist");
  });

  it("keeps free read recorded after signing up", () => {
    visitAFinalNode(cy);

    const user = createUser(cy);

    cy.clearCookies();

    logInAs(cy, user);
    cy.get("header nav span").should("have.text", user.firstName);

    cy.visit("/")
      .get(".story-previews")
      .contains("Read your one freebie")
      .should("have.length", 1);
    cy.get(".story-previews")
      .find('a[href="/user/profile?tab=adventurer"]')
      .should("have.length", stories.length - 1);
  });
});
