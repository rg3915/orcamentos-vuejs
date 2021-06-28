<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Obra id:  {{ $route.params.id }}
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
import worksData from './WorksData'
export default {
  name: 'Work',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.worksOpened = from.fullPath.includes('work')
    })
  },
  data () {
    return {
      worksOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.username, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    workData () {
      const id = this.$route.params.id
      const user = worksData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.workData.filter(param => param.key !== 'username')
    },
    username () {
      return this.workData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() {
      this.worksOpened ? this.$router.go(-1) : this.$router.push({path: '/works'})
    }
  }
}
</script>
