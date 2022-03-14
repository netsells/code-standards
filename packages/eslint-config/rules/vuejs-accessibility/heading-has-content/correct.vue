<template>
    <h1>Heading Content!</h1>
    <h1 v-html="msg"></h1>
    <h1 v-myAccessibleDirective="msg"></h1>
    <MyHeading>Heading Content!</MyHeading>
    <h1>
    <MyAccessibleText />
    </h1>
</template>
