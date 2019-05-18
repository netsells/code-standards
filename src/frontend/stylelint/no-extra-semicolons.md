[&#x2190; Back](./)
# no-extra-semicolons

> Disallow extra semicolons.


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
  color: #000000;;
}

a {
  ;color: #ffffff;
}

a {
  color: #ffffff;
  ;
}
```

</div>

 
</code-highlight>
