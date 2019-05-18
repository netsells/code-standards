[&#x2190; Back](./)
# vue/max-attributes-per-line

> Limits the maximum number of attributes/properties per line to improve readability.

 

## Examples

<code-highlight>
 
<div slot="correct">

```vue
<my-component foo="bar" baz="qux" abc="123"></my-component>

<my-component
    foo="bar"
    baz="qux"
    abc="123"
    xyz="321"
></my-component>

```

</div>

 
<div slot="incorrect">

```vue
<my-component foo="bar" baz="qux" abc="123" xyz="321"></my-component>

<my-component
    foo="bar" baz="qux"
><my-component>

```

</div>

 
</code-highlight>

