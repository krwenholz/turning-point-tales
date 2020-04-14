describe("Adventure", () => {
  beforeEach(() => {
    cy.logIn();
    cy.visit("/");
    cy.contains("Continue...").click();
  });

  it('defaults to "start" for storyNode if not provided, and no local storage', () => {
    cy.url().should("match", /\/story\/mr-banks-[a-z0-9-]+$/);
    cy.get("section.adventure p").should(
      "contain",
      "It was a beautiful summer"
    );
  });

  it("begins at specific story node when given in query", () => {
    cy.location().then(loc => {
      cy.visit(loc.pathname + "?storyNode=file_a_formal_complaint")
        .url()
        .should(
          "match",
          /\/story\/mr-banks-[a-z0-9-]+\?storyNode=file_a_formal_complaint/
        );
    });
  });

  it("saves last storyNode from visited story", () => {
    cy.location().then(loc => {
      cy.visit(loc.pathname + "?storyNode=file_a_formal_complaint")
        .visit("/")
        .contains("Continue...")
        .click()
        .url()
        .should(
          "match",
          /\/story\/mr-banks-[a-z0-9-]+\?storyNode=file_a_formal_complaint/
        );
    });
  });

  it("does not save last storyNode if local storage cleared", () => {
    cy.location().then(loc => {
      cy.visit(loc.pathname + "?storyNode=file_a_formal_complaint")
        .visit("/")
        .clearLocalStorage()
        .visit("/")
        .contains("Continue...")
        .click()
        .url()
        .should("match", /\/story\/mr-banks-[a-z0-9-]+\?storyNode=start/);
    });
  });

  it("always starts at top of page (i.e scrolls to top)", () => {
    cy.location().then(loc => {
      cy.visit(loc.pathname + "?storyNode=looks_under_papers")
        .get("nav")
        .should("be.visible");
    });
  });

  it("allows user to go backwards after navigating a story", () => {
    cy.location().then(loc => {
      cy.visit(loc.pathname + "?storyNode=start")
        .get("button")
        .contains("Time to solve")
        .click()
        .go("back")
        .go("back")
        .url()
        .should("not.match", /\/story\/mr-banks-[a-z0-9-]+\?storyNode=start/);
    });
  });

  it("allows user to visit another story", () => {
    cy.visit("/")
      .get(".story-previews")
      .find("a")
      .last()
      .click();

    cy.url().should("match", /\/story\/wagons-dragons-side.*/);
  });
});
