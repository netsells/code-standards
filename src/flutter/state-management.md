# State Management using Bloc

There are a number of patterns and packages available to handle state management. Our preferred pattern is [Bloc](https://bloclibrary.dev/).

## Writing Blocs

### File Structure

Each Bloc should be composed of 3 files with the following naming convention:

* `subject_bloc.dart` - Contains the Bloc class itself
* `subject_state.dart` - Contains the state definition(s)
* `subject_event.dart` - Contains the event definition(s)

They should be linked using Dart's `part` syntax:

```dart
// subject_bloc.dart

part 'subject_state.dart';
part 'subject_event.dart';
```

```dart
// subject_state.dart

part of 'subject_bloc.dart';
```

```dart
// subject_event.dart

part of 'subject_bloc.dart';
```

This means that importing `subject_bloc.dart` will also bring with it the state and event files automatically.

### Events

We strongly recommend writing events as either `enum`s or sealed unions (using [freezed](https://pub.dev/packages/freezed)).

Events should be named in the **past tense**, and have the following anatomy:

> `BlocSubject` + `Noun (optional)` + `Verb`

#### Examples

##### Enum Events

<code-highlight>
<template v-slot:correct>

```dart
enum CounterEvent { started, incremented, decremented }
```

</template>

<template v-slot:incorrect>

```dart
enum CounterEvent { init, increment, decrement }
```

</template>
</code-highlight>

#### Sealed Union Events

<code-highlight>
<template v-slot:correct>

```dart
@freezed
class CounterEvent with _$CounterEvent {
    const factory CounterEvent.started() = _Started;
    const factory CounterEvent.incrementPressed() = _IncrementPressed;
    const factory CounterEvent.decrementPressed() = _DecrementPressed;
}
```

</template>

<template v-slot:incorrect>

```dart
@freezed
class CounterEvent with _$CounterEvent {
    const factory CounterEvent.init() = _Init;
    const factory CounterEvent.increment() = _Increment;
    const factory CounterEvent.doDecrement() = _DoDecrement;
}
```

</template>
</code-highlight>

### States

As with Events, we strongly recommend writing states as either `enum`s or sealed unions (using [freezed](https://pub.dev/packages/freezed)).

State class names should always have the following anatomy:

> `BlocSubject` + `State`

#### Examples

```dart
enum CounterState { initial, loading, success, failure }
```

```dart
@freezed
class CounterState with _$CounterState {
    const factory CounterState.initial() = _Initial;
    const factory CounterState.loading() = _Loading;
    const factory CounterState.success(int count) = _Success;
    const factory CounterState.failure(String message) = _Failure;
}
```

### Event Handlers

Each event handler should be written as its own **private** method within the Bloc class, and registered as part of the Bloc's constructor using the `on` method.

```dart
class CounterBloc extends Bloc<CounterEvent, int> {
    CounterBloc({int intitialState = 0}) : super(initialState) {
        on<_IncrementPressed>(_onIncrement);
        on<_DecrementPressed>(_onDecremented);
    }

    void _onIncremented(_IncrementPressed event, Emitter<CounterState> emit) {
        emit(state + 1);
    }

    void _onDecremented(_DecrementPressed event, Emitter<CounterState> emit) {
        emit(state - 1);
    }
}
```

## Using Blocs

Always use `BlocProvider` to inject your Blocs into the widget tree. `BlocProvider` has a couple of important advantages:

* Automatically handles Bloc creation and closure
* Makes the Bloc available to all children below the Provider in the tree

`BlocProvider` allows us to very easily manage the scope of each Bloc in our project. Some Blocs apply to individual screens, where as some Blocs are useful throughout the application (e.g. blocs handling authentication state). Use this fact to your advantage, and don't be afraid to wrap the whole `MaterialApp` in a `BlocProvider`!. It's a great way to maintain a single source of truth for the state of your app.

> Tip: Use `MultiBlocProvider` to provide multiple Blocs without having to nest loads of individual `BlocProvider`s.