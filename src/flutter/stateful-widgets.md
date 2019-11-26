# Use of Stateful Widgets

Generally speaking, prefer Stateless Widgets with supporting [BLoCs](https://bloclibrary.dev/). 

However, Stateful Widgets are appropriate when there is UI state to keep track of which couldn't be described as business logic.

For example:

* A screen containing a bottom navigation view
* A form
* A widget with a custom Scroll Controller

**In other words, don't use Stateful Widgets to handle business logic state management; only use them for UI state management.**