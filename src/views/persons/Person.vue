<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Person id:  {{ $route.params.id }}
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
import personsData from './PersonsData'
export default {
  name: 'Person',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.personsOpened = from.fullPath.includes('person')
    })
  },
  data () {
    return {
      personsOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.username, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    userData () {
      const id = this.$route.params.id
      const user = personsData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.userData.filter(param => param.key !== 'username')
    },
    username () {
      return this.userData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() {
      this.personsOpened ? this.$router.go(-1) : this.$router.push({path: '/persons'})
    }
  }
}
</script>
