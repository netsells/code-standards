[&#x2190; Back](./)
# jsdoc/require-description-complete-sentence <badge text="warn" type="warn" vertical="middle"/>

> Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences, i.e.,

- Description must start with an uppercase alphabetical character.
- Paragraphs must start with an uppercase alphabetical character.
- Sentences must end with a period.
- Every line in a paragraph (except the first) which starts with an uppercase character must be preceded by a line ending with a period.
- A colon or semi-colon followed by two line breaks is still part of the containing paragraph (unlike normal dual line breaks).
- Text within inline tags {...} are not checked for sentence divisions.
- Periods after items within the abbreviations option array are not treated as sentence endings.


## Examples

<code-highlight>
 
<div slot="correct">

<<< @/packages/eslint-config/rules/jsdoc/require-description-complete-sentence/correct.js

</div>

 
<div slot="incorrect">

<<< @/packages/eslint-config/rules/jsdoc/require-description-complete-sentence/incorrect.js

</div>

 
</code-highlight>

