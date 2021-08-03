<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <strong>Contatos</strong>
          <span class="float-right"><strong>{{ items.length }} itens</strong></span>
          <CRow class="d-flex align-items-end">
            <CCol col="8">
              <p>Contato é a pessoa com quem você deve falar dentro de um cliente ou uma obra.</p>
            </CCol>
            <CCol col="4">
              <CForm inline>
                <CInput placeholder="Buscar..." v-model="search" />
              </CForm>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="filteredItems"
            :fields="fields"
            :items-per-page="10"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #photo="data">
              <td>
                <div class="c-avatar">
                  <img :src="data.item.photo" alt="" class="c-avatar-img">
                </div>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import personsData from './PersonsData'
export default {
  name: 'Persons',
  data () {
    return {
      items: personsData,
      fields: [
        { key: 'name', label: 'Nome' },
        { key: 'photo', label: 'Foto' },
        { key: 'email', label: 'E-mail' },
        { key: 'company', label: 'Empresa' }
      ],
      activePage: 1,
      search: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.email.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.company.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      });
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    rowClicked (item, index) {
      this.$router.push({path: `persons/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
