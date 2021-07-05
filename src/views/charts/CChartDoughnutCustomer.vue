<template>
  <CChartDoughnut
    :datasets="defaultDatasets"
    :labels="['Construtora', 'Arquitetura', 'Particular']"
  />
</template>

<script>
import { CChartDoughnut } from '@coreui/vue-chartjs'

export default {
  name: 'CChartDoughnutCustomer',
  components: { CChartDoughnut },
  computed: {
    defaultDatasets () {
      return [
        {
          backgroundColor: [
            '#009bde',
            '#44ad41',
            '#ffb619',
          ],
          data: [55, 25, 20]
        }
      ]
    }
  }
}
</script>
