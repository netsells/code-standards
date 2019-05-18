# CSS

## Preprocessor

We use the SASS preprocessor to structure our CSS, specifically using the more familiar SCSS syntax.

## CSS Framework

We make use of the latest version of the bootstrap framework to structure our web applications. We utilise this at the source level and compile it ourselves with our own project-specific variables. This means we overwrite less of the bootstrap defaults in additional code, and means we can only import what our application needs to cut down the size of our compiled stylesheet. We make use of framework provided mixins to minimise DOM bloat by combining multiple mixins into a single semantic class name.

## Linting

We make use of an automated approach of enforcing CSS code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

See [Eslint](./stylelint/).

## Global Namespacing

Page specific styles should be encapsulated within a top level class in relation to the template you are on. This avoids pollution of the global namespace. For example, when developing the homepage template, non-reusable styling should lay within a selector relevant to that page, for example:

```css
body.page-homepage {
    ...
}
```

## Class and ID casing

Classes and IDs should always be hyphenated, as opposed to camelCase, snake_case or any mixture of the two.


