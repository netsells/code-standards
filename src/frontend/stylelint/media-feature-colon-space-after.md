[&#x2190; Back](./)
# media-feature-colon-space-after

> Require a single space after the colon in media features.

 

## Examples

<code-highlight>
 
<div slot="correct">

```css
@media (max-width: 600px) {

}

@media (max-width : 600px) {

}
```

</div>

 
<div slot="incorrect">

```css
@media (max-width:600px) {

}

@media (max-width :600px) {

}
```

</div>

 
</code-highlight>

