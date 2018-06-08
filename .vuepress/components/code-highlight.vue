<template>
    <div class="code-highlight">
        <div v-if="$slots.incorrect" class="incorrect">
            <p>❌ Incorrect</p>
            <slot name="incorrect"/>
        </div>
        <div v-if="$slots.correct || $slots.default" class="correct">
            <p>✅ Correct</p>
            <slot/>
            <slot name="correct"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'code-highlight',
    }
</script>

<style lang="stylus">
    .code-highlight {
        .incorrect {
            > p {
                color: darken(red, 40%);
            }
            div[class*=language-] {
                border-left: 10px solid darken(red, 40%);
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
