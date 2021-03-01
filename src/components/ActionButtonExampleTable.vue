<template>
  <td>
    <button class="btn btn-sm btn-warning mr-2" @click="itemEdit">
      <i class="fas fa-edit"></i>
    </button>
    <button class="btn btn-sm btn-danger" @click="itemDelete">
      <i class="fas fa-trash"></i>
    </button>
  </td>
</template>
<script>
export default {
  name: "ActionButtonExampleTable",
  props: ["item", "index"],
  methods: {
    itemDelete() {
      this.$emit("delete", this.index);
    },
    itemEdit() {
      this.$emit("edit", this.index);
    },
  },
};
</script>
