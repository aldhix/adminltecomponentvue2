<template>
    <router-link
        v-bind="$attrs"
        class="dropdown-item"
        active-class=""
        exact-active-class=""
    >
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    name: "DropdownItem",
    inheritAttrs: false,
};
</script>
