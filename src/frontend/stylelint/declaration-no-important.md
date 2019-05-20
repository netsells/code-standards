[&#x2190; Back](./)
# declaration-no-important

> Disallow !important within declarations.

 

## Examples

<code-highlight>
 
<div slot="correct">

```css
a {
    color: #ffffff;
}

```

</div>

 
<div slot="incorrect">

```css
a {
    color: #FFFFFF !important;
}

a {
    color: #FFFFFF!important;
}

a {
    color: #FFFFFF ! important;
}
```

</div>

 
</code-highlight>

