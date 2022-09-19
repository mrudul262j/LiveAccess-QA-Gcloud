export class VerifyCreatedData
{

    obj_Userstab = ':nth-child(3) > .nav__anchor > .nav__name'
    obj_Search = '.trigger'
    obj_Searchlist = ':nth-child(2) > :nth-child(1) > .result-list__content > .h2'


    ClickOnUsersTab()
    {
        return cy.get(':nth-child(3) > .nav__anchor > .nav__name')
    }

    SearchUser()
    {
       return cy.get('.trigger')    

    }

    SearchList()
    {
        return cy.get(':nth-child(2) > :nth-child(1) > .result-list__content > .h2')
    }

    SearchedFullUsername()
    {
        return  cy.get('.h2').should('have.text', 'Mj  Admin') 
      
    }

    UserType()
    {
        return cy.get('.UserSidebarContents-selectList-admin > div > [type="text"]')

    }

    UserEnabled()
    {
        return cy.get('#enabled') 
    }

    FirstName()
    {
        return cy.get(':nth-child(3) > .trigger')

    }

    AppSessionHours()
    {
        return  cy.get('#duration')

    }

    MiddleName()
    {
        return cy.get(':nth-child(5) > .trigger')

    }

    RestrictedMode()
    {
        return cy.get('#sounder').should('have.value', 'No')

    }

    LastName()
    {
        return cy.get(':nth-child(7) > .trigger')

    }

    CanEnrollKAS()
    {
        return cy.get('#can_enroll_kas')

    }

    EmployeeID()
    {
        return cy.get(':nth-child(9) > .trigger')
    }

    ManageDevices()
    {
        return cy.get('#manage_devices')

    }

    UserPin()
    {
        return cy.get(':nth-child(11) > .trigger')

    }

    RemoteOperation()
    {
        return  cy.get('#remote_operations')

    }

    SelectLevelofAccess()
    {
        return cy.get('.UserSidebarContents-storePicker')

    }

    ScrolltoRoles()
    {
        return cy.get('#addListItem-a5706fb1-e5e4-45be-b32e-645341d1a851 > .AddListItem-name')

    }

    VeryRolesAddedOne()
    {
        return cy.get('#addListItem-a5706fb1-e5e4-45be-b32e-645341d1a851 > .AddListItem-name')

    }

    VerifyRolesAddedTwo()
    {
        return cy.get('#addListItem-c5f10791-f046-4512-835a-cee1cbaa9507 > .AddListItem-name')

    }

    ClickOnButton()
    {
        return cy.get('.buttons > .buttons--right > .button')

    }



    
}