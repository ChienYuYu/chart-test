<template>
  <div class="wrapper">
    <h4>線圖、長條圖混搭</h4>
    <!-- <p>動畫效果500毫秒 easeOutElastic</p> -->
    <div class="chart-container" v-if="showChart">
      <chart class="my-chart"  ref="child_chart" :CO2Array="CO2Array" :PM25Array="PM25Array"
        :HUMArray="HUMArray" :TMPArray="TMPArray" :XAxis="XAxis" :TestArr="TestArr" />
    </div>
  </div>
</template>

<script>
import { fakeCO2, fakePM25, fakeLabels, fakeHUM, fakeTMP, testArr } from './fakeData.js'
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
      HUMArray: [],
      TMPArray: [],
      TestArr: [],
      XAxis: [],
      XDataNum: 0,
      CO2DataNum: 0,
      PM25DataNum: 0,
      HUMDataNum: 0,
      TMPDataNum: 0,
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
      this.HUMArray = fakeHUM;
      this.TMPArray = fakeTMP;
      this.TestArr = testArr;
    },
  }

}
</script>

<style lang="scss" scoped>

.wrapper{
  // background:#cccccc90;
}
.chart-container {
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 90%;
  }

  .my-chart {
    // width: 2000px;
    // width: 1200px;
  }
}
</style>