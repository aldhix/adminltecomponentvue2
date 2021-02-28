<template>
    <nav-item-treeview :to="{ name: 'example' }">
        <template v-slot:title>
            <i class="nav-icon fas fa-cubes"></i>
            <p>
                Example
                <i class="right fas fa-angle-left"></i>
            </p>
        </template>
        <nav-item :to="{ name: 'example' }" exact>
            <i class="nav-icon far fa-circle"></i>
            <p>Form</p>
        </nav-item>
        <nav-item :to="{ name: 'example.tab' }">
            <i class="nav-icon far fa-circle"></i>
            <p>Tab</p>
        </nav-item>
        <nav-item :to="{ name: 'example.table' }">
            <i class="nav-icon far fa-circle"></i>
            <p>Table</p>
        </nav-item>
    </nav-item-treeview>
</template>

<script>
import NavItemTreeview from "@/components/NavItemTreeview.vue";
import NavItem from "@/components/NavItem.vue";

export default {
    name: "SidebarExample",
    components: {
        NavItemTreeview,
        NavItem,
    },
};
</script>

NavItem
