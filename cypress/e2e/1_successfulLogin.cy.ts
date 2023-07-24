import HomePage from "../pageObjects/pages/btcbitPages/HomePage";
import SignInPage from "../pageObjects/pages/btcbitPages/SignInPage";

beforeEach(() => {
  let allure = Cypress.Allure.reporter.getInterface()
  allure.label('tag', 'homePage')
  allure.label('owner', 'JS')
  allure.story('succesfullLogin')
})

describe(Cypress.spec.relative.toString(), () => {
  it("Succesfull login", () => {
    cy.allure().description('Ensure that the user can login with correct credentials')

    cy.intercept('**/login').as('login')
    cy.intercept('**/logout').as('logout')

    cy.allure().logStep('Visit website')
    cy.visit("/");

    cy.allure().logStep('Check that the website is opened');
    cy.url().should('eq', 'https://btcbit.net/');
    HomePage.appLogoField.should("be.visible");
    HomePage.labelNameField.contains("Buy and sell cryptocurrency with your Bank Card");
    HomePage.signInButton.should("be.visible").and('contain', 'Sign In');
    HomePage.signInButton.click();

    cy.allure().logStep('Login to the system')
    cy.url().should('include', 'sign_in');
    SignInPage.userNameInputField.type(Cypress.env('username'));
    SignInPage.passwordInputField.type(Cypress.env('password'));
    SignInPage.loginButton.click();
    cy.url().should('include', 'profile');

    cy.allure().logStep('Check login endpoint')
    cy.checkStatus('@login', 302)

    cy.allure().logStep('Logout from the system')
    HomePage.accountDetails.trigger('mouseover');
    HomePage.menuButton.contains("Logout").click();
    cy.url().should('eq', 'https://btcbit.net/');

    cy.allure().logStep('Check logout endpoint')
    cy.checkStatus('@logout', 302);
  });
});
