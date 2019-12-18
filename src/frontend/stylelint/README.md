# Stylelint

We make use of an automated approach of enforcing CSS code standards. These standards are constantly evolving to ensure we are making use of the best methods, and in order to catch more edge cases ensuring our code is consistent across the board.

## Rules

The following rules are currently configured.

| Rule | Description | Link |
|---|---|---|
| [block-no-empty](./block-no-empty.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Disallow empty blocks.  | [Link](https://stylelint.io/user-guide/rules/block-no-empty) |
| [color-hex-case](./color-hex-case.md)<br> <badge text="error" type="error" vertical="middle"/> | Sets the case of hex values to lowercase.  | [Link](https://stylelint.io/user-guide/rules/color-hex-case) |
| [color-hex-length](./color-hex-length.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Forces the length of hex codes used in styles to be long notation rather than short.  | [Link](https://stylelint.io/user-guide/rules/color-hex-length) |
| [color-named](./color-named.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Colors must never be named.  | [Link](https://stylelint.io/user-guide/rules/color-named) |
| [color-no-invalid-hex](./color-no-invalid-hex.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Disallow invalid hex colors.  | [Link](https://stylelint.io/user-guide/rules/color-no-invalid-hex) |
| [declaration-block-no-duplicate-properties](./declaration-block-no-duplicate-properties.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Disallow duplicate properties within declaration blocks. This rule ignores variables ($sass, @less, --custom-property).  | [Link](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties) |
| [declaration-block-no-shorthand-property-overrides](./declaration-block-no-shorthand-property-overrides.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Prevents shorthand properties overriding longhand ones.   | [Link](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides) |
| [declaration-no-important](./declaration-no-important.md)<br> <badge text="error" type="error" vertical="middle"/> | Disallow !important within declarations.  | [Link](https://stylelint.io/user-guide/rules/declaration-no-important) |
| [indentation](./indentation.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Always indent at-rules, rules, comments, declarations, inside parentheses and multi-line values by 4 spaces.  | [Link](https://stylelint.io/user-guide/rules/indentation) |
| [length-zero-no-unit](./length-zero-no-unit.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Zero lengths should not have units.  | [Link](https://stylelint.io/user-guide/rules/length-zero-no-unit) |
| [max-empty-lines](./max-empty-lines.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Limit the number of adjacent empty lines.  | [Link](https://stylelint.io/user-guide/rules/max-empty-lines) |
| [media-feature-colon-space-after](./media-feature-colon-space-after.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Require a single space after the colon in media features.  | [Link](https://stylelint.io/user-guide/rules/media-feature-colon-space-after) |
| [no-extra-semicolons](./no-extra-semicolons.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Disallow extra semicolons.  | [Link](https://stylelint.io/user-guide/rules/no-extra-semicolons) |
| [number-leading-zero](./number-leading-zero.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Requires a leading zero on fractional values that are less than one.  | [Link](https://stylelint.io/user-guide/rules/number-leading-zero) |
| [property-case](./property-case.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Specify lowercase for properties.  | [Link](https://stylelint.io/user-guide/rules/property-case) |
| [property-no-unknown](./property-no-unknown.md)<br> <badge text="error" type="error" vertical="middle"/> | Prevents unknown properties being used.  | [Link](https://stylelint.io/user-guide/rules/property-no-unknown) |
| [shorthand-property-no-redundant-values](./shorthand-property-no-redundant-values.md)<br> <badge text="warn" type="warn" vertical="middle"/> | Disallow redundant values in shorthand properties.  | [Link](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values) |
| [unit-no-unknown](./unit-no-unknown.md)<br> <badge text="error" type="error" vertical="middle"/> | Prevents unknown units being used.  | [Link](https://stylelint.io/user-guide/rules/unit-no-unknown) |

