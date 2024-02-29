@digital-skola @login
Feature: Swag Labs - Login
Background: User on the login page
    Given I am on the login page

  @positive
  Scenario Outline: As a "standard_user", I want to log in successfully
    When I login with "standard_user" credential
    Then I should see home page

  Scenario Outline: As a "problem_user", I want to log in successfully
    When I login with "problem_user" credential
    Then I should see home page

  Scenario Outline: As a "performance_glitch_user", I want to log in successfully
    When I login with "performance_glitch_user" credential
    Then I should see home page
  
  Scenario Outline: As a "error_user", I want to log in successfully
    When I login with "error_user" credential
    Then I should see home page

  Scenario Outline: As a "visual_user", I want to log in successfully
    When I login with "visual_user" credential
    Then I should see home page

  @negative
  Scenario Outline: As a "locked_out_user", I cannot log in into the home page and see message error
    When I login with "locked_out_user" credential
    Then I should see error "Epic sadface: Sorry, this user has been locked out." 

  Scenario Outline: As a "another_user", I cannot log in into the home page and see message error
    When I login with "another_user" credential
    Then I should see error "Epic sadface: Username and password do not match any user in this service"
  
  Scenario Outline: As a "" blank user, I cannot log in into the home page and see message error
    When I login with "" credential
    Then I should see error "Epic sadface: Username is required"

  Scenario Outline: As a "standard_user" but the password is blank, I cannot log in into the home page and see message error
    When I login with "standard_user" credential and blank password
    Then I should see error "Epic sadface: Password is required"
    
  
