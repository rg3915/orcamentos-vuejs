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
  mounted() {
    firebase
      .firestore()
      .collection("proposals")
      .onSnapshot(snapshot => {
        let items = [];

        snapshot.forEach(doc => {
          const data = doc.data();

          items.push({
            id: doc.id,
            ...data
          });
        });

        this.items = items;
      });
  },
  data() {
    return {
      fields: {
        title: {
          label: "Título",
          sortable: true
        },
        price: {
          label: "Valor",
          sortable: true
        },
        actions: {
          label: "Ações"
        }
      },
      items: []
    };
  }
};
</script>