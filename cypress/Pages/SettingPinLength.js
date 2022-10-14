export class SettingsPIN
{
    ClickOnSettingsTab()
    {
        return cy.get(':nth-child(8) > .nav__anchor > .nav__icon > .light')
    }

    ClickOnPinTab()
    {
        return cy.get(':nth-child(3) > .SettingsListItem-content > .SettingsListItem-title')
    }

    VerifyPinLength()
    {
        return cy.get('input')
    }

    ClickOnCancel()
    {
        return cy.get('.buttons > .buttons--right > .button')
    }
}
