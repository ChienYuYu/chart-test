<template>
  <div>
    <h1>sample</h1>
    <div class="chart-container">
      <chart class="my-chart"
      :CO2Array="CO2Array"
      :PM25Array="PM25Array"
      :XAxis="XAxis"/>
    </div>
  </div>
</template>

<script>
  import chart from './chart.vue'
import { fakeCO2, fakePM25, fakeHUM, fakeTMP, fakeLabels } from './fakeData.js'

  export default {
    components: {chart},
    created() {
      this.getData()
    },
    mounted() {},
    data() {
      return {
        CO2Array: [],
        PM25Array: [],
        XAxis: []
      }
    },
    methods: {
      getData() {
        this.CO2Array = fakeCO2;
        this.PM25Array = fakePM25;
        this.XAxis = fakeLabels;
      },
    },
    
  }
</script>

<style lang="scss" scoped>
.chart-container{
  width: 50%;
  margin: 0 auto;
  overflow-x: scroll;
  @media (max-width: 1200px) {
    width: 90%;
  }
  .my-chart {
    width: 2000px;
  }
}

</style>