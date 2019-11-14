# General

## Code Organisation
Use extensions to organize your code into logical blocks of functionality. Each extension should be set off with a // MARK: - comment to keep things well-organized.

### Protocol Conformance
In particular, when adding protocol conformance to a model, prefer adding a separate extension for the protocol methods. This keeps the related methods grouped together with the protocol and can simplify instructions to add a protocol to a class with its associated methods.

<code-highlight>
<div slot="incorrect">

```swift
class MyViewController: UIViewController, UITableViewDataSource, UIScrollViewDelegate {
    // all methods
}
```

</div>
</code-highlight>

<code-highlight>
<div slot="correct">

```swift
class MyViewController: UIViewController {
    // class stuff here
}

// MARK: - UITableViewDataSource
extension MyViewController: UITableViewDataSource {
    // table view data source methods
}

// MARK: - UIScrollViewDelegate
extension MyViewController: UIScrollViewDelegate {
    // scroll view delegate methods
}
```

</div>
</code-highlight>

### Unused Code
Unused (dead) code, including Xcode template code and placeholder comments should be removed.

Aspirational methods whose implementation simply calls the superclass should also be removed. This includes any empty/unused UIApplicationDelegate methods.

<code-highlight>
<div slot="incorrect">

```swift
override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
    // Dispose of any resources that can be recreated.
}

override func numberOfSections(in tableView: UITableView) -> Int {
    // #warning Incomplete implementation, return the number of sections
    return 1
}

override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    // #warning Incomplete implementation, return the number of rows
    return Database.contacts.count
}
```

</div>
</code-highlight>

<code-highlight>
<div slot="correct">

```swift
override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return Database.contacts.count
}
```

</div>
</code-highlight>

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