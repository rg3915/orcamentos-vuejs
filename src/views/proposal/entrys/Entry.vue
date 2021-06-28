<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          Entrada id:  {{ $route.params.id }}
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
import entrysData from './EntrysData'
export default {
  name: 'Entry',
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.entrysOpened = from.fullPath.includes('entry')
    })
  },
  data () {
    return {
      entrysOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.username, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    entryData () {
      const id = this.$route.params.id
      const user = entrysData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.entryData.filter(param => param.key !== 'username')
    },
    username () {
      return this.entryData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() {
      this.entrysOpened ? this.$router.go(-1) : this.$router.push({path: '/entrys'})
    }
  }
}
</script>
