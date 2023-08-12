import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('handling shadow dom', () => {
    cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm');
    cy.get('.smart-ui-component').shadow().find('.smart-menu-item-label-element').find('span').contains('File').click();
})