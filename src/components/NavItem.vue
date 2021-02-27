<template>
  <li class="nav-item">
    <router-link v-bind="$attrs" class="nav-link"><slot></slot></router-link>
  </li>
</template>
<script>
export default {
  name: "NavItem",
  inheritAttrs: false,
};
</script>
