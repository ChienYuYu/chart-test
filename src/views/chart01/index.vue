<template>
  <div>
    <h1>test</h1>
    <div class="chart-container">
      <chart class="my-chart" />
    </div>
  </div>
</template>

<script>
  import chart from './chart.vue'
  export default {
    components: {chart},
    
  }
</script>

<style lang="scss" scoped>
.chart-container{
  width: 50%;
  margin: 0 auto;
  overflow-x: scroll;
  .my-chart {
    width: 2000px;
  }
}

</style>