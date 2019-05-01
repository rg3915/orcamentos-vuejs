<template>
  <div>
    <p>
      <b>Age:</b>
      {{ selectedItem.age }}
    </p>
    <p>
      <b>First Name:</b>
      {{ selectedItem.first_name }}
    </p>
    <p>
      <b>Last Name:</b>
      {{ selectedItem.last_name }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  },
  computed: {
    selectedItem() {
      return this.items[this.$route.params.id];
    }
  }
};
</script>
