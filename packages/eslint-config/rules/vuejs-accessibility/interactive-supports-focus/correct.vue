<template>
    <!-- Good: div with @click attribute is hidden from screen reader -->
    <div aria-hidden @click="() => void 0" />

    <!-- Good: span with @click attribute is in the tab order -->
    <span @click="doSomething" tabindex="0" role="button">Click me!</span>

    <!-- Good: span with @click attribute may be focused programmatically -->
    <span @click="doSomething" tabindex="-1" role="menuitem">Click me too!</span>

    <!-- Good: anchor element with href is inherently focusable -->
    <a href="javascript:void(0)" @click="doSomething">Click ALL the things!</a>

    <!-- Good: buttons are inherently focusable -->
    <button @click="doSomething">Click the button</button>
</template>
