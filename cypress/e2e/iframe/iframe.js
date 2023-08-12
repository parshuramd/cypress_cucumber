import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given('iframe handling',()=>{
    cy.visit('https://demo.automationtesting.in/Frames.html');
    cy.get('#singleframe').its('0.contentDocument.body').then((body)=>{
        cy.wrap(body).find('input').should('be.visible').type("Parshuram")
    })
})

When('nested iframe',()=>{
    cy.visit('https://demo.automationtesting.in/Frames.html');
    cy.get('a[href="#Multiple"]').click();
    cy.get('#Multiple > iframe').its('0.contentDocument.body').then((body)=>{
        cy.wrap(body).find('iframe').its('0.contentDocument.body').then((body)=>{
            cy.wrap(body).find('input').should('be.visible').type("Parshuram")
        })
    })
})