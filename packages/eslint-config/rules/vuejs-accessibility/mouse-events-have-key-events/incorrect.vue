<template>
    <div @mouseover="foo" />
    <div @mouseout="void 0" />
    <div @mouseover="void 0" @focus="null" />
    <div @mouseout="void 0" @blur="null" />
</template>
