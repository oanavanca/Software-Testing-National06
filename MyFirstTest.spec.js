/// <reference types="Cypress"/>
describe("Wikipedia home page teste",()=>{
    it("Navigate to English page",()=>{
        cy.visit("https://www.wikipedia.org");
        cy.get('#js-link-box-en').click();
        cy.get('#mp-topbanner').should("be.visible");   //top banner should be visible
        cy.get('.mw-wiki-logo').should("be.visible");   //logo should be visible
        cy.get('#mp-topbanner').should("contain","Welcome to Wikipedia");    //banner should contain Welcome to Wikipedia
    });
    it("Test search in main page",()=> {   //DEBUG!!!!!!! delete .only
        cy.visit("https://www.wikipedia.org");  
        cy.get('#searchInput').type("Testing");
        cy.get('.pure-button').click();
        cy.get('#firstHeading').should("contain","Testing");
    });
    var testData= require('../../testdata.json');
    testData.goodLogin.forEach((test)=>{
        it("Good Login tests["+test.username+"]",()=>{
            cy.visit("https://en.wikipedia.org/wiki/Main_Page");
            cy.get('#pt-login > a').click();
            cy.get('#wpName1').type(test.username);
            cy.get('#wpPassword1').type(test.password);
            cy.get('#wpLoginAttempt').click();
        }); 
    });
    testData.badlogin.forEach((test)=>{
        it("Good Login tests["+test.username+"]",()=>{
            cy.visit("https://en.wikipedia.org/wiki/Main_Page");
            cy.get('#pt-login > a').click();
            cy.get('#wpName1').type(test.username);
            cy.get('#wpPassword1').type(test.password);
            cy.get('#wpLoginAttempt').click();
        }); 
    });
     
});