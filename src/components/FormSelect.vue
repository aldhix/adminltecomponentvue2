<template>
    <select
        class="form-control"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        :class="{ 'is-invalid': isInvalid }"
    >
        <slot></slot>
    </select>
</template>
<script>
export default {
    name: "FormSelect",
    props: {
        value: String,
        isInvalid: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
