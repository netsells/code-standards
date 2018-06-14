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


