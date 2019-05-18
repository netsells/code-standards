[&#x2190; Back](./)
# indentation

> Always indent at-rules, rules, comments, declarations, inside parentheses and multi-line values by 4 spaces.


## Examples

<code-highlight>
 
<div slot="correct">

```css
@media print {
    a {
        color: #000000;
    }
}

@media print {
    a,
    b {
        color: #000000;
    }
}

a {
    /* blergh */
    color: #000000;
}

a {
    color: rgb(
        255,
        255,
        255
    );
    top: 0;
}
```

</div>

 
<div slot="incorrect">

```css
@media print {
a {
color: #000000;
}

@media print {
    a,
     b {
        color: #000000;
    }
}

a {
/* blergh */
    color: #000000;
}

a {
    color: rgb(
    255,
    255,
    255
    );
    top: 0;
}
```

</div>

 
</code-highlight>
