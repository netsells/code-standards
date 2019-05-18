![Netsells Logo](https://www.dropbox.com/s/4jmsg7xvcfnyfbk/logo_name_300.png?raw=1)

# Netsells Eslint Config

This repository contains the defacto-standard eslint configuration used on all Netsells projects, both internally and client.

## Usage

Add the config to your project dependencies:

```bash
yarn add @netsells/eslint-config eslint@^4.10.0
```

Extend the config in your project. For example, a `.eslintrc` file in your project root:

```json
{
  "extends": "@netsells"
}
```

### With webpack

Add the eslint-loader to your project:

```bash
yarn add eslint-loader
```

Add the loader into your workflow. The following example will force the linter to be ran before other loaders such as babel compilation. This means we lint the raw ES6 code rather than the transpiled ES5 output:

```js
{
    module: {
        rules: [
            {
                test:    /.(vue|js)$/,
                loader:  'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/,
            },
        ],
    },
},
```

## Rules

### JavaScript

#### 📍 comma-dangle
Requires trailing commas when the last element or property is in a different line than the closing `]` or `}` and disallows trailing commas when the last element or property is on the same line as the closing `]` or `}`. This makes git diffs a lot cleaner with single line changes rather than two.

##### ❌ Example of incorrect code for this rule:

```js
let object = { a: 'b', c: 'd', };

let object = {
    a: 'b',
    c: 'd'
};

let array = ['a', 'b', 'c',];

let array = [
    'a',
    'b',
    'c'
];
```

##### ✅ Example of correct code for this rule:

```js
let object = { a: 'b', c: 'd' };

let object = {
    a: 'b',
    c: 'd',
};

let array = ['a', 'b', 'c'];

let array = [
    'a',
    'b',
    'c',
];
```
---

#### 📍 dot-location
Requires the dot to be located before the property rather than after the object

##### ❌ Example of incorrect code for this rule:

```js
const item = object.
    property;
```

##### ✅ Example of correct code for this rule:

```js
const item = object
    .property;
const item = object.property;
```

---

#### 📍 no-empty
disallow empty block statements

##### ❌ Example of incorrect code for this rule:

```js
if (foo) {
}

while (foo) {
}

switch(foo) {
}

try {
    doSomething();
} catch(ex) {

} finally {

}
```

##### ✅ Example of correct code for this rule:

```js
if (foo) {
    // empty
}

while (foo) {
    /* empty */
}

try {
    doSomething();
} catch (ex) {
    // continue regardless of error
}

try {
    doSomething();
} finally {
    /* continue regardless of error */
}
```

---

#### 📍 no-empty-function

Disallow empty functions

##### ❌ Example of incorrect code for this rule:

```js
function foo () {}

let foo = function () {};

let foo = () => {};

let obj = {
    foo: function () {},

    foo () {},
};

class A {
    constructor() {}

    foo() {}
}
```

##### ✅ Example of correct code for this rule:

```js
function foo () {
    // do nothing.
}

let foo = function () {
    // any clear comments.
};

let foo = () => {
    bar();
};

let obj = {
    foo: function () {
        // do nothing.
    },

    foo () {
        // do nothing.
    },
};

class A {
    constructor () {
        // do nothing.
    }

    foo () {
        // do nothing.
    }
}
```

---

#### 📍 space-before-function-paren

Require a space before function parenthesis

##### ❌ Example of incorrect code for this rule:

```js
function foo () {
    // ...
}

let bar = function () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

let foo = {
    bar () {
        // ...
    }
};

var foo = async() => 1
```

##### ✅ Example of correct code for this rule:

```js
function foo() {
    // ...
}

let bar = function() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

let foo = {
    bar() {
        // ...
    }
};

var foo = async() => 1
```

---

#### 📍 no-mixed-spaces-and-tabs
Disallow mixed spaces and tabs for indentation

##### ❌ Example of incorrect code for this rule:

```js

function add(x, y) {
// --->..return x + y;

      return x + y;
}

function main() {
// --->var x = 5,
// --->....y = 7;

    var x = 5,
        y = 7;
}

```

##### ✅ Example of correct code for this rule:

```js

function add(x, y) {
// --->return x + y;
    return x + y;
}

```

---

#### 📍 yoda
Discourage code typed like yoda would speak

##### ❌ Example of incorrect code for this rule:

```js

if ('red' === color) {
    // ...
}

if (true == flag) {
    // ...
}

if (5 > count) {
    // ...
}

if (-1 < str.indexOf(substr)) {
    // ...
}
```

##### ✅ Example of correct code for this rule:

```js

if (5 & value) {
    // ...
}

if (value === 'red') {
    // ...
}

if (x < -1 || 1 < x) {
    // ...
```

---

#### 📍 no-eval
Disallow eval() function


##### ❌ Example of incorrect code for this rule:

```js

let obj = { x: 'foo' },
    key = "x",
    value = eval("obj." + key);

(0, eval)("var a = 0");

let foo = eval;
foo("var a = 0");

// This `this` is the global object.
this.eval("var a = 0");

window.eval("var a = 0");

global.eval("var a = 0");

```

##### ✅ Example of correct code for this rule:

```js
let obj = { x: 'foo' },
    key = "x",
    value = obj[key];

class A {
    foo() {
        // This is a user-defined method.
        this.eval("var a = 0");
    }

    eval() {

    }
}

```

---

#### 📍 require-jsdoc
Requires JSDoc definitions for all functions and classes.

##### ❌ Example of incorrect code for this rule:

```js
methods: {
    updateUser (id, data) {
        return fetch(`/users/${id}`, {
            method: 'POST',
            body: JSON.stringify(opts),
        });
    },
}
```

##### ✅ Example of correct code for this rule:

```js
methods: {
    /**
     * Update the user with the given id via the API
     *
     * @param {Number} id - id of user
     * @param {Object} data - userdata object
     *
     * @returns {Promise}
     */
    updateUser (id, data) {
        return fetch(`/users/${id}`, {
            method: 'POST',
            body: JSON.stringify(opts),
        });
    },
}
```

---

#### 📍 no-var
Discourages using `var` for creating variables and requires using `let` or `const` instead

##### ❌ Example of incorrect code for this rule:
```
var count = posts.length;
```

##### ✅ Example of correct code for this rule:
```
const count = posts.length;
```

or, if the value can be changed

```
let count = posts.length;

if (additionalPosts.length) {
   count += additionalPosts.length;
}
```

---

#### 📍 no-alert
Disallows using alert() function in production.
Will throw a warning if the node env is not set to production (allows an alert-driven development).

##### ❌ Example of incorrect code for this rule:

```js
if (error) {   
    alert(error);
}
```

---

#### 📍 no-console
Disallows using the console in production.
Will throw a warning if the node env is not set to production.

##### ❌ Example of incorrect code for this rule:

```js
if (error) {   
    console.log(error);
}
```

---

#### 📍 no-implicit-coercion
Encourages stopping mixing different types of variables for the sake of cleaner and more readable code.

##### ❌ Example of incorrect code for this rule:

```js
// Boolean
const b = !!foo;
const b = ~foo.indexOf('.');

// Number
const n = +foo;
const n = 1 * foo;

// Strings
const s = '' + foo;
const s = `` + foo;
foo += '';
foo += ``;
```

##### ✅ Example of correct code for this rule:

```js
// Boolean
const b = Boolean(foo);
const b = foo.includes('.');

// Number
const n = Number(foo);
const n = parseFloat(foo);
const n = parseInt(foo, 10);

// Strings
const s = String(foo);
foo = String(foo);
```

---

#### 📍 arrow-spacing
arrows on arrow functions should have a space before and after.

##### ❌ Example of incorrect code for this rule:

```js
(a)=>{};
()=> {};
() =>{};
(a)=> {};
(a) =>{};
```

##### ✅ Example of correct code for this rule:

```js
(a) => {}
```

---

#### 📍 no-template-curly-in-string

Throw a warning when a regular string contains a text which looks like an ES6 template literal placeholder

##### ❌ Example of incorrect code for this rule:

```js
const greeting = "Hello, ${name}";
```

##### ✅ Example of correct code for this rule:

```js
const greeting = `Hello, ${name}`;
```

---

#### 📍 prefer-template

Encourage using template literals instead of '+' operator on strings

##### ❌ Example of incorrect code for this rule:

```js
const greeting = 'Hello, ' + this.name;
```

##### ✅ Example of correct code for this rule:

```js
const greeting = `Hello, ${this.name}`;
```

---

#### 📍 dot-notation

Forces using dot notation exclusively for getting object properties.

##### ❌ Example of incorrect code for this rule:

```js
const a = foo['bar'];
```

##### ✅ Example of correct code for this rule:

```js
const a = foo.bar;

const b = 'Hello';
const c = foo[b];
```

---

#### 📍 no-duplicate-imports

Disallow duplicate imports.

##### ❌ Example of incorrect code for this rule:

```js
import { merge } from 'module';
import something from 'another-module';
import { find } from 'module';
```

##### ✅ Example of correct code for this rule:

```js
import { merge, find } from 'module';
import something from 'another-module';
```

---

#### 📍 no-restricted-imports

Disallows importing lodash - people should import only the lodash sub-modules they need.

##### ❌ Example of incorrect code for this rule:

```js
import _ from 'lodash';
```

##### ✅ Example of correct code for this rule:

```js
import flatten from 'lodash/flatten';
```

---


### Vue

---

#### 📍 this-in-template

`@throws Error`

Disallow referencing `this` within a template.

##### ❌ Example of incorrect code for this rule:

```vue
<template>
    <div>{{ this.foo }}</div>
</template>
```

##### ✅ Example of correct code for this rule:

```vue
<template>
    <div>{{ foo }}</div>
</template>
```

---

#### 📍 order-in-components

`@throws Error`

Enforce a rational order of Vue component data.

##### ✅ Example of correct code for this rule:

```js
export default {
    // Options / Misc
    'name',
    'delimiters',
    'functional',
    'model',

    // Options / Assets
    'components',
    'directives',
    'filters',

    // Options / Composition
    'parent',
    'mixins',
    'extends',
    'provide',
    'inject',

    // Context
    'el',
    'template',
    'props',
    'propsData',
    'data',
    'computed',
    'watch',
    'LIFECYCLE_HOOKS',
    'methods',
    'render',
    'renderError',
};
```

---

#### 📍 html-indent

`@throws Error`

Enforce a consistent continuous indent of 4 spaces for both tags and tag attributes.

##### ❌ Example of incorrect code for this rule:

```vue
<template>
    <div>
        <my-component
          :foo="bar"
        :abc="xyz"
    </my-component>
</div>
</template>
```

##### ✅ Example of correct code for this rule:

```vue
<template>
    <div>
        <my-component
            :foo="bar"
            :abc="xyz"
        </my-component>
    </div>
</template>
```

---

#### 📍 attribute-hyphenation

`@throws Error`

Force attributes to be hyphenated rather than camelCase.

##### ❌ Example of incorrect code for this rule:

```vue
<my-component :customAttribute="true"></my-component>
```

##### ✅ Example of correct code for this rule:

```vue
<my-component :custom-attribute="true"></my-component>
```

---

#### 📍 no-dupe-keys

`@throws Error`

Error on duplicate keys to avoid conflicting and overwriting of values.

##### ❌ Example of incorrect code for this rule:

```js
export default {
    props: {
        foo: String,
    },

    computed: {
        foo: {
            get () {}
        },
    },

    data: {
        foo: null,
    },

    methods: {
        foo () {},
    },
}
```

---

#### 📍 v-on-style

`@throws Error`

Force the shorthand syntax for event binding.

##### ❌ Example of incorrect code for this rule:

```vue
<my-component v-on:change="updateValue"></my-component>
```

##### ✅ Example of correct code for this rule:

```vue
<my-component @change="updateValue"></my-component>
```

---

#### 📍 v-bind-style

`@throws Error`

Force the shorthand syntax for the v-bind directive.

##### ❌ Example of incorrect code for this rule:

```vue
<my-component v-bind:foo="bar"></my-component>
```

##### ✅ Example of correct code for this rule:

```vue
<my-component :foo="bar"></my-component>
```

---

#### 📍 no-multi-spaces

`@throws Error`

Remove multiple spaces in a row between attributes which are not used for indentation.

##### ❌ Example of incorrect code for this rule:

```vue
<div     class="foo"
      :style="bar"         />
```

##### ✅ Example of correct code for this rule:

```vue
<div
    class="foo"
    :style="bar"
/>
```

---

#### 📍 name-property-casing

`@throws Error`

Allow only kebab-case (hyphenated) component names.

##### ❌ Example of incorrect code for this rule:

```js
export default {
    name: 'MyComponent',
}
```

##### ✅ Example of correct code for this rule:

```js
export default {
    name: 'my-component',
}
```

---

#### 📍 mustache-interpolation-spacing

`@throws Error`

Enforce a single space around values in mustache echo statements.

##### ❌ Example of incorrect code for this rule:

```html
<div>{{foo}}</div>
<div>{{    foo    }}</div>
```

##### ✅ Example of correct code for this rule:

```html
<div>{{ foo }}</div>
```

---

#### 📍 html-quotes

`@throws Error`

Enforce a double quotes on tag attributes.

##### ❌ Example of incorrect code for this rule:

```html
<div class='foo'></div>
<div class=foo></div>
```

##### ✅ Example of correct code for this rule:

```html
<div class="foo"></div>
```

---

#### 📍 max-attributes-per-line

`@throws Error`

Limit the max number of attributes per line. Single line tags can have a maximum of 3 attributes per line. After which each attribute should be broken down onto individual lines.

##### ❌ Example of incorrect code for this rule:

```html
<my-component foo="bar" baz="qux" abc="123" xyz="321"></my-component>

<my-component
    foo="bar" baz="qux"
><my-component>
```

##### ✅ Example of correct code for this rule:

```html
<my-component foo="bar" baz="qux" abc="123"></my-component>

<my-component
    foo="bar"
    baz="qux"
    abc="123"
    xyz="321"
></my-component>
```

---

#### 📍 require-default-prop

`@throws Warning`

Encourage providing default values for props.

##### ❌ Example of incorrect code for this rule:

```js
props: {
    a: Number,
    b: [Number, String],
    c: {
        type: Number,
    },
    d: {
        type: Number,
        required: false,
    },
}
```

##### ✅ Example of correct code for this rule:

```js
props: {
    a: {
        type: Number,
        required: true,
    },
    b: {
        type: Number,
        default: 0,
    },
    c: {
        type: Number,
        default: 0,
        required: false,
    },
}
```

---

#### 📍 require-prop-types

`@throws Warning`

Encourage long-form prop definitions with at minimum a declared data type.

##### ❌ Example of incorrect code for this rule:

```js
props: ['status'],
```

##### ✅ Example of correct code for this rule:

```js
props: {
    status: String,
}

props: {
    status: {
        type: String,
    },
}
```

---

#### 📍 no-side-effects-in-computed-properties

`@throws Warning`

It is considered a very bad practice to introduce side effects inside computed properties. It makes the code unpredictable and hard to understand. Discourage computed properties from mutating state.

##### ❌ Example of incorrect code for this rule:

```js
computed: {
    fullName () {
        this.firstName = 'lorem'; // <- side effect
        return `${this.firstName} ${this.lastName}`;
    },

    reversedArray () {
        return this.array.reverse(); // <- side effect
    },
}
```

##### ✅ Example of correct code for this rule:

```js
computed: {
    fullName () {
        return `${this.firstName} ${this.lastName}`;
    },

    reversedArray () {
        return this.array.slice(0).reverse();
    },
}
```

---

#### 📍 no-duplicate-attributes

`@throws Error`

When duplicate attributes exist, only the last one is used. Disallow duplicates for attributes other than special bindings such as class and style.

##### ❌ Example of incorrect code for this rule:

```vue
<my-component
    :foo="bar"
    foo="xyz"
></my-component>
```

##### ✅ Example of correct code for this rule:

```vue
<my-component
    class="bar"
    :class="{ foo: true }"
    abc="xyz"
></my-component>
```

---

#### 📍 return-in-computed-property

`@throws Error`

Make sure computed properties return a value.

##### ❌ Example of incorrect code for this rule:

```js
computed: {
    foo () {

    },
}
```

##### ✅ Example of correct code for this rule:

```js
computed: {
    foo () {
        return 'bar';
    },
}
```

---

#### 📍 no-unused-vars

`@throws Error`

Make sure scope variables are used.

##### ❌ Example of incorrect code for this rule:

```vue
<template>
    <ol v-for="i in 5"><!-- "i" is defined but never used. -->
        <li>item</li>
    </ol>
</template>
```

##### ✅ Example of correct code for this rule:

```vue
<template>
    <ol v-for="i in 5">
        <li>{{ i }}</li><!-- "i" is defined and used. -->
    </ol>
</template>
```

---

#### 📍 no-shared-component-data

`@throws Error`

Component data must be returned as a new instance via a function rather than a plain object.

##### ❌ Example of incorrect code for this rule:

```js
export default {
    data: {
        foo: 'bar',
    },
}
```

##### ✅ Example of correct code for this rule:

```js
export default {
    data () {
        return {
            foo: 'bar',
        }
    },
}
```

--

#### 📍 no-unused-vars

`@throws Warning`

All imports and vars that are included within code must be used.

##### ❌ Example of incorrect code for this rule:

```js
let foo = 'bar';

function fooBar() {
    //code
}

//End of file
```

##### ✅ Example of correct code for this rule:

```js
let foo = 'bar';

function fooBar() {
    return `${foo}bar`;
    
    //code
}

//End of file
```

---

#### 📍 eqeqeq

`@throws Warning`

Equality operators must now be type-safe - as is considered best practice in coding.

##### ❌ Example of incorrect code for this rule:

```js
if (x == y) {
    // code
}

if ("" == text) {
    //code
}

if (obj.stuff != undefined) {
    // code
}
```

##### ✅ Example of correct code for this rule:

```js
if (x === y) {
    // code
}

if ("" === text) {
    // code
}

if (obj.stuff !== undefined) {
    // code
}
```

---

#### 📍 no-else-return

`@throws Warning`

Prevents a return statement being called _before_ an else. But also, in this instance, as we have allowElseIf set to false, else statements will also _not_ be allowed in code.

##### ❌ Example of incorrect code for this rule:

```js
function foo() {
    if (x) {
        return a;
    } else if (y) {
        return b;
    } else {
        return c;
    }
}
```

##### ✅ Example of correct code for this rule:

```js
function foo() {
    if (x) {
        return a;
    }
    
    if (y) {
        return b;   
    }
    
    return c;
}
```

---

#### 📍 no-floating-decimal

`@throws Warning`

Prevents using floating decimals

##### ❌ Example of incorrect code for this rule:

```js

const num = .5;
const ber = 2.;
const wang = -.7;

```

##### ✅ Example of correct code for this rule:

```js

const num = 0.5;
const ber = 2.0;
const wang = -0.7;

```

---

#### 📍 curly

`@throws Warning`

Curly brace conventions must follow a strict formatted pattern.

##### ❌ Example of incorrect code for this rule:

```js
if (foo) return;

while (bar)
    baz();

if (foo) {
    baz();
} else qux();

```

##### ✅ Example of correct code for this rule:

```js
if (foo) {
    return;
}

while (bar) {
    baz();
}

if (foo) {
    baz();
} else {
    qux();
}
```
--

#### 📍 no cond assign

`@throws Warning`

Discourages the assignment of variables in conditional statements

Allows assignment within params by default

##### ❌ Example of incorrect code for this rule:

```js

const x;
if (x = 0) {
    const b = 1;
}

// Practical example that is similar to an error
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while (someNode = someNode.parentNode);
}

```

##### ✅ Example of correct code for this rule:

```js

const x;
if (x === 0) {
    const b = 1;
}

// Practical example that wraps the assignment in parentheses
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode));
}

// Practical example that wraps the assignment and tests for 'null'
function setHeight(someNode) {
    "use strict";
    do {
        someNode.height = "100px";
    } while ((someNode = someNode.parentNode) !== null);
}

```

---

#### 📍 prefer-arrow-callback

`@throws Error`

Forces user to use ES6 arrow function expressions

##### ❌ Example of incorrect code for this rule:

```js
foo(function(a) { 
    return a; 
});

foo(function() { 
    return this.a; 
}.bind(this));
```

##### ✅ Example of correct code for this rule:

```js
foo((a) => {
    return a;
});

foo(() => {
    return this.a;
});
```

---

#### 📍 no-lonely-if

`@throws Warning`

If an if statement is the only statement in the else block, it is clearer to use an else if.

##### ❌ Example of incorrect code for this rule:

```js
if (foo) {
    // ...
} else {
    if (bar) {
        // ...
    }
}

if (condition) {
    // ...
} else {
    if (anotherCondition) {
        // ...
    }
}
```

##### ✅ Example of correct code for this rule:

```js
if (condition) {
    // ...
} else if (anotherCondition) {
    // ...
} else {
    // ...
}
```

---

#### 📍 prefer-const

`@throws Warning`

If a variable is set using 'let' and then never updated a warning will be issued as 'const' is preferred in this instance.

##### ❌ Example of incorrect code for this rule:

```js
let a = 3;
console.log(a);

let a;
a = 1;
return a;

for (let i in [1, 2, 3]) {
    console.log(i);
}
```

##### ✅ Example of correct code for this rule:

```js
const a = 3;
console.log(a);

for (const i in [1, 2, 3]) {
  console.log(i);
}

let a;
a = 1;
a = 2;
return a;

let a;
if (true) {
    a = 1;
}

```

---

#### 📍 key-spacing

`@throws Warning`

Enforces a space after the colon in object literals.

##### ❌ Example of incorrect code for this rule:

```js
const object = {
    key:'value',
    key :'value',   
    key : 'value',   
};
```

##### ✅ Example of correct code for this rule:

```js
const object = {
    key: 'value',
};
```

---

#### 📍 quotes

`@throws Warning`

Limits the use of string quotes within JavaScript to 'single' quotation marks.

##### ❌ Example of incorrect code for this rule:

```js
const double = "double";
const escaped = "a string with escaped 'single' quotes"
```

##### ✅ Example of correct code for this rule:

```js
const single = 'single';
const backtick = `back${x}tick`;
```

---

#### 📍 no-multiple-empty-lines

`@throws Warning`

Prevents multiple empty lines existing within code. With rules set to a max of 1 in general and both at the beginning and the end of the file.

##### ❌ Example of incorrect code for this rule:

```js


const foo = bar;



const bar = foo;


```

##### ✅ Example of correct code for this rule:

```js
const foo = bar;

const bar = foo;
```

---

#### 📍 no-useless-return

`@throws Warning`

Reports the use of redundant return statements

##### ❌ Example of incorrect code for this rule:

```js
function foo() { return; }

function foo() {
    doSomething();
    return;
}
```

##### ✅ Example of correct code for this rule:

```js
function foo() { return 5; }

function foo() {
    return doSomething();
}
```

---

#### 📍 no-use-before-define

`@throws Error`

Prevents use of an identifier that has not yet been declared

##### ❌ Example of incorrect code for this rule:

```js
alert(a);
const a = 10;

f();
function f() {};

function g() {
    return b;
}
const b = 1;
```

##### ✅ Example of correct code for this rule:

```js
const a = 10;
alert(a);

function f() {};
f();

const b = 1;
function g() {
    return b;
}
```

---

#### 📍 no-unneeded-ternary

`@throws Warning`

Disallows the use of ternary operators when simpler alternatives exist

##### ❌ Example of incorrect code for this rule:

```js
const a = x === 2 ? true : false;
const b = x ? true : false;
```

##### ✅ Example of correct code for this rule:

```js
const a = x === 2 ? 'yes' : 'No';
const a = x !== false;
const a = x ? 'Yes' : 'No';
```

---

#### 📍 semi

`@throws Warning`

Requires a semi-colon at the end of every line

##### ❌ Example of incorrect code for this rule:

```js
const foo = 'bar'
```

##### ✅ Example of correct code for this rule:

```js
const foo = 'bar';
```

---

#### 📍 eol-last

`@throws Error`

Forces a new line at the end of files.

##### ❌ Example of incorrect code for this rule:

```js
module.exports = FooBar;
```

##### ✅ Example of correct code for this rule:

```js
module.exports = FooBar;\n
```

---

#### 📍 no-textarea-mustache

`@throws Warning`

Prevents the use of mustaches within textarea form fields.


##### ❌ Example of incorrect code for this rule:

```js
<textarea>{{ message }}</textarea>
```

##### ✅ Example of correct code for this rule:

```js
<textarea v-model="message" />
```

---

#### 📍 template-curly-spacing

`@throws Warning`

Enforces the use of spacing within template strings.

##### ❌ Example of incorrect code for this rule:

```js
`hello, ${people.name}`;
`hello, ${ people.name}`;
`hello, ${people.name }`;
```

##### ✅ Example of correct code for this rule:

```js
`hello, ${ people.name }`;
`hello, ${
    people.name
}`;
```

---

#### 📍 quotes

`@throws Warning`

Disallows array literals which contain empty slots.

##### ❌ Example of incorrect code for this rule:

```js
const array = [ , , ];
const array = [ 'red', , 'green'];
```

##### ✅ Example of correct code for this rule:

```js
const array = [];
const array = [ 'red', 'green' ];
const array = new Array(23);
```

---

#### 📍 debugger

`@throws Warning`

Disallows Debugger statements

##### ❌ Example of incorrect code for this rule:

```js
function isTruthy(x) {
    debugger;
    return Boolean(x);
}
```

##### ✅ Example of correct code for this rule:

```js
function isTruthy(x) {
    return Boolean(x); // set a breakpoint at this line
}
```

## Contributing

If you disagree with any rules in this linter, or feel additional rules should be added, please open an issue on this project to initiate an open dialogue with all team members. Please bear in mind this is a public repository.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/5918348?v=4" width="100px;"/><br /><sub><b>Sam Turrell</b></sub>](http://samturrell.co.uk)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=samturrell "Code") | [<img src="https://avatars0.githubusercontent.com/u/26109442?v=4" width="100px;"/><br /><sub><b>BeccaAnderton18</b></sub>](https://github.com/BeccaAnderton18)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=BeccaAnderton18 "Code") | [<img src="https://avatars3.githubusercontent.com/u/8046913?v=4" width="100px;"/><br /><sub><b>rowancollins89</b></sub>](https://github.com/rowancollins89)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=rowancollins89 "Code") | [<img src="https://avatars1.githubusercontent.com/u/6869002?v=4" width="100px;"/><br /><sub><b>Neveena</b></sub>](https://github.com/neveena)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=neveena "Code") | [<img src="https://avatars0.githubusercontent.com/u/25647489?v=4" width="100px;"/><br /><sub><b>martin91s</b></sub>](https://github.com/martin91s)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=martin91s "Code") | [<img src="https://avatars0.githubusercontent.com/u/26853175?v=4" width="100px;"/><br /><sub><b>Wiktor Zawierucha</b></sub>](https://github.com/wik-z)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=wik-z "Code") | [<img src="https://avatars2.githubusercontent.com/u/7649031?v=4" width="100px;"/><br /><sub><b>jdtjenkins</b></sub>](https://github.com/jdtjenkins)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=jdtjenkins "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars2.githubusercontent.com/u/16099044?v=4" width="100px;"/><br /><sub><b>Sam Boylett</b></sub>](http://boylett.com)<br />[💻](https://github.com/netsells/eslint-config-netsells/commits?author=samboylett "Code") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
