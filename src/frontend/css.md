# CSS

## Preprocessor

We use the SASS preprocessor to structure our CSS, specifically using the more familiar SCSS syntax.

## CSS Framework

We make use of the latest version of the bootstrap framework to structure our web applications. We utilise this at the source level and compile it ourselves with our own project-specific variables. This means we overwrite less of the bootstrap defaults in additional code, and means we can only import what our application needs to cut down the size of our compiled stylesheet. We make use of framework provided mixins to minimise DOM bloat by combining multiple mixins into a single semantic class name.

## Linting

We make use of an automated approach of enforcing CSS code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

See [Stylelint](./stylelint/).

## Global Namespacing

::: warning
This is only applicable to websites bundled with the laravel backend
:::

Page specific styles should be encapsulated within a top level class in relation to the template you are on. This avoids pollution of the global namespace. For example, when developing the homepage template, non-reusable styling should lay within a selector relevant to that page, for example:

```css
body.page-homepage {
    ...
}
```

## Class and ID casing

Classes and IDs should always be hyphenated, as opposed to camelCase, snake_case or any mixture of the two.

## CSS Methodology

We don't clutter our CSS with any specific methodologies. When writing CSS in Vue components, they are namespaced  or "scoped" by default to the elements in the current component. This means that it's highly unlikely that there will be style clashes. 

Doing this allows us to concentrate on readable and meaningful class names without cluttering up the DOM or our source if manually namespaced selectors.

## Nesting and Awareness of Specificity Levels

When using Pre-processors such as SCSS, it's easy to get carried away with nesting selectors. This quickly adds up and you end up with CSS rules which are almost impossible to override from external sources without bloating the selector with a higher specificity.

As a rule, selectors should not be nested unless they need to be. If styling within a scoped style block of a Vue component it's highly unlike that you will need to nested as the scope is contained to the elements in your components. It's often more beneficial to differentiate the conflicting elements by adding class names to the elements. If the above isn't possible, nesting is acceptable.

Nesting is always acceptable for pseudo classes, adjacent selectors and media queries. 

## Media Queries

Media queries should always go "up" by default, as defined by the mobile-first methodology. This enforces the flow of responsivity to always be in the same direction.

Placement of media queries should be within the element being modified, rather than all being grouped under a single media query definition at the bottom of the file. This keeps all styling logic for each element together and reduces the odds of missing an existing rule for the element.
