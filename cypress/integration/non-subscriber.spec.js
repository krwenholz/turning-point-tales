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
  it("allows free reads", () => {
    visitAFinalNode(cy);
    cy.getCookies().then(cookies => {
      cy.log(`${JSON.stringify(cookies)} xxxxxx`);
    });

    cy.visit("/")
      .get(".story-previews")
      .find("article a")
      .should("have.length", stories.length * 2);
  });

  it("keeps free reads recorded after signing up", () => {
    visitAFinalNode(cy);

    const user = createUser(cy);

    cy.clearCookies();

    logInAs(cy, user);
    cy.get("header nav span").should("have.text", user.firstName);

    cy.visit("/")
      .get(".story-previews")
      .find("article a")
      .should("have.length", stories.length * 2);
  });
});
