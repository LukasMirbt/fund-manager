describe("Fund manager", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("front page can be opened", function () {
    cy.contains("Fund list");
  });

  it("menu button opens navigation drawer", function () {
    cy.get("[data-cy=menuButton]").click();
    cy.get("nav").should("exist");
  });

  it("account menu has a button that links to sign in when not signed in", function () {
    cy.get("[data-cy=accountButton]").click();
    cy.get("[data-cy=goToSignInButton]").click();
    cy.contains("Sign in");
  });
});
