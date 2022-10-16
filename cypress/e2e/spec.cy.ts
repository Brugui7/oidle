describe('Oidle page', () => {

  it('loads ands closes the first time dialog', () => {
    cy.visit('http://localhost:4200');
    cy.contains('Cerrar').click();

  })

  it('writes and send value', () => {
    cy.get('#searchBox').type('Test song').should('have.value', 'Test song');
    cy.contains('ENVIAR').click();
    cy.contains('Test song');
  })

  it('extends time', () => {
    cy.contains(/AMPLIAR .+/).click();
    cy.contains(/.+AMPLIACIÓN.+/);
  })

  it('can play audio', () => {
    cy.get('.play-button').click();
    cy.get('audio').should((els)=>{
      let audible = false
      els.each((i, el)=>{
        if (el.duration > 0 && !el.paused && !el.muted) {
          audible = true
        }
      })
      expect(audible).to.eq(true)
    })
  })
})