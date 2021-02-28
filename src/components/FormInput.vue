<template>
    <input
        class="form-control"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        :class="{ 'is-invalid': isInvalid }"
    />
</template>
<script>
export default {
    name: "FormInput",
    props: {
        value: String,
        isInvalid: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
