<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <strong>Clientes</strong>
          <span class="float-right"><strong>{{ items.length }} itens</strong></span>
          <CRow class="d-flex align-items-end">
            <CCol col="8">
              <p>Os clientes podem ser construtoras, escritórios de arquitetura ou pessoas físicas, que chamamos de cliente particular.</p>
            </CCol>
            <CCol col="4">
              <CForm inline>
                <CButton type="submit" size="sm" color="primary" class="mr-2">Adicionar</CButton>
                <CInput size="sm" placeholder="Buscar..." v-model="search" />
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
        return item.customer.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.email.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      });
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
