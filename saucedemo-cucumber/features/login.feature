Feature: User Authentication
  As a store customer
  I want to log in with my credentials
  So that I can access the product catalog

  Scenario: Successful login with a valid account
    Given I access the Swag Labs login page
    When I fill in the username "standard_user" and the password "secret_sauce"
    And I click the Login button
    Then I should be redirected to the products page
    And I should see the title "Products" at the top of the page

  Scenario: Login with a locked account
    Given I access the Swag Labs login page
    When I fill in the username "locked_out_user" and the password "secret_sauce"
    And I click the Login button
    Then I should see the error message "Epic sadface: Sorry, this user has been locked out."