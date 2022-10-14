///  <reference types="cypress" />

import {ExportAuditreport} from "../Pages/ExportAuditReport"
import {LoginPage} from "../Pages/Login_page"
const dayjs = require('dayjs')

const objExportData = new ExportAuditreport()

const loginPage = new LoginPage()
let myGlobalVar = Cypress.env("login_url")

describe("Export Audit Records", function () 
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

    it('Export Audit Records', function()
    {
        cy.wait(2000)
        //Selects 09/06/2022 as FROM date
        objExportData.ClickOnFromDate().type('{enter}')
        objExportData.ClickOnFromDate().type('{selectAll}')
        objExportData.ClickOnFromDate().type('09/06/2022{enter}')
        cy.wait(2000)


        objExportData.ClickOnFromDate().invoke('val').then((text) => {
            expect('09/06/2022').to.equal(text);
        })

        //Selects 09/09/2022 as TO date
        objExportData.ClickOnToDate().type('{enter}')
        objExportData.ClickOnToDate().type('{selectAll}')
        objExportData.ClickOnToDate().type('09/09/2022{enter}')
        cy.wait(2000)

        objExportData.ClickOnToDate().invoke('val').then((text) => {
            expect('09/09/2022').to.equal(text)
        })
        cy.wait(2000)

        objExportData.ClickOnBtnExportData().click({force:true})
        cy.wait(2000)

        objExportData.ClickOnExportDataOK().click({force:true})
        cy.wait(2000)

        objExportData.VerifyExportReportisSeenBelowExport().click({ multiple: true })

        const todaysDate = dayjs().format('YYYY-MM-DD')
       // const todaysTime = dayjs().format('HH:mm a')

       objExportData.VerifyDownloadedExportReportDate().contains(todaysDate)

       loginPage.logout().click({ multiple: true })
       loginPage.ClickonLogout().click()

      //* ALL EVENTS* All Sites* 2022-09-05 to 2022-09-09'
     //  cy.get(':nth-child(1) > .ExportDataFileList-data').should('have.text',todaysDate+' at ' + todaysTime+"* ALL EVENTS* All Sites* 2022-09-05 to 2022-09-09")
     //  cy.get(':nth-child(1) > .ExportDataFileList-data').should('have.value',todaysDate+' at ' + todaysTime)

    })


})