<template>
    <textarea
        class="form-control"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        :class="{ 'is-invalid': isInvalid }"
    ></textarea>
</template>
<script>
export default {
    name: "FormTextarea",
    props: {
        value: String,
        isInvalid: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
