const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^I am on the login page$/, async () =>{
    await LoginPage.open()
})
When(/^I login with "(.*)" credential$/, async (username) =>{
    await LoginPage.login(username)
})
Then(/^I should see home page$/, async () =>{
    await HomePage.validateHomePage()
})

Given(/^I am on the login page$/, async () =>{
    await LoginPage.open()
})
When(/^I login with "(.*)" credential$/, async (username) =>{
    await LoginPage.login(username)
})
Then(/^then i should see "(.*)" $/, async (massage) =>{
    await HomePage.validateHomePage(massage)
})

