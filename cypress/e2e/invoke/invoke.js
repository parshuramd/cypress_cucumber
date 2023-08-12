import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
afterEach(() => {
    // Capture a screenshot after each test case with test case name
    const testName = Cypress.mocha.getRunner().suite.ctx.currentTest.title;
    cy.screenshot();
});
Given('Invoke handling', () => {
    cy.visit('https://rahulshettyacademy.com/client/');
    let val ;
    cy.get('#userEmail').invoke('attr', 'placeholder').then((value) => {
       val = value;
    }).then(()=>{
        cy.log(val)
    })
    
})
