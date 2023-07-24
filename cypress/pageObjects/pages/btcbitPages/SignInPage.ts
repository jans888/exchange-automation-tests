import BasePage from "../../BasePage";

export default class SignUpPagePage extends BasePage {
  static get userNameInputField() {
    return cy.get("#email");
  }

  static get passwordInputField() {
    return cy.get("#password");
  }

  static get loginButton() {
    return cy.get("#sign-in");
  }

  static get text() {
    return cy.get(".text-center");
  }
}
