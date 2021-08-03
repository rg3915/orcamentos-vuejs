<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <strong>Entradas</strong>
          <span class="float-right"><strong>{{ items.length }} itens</strong></span>
          <CRow class="d-flex align-items-end">
            <CCol col="8">
              <p>Entradas são orçamentos que ainda não foram feitos. Inicialmente ele não tem uma numeração e nem um funcionário designado a ele.</p>
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
            :items-per-page="5"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #priority="data">
              <td>
                <CBadge :color="getBadgePriority(data.item.priority)">
                  {{data.item.priority}}
                </CBadge>
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import entrysData from './EntrysData'
export default {
  name: 'Entrys',
  data () {
    return {
      items: entrysData,
      fields: [
        { key: 'work', label: 'Obra' },
        { key: 'customer', label: 'Cliente' },
        { key: 'seller', label: 'Vendedor' },
        { key: 'priority', label: 'Prioridade' },
        { key: 'category', label: 'Categoria' },
        { key: 'description', label: 'Descrição' },
        { key: 'created', label: 'Criado em' }
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
        return item.work.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.customer.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.seller.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.description.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      });
    }
  },
  methods: {
    getBadgePriority (priority) {
      switch (priority) {
        case 'Urgente': return 'danger'
        case 'Alta': return 'warning'
        case 'Normal': return 'info'
        case 'Baixa': return 'secondary'
        default: 'info'
      }
    },
    rowClicked (item, index) {
      this.$router.push({path: `entrys/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
