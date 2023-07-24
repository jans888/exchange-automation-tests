import BasePage from "../../BasePage";

export default class HomePage extends BasePage {
  static get appLogoField() {
    return cy.get(".header__logo-link");
  }

  static get labelNameField() {
    return cy.get(".hero__heading");
  }

  static get signInButton() {
    return cy.get(".auth__list-item-link--is-home-secondary");
  }

  static get accountDetails() {
    return cy.get(".header__account-link");
  }

  static get menuButton() {
    return cy.get(".header__account-menu-item");
  }

  static get highLimits() {
    return cy.get(".blink1");
  }
}
