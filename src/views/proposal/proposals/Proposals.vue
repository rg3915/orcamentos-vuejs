<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          Orçamentos
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="10"
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
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{data.item.status}}
                </CBadge>
              </td>
            </template>
            <template #value="data">
              <td class="text-right">
                {{data.item.value|formatPrice}}
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import proposalsData from './ProposalsData'
export default {
  name: 'Proposals',
  data () {
    return {
      items: proposalsData,
      fields: [
        { key: 'id', label: 'Número' },
        { key: 'work', label: 'Obra' },
        { key: 'customer', label: 'Cliente' },
        { key: 'category', label: 'Categoria' },
        { key: 'employee', label: 'Funcionário' },
        { key: 'seller', label: 'Vendedor' },
        { key: 'status', label: 'Status' },
        { key: 'value', label: 'Valor' },
        { key: 'date_conclusion', label: 'Conclusão' }
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
  filters: {
    formatPrice(value) {
      return (value/1).toFixed(2).replace('.', ',').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
    getBadge (status) {
      switch (status) {
        case 'Cancelado': return 'secondary'
        case 'Não iniciado': return 'danger'
        case 'Em elaboração': return 'success'
        case 'Pendente': return 'warning'
        case 'Concluido': return 'info'
        case 'Aprovado': return 'primary'
        default: 'success'
      }
    },
    rowClicked (item, index) {
      this.$router.push({path: `proposals/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
