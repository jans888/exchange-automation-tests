import HomePage from "../pageObjects/pages/btcbitPages/HomePage";
import SignInPage from "../pageObjects/pages/btcbitPages/SignInPage";

beforeEach(() => {
  let allure = Cypress.Allure.reporter.getInterface()
  allure.label('tag', 'homePage')
  allure.label('owner', 'JS')
  allure.story('unsuccesfullLogin')
})

describe(Cypress.spec.relative.toString(), () => {
  it("Unsuccesfull login", () => {
    cy.allure().description('Ensure that the user cannot login with incorrect credentials')

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
    SignInPage.userNameInputField.type("incorrect_username@btcbit.net");
    SignInPage.passwordInputField.type("incorrect_password");
    SignInPage.loginButton.click();
    SignInPage.text.should("be.visible").and('contain', "Invalid email or password. Try clicking 'Forgot Password' if you're having trouble signing in.");
    cy.url().should('include', 'sign_in');
  });
});
