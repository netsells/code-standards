<template>
    <div class="code-highlight">
        <div v-if="$slots.incorrect" class="incorrect">
            <p>❌&nbsp;&nbsp;Incorrect</p>
            <slot name="incorrect"/>
        </div>
        <div v-if="$slots.correct" class="correct">
            <p>✅&nbsp;&nbsp;Correct</p>
            <slot />
            <slot name="correct"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'code-highlight',
    }
</script>

<style lang="scss" scoped>
    .code-highlight {
        .incorrect {
            > p {
                color: darken(red, 10%);
            }
            div[class*=language-] {
                border-left: 10px solid darken(red, 10%);
            }
        }
        .correct {
            > p {
                color: #42b983;
            }
            div[class*=language-] {
                border-left: 10px solid #42b983;
            }
        }
    }
</style>
