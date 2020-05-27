

describe('text box with max characters ', () => {
  
    it('displays the appropriate remaining characters count with data-cy attribute', () => {

        cy.visit('http://localhost:3000/example-3');
        
        cy.get('[data-cy="first-name-chars-left-count"]')
        .as('charsLeftSpan');
        
        cy.get('[data-cy="input-first-name"]')
        .as('charInput');



        cy.get('@charsLeftSpan')
          .invoke('text')
          .should('equal', '15');
          cy.get('@charInput').type('hello');
     
          cy.get('@charsLeftSpan')
          .invoke('text')
          .should('equal', '10');
          cy.get('@charInput').type(' my friend');
 
          cy.get('@charsLeftSpan')
          .invoke('text')
          .should('equal', '0');
    
     });
    
    it('prevent user from typing more characters once max is exceeded',() =>{
        cy.visit('/example-3');

        cy.get('[data-cy="input-first-name"]')
        .as('charInput1');

        cy.get('@charInput1').type('abcdefghijklmnopqrstu');
        cy.get('@charInput1')
        .should('have.attr', 'value', 'abcdefghijklmno');

    });
   
   
   });