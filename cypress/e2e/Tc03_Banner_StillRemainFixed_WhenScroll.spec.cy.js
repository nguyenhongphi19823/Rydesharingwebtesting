/// <reference types="Cypress" />

describe('Banner Load Properly',function(){

    it('Banner Load Properly',function(){
        cy.visit('https://rydesharing.com')
        cy.scrollTo('bottom')
        cy.get('.swiper-slide-active > a > .swiper-slide-inner > .swiper-slide-image').should('be.visible')


    })
})
