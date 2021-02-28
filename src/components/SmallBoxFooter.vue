<template>
    <router-link
        v-bind="$attrs"
        active-class=""
        exact-active-class=""
        class="small-box-footer"
    >
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    name: "SmallBoxFooter",
    inheritAttrs: false,
};
</script>
