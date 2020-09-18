@Search-Cars
Feature: Acceptance testing to validate Search cars page is working fine.
  In order to validate that 
  the search car page is working fine
  we will do the acceptance testing

  @Search-Cars-Positive
  Scenario: Validate search cars page
    Given I on the Home page "https://www.carsguide.com.au" of CarsGuide website
    When I move to Car for Sale menu
      | Menu        |
      | buy + sale  |
      | Sell My Car |
    And click on "Search Cars" link
    And select carbrand as "BMW" from AnyMake DropDown
    And select carmodel as "1 Series" from SelectModel dropdown
    And select location as "NSW - Hunter" from Any SelecLocation dropdown
    And select price as "$1,000" from price dropdown
    And click on Find_My_Next_Car button
    Then I should see list of searched cars
    And the page title should be "Bmw 1 Series Under 1000 for Sale Hunter NSW | carsguide"