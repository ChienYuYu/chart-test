<template>
  <div>
    <h4>手動變更資料</h4>
    <div class="chart-container">
      <chart class="my-chart" 
      ref="child_chart"
      :CO2Array="CO2Array"
      :PM25Array = "PM25Array"
      :XAxis = "XAxis"
      />
    </div>
    <div class="data-input-wrap">
      <div class="co2-array">
        <h3>CO2</h3>
        <input type="text" v-for="(item, index) in CO2Array" v-model="CO2Array[index]">
      </div>
      <div class="co2-array">
        <h3>PM2.5</h3>
        <input type="text" v-for="(item, index) in PM25Array" v-model="PM25Array[index]">
      </div>
    </div>
    <button @click="refresh()" style="margin-top: 30px;">刷新</button>
  </div>
</template>

<script>
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
        this.CO2Array = [600,200,334,328,386,484,464,362,562,593,501,440,495,464,350,345,327,532,332,581]
        this.PM25Array = [79,24,1,64,45,100,17,58,193,66,121,44,116,106,120,159,21,73,77,25];
        this.XAxis = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
      },
    }
    
  }
</script>

<style lang="scss" scoped>
.chart-container{
  width: 900px;
  margin: 0 auto;
}

.data-input-wrap{
  margin-top: 50px;
  input{
    margin-bottom: 30px;
    width: 25px;
  }
}

</style>