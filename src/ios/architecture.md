# Architecture Layers

## Layer Definitions

### Data

* The data layer contains the concrete implementations of the repository protocols from the domain layer
* Repository implementations may depend on other classes such as data sources or services
* It is a good idea (not a requirement) to use a Codable model as a DTO (Data Transfer Object) which represents the structure of the data returned from external services. These can then be converted to and from your entity struct. This means that your entities are not dependent on the data structure of the objects returned from external sources.
* 
### Domain

* The domain layer defines the core business domain. It includes:
    * Entities
    * Usecases
    * Repository Protocols
* The domain layer should not depend on any third-party dependencies or any other layer.

### Presentation

* The presentation layer should only contain your views and your view models.
* As much as possible, views should be free of business logic. 
* Business logic should be placed in the view model
* View Models should conform to a protocol to enable easy mocking in tests & dependency injection

### Service

* The service layer contains feature agnostic services which can be used in repositories and data sources
* Service class implementations should conform to a protocol to enable easy mocking, service switching and dependency injection.

## Directory Structure

* The top-level directory structure is split into a core folder and a features folder. 
* The core folder should contain reusable, feature agnostic classes. It is organised into the four architecture layers we use.
* The features folder should contain one folder for each feature. Think of this as a module without actually splitting the feature out. Everything to do with just that feature should be placed in here.

This is an example of the directory structure we follow:
* Core
    * Entities
        * User.swift
    * Services
        * UserLocationService.swift
    * Usecases
        * FetchCurrentUser.swift
* Features
    * Feature 1
        * Data
            * Data Sources
                * BookingDataSource.swift
                * DefaultBookingDataSource.swift
            * Repositories
                * DefaultBookingRepository.swift
        * Domain
            * Entities
                * Booking.swift
            * Use Cases
                * FetchActiveBookings.swift
                * FetchUpcomingBookings.swift
            * Repositories
                * BookingRepository.swift
        * Presentation
            * Pages
                * My Bookings Page
                    * MyBookingsPage.swift
                    * MyBookingsPageViewModel.swift
                * View Booking Page
                    * ViewBookingPage.swift
                    * ViewBookingPageViewModel.swift

## Architecture Best Practices

* A view’s state (`@State`) should only be used when absolutely necessary (e.g when building a form). Most of the time, it is far better to use the view model to hold and control all state.
* As much as possible, classes should depend on a protocol, not implementations.
