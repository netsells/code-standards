# General

## Parentheses

Parentheses around conditionals are not required and should be omitted.

<code-highlight>
<div slot="incorrect">

```swift
if (someCondition) {
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
</div>
</code-highlight>

## Ternary Operator

<code-highlight>
<div slot="incorrect">

```swift
result = a > b ? x = c > d ? c : d : y
```

</div>
</code-highlight>

<code-highlight>
<div slot="correct">

```swift
let value = 5
result = value != 0 ? x : y

let isHorizontal = true
result = isHorizontal ? x : y
```
</div>
</code-highlight>