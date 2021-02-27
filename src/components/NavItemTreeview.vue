<template>
  <router-link
    v-bind="$attrs"
    custom
    v-slot="{ href, route, navigate, isActive, isExactActive }"
  >
    <li class="nav-item has-treeview" :class="[isActive && 'menu-open']">
      <a href="#" class="nav-link" :class="[isActive && 'active']">
        <slot name="title"></slot>
      </a>
      <ul class="nav nav-treeview">
        <slot></slot>
      </ul>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "NavItemTreeview",
  inheritAttrs: false,
};
</script>
