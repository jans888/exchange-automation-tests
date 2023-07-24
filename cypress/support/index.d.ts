import "./commands";

declare namespace Cypress {
  interface Chainable<Subject> {
    getIframeBody(): Chainable<Subject>;
  }
}
