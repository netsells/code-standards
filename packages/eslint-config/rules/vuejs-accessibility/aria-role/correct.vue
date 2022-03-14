<template>
    <div role="button" />
    <!-- Good: "button" is a valid ARIA role -->
    <div :role="role" />
    <!-- Good: role is a variable & cannot be determined until runtime. -->
    <div />
    <!-- Good: No ARIA role -->
    <Foo role="test" />
    <!-- Good: ignoreNonDOM is set to true -->
</template>
