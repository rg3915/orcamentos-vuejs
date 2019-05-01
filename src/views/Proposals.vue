<template>
  <div>
    <b-button v-b-modal.modal-1>Criar orçamento</b-button>

    <b-modal id="modal-1" title="BootstrapVue" @ok="addProposal">
      <div class="my-4">
        <b-form-group id="input-group-1" label="Título:" label-for="input-1">
          <b-form-input id="input-1" v-model="editingItem.title" type="text" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Valor:" label-for="input-2">
          <b-form-input id="input-2" v-model="editingItem.price" type="number" required></b-form-input>
        </b-form-group>
      </div>
    </b-modal>

    <b-table striped hover :fields="fields" :items="items">
      <template slot="actions" slot-scope="row">
        <b-button :to="'/proposals/' + row.item.id">Abrir</b-button>
        <b-button variant="danger" @click="deleteProposal(row.item.id)">Apagar</b-button>
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
      editingItem: {
        title: "",
        price: 0
      },
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
  },
  methods: {
    addProposal() {
      firebase
        .firestore()
        .collection("proposals")
        .add(this.editingItem);

      this.editingItem = {
        title: "",
        price: 0
      };
    },
    deleteProposal(id) {
      if (!confirm("Deseja realmente apagar este item?")) {
        return;
      }

      firebase
        .firestore()
        .collection("proposals")
        .doc(id)
        .delete();
    }
  }
};
</script>