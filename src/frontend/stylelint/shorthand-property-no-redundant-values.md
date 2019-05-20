[&#x2190; Back](./)
# shorthand-property-no-redundant-values

> Disallow redundant values in shorthand properties.

 

## Examples

<code-highlight>
 
<div slot="correct">

```css
a { 
    margin: 1px;
}

a { 
    margin: 1px 1px 1px 2px;
}

a { 
    padding: 1px 1em 1pt 1pc;
}

a { 
    border-radius: 10px / 5px;
}

```

</div>

 
<div slot="incorrect">

```css
a { 
    margin: 1px 1px; 
}

a { 
    margin: 1px 1px 1px 1px; 
}

a { 
    padding: 1px 2px 1px; 
}

a { 
    border-radius: 1px 2px 1px 2px; 
}

```

</div>

 
</code-highlight>

