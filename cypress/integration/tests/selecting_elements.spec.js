

describe('text box with max characters ', () => {
    it.skip('displays the appropriate remaining characters count', () => {

       cy.visit('http://localhost:3000/example-3');
       cy.get('span')
       .eq(1)
         .invoke('text')
         .should('equal', '15');

         cy.get('input').eq(1).type('hello');
    
         cy.get('span')
         .eq(1)
         .invoke('text')
         .should('equal', '10');

         cy.get('input').eq(1).type(' my friend');

         cy.get('span')
         .eq(1)
         .invoke('text')
         .should('equal', '0');
   
    });

    it('displays the appropriate remaining characters count with data-cy attribute', () => {

        cy.visit('http://localhost:3000/example-3');
        cy.get('[data-cy="first-name-chars-left-count"]')
          .invoke('text')
          .should('equal', '15');
          cy.get('[data-cy="input-first-name"]').type('hello');
     
          cy.get('[data-cy="first-name-chars-left-count"]')
          .invoke('text')
          .should('equal', '10');
          cy.get('[data-cy="input-first-name"]').type(' my friend');
 
          cy.get('[data-cy="first-name-chars-left-count"]')
          .invoke('text')
          .should('equal', '0');
    
     });
    
    it('prevent user from typing more characters once max is exceeded',() =>{
        cy.visit('http://localhost:3000/example-3');
        cy.get('[data-cy="input-first-name"]').type('abcdefghijklmnopqrstu');
        cy.get('[data-cy="input-first-name"]')
        .should('have.attr', 'value', 'abcdefghijklmno');

    });
   
   
   });