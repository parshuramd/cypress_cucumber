import {
    Given
} from "@badeball/cypress-cucumber-preprocessor";

Given("Microsoft Login", () => {
    cy.visit("https://www.office.com/");
    cy.get('#hero-banner-sign-in-to-office-365-link').click();
    

    






})