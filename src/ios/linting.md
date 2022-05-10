# Linting Rules & Enforcement

## Intro

We use SwiftLint to analyse our code and enforce the standards below. We discuss all standard changes or additions in the #team-mobile slack channel. Once a rule has been decided, it will be added here and added to the standard .swiftlint.yml file on confluence. You will need to add this to any projects you want to update

## Rules

### Control Statements

[Link to Swiftlint doc](https://realm.github.io/SwiftLint/control_statement.html)

Control statements shouldn’t unnecessarily wrap their conditionals or arguments in parentheses.

**Non-Triggering Example**
```swift
if condition {
    doSomething()
}
```

**Triggering Example**
```swift
if(condition) {
    doSomething()
}
```
