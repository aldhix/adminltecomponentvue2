<template>
    <nav-item-dropdown data-class="dropdown-menu-right">
        <template v-slot:title>
            <i class="fas fa-user-cog mr-1"></i>
            <small><i class="fas fa-angle-down"></i></small>
        </template>
        <dropdown-item to="#">
            <i class="fas fa-user mr-2"></i>
            Your Profile
        </dropdown-item>
        <dropdown-item to="#">
            <i class="fas fa-users mr-2"></i>
            Kelola User
        </dropdown-item>
        <div class="dropdown-divider"></div>
        <dropdown-item to="#">
            <i class="fas fa-info-circle mr-2"></i>
            About
        </dropdown-item>
        <dropdown-item to="#" @click.native="logout">
            <i class="fas fa-sign-out-alt mr-2"></i>
            Sign Out
        </dropdown-item>
    </nav-item-dropdown>
</template>

<script>
import NavItemDropdown from "@/components/NavItemDropdown.vue";
import DropdownItem from "../components/DropdownItem.vue";

export default {
    name: "NavbarUser",
    components: {
        NavItemDropdown,
        DropdownItem,
    },
    methods: {
        logout() {
            window.document.location.href = this.$router.resolve({
                name: "login",
            }).href;
        },
    },
};
</script>
