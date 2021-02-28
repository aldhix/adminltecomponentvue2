<template>
    <div :class="getClass()">
        <slot></slot>
    </div>
</template>
<style scoped>
div.invalid.text-danger {
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
}
</style>
<script>
export default {
    name: "ErrorMessage",
    props: {
        outside: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        getClass() {
            return {
                "invalid-feedback": !this.outside,
                "invalid text-danger": this.outside,
            };
        },
    },
};
</script>
