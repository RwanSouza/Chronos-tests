/// <reference types="cypress" />

describe('Testar  comportamentos da tela de login', () => {
    beforeEach(() => {
      cy.visit('http://www.chronos.qwasolucoes.com.br/login');
    })
  
    it('Fazer login no chronos', () => {

      cy.get('.login-form').should('have.attr', 'placeholder', 'Usuário');
      cy.get('.login-form').type('rwan.souza');
      cy.get('.input-content').type('r$asd^F');


      
      cy.get('app-submit-button.submit-button > .submit-button').click(); 
      cy.get('.toast-body')
      cy.get('.col-10').contains('Usuário ou senha incorreto!');
  
      // cy.intercept('POST', 'http://www.chronos.qwasolucoes.com.br/chronos-oauth/oauth/token').as('login');
      // cy.get('app-submit-button.submit-button > .submit-button').click(); 
    
  
      // cy.wait('@login').then((xhr) => {
      //   console.log(xhr)
      //   expect(xhr.response.statusCode).be.eq(200);
      // });    
    });
  
    it('Testar se o botão de login está desab...', () => {
      cy.get('.login-form').should('have.value', '');
  
      cy.get('button.btn').should('be.disabled');
  
      cy.get('[type="submit"]').should('be.disabled');
  
    });
  }); 