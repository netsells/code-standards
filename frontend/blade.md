# Blade Templates

The following guidelines are applicable to Laravel's [Blade templating language](https://laravel.com/docs/blade).

## Space between top level directives

Top level directives (`@extends`, `@section`) should be separated by a blank line. This makes the code more readable and easier to distinguish between multiple sections.

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

## Intentation within directives

Children of directives should be intended as per html indentation level (4 space).

<code-highlight>
<div slot="incorrect">

```html
@section('body')
<section class="page-content">
    ...
</section>
@endsection

@if($foo === $bar)
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

@if($foo === $bar)
    <div>
        ...
    </div>
@endif
```

</div>
</code-highlight>

## Section directives

Always end simple `@section` directives with an `@endsection`. Although `@stop` is identical in functionality, it is much less indicative of its purpose. `@endsection` was removed in Laravel 4, and readded in Laravel 5+.

## Echo statement spacing

Blade echo statements should always have a space either side of the content being output. This makes the code more readable.

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
