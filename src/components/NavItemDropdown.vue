<template>
    <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
            <slot name="title"></slot>
        </a>
        <div class="dropdown-menu" :class="dataClass">
            <slot></slot>
        </div>
    </li>
</template>
<script>
export default {
    name: "NavItemDropdown",
    props: {
        dataClass: {
            type: String,
            default: "dropdown-menu-sm",
        },
    },
};
</script>
