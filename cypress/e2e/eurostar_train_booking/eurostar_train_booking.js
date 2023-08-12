import {
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { Locators } from "../../support/common/locators";
import { fromDestination, toDestination } from "../../fixtures/example.json";

Given("User Open Eurostar Web Application", () => {
  cy.visit("/");
  cy.get(Locators.acceptAllCookies).click();
});

When("User fills all details and search available trains", () => {
  cy.get(Locators.fromDestination).click();
  cy.contains(fromDestination).click();
  cy.get(Locators.toDestination).click();
  cy.contains(toDestination).click();
  cy.get(Locators.calendar).click();
  cy.get(Locators.outGoingDate).click();
  cy.get(Locators.returnDate).click();
  cy.get(Locators.button).contains("OK").click();
  cy.get(Locators.passengerType).click();
  cy.get(Locators.addAdultPassenger).click();
  cy.get(Locators.button).contains("OK").click();
  cy.get(Locators.searchButton).click();
});
When("User Select outbound and inbound train with journey price", () => {
  cy.get(Locators.journeyPrice, { timeout: 20000 }).first().click();
  cy.get(Locators.selectButton).click();
  cy.get(Locators.journeyPrice).eq(3).click();
  cy.get(Locators.selectButton).last().click();
});
When("User Continue as a guest", () => {
  cy.get(Locators.continueBtn).click();
  cy.get(Locators.continueBtn).contains("Continue without extras").click();
  cy.get(Locators.continueAsAGuestBtn).click();
});
Then(
  "User successfully reach to payment page and takes screenshot of booking details",
  () => {
    cy.get(Locators.heading).last().should("contain", "Checkout");
    cy.viewport(1280, 720);
    cy.screenshot();
  }
);
