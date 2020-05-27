alert(Cypress.env('MY_ENV_VARIABLE'));
describe('basic page interactions ', () => {

    beforeEach(() => {

        cy.visit('/example-4');
    })


    it('sets the header text to the item name when double clicked', () => {
       
       cy.get('[data-cy=box-1-items-list] > :nth-child(2)')
       .dblclick();

       cy.get('[data-cy=box-1-selected-name]')
          .invoke('text')
          .should('equal','Option Two')
        
    });

    it('displays the correct count for the number of checkboxes selected', () => {
       
        cy.get('[data-cy=box-2-checkboxes] > :nth-child(1) input')
        .check();
 
        cy.get('[data-cy=box-2-selected-count]')
           .invoke('text')
           .should('equal','1')
         
     });

     it('displays the name of currently selected item from dropdown', () => {
       
        cy.get('[data-cy=box-3-dropdown]')
        .select('Option Three');
 
        cy.get('[data-cy=box-3-selected-name]')
           .invoke('text')
           .should('equal','Option Three');
         
     });

     it.skip('should display the name of most recently hovered item name', () => {
       
        cy.get('[data-cy=box-4-items-list] > :nth-child(2)')
          .trigger('mouseover')
          .debug();
 
        cy.get('[data-cy=box-4-selected-name]')
           .invoke('text')
           .should('equal','Option Two');
         
     });
   
   
   });