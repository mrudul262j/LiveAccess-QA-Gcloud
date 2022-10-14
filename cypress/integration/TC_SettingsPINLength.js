///  <reference types="cypress" />

import {LoginPage} from "../Pages/Login_page"
import {SettingsPIN} from "../Pages/SettingPinLength"

let myGlobalVar = Cypress.env("login_url")

const loginPage = new LoginPage()
const SettingPinLength = new SettingsPIN()

describe("Verify Settings PIN", function () 
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

    it('Verify PIN Length', function()
    {
        SettingPinLength.ClickOnSettingsTab().click()
        cy.wait(2000)

        SettingPinLength.ClickOnPinTab().click()

        SettingPinLength.VerifyPinLength().should('have.value','5')

        SettingPinLength.ClickOnCancel().click()

        loginPage.logout().click({ multiple: true })
        loginPage.ClickonLogout().click()


    })
    


})