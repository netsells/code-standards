# Security

## Keychain
If storing any type of sensitive data. Make sure it is stored in the keychain and not anywhere such as UserDefaults of a text file.

## Data Leaking
Its important that when using print statements or logging that you don't log any information which could get leaked out of the app. E.G logging user input, user data, location etc.

## Access Control
Make sure that any functions or classes that should be private, and cannot be accessed by other classes. 

## Password Requirements
This will typically be defined by discovery. But as a basic rule, every project should be requiring passwords to be a minimum of 6 characters and contain at least one uppercase character and one numeric character.

