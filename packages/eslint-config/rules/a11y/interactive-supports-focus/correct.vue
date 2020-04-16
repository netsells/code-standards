<template>
    <div aria-hidden="true" @click="doSomething" /> <!-- div with @click attribute is hidden from the screen reader -->
    <span @click="doSomething" tabindex="0" role="button">Click here</span> <!-- span with @click attribute is in the tab order -->
    <span @click="doSomething" tabindex="-1" role="menuitem">Click here</span> <!-- span with @click attribute may be focused programmatically -->
    <a href="#" @click="doSomething">Click here</a> <!-- anchor element with href is inherently focusable -->
    <button @click="doSomething">Click here</button> <!-- buttons are inherently focusable -->
</template>