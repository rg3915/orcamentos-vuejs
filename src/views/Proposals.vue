<template>
  <div>
    <b-table striped hover :fields="fields" :items="items">
      <template slot="actions" slot-scope="row">
        <b-button :to="'/proposals/' + row.index">Abrir</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        age: {
          label: "Idade",
          sortable: true
        },
        first_name: {
          label: "Primeiro nome",
          sortable: true
        },
        last_name: {
          label: "Último nome",
          sortable: true
        },
        actions: {
          label: "Ações"
        }
      },
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  }
};
</script>