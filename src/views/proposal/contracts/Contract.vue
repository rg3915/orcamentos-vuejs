<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Contrato id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import contractsData from './ContractsData'
export default {
  name: 'Contract',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.contractsOpened = from.fullPath.includes('contract')
    })
  },
  data () {
    return {
      contractsOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.id, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    contractData () {
      const id = this.$route.params.id
      const user = contractsData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.contractData.filter(param => param.key !== 'id')
    },
    id () {
      return this.contractData.filter(param => param.key === 'id')[0].value
    }
  },
  methods: {
    goBack() {
      this.contractsOpened ? this.$router.go(-1) : this.$router.push({path: '/contracts'})
    }
  }
}
</script>
