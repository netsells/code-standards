# MVVM

Android projects should use the MVVM architecture, backed by Google's [ViewModel architecture component](https://developer.android.com/topic/libraries/architecture/viewmodel).

Every fragment and activity should have an associated ViewModel, which calls use cases from the domain layer (see [Clean Architecture](clean-architecture.md)).