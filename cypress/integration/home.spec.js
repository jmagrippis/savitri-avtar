/// <reference types="Cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('can click through all the sections', () => {
    cy.findByText('Savitri Avtar').should('be.visible')
    cy.findAllByText('Kundalini Yoga')
      .eq(0)
      .should('be.visible')
    cy.findAllByText(/book a session/i)
      .first()
      .should('be.visible')

    cy.findAllByLabelText(/next section/i)
      .eq(0)
      .click({ force: true })
    cy.findByText('About Me').should('be.visible')

    cy.findAllByLabelText(/next section/i)
      .eq(1)
      .click({ force: true })
    cy.findByText('My approach').should('be.visible')

    cy.findAllByLabelText(/next section/i)
      .eq(2)
      .click({ force: true })
    cy.findAllByText('Kundalini Yoga')
      .eq(1)
      .should('be.visible')

    cy.findAllByLabelText(/next section/i)
      .eq(3)
      .click({ force: true })
    cy.findByText('Private Sessions').should('be.visible')
    cy.findAllByText(/book a session/i)
      .last()
      .should('be.visible')
  })

  it('can navigate to the "book" page', () => {
    cy.findAllByText(/book a session/i)
      .first()
      .click()

    cy.url().should('include', 'book')
    cy.findByText('Book a session')

    cy.go('back')
    cy.url().should('not.include', 'book')
    cy.findAllByText(/book a session/i)
      .last()
      .click({ force: true })

    cy.url().should('include', 'book')
    cy.findByText('Book a session')
  })
})
