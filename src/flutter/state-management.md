# State Management and DI

Our preferred package for state management and dependency injection is [Riverpod](https://riverpod.dev).

## Prefer using `watch` over `read`

In general, use `ref.watch` rather than `ref.read`. This ensures that provider values stay up-to-date.

An important exception is when writing callbacks (e.g. `onTap` listeners); in these cases you should **always** use `ref.read`.

## Avoid injecting `WidgetRef`s into classes

This ensures that classes are decoupled from Riverpod.

<code-highlight>

<template v-slot:incorrect>
    ```dart
    // Riverpod-coupled Repository
    class BlogPostRepository {
        const BlogPostRepository({required this.ref});

        final WidgetRef ref;

        Future<BlogPost> getBlogPost(int id) => ref.watch(blogPostApi).getPost(id);
    }

    final blogPostRepositoryProvider => Provider((ref) => BlogPostRepository(ref: ref));
    ```
</template>

<template v-slot:correct>
    ```dart
    // Riverpod-free Repository
    class BlogPostRepository {
        const BlogPostRepository({required this.api});

        final BlogPostApi api;

        Future<BlogPost> getBlogPost(int id) => api.getPost(id);
    }

    final blogPostRepositoryProvider => Provider((ref) => BlogPostRepository(ref.watch(blogPostApiProvider)));
    ```
</template>

</code-highlight>

## Providers requiring asynchronous initialisation

Some packages, such as `SharedPreferences`, require asynchronous initialisation. You can provide the initialised values to Riverpod like this:

```dart
// shared_preferences_provider.dart
final sharedPreferencesProvider => Provider<SharedPreferences>((_) => throw UnimplementedError());
```

```dart
// main.dart
Future<void> main() async {
    WidgetsFlutterBinding.ensureInitialized();

    // Initialize SharedPreferences
    final sharedPreferences = await SharedPreferences.getInstance();

    runApp(
        ProviderScope(
            overrides: [
                // Provide the initialized value to Riverpod
                sharedPreferencesProvider.overrideWithValue(sharedPreferences),
            ],
            child: const MyApp(),
        ),
    );
}
```