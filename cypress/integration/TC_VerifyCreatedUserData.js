///  <reference types="cypress" />

import {VerifyCreatedData} from "../Pages/Verify_CreatedUser_Data"
import {LoginPage} from "../Pages/Login_page"


const objVerifyUser = new VerifyCreatedData()

const loginPage = new LoginPage()
let myGlobalVar = Cypress.env("login_url")

describe("Cypress POM Test Suite", function () 
{
    before(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('AM Login', function()
    {
        loginPage.navigate(myGlobalVar)
        loginPage.enterUsername().type(this.testdata.superadminuser)
        loginPage.enterPassword ().type(this.testdata.SUPassword)
        loginPage.clickOnLogin().click()
             
    })

it('Verify individual fields of an Admin User', function()
{
    cy.wait(4000)

    objVerifyUser.ClickOnUsersTab().click()
    objVerifyUser.SearchUser().clear()
    objVerifyUser.SearchUser().type('MJ Admin')
    cy.wait(2000)

    objVerifyUser.SearchList().each(($el) => {
        if ($el.text() === 'Mj  Admin')
         {
          // stop iteration
          console.log("User found: " +$el.text())
          objVerifyUser.SearchedFullUsername().click()

          return false
        }
    })

    cy.wait(5000)

    objVerifyUser.UserType().should('have.text', 'AdminUser') //user type
    cy.wait(2000)

    objVerifyUser.UserEnabled().should('have.value', 'Yes')
    cy.wait(2000)

    objVerifyUser.FirstName().should('have.value', 'Mj') 
    cy.wait(2000)

    objVerifyUser.AppSessionHours().should('have.value', '8')
    objVerifyUser.MiddleName().should('not.contain.text')
    
    
    objVerifyUser.LastName().should('have.value', 'Admin')
    cy.wait(2000)

    objVerifyUser.CanEnrollKAS().should('have.value', 'Yes')
    objVerifyUser.EmployeeID().should('have.value', 'mru123')
    cy.wait(2000)

    objVerifyUser.ManageDevices().should('have.value', 'Yes')
    cy.wait(2000)

    objVerifyUser.UserPin().should('have.value', '•••••')
    cy.wait(2000)

    objVerifyUser.RemoteOperation().should('have.value', 'Yes') 
    objVerifyUser.SelectLevelofAccess().should('have.text', 'No Site Selected')
    cy.wait(2000)

    objVerifyUser.ScrolltoRoles().scrollIntoView().should('be.visible')
    cy.wait(2000)

    objVerifyUser.VeryRolesAddedOne().should('have.text', 'Access New Devices')
    cy.wait(2000)

    objVerifyUser.VerifyRolesAddedTwo().should('have.text', 'MJ Role')
    objVerifyUser.ClickOnButton().click()
    cy.wait(2000)

   
})

})


//https://lambdageeks.com/cypress-promise-cypress-asynchronous/
