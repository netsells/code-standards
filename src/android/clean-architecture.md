# Clean Architecture

Android projects should use the Clean Architecture to ensure maintainability and testability. In other words, the project should be split into **features** with each feature containing a **data** layer, a **domain** layer, and a **presentation** layer. Additionally, a `core` directory at the root of the source code directory can hold project-wide code where appropriate.

```
+--- src
    +--- core
    +--- features
        +--- my_feature
            +--- data
                +--- models
                    ** Classes which extend entities and provide additional conversion code **
                +--- datasources
                    ** Code for retrieving data from external sources **
                +--- repositories
                    ** Implementations of the repository interfaces from the domain layer **
            +--- domain
                +--- entities
                    ** Simple data classes with no ties to data or presentation layers **
                +--- repositories
                    ** Repository interfaces which will be implemented in the data layer **
                +--- usecases
                    ** Use cases, for use by the presentation layer **
            +--- presentation
                ** Activities, fragments, adapters, and views **
```

*Consider splitting your project into `data`, `domain`, and `app` **modules** rather than packages in one module.*

## Domain Layer

When writing a feature it's sensible to write the domain layer first.

Start with **entities**, which should be simple Kotlin data classes representing the data this feature is working with.

Then create **repositories**, which should be **interfaces** or **abstract classes** defining the data transactions supported by this feature.

Then create **use cases**, which are designed to be called by the presentation layer. These should call the **repositories** and return data as the presentation layer requires it. In other words, use cases are delegates for the presentation layer's business logic.

## Data layer

The data layer implements the repositories defined in the domain layer. This is done by implementing **data sources**, which fetch data from remote locations like databases and APIs. This data is then passed to the repository implementatations in the form of **models**, which extend the **entities** defined in the domain layer.

## Presentation layer

This layer contains all presentation-related code including activities, fragments, viewmodels, adapters etc. It should use **usecases** to interact with the domain layer.

The presentation layer should be built using [MVVM](mvvm.md).