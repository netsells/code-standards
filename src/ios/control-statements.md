# Control Statements

There are two common ways to write control statements with Swift. The first is where the condition is wrapped in brackets and then the other is written without brackets (unless required).

Control statements should not use brackets unless they are required. Examples below:

<code-highlight>
<div slot="incorrect">

```swift
if(someCondition) {
    doSomething()
}
```

</div>
<div slot="correct">

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

</div>
</code-highlight>


## Multiple Conditions

For control statements that consist of multiple conditions where each condition must be true, it is preferred to use comas to separate them.

Examples below:

<code-highlight>
<div slot="incorrect">

```swift
if conditionA && conditionB {
	doSomething()
}
```

</div>
<div slot="correct">

```swift
if conditionA, conditionB {
	doSomething()
}
```

```swift
if let value = optional, value == condition {
	doSomething()
}
```

</div>
</code-highlight>


## Guard Statements

For early returns it is preferred to use a guard statement over an if statement. 

Guard statements remove a level of indentation from your code making it clear to see what path the code should be taking. It is also a signal to other developers and the compiler what your intentions are and what can go wrong.

Examples below:

<code-highlight>
<div slot="incorrect">

```swift
if !errorCondition {
	doSomething()
	doSomethingElse()
}
```

```swift
for value in collection {
	if condition {
		doSomething(to: value)
	}
}
```

</div>
<div slot="correct">

```swift
guard !errorCondition else { return }

doSomething()
doSomethingElse()
```

```swift
for value in collection {
	guard condition else { continue }
	doSomething(to: value)
}
```

</div>
</code-highlight>


Ideally the else clause of a guard statement should perform a minimal amount of work as the bulk of the logic is meant to be contained in the same scope as the guard.

For else clauses that consist of only ``` return ```, ```continue```, or similar keywords, it is preferred to keep them on the same line as the start of the guard statement. One exception to this rule is if the line of code is extremely long and breaking it up over multiple lines improves readability.

<code-highlight>
<div slot="incorrect">

```swift
guard !errorCondition else {
	return
}

doSomething()
doSomethingElse()
```

</div>
<div slot="correct">

```swift
guard !errorCondition else { return }

doSomething()
doSomethingElse()
```

</div>
</code-highlight>

If you need something to happen in both the happy and unhappy paths then consider a ```defer { }``` statement at the beginning of the function to avoid code duplication. ```Defer``` ensures that work contained within the closure will be performed at the end of the function.
