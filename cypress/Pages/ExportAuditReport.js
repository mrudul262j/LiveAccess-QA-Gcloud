export class ExportAuditreport
{
    ClickOnFromDate()
    {
        return cy.get('.DateRangePicker-picker-first > .react-datepicker__input-container > input')
    }

    ClickOnToDate()
    {
        return cy.get(':nth-child(3) > .react-datepicker__input-container > input')
    }

    ClickOnBtnExportData()
    {
        return cy.get('#FilterPaneActionButton_Button')
    }

    ClickOnExportDataOK()
    {
        return cy.get('.primary')
    }

    VerifyExportReportisSeenBelowExport()
    {
        return cy.get('.ExportDataFileList-data')
    }

    VerifyDownloadedExportReportDate()
    {
        return cy.get(':nth-child(1) > .ExportDataFileList-data')
    }


}