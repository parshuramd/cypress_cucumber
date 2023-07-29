import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Open", () => {
  cy.visit("www.google.com");
});
