import HomePage from "../pageObjects/pages/btcbitPages/HomePage";
import SignInPage from "../pageObjects/pages/btcbitPages/SignInPage";

beforeEach(() => {
  let allure = Cypress.Allure.reporter.getInterface()
  allure.label('tag', 'homePage')
  allure.label('owner', 'JS')
  allure.story('testcaseWithFailedTeststep')
})

describe(Cypress.spec.relative.toString(), () => {
  it("Test case with failed test step.", () => {
    cy.allure().description('Test case with failed test step.')

    cy.allure().logStep('Visit website')
    cy.visit("/");

    cy.allure().logStep('Check that the website is opened');
    cy.url().should('eq', 'https://btcbit.net/');
    HomePage.appLogoField.should("be.visible");
    HomePage.labelNameField.contains("Buy and sell cryptocurrency with your Bank Card");

    cy.allure().logStep('Check the high limits')
    HomePage.highLimits.contains("HIGH LIMITS UP TO 35 000 USD");
  });
});
