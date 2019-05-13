/// <reference types="cypress" />

describe("Homepage", () => {
  it("should render", () => {
    cy.visit("/");
    // cy.get(
    //   ".home-page__categories > .container  .home-page__categories__list div:nth-child(2) > a > .home-page__categories__list__image"
    // ).click();
  });
});
