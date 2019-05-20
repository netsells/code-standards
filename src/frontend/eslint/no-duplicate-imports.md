[&#x2190; Back](./)
# no-duplicate-imports

> Disallow duplicate imports

 

## Examples

<code-highlight>
 
<div slot="correct">

```js
import { merge, find } from 'module';
import something from 'another-module';
```

</div>

 
<div slot="incorrect">

```js
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
```

</div>

 
</code-highlight>

