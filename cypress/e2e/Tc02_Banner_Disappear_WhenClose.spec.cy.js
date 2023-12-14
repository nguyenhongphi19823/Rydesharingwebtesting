/// <reference types="Cypress" />

describe('Banner Load Properly',function(){

    it('Banner Load Properly',function(){
        cy.visit('https://rydesharing.com')
        cy.wait(6000) 
        cy.get('.eicon-close').click()
        cy.get('.swiper-slide-active > a > .swiper-slide-inner > .swiper-slide-image').should('not.be.visible')

    })
})


