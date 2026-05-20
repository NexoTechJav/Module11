describe('Position Details E2E Tests', () => {

  beforeEach(() => {

    cy.intercept('GET', 'http://localhost:3010/positions/*/interviewFlow', {
      fixture: 'interviewFlow.json'
    }).as('getInterviewFlow');

    cy.intercept('GET', 'http://localhost:3010/positions/*/candidates', {
      fixture: 'candidates.json'
    }).as('getCandidates');

    cy.intercept('PUT', 'http://localhost:3010/candidates/*', {
      statusCode: 200,
      body: {
        success: true
      }
    }).as('updateCandidate');

    cy.visit('/positions/1');

    cy.wait('@getInterviewFlow');
    cy.wait('@getCandidates');
  });
  
  it('should load position page correctly', () => {
    cy.contains('Senior Frontend Engineer').should('exist');
  });


  it('should display all interview stages', () => {

    cy.contains('CV Review').should('exist');

    cy.contains('Technical Interview').should('exist');

    cy.contains('HR Interview').should('exist');

    cy.contains('Offer').should('exist');
  });


  it('should display candidates in correct columns', () => {

    cy.contains('CV Review')
      .parent()
      .contains('John Doe');

    cy.contains('Technical Interview')
      .parent()
      .contains('Jane Smith');
  });
  
  it('should move candidate between stages and call backend API', () => {

    cy.contains('John Doe')
      .trigger('mousedown', { which: 1 });

    cy.contains('Technical Interview')
      .trigger('mousemove')
      .trigger('mouseup', { force: true });

    cy.wait('@updateCandidate')
      .its('request.body')
      .should((body) => {
        expect(body).to.have.property('applicationId');
        expect(body).to.have.property('currentInterviewStep');
      });
  });
});