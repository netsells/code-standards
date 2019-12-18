# Method Parameters

## Background

Dart offers 4 ways of specifying parameters:

- Positional + required
- Positional + optional
- Named + required
- Named + optional

### Positional + Required

```dart
void myFunction(String aString) {
    // Do something
}

myFunction("Hello");
```

### Positional + Optional

```dart
void myFunction([String aString]) {
    // Do something
}

myFunction(); // This is fine
myFunction("Hello"); // This is also fine
```

### Named + Required

```dart
import 'package:meta/meta.dart'; // Provides the @required annotation

void myFunction({@required String aString}) {
    // Something magic
}

myFunction(); // Compiles, but fails analysis
myFunction(aString: "Hello"); // Compiles and passes analysis
```

### Named + Optional

```dart
void myFunction({String aString}) {
    // Do something special
}

myFunction(); // Compiles and passes analysis
myFunction(aString: "Hello"); // Compiles and passes analysis
```

### Combining Parameter Types

If a function has multiple parameters, it can have:

- Positional required parameters
- Plus **either**:
  - Positional optional parameters _or_
  - Named parameters (required or optional)

## Our Standards

Generally speaking, prefer using **named parameters** in all cases, annotating them with `@required` where this is needed.

This makes call sites much more readable as it's very easy to see what the arguments are. Additionally, it's in line with the convention used in the Flutter SDK itself, improving consistency.

<code-highlight>
<div slot="incorrect">

```dart
void myFunction(String anArgument) {
    //...
}

myFunction("This string could be anything");
```

</div>
</code-highlight>

<code-highlight>
<div slot="correct">

```dart
import 'package:meta/meta.dart';

void myFunction({@required String anArgument}) {
    //...
}

myFunction(anArgument = "That's better.");
```

</div>
</code-highlight>
