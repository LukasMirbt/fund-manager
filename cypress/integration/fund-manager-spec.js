describe("Fund manager", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("front page can be opened", function () {
    cy.contains("Fund list");
  });

  it("menu button opens navigation drawer and all pages can be visited", function () {
    cy.get("[data-cy=menuButton]").click();
    cy.get("nav").should("exist");

    cy.get("[data-cy='Fund advisor link']").click();
    cy.contains("Fund advisor");

    cy.get("[data-cy=menuButton]").click();
    cy.get("[data-cy='Portfolio link']").click();
    cy.contains("Portfolio");

    cy.get("[data-cy=menuButton]").click();
    cy.get("[data-cy='Fund list link']").click();
    cy.contains("Fund list");
  });

  it("account menu has a button that links to sign in when not signed in", function () {
    cy.get("[data-cy=accountButton]").click();
    cy.get("[data-cy=goToSignInButton]").click();
    cy.get("[data-cy=loginLabel]").should("exist");
  });

  it("user can log in and is not remembered when the remember user checkbox is not checked", function () {
    cy.visit("/portfolio");
    cy.login();

    cy.get("[data-cy=buyFundFab]").should("exist");
    cy.reload();
    cy.get("[data-cy=loginLabel]").should("exist");
  });

  it("user is remembered when the remember user checkbox is checked", function () {
    cy.visit("/portfolio");
    cy.get("[data-cy=signInUsernameInput]").type("test");
    cy.get("[data-cy=signInPasswordInput]").type("test");
    cy.get("[data-cy=rememberUserCheckbox]").click();
    cy.get("[data-cy=signInButton]").click();

    cy.get("[data-cy=buyFundFab]").should("exist");
    cy.reload();
    cy.get("[data-cy=buyFundFab]").should("exist");
  });

  describe("when logged in", function () {
    beforeEach(function () {
      cy.visit("/portfolio");
      cy.login();
    });

    it("account menu shows username and balance", function () {
      cy.get("[data-cy=accountButton]").click();
      cy.contains("test", { matchCase: false });
      cy.contains("balance", { matchCase: false });
    });

    it("funds can be bought", function () {
      cy.get("[data-cy=menuButton]").click();
      cy.get("[data-cy=openBuyFundDialogButton]").click();
      cy.get("[data-cy=buyFundFundNameInput]").type(
        "SEB Strategi Balanserad C SEK - Lux{downarrow}{enter}"
      );
      cy.get("[data-cy=buyFundNumberOfSharesInput]").type("50");
      cy.get("[data-cy=buyFundButton]").click();

      cy.get("[data-cy=snackbar]").should("exist");
    });

    it("funds can be sold", function () {
      cy.get("[data-cy=menuButton]").click();
      cy.get("[data-cy=openSellFundDialogButton]").click();
      cy.get("[data-cy=sellFundFundNameInput]").type(
        "SEB Strategi Balanserad C SEK - Lux{downarrow}{enter}"
      );
      cy.get("[data-cy=sellFundNumberOfSharesInput]").type("50");
      cy.get("[data-cy=sellFundButton]").click();

      cy.get("[data-cy=snackbar]").should("exist");
    });
  });
});
