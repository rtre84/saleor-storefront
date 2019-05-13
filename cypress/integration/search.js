/// <reference types="cypress" />

describe("Search", () => {
  it("should show input on click", () => {
    cy.getByText("Search").click();
  });
});
