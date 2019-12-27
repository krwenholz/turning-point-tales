const uuidv4 = require("uuid/v4");
const { entries } = Object;

export const createUser = cy => {
  const uuid = uuidv4();

  const user = {
    firstName: `Test${uuid}`,
    lastName: `McTestface${uuid}`,
    email: `${uuid}@h2wib.com`,
    password: "test",
    confirmPassword: "test"
  };

  // Get there like a normal user.
  cy.visit("/")
    .contains("Login")
    .click();
  cy.contains("create an account").click();
  cy.url().should("match", /\/user\/new/);

  entries(user).forEach(([key, value]) => {
    cy.get("#" + key).type(value);
  });

  cy.get("#tos_and_privacy")
    .click()
    .get("button")
    .contains("Sign up")
    .click();

  return user;
};

export const deleteUser = cy => {
  cy.visit("/user/profile?tab=settings");

  cy.contains("DELETE")
    .click();
};

export const logOut = cy => {
  cy.wait(100).visit("/api/user/logout");
};

export const logInAs = (cy, { email, password }) => {
  cy.request("/api/user/logout")
    .visit("/user/login")
    .get("#email")
    .type(email)
    .get("#password")
    .type(password)
    .get("button")
    .contains("Log in")
    .click();
};
