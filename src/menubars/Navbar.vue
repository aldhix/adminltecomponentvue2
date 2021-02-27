<template>
    <nav class="main-header navbar navbar-expand navbar-dark">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a
                    class="nav-link"
                    data-widget="pushmenu"
                    href="#"
                    role="button"
                >
                    <i class="fas fa-bars"></i>
                </a>
            </li>
        </ul>
        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <navbar-user></navbar-user>
        </ul>
    </nav>
</template>

<script>
import NavbarUser from "@/menubars/NavbarUser.vue";
export default {
    name: "Navbar",
    components: { NavbarUser },
};
</script>
