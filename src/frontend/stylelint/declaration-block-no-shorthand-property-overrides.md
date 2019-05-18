[&#x2190; Back](./)
# declaration-block-no-shorthand-property-overrides

> Prevents shorthand properties overriding longhand ones. 

 

## Examples

<code-highlight>
 
<div slot="correct">

```css
a {
    padding: 10px;
    padding-left: 20px;
}

a {
    transition-property: opacity;
    -webkit-transition: opacity 1s linear;
}

/* the following examples are to be viewed as a single instance*/
a {
    transition-property: opacity;
}
a {
    transition: opacity 1s linear;
}



```

</div>

 
<div slot="incorrect">

```css
a {
    padding-left: 10px;
    padding: 20px;
}

a {
    transition-property: opacity;
    transition: opacity 1s linear;
}

a {
    -webkit-transition-property: opacity;
    -webkit-transition: opacity 1s linear;
}


a {
    border-top-width: 1px;
    top: 0;
    bottom: 3px;
    border: 2px solid blue;
}
```

</div>

 
</code-highlight>

