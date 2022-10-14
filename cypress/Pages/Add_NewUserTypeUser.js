export class Add_NewUserTypeUser
{

    ClickOnUsersTab()
    {
        return cy.get(':nth-child(3) > .nav__anchor > .nav__name')
    }

    ClickOnAddNewUser()
    {
        return cy.get('.add-button')
    }

    SelectAdminUserType()
    {
        return cy.get('#UserTypeId')
    }

    EnterFirstName()
    {
        return cy.get(':nth-child(3) > .trigger')
    }

    EnterLastName()
    {
        return cy.get(':nth-child(7) > .trigger')
    }

    EnterEmpIDName()
    {
    
        return cy.get(':nth-child(9) > .trigger')
    }

    ClickOnSelectLevelOfAccess()
    {
        return cy.get('.UserSidebarContents-input__wide > .buttons--right > .button')
    }

    SelectRegion()
    {
    return cy.get('#react-select-2--value > .Select-placeholder' )

    }

    SelectMarket()
    {
        return cy.get('#react-select-3--value > .Select-placeholder')

    }

    SelectSite()
    {
        return cy.get('#react-select-4--value > .Select-placeholder')

    }

    ClickOnSaveSLA()
    {
        return cy.get('.Modal-buttons--right > .primary')

    }

    AddAccessNewDevicesRole()
    {
        return cy.get('#removeListItem-a5706fb1-e5e4-45be-b32e-645341d1a851 > .RemoveListItem-action-icon')
    }

    ClickSaveNewUser()
    {
        return cy.get('.primary')

    }
    ClickonDoneAfterPinisSeen()
    {
        cy.wait(2000)

        return cy.get('.Modal-buttons--right > .button')
    }

    ClickOnbtnCancel()
    {
        return cy.get('.buttons > .buttons--right > .button')
    }
    ClearSearchBox()
{
    return cy.get('.trigger')
}

EnterUsernameToSearch()
{
    return cy.get('.trigger')
}

VerifyCreatedUser()
{
    return cy.get(':nth-child(2) > :nth-child(1) > .result-list__content > .h2')

}
}