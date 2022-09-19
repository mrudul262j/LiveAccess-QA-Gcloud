export class LoginPage
{
    obj_uname = ':nth-child(1) > .input > .login-input-field' 
    obj_pwd = ':nth-child(2) > .input > .login-input-field'
    obj_btnLogin = '.button_label'
    obj_LoggedinUser = '.App-user-fullname'
    obj_Logout = '.MoreOptions > img'


    navigate(url)
    {
        cy.visit(url)
    }

    enterUsername()
    {
       return cy.get(':nth-child(1) > .input > .login-input-field')

    }

    enterPassword()
    {
        return cy.get(':nth-child(2) > .input > .login-input-field')
    }

    clickOnLogin()
    {
        return cy.get('.button_label') /*Clicks on Login */

    }

    verifyLoggedinUser()
    {
       return cy.get('.App-user-fullname') /* Verified that Mj Admin user is logged in*/
    }

    logout()
    {
        return cy.get('.MoreOptions > img')
         
     }

     ClickonLogout()
     {
        return cy.contains('Logout') 
     }

}