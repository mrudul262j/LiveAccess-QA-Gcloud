export class AddNewAdminUser
{

    /*obj_Userstab = ':nth-child(3) > .nav__anchor > .nav__name'
    obj_AddNewUser = '.add-button'
    obj_UserType = '#UserTypeId'
    obj_FName = ':nth-child(3) > .trigger'
    obj_LName = ':nth-child(7) > .trigger'
    obj_EmpID = ':nth-child(9) > .trigger'
    obj_SelectLevelofAccess = '.UserSidebarContents-input__wide > .buttons--right > .button'
    obj_Region = '#react-select-2--value > .Select-placeholder'  
    obj_Market = '#react-select-3--value > .Select-placeholder'  
    obj_Site = '#react-select-4--value > .Select-placeholder'
    obj_btnSaveSLA = '.Modal-buttons--right > .primary'
    

    obj_AccessNewDevices = '#removeListItem-a5706fb1-e5e4-45be-b32e-645341d1a851 > .RemoveListItem-action-icon'
    obj_btnSaveUser ='.primary'
    obj_Done = '.Modal-buttons--right > .button'
    obj_CreateAccountbtn = 'form > :nth-child(2) > .trigger'
    obj_EnterPwd = 'form > :nth-child(3) > .trigger'
    obj_ConfirmPwd = ':nth-child(4) > .trigger'
    obj_btnCreate = '#modal-container > form > div.Modal-buttons > div > button'
    obj_btnSave = '.primary'

    obj_Search = '.trigger'

    obj_Searchlist = ':nth-child(2) > :nth-child(1) > .result-list__content > .h2'*/

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
CreateAccountEnterusername()
{
    cy.wait(2000)
    return cy.get('form > :nth-child(2) > .trigger')
}

EnterPassword()
{
    return cy.get('form > :nth-child(3) > .trigger')
}


EnterConfirmPassword()
{
    return cy.get(':nth-child(4) > .trigger')
}

ClickOnCreate()
{
    return cy.get('#modal-container > form > div.Modal-buttons > div > button')
}

ClickOnFinalSave()
{
    return cy.get('.primary').focus() // Focus on the first input
     
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
