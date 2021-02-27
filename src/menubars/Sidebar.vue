<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <sidebar-brand></sidebar-brand>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <sidebar-user></sidebar-user>
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <sidebar-dashboard></sidebar-dashboard>
          <sidebar-example></sidebar-example>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import SidebarBrand from "@/menubars/SidebarBrand.vue";
import SidebarUser from "@/menubars/SidebarUser.vue";
import SidebarDashboard from "@/menubars/SidebarDashboard.vue";
import SidebarExample from "@/menubars/SidebarExample.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarBrand,
    SidebarUser,
    SidebarDashboard,
    SidebarExample,
  },
};
</script>
