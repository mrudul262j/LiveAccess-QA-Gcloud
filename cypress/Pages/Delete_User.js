export class DeleteUser
{

    obj_Userstab = ':nth-child(3) > .nav__anchor > .nav__name'
    obj_Search = '.trigger'
    obj_btnDeletePopup = '.primary'



    ClickOnUsersTab()
    {
        return cy.get(this.obj_Userstab)
    }

    SearchUser()
    {
       return cy.get('.trigger')    

    }

    DeleteButton()
    {
        return cy.get('.primary')
    }

    SearchedUser()
    {
        return cy.get(':nth-child(2) > :nth-child(1) > .result-list__content > .h2')
    }

}