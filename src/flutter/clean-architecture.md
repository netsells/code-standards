# Clean Architecture

Flutter projects should have the following structure:

```
+-- android
    ...
+-- ios
    ...
+-- lib
    +-- core
    +-- features
    +-- main.dart
+-- test
+-- .gitignore
+-- README.md
+-- analysis_options.yaml
+-- pubspec.yaml
+-- ...
```

Within the `features` directory, each feature should have the following structure:

```
+-- my_feature
    +-- data
        +-- datasources
            ** Code for external data source interaction e.g. APIs, databases **
        +-- models
            ** Models should extend entities, adding datasource-specfic features **
        +-- repositories
            ** Implementations of the repository interfaces defined in the domain layer **
    +-- domain
        +-- entities
            ** Data models for use in the presentation layer. Should be abstracted from the data layer **
        +-- repositories
            ** Interfaces for retrieving data related to this domain **
        +-- usecases
            ** Single-purpose classes for interaction between BLoCs and repositories **
    +-- presentation
        +-- bloc
            +-- bloc.dart ** exports other files in this directory **
            +-- my_feature_state.dart
            +-- my_feature_event.dart
            +-- my_feature_bloc.dart
        +-- pages
        +-- widgets
```

The `core` directory should only contain code that is re-used by many features.

## Explanation

Here's an overview of our architecture:

![Clean Architecture Flutter Diagram](Clean-Architecture-Flutter-Diagram.png)

Each feature of the app is divided into 3 layers: **presentation**, **domain**, and **data**.

### Presentation

This is the standard Flutter stuff you know about, namely widgets. Technically we could put anything in here, but we add the additional requirement of the use of the BLoC pattern for state management.

The presentation layer doesn't do much work by itself. BLoCs delegate most of their work to **use cases** in the domain layer. Some business logic, like input validation, is okay to keep in the presentation layer.

### Domain

**Domain** is the inner layer which shouldn't be susceptible to the whims of changing data sources or porting our app to Angular Dart. It will contain the core **business logic** (use cases) and **business objects** (entities). It should be totally independent of every other layer.

But how is the domain layer independent when it gets its data from a **Repository**, which is in the **data layer**? 

Well, we can create an abstract Repository in the domain layer, then create the implementation of that Repository in the data layer.

### Data

The data layer consists of a Repository implementation (the contract for which comes from the domain layer), and data sources for fetching data from external sources like an API or a database.

Data Sources don't return entities, but **models**. The reason for that is that transforming raw data into Dart object requires some JSON conversion code, and we don't want that conversion code in our domain layer as that breaks the idea that the domain layer is independent of the data layer.

So we create **Model** classes in the data layer which extend Entities and add some specific functionality and/or additional fields (like a database ID).