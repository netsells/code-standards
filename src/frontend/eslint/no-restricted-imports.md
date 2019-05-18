[&#x2190; Back](./)
# no-restricted-imports

> Disallows importing specific libraries. We disallow lodash as a whole in favour of specific imports

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
import flatten from 'lodash/flatten';

```

</div>

 
<div slot="incorrect">

```js
import _ from 'lodash';

```

</div>

 
</code-highlight>

