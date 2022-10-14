///  <reference types="cypress" />

import {Search_Device} from "../Pages/Search_Device"
import {LoginPage} from "../Pages/Login_page"


const objSearchDevice = new Search_Device()

const loginPage = new LoginPage()
let myGlobalVar = Cypress.env("login_url")

describe("Search a Device", function () 
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

    it('Verify Device details', function()
{
    cy.wait(4000)

    objSearchDevice.ClickOnDeviceTab().click()
    objSearchDevice.SearchDevice().clear()
    objSearchDevice.SearchDevice().type('MJ 6ef')
    cy.wait(2000)

    objSearchDevice.SearchList().each(($el) => {
        if ($el.text() === 'Mj  6ef')
         {
          // stop iteration
          console.log("Device found: " +$el.text())
          objSearchDevice.SearchedDevice().click()

          return false
        }
    })

    cy.wait(4000)
    objSearchDevice.LatchStatus().should('have.text', 'SECURED') 
    cy.wait(2000)

    objSearchDevice.LockStatusIcon().should('be.visible')

    objSearchDevice.BatteryStatusIcon().should('be.visible')


    objSearchDevice.DeviceSerialNumber().should('have.text', 'LIVE Lock, SN 0006ef, FW 1.0.9') 
   
    
    
   

   
})

})


