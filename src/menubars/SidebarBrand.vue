<template>
    <router-link
        :to="{ name: 'dashboard' }"
        class="brand-link"
        active-class=""
        exact-active-class=""
    >
        <img
            src="/adminlte/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
            style="opacity: .8"
        />
        <span class="brand-text font-weight-light">AdminLTE 3</span>
    </router-link>
</template>

<script>
export default {
    name: "SidebarBrand",
};
</script>
