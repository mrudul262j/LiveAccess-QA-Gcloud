///  <reference types="cypress" />

import {LoginPage} from "../Pages/Login_page"

const loginPage = new LoginPage()

let myGlobalVar = Cypress.env("login_url")

describe("AM Login", function () 
{
    before(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('AM Login', function()
    {
        loginPage.navigate(myGlobalVar)
        loginPage.enterUsername().type(this.testdata.Username)
        loginPage.enterPassword ().type(this.testdata.Password)
        
        loginPage.clickOnLogin().click()

        loginPage.verifyLoggedinUser().should('contain','Mj Admin')
        loginPage.logout().click({ multiple: true })
        loginPage.ClickonLogout().click()
        
    })
})

