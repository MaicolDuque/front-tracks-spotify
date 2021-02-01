describe('Tests to view track detail', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should show the track title', ()  => {
    cy.searchTracks('shape of you')
    cy.get(':nth-child(1) > .MuiCardActions-root > .MuiButtonBase-root').click()
    cy.wait(3000)
    cy.contains('span', 'Shape of You').should('be.visible')
  })

  it('Should show information about the track', ()  => {
    cy.searchTracks('shape of you')
    cy.get(':nth-child(1) > .MuiCardActions-root > .MuiButtonBase-root').click()
    cy.wait(3000)
    cy.contains('div', '2017').should('be.visible')
    cy.contains('div', '3 min 53 seg').should('be.visible')
    cy.contains("a", "Reproducir en Spotify").should('be.visible')
  })

})