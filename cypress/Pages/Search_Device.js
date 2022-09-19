export class Search_Device
{
    obj_Devicestab = ':nth-child(6) > .nav__anchor > .nav__icon > .light'
    obj_Search = '.trigger'
    obj_Searchlist = ':nth-child(2) > :nth-child(1) > .result-list__content > .h2'


    ClickOnDeviceTab()
    {
        return cy.get(':nth-child(6) > .nav__anchor > .nav__icon > .light')
    }

    SearchDevice()
    {
       return cy.get('.trigger')    

    }

    SearchList()
    {
        return cy.get(':nth-child(2) > :nth-child(1) > .result-list__content > .h2')
    }

    SearchedDevice()
    {
        return  cy.get('.h2').should('have.text', 'MJ 6ef') 
      
    }

    LatchStatus()
    {
        return cy.get('.latch-status')
    }

    LockStatusIcon()
    {
        return cy.get('.lock-battery-status > :nth-child(1) > .dark')

    }

    BatteryStatusIcon()
    {
        return cy.get('.lock-battery-status > :nth-child(2) > .dark')
    }

    DeviceSerialNumber()
    {
        return cy.get('.serial-number')
    }


}