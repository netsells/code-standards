# Testing

## Unit Testing
For Unit Testing we use XCTest. You should write tests where possible and match the directory structure of your tests to the directory structure of the app so the correct tests are easy to find.

Test classes should have a single concern. So you shouldn't be testing more than one view controller in one test class.

## UI Testing
XCUITest is currently too flakey to reliably use it on projects.