<template>
  <div>
    <h5>最後一筆資料才顯示圓點</h5>
    <div class="chart-container">
      <chart class="my-chart" 
      ref="child_chart"
      :CO2Array="CO2Array"
      :PM25Array = "PM25Array"
      :XAxis = "XAxis"
      />
    </div>
    <button @click="refresh()" style="margin-top: 30px;">刷新</button>
  </div>
</template>

<script>
import { fakeCO2, fakePM25, fakeLabels } from './fakeData.js'
  import chart from './chart.vue'
  export default {
    components: {chart},
    created() {
      this.getData()
    },
    mounted() {
    },
    data() {
      return {
        CO2Array: [],
        PM25Array: [],
        XAxis: [],
      }
    },
    methods: {
      refresh() {
        this.$refs.child_chart.childFunc();
      },
      getData() {
        this.CO2Array = fakeCO2;
        this.PM25Array = fakePM25;
        this.XAxis = fakeLabels;
      },
    }
    
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