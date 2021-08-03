<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <strong>Obras</strong>
          <span class="float-right"><strong>{{ items.length }} itens</strong></span>
          <CRow class="d-flex align-items-end">
            <CCol col="8">
              <p>Obras são o contexto principal de cada orçamento. E cada cliente pode possuir várias obras.</p>
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
import worksData from './WorksData'
export default {
  name: 'Works',
  data () {
    return {
      items: worksData,
      fields: [
        { key: 'work', label: 'Obra' },
        { key: 'customer', label: 'Cliente' },
        { key: 'address', label: 'Endereço' },
        { key: 'district', label: 'Bairro' },
        { key: 'city', label: 'Cidade' },
        { key: 'uf', label: 'UF' },
        { key: 'person', label: 'Contato' },
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
               item.address.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.district.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.city.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.uf.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
               item.person.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
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
      this.$router.push({path: `works/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
