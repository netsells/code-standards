<template>
    <span tabindex="0">foo</span>
    <span v-if="true" tabindex="0" />
    <span tabindex="-1">bar</span>
    <span :tabindex="0">baz</span>
</template>
