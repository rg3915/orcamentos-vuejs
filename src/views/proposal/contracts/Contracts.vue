<template>
  <CRow>
    <CCol col="12" xl="8">
      <CCard>
        <CCardHeader>
          <strong>Contratos</strong>
          <span class="float-right"><strong>{{ items.length }} itens</strong></span>
          <p>Contratos são orçamentos que foram aprovados. Consequentemente, possui um valor total e um vendedor.</p>
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
import contractsData from './ContractsData'
export default {
  name: 'Contracts',
  data () {
    return {
      items: contractsData,
      fields: [
        { key: 'id', label: 'Número' },
        { key: 'work', label: 'Obra' },
        { key: 'customer', label: 'Cliente' },
        { key: 'seller', label: 'Vendedor' },
        { key: 'value', label: 'Valor' },
        { key: 'date_conclusion', label: 'Data' }
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
      this.$router.push({path: `contracts/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
