<template>
    <a>Anchor Content!</a>
    <a><TextWrapper /><a>
    <a is="TextWrapper" />
    <a v-text="msg" />
    <a v-html="msg" />
    <a v-myAccessibleDirective="msg" />
    <Anchor>Anchor content</!Anchor>
    <a><my-accessible-text /></a>
</template>
