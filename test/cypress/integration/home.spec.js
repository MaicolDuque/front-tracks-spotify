
describe('Tests to search tracks', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Should be search tracks by text', ()  => {
    cy.searchTracks('eres mi sueño')
    cy.screenshot('track-eres-mi-sueno')
  })

  it('Should return tracks after the search', ()  => {
    cy.searchTracks('shape of you')
    cy.get('.MuiCard-root').should('be.visible')
  })

  it('Should not return tracks after the search', ()  => {
    cy.searchTracks('esta canción no existe en spotify')
    cy.get('.MuiCard-root').should('not.exist')
  })

})