const { createUser } = require("../support/utils");

describe("NonSubscriber", () => {
  it("displays ads and conversion", () => {
    cy.logInNonSubscriber();
    cy.contains("Continue...").click();
    cy.contains(
      /(Reading recommendations from the founders and creators|Reading adjacent things|Reading orthogonal things)/
    ).click();

    cy.contains("Now back to the regularly scheduled programming....")
      .click();

    cy.url()
      .should("match", /\/story\/[a-z0-9-]+/);

    cy.location().then(loc => {
      cy.visit(loc.pathname + "?storyNode=stop_the_clocks");
    });
    cy.contains("restart").should("exist");
    cy.contains("go back").should("exist");
    cy.contains("Enjoy more great tales, become an adventurer now").should(
      "exist"
    );
    cy.contains("Explore other stories").should("exist");
  });

  it("blocks early content", () => {
    cy.logInNonSubscriber();
    cy.contains("Subscribers only").should("exist");
    cy.contains("Become a full adventurer now to unlock access.").should(
      "exist"
    );
    cy.get(".story-previews")
      .find("button")
      .should("have.length", 1);
  });

  it("displays ads only after new user reaches final node", () => {
    const user = createUser(cy);

    cy.contains("Continue...").click();
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

    cy.visit("/");
    cy.contains("Continue...").click();

    cy.contains(
      /(Reading recommendations from the founders and creators|Reading adjacent things|Reading orthogonal things)/
    ).click();
    cy.contains("Now back to the regularly scheduled programming....")
      .click();

    cy.url()
      .should("match", /\/story\/[a-z0-9-]+\?storyNode=start/);
  });
});
