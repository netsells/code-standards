# CSS

## Preprocessor

We use the SASS preprocessor to structure our CSS, specifically using the more familiar SCSS syntax.

## CSS Framework

We make use of the latest version of the bootstrap framework to structure our web applications. We utilise this at the source level and compile it ourselves with our own project-specific variables. This means we overwrite less of the bootstrap defaults in additional code, and means we can only import what our application needs to cut down the size of our compiled stylesheet. We make use of framework provided mixins to minimise DOM bloat by combining multiple mixins into a single semantic class name.

## Linting

We make use of an automated approach of enforcing CSS code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

See [netsells/stylelint-config-netsells](https://github.com/netsells/stylelint-config-netsells)
