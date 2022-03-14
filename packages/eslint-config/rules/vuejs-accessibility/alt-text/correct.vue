<template>
    <img src="foo" alt="Foo eating a sandwich." />
    <img src="foo" :alt="altText" />
    <img src="foo" alt="" />

    <object aria-label="foo" />
    <object aria-labelledby="id1" />
    <object>Meaningful description</object>
    <object title="An object" />

    <area aria-label="foo" />
    <area aria-labelledby="id1" />
    <area alt="This is descriptive!" />

    <input type="image" alt="This is descriptive!" />
    <input type="image" aria-label="foo" />
    <input type="image" aria-labelledby="id1" />
</template>
