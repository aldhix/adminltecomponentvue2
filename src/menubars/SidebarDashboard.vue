<template>
  <nav-item :to="{ name: 'dashboard' }" exact>
    <i class="nav-icon fas fa-tachometer-alt"></i>
    <p>Dashboard</p>
  </nav-item>
</template>

<script>
import NavItem from "@/components/NavItem.vue";

export default {
  name: "SidebarDashboard",
  components: {
    NavItem,
  },
};
</script>
