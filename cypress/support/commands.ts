import '@shelex/cypress-allure-plugin'

declare global {
    namespace Cypress {
        interface Chainable {
            checkStatus(routeAlias: string, statusCode: number): any
        }
    }
}

Cypress.Commands.add('checkStatus', (routeAlias, statusCode) => {
    cy.wait(routeAlias).then(response => {
        if (response.response.statusCode === statusCode) return
        else throw "Request returned non 200 status code"
    })
})