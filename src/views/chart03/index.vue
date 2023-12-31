<template>
  <div>
    <h4>動態X軸寬、X軸資料筆數</h4>
    <p>X軸文字顯示數量 = 資料筆數除以10</p>
    <p>預設圖表寬1000px，如果x軸資料>=50筆，則寬度為資料筆數乘以20px<br>
      <small>(讓每筆資料可以有寬度20px)</small></p>
    <div class="chart-container" v-if="showChart">
      <chart class="my-chart" :style="XWidth" 
      ref="child_chart"
      :CO2Array="CO2Array"
      :PM25Array = "PM25Array"
      :XAxis = "XAxis"
      />
    </div>
    <div style="margin-top: 30px;">
      <input type="number" v-model="XDataNum">
      <button type="button" @click="changeDataNum()">更新X軸資料筆數</button><br>
    </div>
    <button @click="refresh()" style="margin-top: 30px;">刷新</button><br>
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
    computed:{
      XWidth() {
        // if(fakeLabels.length<=50)
        // if(fakeLabels.length<=50) {
        //   return 'width: 1000px;'
        // } else {
        //   return `width: ${fakeLabels.length * 20}px;`
        // }
        if(this.XDataNum <= 50) {
          return 'width: 1000px;'
        } else {
          return `width: ${this.XDataNum * 20}px;`
        }
      }
    },
    data() {
      return {
        showChart: true,
        CO2Array: [],
        PM25Array: [],
        XAxis: [],
        XDataNum: 0
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
      async changeDataNum() {
        this.XAxis = [];
        for(let i = 1; i<=parseInt(this.XDataNum); i++) {
          await this.XAxis.push(i) 
          // 上面await很重要!!!
          // 雖然vscode跳提示說那個await沒效果，但實際是我沒加的話圖表不會更新!!!
        }
        this.$refs.child_chart.getFatherData();
        this.refresh();
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.chart-container{
  width: 50%;
  margin: 0 auto;
  overflow-x: scroll;
  .my-chart {
    // width: 2000px;
    width: 1000px;
  }
}

</style>