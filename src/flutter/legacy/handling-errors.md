# Handling Error

## Principles

* There is a difference between **errors** and **exceptions**.
  * **Errors** are things that could happen, but are not considered exceptional e.g. a network error.
  * **Exceptions** are things that are exceptional e.g. a `StackOverflowError`. If these happen, a developer has made a mistake.
* When **errors** occur, we should fail elegantly in a way that informs the user of the error and suggests a solution.
* When **exceptions** occur, we treat them as bugs which should be fixed.
* When a method could return an error, we should communicate this explicitly in the return type. This encourages developers to handle error cases.

## Implementing Error Handling

Our preferred method of error handling is to use the `Either<T, U>` type, provided by the [`dartz`](https://pub.dev/packages/dartz) package. `T` is the type of the error, and `U` is the type of the successful result.

Error types may, minimally, be simple `String`s or `int`s, but ideally should be `Failure` classes which encapsulate the details of the error.

*Remember that we should only be handling errors we expect to happen, like `4xx` responses from network requests.*

Here's an example a method which could return a `Failure` or a `String`:

```dart
Either<Failure, String> nthItem(List<String> items, int n) {
    if (n < 0 || n >= items.length) {
        return Failure("Index out of bounds.");
    } else {
        return items[n];
    }
}
```