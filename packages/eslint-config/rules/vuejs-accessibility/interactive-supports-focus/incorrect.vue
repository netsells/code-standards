<template>
    <!-- Bad: span with @click attribute has no tabindex -->
    <span @click="submitForm" role="button">Submit</span>

    <!-- Bad: anchor element without href is not focusable -->
    <a @click="showNextPage" role="button">Next page</a>
</template>
