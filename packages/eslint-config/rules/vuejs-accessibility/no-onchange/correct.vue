<template>
    <select @blur="handleBlur">
        <option/>
    </select>

    <select>
        <option @blur="handleBlur" @change="handleChange" />
    </select>
</template>
