<template>
    <template>
        <!-- ✓ GOOD -->
        <div
            is="header"
            v-for="item in items"
            v-if="!visible"
            v-once
            id="uniqueID"
            ref="header"
            my-prop="prop"
            v-text="textContent"
            v-model="headerData"
            @click="functionCall"
        />

        <div
            v-for="item in items"
            v-if="!visible"
            prop-one="prop"
            :prop-two="prop"
            prop-three="prop"
            v-text="textContent"
            @click="functionCall"
        />

        <div
            prop-one="prop"
            :prop-two="prop"
            prop-three="prop"
        />
    </template>
</template>
