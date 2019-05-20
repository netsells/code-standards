[&#x2190; Back](./)
# property-case

> Specify lowercase for properties.

 

## Examples

<code-highlight>
 
<div slot="correct">

```css
a {
    width: 1px
}

a {
    border-radius: 5px;
}

a {
    -webkit-animation-duration: 3s;
}

@media screen and (orientation: landscape) {
    width: 500px;
}
```

</div>

 
<div slot="incorrect">

```css
a {
    Width: 1px
}

a {
    WIDTH: 1px
}

a {
    border-Radius: 5px;
}

a {
    -WEBKIT-animation-duration: 3s;
}

@media screen and (orientation: landscape) {
    WiDtH: 500px;
}
```

</div>

 
</code-highlight>

