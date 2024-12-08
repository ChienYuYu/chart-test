<template>
  <div>
    <h4>方波<br>square wave</h4>
    <div class="chart-container">
      <chart class="my-chart"
      :fakeData="fakeData"
      :fakeData02="fakeData02"
      :XAxis="XAxis"/>
    </div>
  </div>
</template>

<script>
  import chart from './chart.vue'
import { fakeData, fakeData02, fakeLabels } from './fakeData.js'

  export default {
    components: {chart},
    created() {
      this.getData()
    },
    mounted() {},
    data() {
      return {
        fakeData: [],
        XAxis: []
      }
    },
    methods: {
      getData() {
        this.fakeData = fakeData;
        this.fakeData02 = fakeData02;
        this.XAxis = fakeLabels;
      },
    },
    
  }
</script>

<style lang="scss" scoped>
.chart-container{
  width: 50%;
  margin: 0 auto;
  // overflow-x: scroll;
  @media (max-width: 1200px) {
    width: 90%;
  }
  .my-chart {
    width: 1000px;
  }
}

</style>