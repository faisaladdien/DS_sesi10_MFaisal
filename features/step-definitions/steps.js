const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^I am on the login page$/, async () =>{
    await LoginPage.open()
})

When(/^I login with "(.*)" credential$/, async (username) =>{
    await LoginPage.login(username)
})
When(/^I login with "(.*)" credential and blank password$/, async (username) =>{
    await LoginPage.blankPassword(username)
})

Then(/^I should see home page$/, async () =>{
    await HomePage.validateHomePage()
})

Then(/^I should see error "(.*)"$/, async (massage) =>{
    await LoginPage.validateErrorUser(massage)
})

