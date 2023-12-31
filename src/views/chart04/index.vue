<template>
  <div>
    <h4>接續chart03 增加圖表資料量可調</h4>
    <p></p>
    <div class="chart-container" v-if="showChart">
      <chart class="my-chart" :style="XWidth" ref="child_chart" :CO2Array="CO2Array" :PM25Array="PM25Array"
        :XAxis="XAxis" />
    </div>
    <div style="margin-top: 30px;">
      <input type="number" v-model="XDataNum">
      <button type="button" @click="changeDataNum()" style="width: 150px;">更新X軸資料筆數</button><br>
      <input type="number" v-model="CO2DataNum">
      <button type="button" @click="changeCO2DataNum()" style="width: 150px;">更新CO2資料筆數</button><br>
      <input type="number" v-model="PM25DataNum">
      <button type="button" @click="changePM25DataNum()" style="width: 150px;">更新PM2.5資料筆數</button><br>
    </div>
    <button @click="refresh()" style="margin-top: 30px;">刷新</button><br>
  </div>
</template>

<script>
import { fakeCO2, fakePM25, fakeLabels } from './fakeData.js'
import chart from './chart.vue'
export default {
  components: { chart },
  created() {
    this.getData()
  },
  mounted() {
  },
  computed: {
    XWidth() {
      // if(fakeLabels.length<=50)
      // if(fakeLabels.length<=50) {
      //   return 'width: 1000px;'
      // } else {
      //   return `width: ${fakeLabels.length * 20}px;`
      // }
      if (this.XDataNum <= 50) {
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
      XDataNum: 0,
      CO2DataNum: 0,
      PM25DataNum: 0
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
      for (let i = 1; i <= parseInt(this.XDataNum); i++) {
        await this.XAxis.push(i)
        // 上面await很重要!!!
        // 雖然vscode跳提示說那個await沒效果，但實際是我沒加的話圖表不會更新!!!
      }
      this.$refs.child_chart.getFatherData();
      this.refresh();
    },
    async changeCO2DataNum() {
      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      this.CO2Array = []
      for (let i = 0; i < parseInt(this.CO2DataNum); i++) {
        await this.CO2Array.push(randomIntFromInterval(300, 600))
      }
      this.$refs.child_chart.getFatherData();
      this.$refs.child_chart.setPointRadius();
      this.refresh();
    },
    async changePM25DataNum() {
      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      this.PM25Array = [];
      for (let i = 0; i < parseInt(this.PM25DataNum); i++) {
        await this.PM25Array.push(randomIntFromInterval(1, 200))
      }
      this.$refs.child_chart.getFatherData();
      this.$refs.child_chart.setPointRadius();
      this.refresh();
    },
  }

}
</script>

<style lang="scss" scoped>
.chart-container {
  width: 50%;
  margin: 0 auto;
  overflow-x: scroll;
  @media (max-width: 1200px) {
    width: 90%;
  }

  .my-chart {
    // width: 2000px;
    width: 1000px;
  }
}
</style>