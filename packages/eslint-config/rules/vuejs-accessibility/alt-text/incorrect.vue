<template>
    <img src="foo" />
    <img alt />
    <!-- Has no value -->
    <img src="foo" role="presentation" />
    <!-- Avoid ARIA if it can be achieved without -->
    <img src="foo" role="none" />
    <!-- Avoid ARIA if it can be achieved without -->

    <object />
    <area />
    <input type="image" />
</template>
