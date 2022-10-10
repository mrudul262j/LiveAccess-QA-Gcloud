///  <reference types="cypress" />

import {LoginPage} from "../Pages/Login_page"
import {AddNewAdminUser} from "../Pages/Add_NewUser"

const objAddNewuser = new AddNewAdminUser

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
        loginPage.enterUsername().type(this.testdata.Username)
        loginPage.enterPassword ().type(this.testdata.Password)
        loginPage.clickOnLogin().click()
              
    })

 it('Add New Admin User', function()
{
    cy.wait(4000)
    objAddNewuser.ClickOnUsersTab().click({force: true})
    cy.wait(2000)

    objAddNewuser.ClickOnAddNewUser().click({force: true})


    objAddNewuser.SelectAdminUserType().select('Admin')
    cy.wait(2000)

    objAddNewuser.EnterFirstName().type('MJTestAdmin')
    cy.wait(2000)

    objAddNewuser.EnterLastName().type('Account')
    cy.wait(2000)

    const faker = require("faker")
    objAddNewuser.EnterEmpIDName().type(faker.random.alphaNumeric())

    objAddNewuser.ClickOnSelectLevelOfAccess().click()
    cy.wait(2000)
    objAddNewuser.SelectRegion().type('Southern{enter}')

    objAddNewuser.SelectMarket().type('Cleveland{enter}')

    objAddNewuser.SelectSite().type ('307{enter}')

    objAddNewuser.ClickOnSaveSLA().click({ force: true })
    cy.wait(4000)


    objAddNewuser.AddAccessNewDevicesRole().click();

    objAddNewuser.ClickSaveNewUser().click()
    objAddNewuser.ClickonDoneAfterPinisSeen().click()

    objAddNewuser.CreateAccountEnterusername().type("mjAutoAdmin")
    objAddNewuser.EnterPassword().type("Password@123")
    objAddNewuser.EnterConfirmPassword().type("Password@123")
    objAddNewuser.ClickOnCreate().click()
    cy.wait(4000)
    objAddNewuser.ClickOnFinalSave().click({ force: true })
    cy.wait(4000)

    objAddNewuser.ClearSearchBox().clear()
    objAddNewuser.EnterUsernameToSearch().type('mjAutoAdmin')
    cy.wait(4000)

    objAddNewuser.VerifyCreatedUser().each(($el) => {
        if ($el.text() === 'MJTestAdmin Account')
         {
          // stop iteration
          console.log("User created: " +$el.text())
          return false
        }
    })
}) 

})