<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Cliente id:  {{ $route.params.id }}
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
import customersData from './CustomersData'
export default {
  name: 'Customer',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.customersOpened = from.fullPath.includes('customer')
    })
  },
  data () {
    return {
      customersOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.customer, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    userData () {
      const id = this.$route.params.id
      const user = customersData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.userData.filter(param => param.key !== 'customer')
    },
    customer () {
      return this.userData.filter(param => param.key === 'customer')[0].value
    }
  },
  methods: {
    goBack() {
      this.customersOpened ? this.$router.go(-1) : this.$router.push({path: '/customers'})
    }
  }
}
</script>
