<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          Entradas
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="5"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{data.item.status}}
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
      activePage: 1
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
      this.$router.push({path: `entrys/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
