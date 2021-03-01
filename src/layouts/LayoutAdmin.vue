<template>
  <div id="app" class="wrapper">
    <navbar></navbar>
    <sidebar></sidebar>
    <router-view></router-view>
    <footer class="main-footer">
      <div class="float-right d-none d-sm-block"><b>Version</b> 3.0.5</div>
      <strong>
        Copyright &copy; 2014-2019
        <a href="http://adminlte.io">AdminLTE.io</a>.
      </strong>
      All rights reserved.
    </footer>
  </div>
</template>
<script>
import Navbar from "@/menubars/Navbar.vue";
import Sidebar from "@/menubars/Sidebar.vue";
export default {
  name: "LayoutDashboard",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>
