const { mainPage } = require("../pages/MainPage");

describe('First Assessment', () => {
  it('Make A Search At DuckDuckGo', () => {
    cy.log("Navigate To DuckDuckGo");
    cy.visit("/");

    cy.log("Search 'The dev-friendly football API'");
    mainPage.typeInSearchInput("The dev-friendly football API");
    mainPage.clickSearchButton();

    cy.log("Click on the first search result and verify the link");
    mainPage.clickResult(1);
    cy.url({ decode: true }).should('contain', 'https://www.football-data.org/')
  })
})