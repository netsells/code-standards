# Control Statements

There are two common ways to write control statments with Swift. The first is where the condition is wrapped in brackets and then the other is written without brackets (unless required).

At Netsells control statements should not use brackets unless they are required. Examples below:

#### Incorrect

```swift
if(someCondition) {
    doSomething()
}
```

#### Correct

```swift
if someCondition {
    doSomething()
}
```

``` swift
for space in spaces {
    calculatePricing()
}
```