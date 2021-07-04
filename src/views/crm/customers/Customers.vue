<template>
  <CRow>
    <CCol col="12" xl="9">
      <CCard>
        <CCardHeader>
          Clientes
          <span class="float-right">{{ items.length }} itens</span>
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
            <template #type_customer="data">
              <td>
                <CBadge :color="getBadge(data.item.type_customer)">
                  {{data.item.type_customer}}
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
import customersData from './CustomersData'
export default {
  name: 'Customers',
  data () {
    return {
      items: customersData,
      fields: [
        { key: 'customer', label: 'Cliente' },
        { key: 'email', label: 'E-mail' },
        { key: 'phone', label: 'Telefone' },
        { key: 'type_customer', label: 'Tipo de cliente' },
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
    getBadge (type_customer) {
      switch (type_customer) {
        case 'Particular': return 'warning'
        case 'Arquitetura': return 'success'
        case 'Construtora': return 'info'
        default: 'info'
      }
    },
    rowClicked (item, index) {
      this.$router.push({path: `customers/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
