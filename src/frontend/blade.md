# Blade Templates

The following guidelines are applicable to Laravel's [Blade templating language](https://laravel.com/docs/blade).

::: warning Legacy
We no longer bundle the frontend with the Laravel backend, and instead build Single Page Applications which interact with an API-first backend.
:::

## Space between top level directives

Top level directives (`@extends`, `@section`) should be separated by a blank line. This makes the code more readable and easier to distinguish between multiple sections.

<spoiler toggle-suffix="Examples">
<code-highlight>
<div slot="incorrect">

```html
@extends('frontend.layouts.app')
@section('body')
    <section class="page-content">
        ...
    </section>
@endsection
```

</div>
<div slot="correct">

```html
@extends('frontend.layouts.app')

@section('body')
    <section class="page-content">
        ...
    </section>
@endsection
```

</div>
</code-highlight>
</spoiler>

## Indentation within directives

Children of directives should be intended as per html indentation level (4 space).

<spoiler toggle-suffix="Examples">
<code-highlight>
<div slot="incorrect">

```html
@section('body')
<section class="page-content">
    ...
</section>
@endsection

@if ($foo === $bar)
<div>
    ...
</div>
@endif
```

</div>
<div slot="correct">

```html
@section('body')
    <section class="page-content">
        ...
    </section>
@endsection

@if ($foo === $bar)
    <div>
        ...
    </div>
@endif
```

</div>
</code-highlight>
</spoiler>

## Section directives

Always end simple `@section` directives with an `@endsection`. Although `@stop` is identical in functionality, it is much less indicative of its purpose. `@endsection` was removed in Laravel 4, and readded in Laravel 5+.

## Echo statement spacing

Blade echo statements should always have a space either side of the content being output. This makes the code more readable.

<spoiler toggle-suffix="Examples">
<code-highlight>
<div slot="incorrect">

```html
{{$variable}}
```

</div>
<div slot="correct">

```html
{{ $variable }}
```

</div>
</code-highlight>
</spoiler>

## Indentation within Facades

If a Facade generates HTML markup you should follow indentation guidelines as if it were a normal HTML element. Any example of this would be the [laravelcollective/html](https://laravelcollective.com/docs/5.2/html) package's form facades:

<spoiler toggle-suffix="Examples">
<code-highlight>
<div slot="incorrect">

```html
{!! Form::open() !!}
<div class="form-group">
    <label for="name">Name:</label>
    <input id="name" name="name" class="form-control">Name:</label>
</div>
{!! Form::close() !!}
```

</div>
<div slot="correct">

```html
{!! Form::open() !!} <!-- Generates <form> -->
    <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" name="name" class="form-control">Name:</label>
    </div>
{!! Form::close() !!} <!-- Generates </form> -->
```

</div>
</code-highlight>
</spoiler>
