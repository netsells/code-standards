<script>
    export default {
        // Options / Misc
        name: String,
        delimiters: Array,
        functional: false,
        model: Object,

        // Options / Assets
        components: Object,
        directives: Object,
        filters: Object,

        // Options / Composition
        parent: new Vue(),
        mixins: Array,
        extends: Array,
        provide: Object,
        inject: Array,

        // Context
        el: String,
        template: String,
        props: Object,
        propsData: Object,
        data: Function,
        computed: Object,
        watch: Object,
        // LIFECYCLE_HOOKS
        // e.g. beforeCreate, created, beforeMount, mounted, beforeUpdate,
        // updated, activated, deactivated, beforeDestroy, destroyed
        methods: Object,
        render: Function,
        renderError: Function,
    };
</script>
