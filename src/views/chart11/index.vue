<template>
  <div class="wrapper">
    <h1>指標範圍帶/指標線</h1>
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

  export default {
    components: {chart},
    created() {},
    mounted() {},
    data() {
      return {
        CO2Array: [],
        PM25Array: [],
        XAxis: []
      }
    },
    methods: {},
    
  }
</script>

<style lang="scss" scoped>
.wrapper{
  width: 100vw;
  position: relative;
  margin-top: 40px;
}
.chart-container{
  width: 1200PX;
  margin: 0 auto;
  // overflow-x: scroll;
  // @media (max-width: 1200px) {
    //   width: 90%;
    // }
    .my-chart {
    height: 500px;
  }
}

</style>