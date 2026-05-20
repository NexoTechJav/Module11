describe('Position Details - E2E tests', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3010/positions/*/interviewFlow', {
      fixture: 'interviewFlow.json'
    }).as('getInterviewFlow');

    cy.intercept('GET', 'http://localhost:3010/positions/*/candidates', {
      fixture: 'candidates.json'
    }).as('getCandidates');

    cy.intercept('PUT', 'http://localhost:3010/candidates/*', {
      statusCode: 200,
      body: { success: true }
    }).as('updateCandidate');

    cy.visit('/positions/1');

    cy.wait('@getInterviewFlow');
    cy.wait('@getCandidates');
  });

  it('loads the position page and shows the position title', () => {
    cy.get('[data-testid="position-title"]').should('contain.text', 'Senior Frontend Engineer');
  });

  it('shows all interview stages', () => {
    cy.get('[data-testid="stage-column-1"]').should('contain.text', 'CV Review');
    cy.get('[data-testid="stage-column-2"]').should('contain.text', 'Technical Interview');
    cy.get('[data-testid="stage-column-3"]').should('contain.text', 'HR Interview');
    cy.get('[data-testid="stage-column-4"]').should('contain.text', 'Offer');
  });

  it('shows candidates in the correct stage columns', () => {
    cy.get('[data-testid="stage-column-1"]').should('contain.text', 'John Doe');
    cy.get('[data-testid="stage-column-2"]').should('contain.text', 'Jane Smith');
  });

  it('moves a candidate to another stage and updates the backend', () => {
    cy.get('[data-testid="candidate-card-1"]').as('candidate');
    cy.get('[data-testid="stage-column-2"]').as('targetStage');

    cy.get('@candidate').trigger('mousedown', {
      button: 0,
      clientX: 200,
      clientY: 300,
      force: true
    });

    cy.get('@targetStage')
      .trigger('mousemove', {
        clientX: 500,
        clientY: 300,
        force: true
      })
      .trigger('mousemove', {
        clientX: 500,
        clientY: 420,
        force: true
      });

    cy.get('body').trigger('mouseup', { force: true });

    cy.wait('@updateCandidate').then(({ request }) => {
      expect(request.url).to.include('/candidates/1');
      expect(request.body).to.deep.equal({
        applicationId: 100,
        currentInterviewStep: 2
      });
    });
  });
});
