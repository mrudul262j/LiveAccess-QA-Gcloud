///  <reference types="cypress" />

import {LoginPage} from "../Pages/Login_page"

import {DeleteUser} from "../Pages/Delete_User"


const loginPage = new LoginPage()
const DelUser = new DeleteUser()

let myGlobalVar = Cypress.env("login_url")

describe("Delete User", function () 
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
              
    })

    it('DeleteUser', function()
    {
        DelUser.ClickOnUsersTab().click()
        DelUser.SearchUser().clear()
        DelUser.SearchUser().type('mjAutoAdmin')
        cy.wait(4000)

        DelUser.SearchedUser().each(($el) => {
            if ($el.text() === 'MJTestAdmin  Account')
             {
                cy.wait (1000)
                cy.contains('Delete').click({force:true});
                DelUser.DeleteButton().click()
              return false
            }
        })

       
    cy.wait(2000)
    loginPage.logout().click({ multiple: true })
    loginPage.ClickonLogout().click()
   
    })
    


})
