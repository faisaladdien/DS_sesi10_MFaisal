Feature: Swag Labs - Login

  Scenario Outline: As a "standard_user", I want to log in successfully

    Given I am on the login page
    When I login with "standard_user" credential
    Then I should see home page

  Scenario Outline: As a "locked_out_user", I cannot log in into the home page
    
    Given I am on the login page
    When I login with "locked_out_user" credential
    then i should see "Epic sadface: Sorry, this user has been locked out." 
