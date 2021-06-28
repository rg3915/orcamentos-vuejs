<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Proposal id:  {{ $route.params.id }}
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
import proposalsData from './ProposalsData'
export default {
  name: 'Proposal',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.proposalsOpened = from.fullPath.includes('proposal')
    })
  },
  data () {
    return {
      proposalsOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.username, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    proposalData () {
      const id = this.$route.params.id
      const user = proposalsData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.proposalData.filter(param => param.key !== 'username')
    },
    username () {
      return this.proposalData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() {
      this.proposalsOpened ? this.$router.go(-1) : this.$router.push({path: '/proposals'})
    }
  }
}
</script>
