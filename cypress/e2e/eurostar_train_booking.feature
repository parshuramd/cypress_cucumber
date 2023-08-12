Feature: Train Booking Functionality

    User Should be able book train tickets successfully

    Scenario: User books train ticket from starting point to destination point
        Given User Open Eurostar Web Application
        When User fills all details and search available trains
        And User Select outbound and inbound train with journey price
        And User Continue as a guest
        Then User successfully reach to payment page and takes screenshot of booking details
  