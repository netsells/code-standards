<template>
    <a>Anchor Content!</a>,
    <a v-text="msg" />,
    <a v-html="msg" />,
    <a><slot /></a>,
    <VAnchor />,
    <a aria-label="This is my label" />,
    <a><img alt="foo" /></a>,
    <a><span v-html="msg" /></a>,
    <a><span v-text="msg" /></a>
</template>
