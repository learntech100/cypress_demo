describe('sauce app', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('displays two todo items by default', () => {
      cy.get('#user-name').type("standard_user")
      cy.get('#password').type("secret_sauce")
      cy.get('#login-button').click()
      cy.url().should('include', '/inventory.html') // Assertions 

    })

})