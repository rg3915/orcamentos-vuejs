<template>
  <div>
    <b-button v-b-modal.modal-1 @click="modalShow = false">Criar orçamento</b-button>

    <b-modal v-model="modalShow" id="modal-1" title="BootstrapVue" @ok="submitProposal">
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
        <b-button class="mr-2" :to="'/proposals/' + row.item.id">Abrir</b-button>
        <b-button class="mr-2" @click="editProposal(row.item)">Editar</b-button>
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
      modalShow: false,
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
    submitProposal() {
      if (this.editingItem.id) {
        firebase
          .firestore()
          .collection("proposals")
          .doc(this.editingItem.id)
          .set({
            price: this.editingItem.price,
            title: this.editingItem.title
          });
      } else {
        firebase
          .firestore()
          .collection("proposals")
          .add(this.editingItem);
      }

      this.editingItem = {
        title: "",
        price: 0
      };
    },
    editProposal(item) {
      this.editingItem = {
        ...item
      };
      this.modalShow = true;
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