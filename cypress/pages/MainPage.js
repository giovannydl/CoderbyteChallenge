class MainPage {
    elements = {
        searchInput: () => cy.get("#searchbox_input"),
        searchButton: () => cy.xpath("//button[@aria-label='Search']"),
        resultLink: (linkNumber) => cy.xpath("//article[@id='r1-"+linkNumber+"']//h2//span")
    };

    typeInSearchInput(parameter){
        this.elements.searchInput().type(parameter);
    }
    
    clickSearchButton(){
        this.elements.searchButton().click();
    }

    clickResult(number){
        let position = number - 1;
        this.elements.resultLink(position).click();
    }
}
export const mainPage = new MainPage();