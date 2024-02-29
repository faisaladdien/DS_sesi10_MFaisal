const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    // NOTE: elements collection
    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    get errorLockedOutUser () { return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]') }
    

    async login (username) {
        await this.fieldUsername.waitForDisplayed({ timeout: 50000 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError () {
        await this.errorLockedOutUser.waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser).toBeDisplayed()
    }

    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();