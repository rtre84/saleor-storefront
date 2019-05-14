/// <reference types="cypress" />
import { userBuilder } from "../support/generate";

describe.only("Register", () => {
  let user = null;
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open ovarlay with a sign in and register form", () => {
    cy.getByTestId("login-btn")
      .click()
      .get(".overlay")
      .should("exist");
  });

  it("should register new user", () => {
    user = userBuilder();
    cy.getByTestId("login-btn")
      .click()
      .get(".login__tabs span:not(.active-tab)")
      .click()
      .get(".login__content input[name='email']")
      .type(user.email)
      .get(".login__content input[name='password']")
      .type(user.password)
      .get(".login__content button[type='submit']")
      .click()
      .get(".message__title")
      .contains("New user has been created.");
  });

  it("should display an error if user exists", () => {
    cy.getByTestId("login-btn")
      .click()
      .get(".login__tabs span:not(.active-tab)")
      .click()
      .get(".login__content input[name='email']")
      .type(user.email)
      .get(".login__content input[name='password']")
      .type(user.password)
      .get(".login__content button[type='submit']")
      .click()
      .get(".login__content input[name='email'] + .input__error")
      .contains("User with this Email already exists.");
  });
});
