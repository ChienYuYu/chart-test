<script>
import { Line } from 'vue-chartjs'
import { fakeCO2, fakePM25, fakeHUM, fakeTMP, fakeLabels } from './fakeData.js'
import 'chartjs-plugin-crosshair';

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'CO2',
          backgroundColor: '#fa0',
          borderColor: '#fa0',
          data: [],
          fill: false,
          yAxisID: 'chart_co2',
          lineTension: 0, // 設置為0以禁用曲線
        },
        {
          label: 'PM2.5',
          backgroundColor: '#af0',
          borderColor: '#af0',
          data: [],
          fill: false,
          yAxisID: 'chart_1',
          lineTension: 0, // 設置為0以禁用曲線
        },
      ]
    },
    options: {
      responsive: true, // 預設true
      maintainAspectRatio: false, // 預設false
      tooltips: { // hover 顯示的設定
        backgroundColor: '#33333390',
        titleFontSize: 20,
        bodyFontSize: 20
      },
      title:{
        display: false,
        text: '標題標題',
        fontColor: '#fff',
        fontSize: 40,
        position: 'bottom',
      },
      legend: { //標籤
        display: false,
        position: 'top',
        align: 'end',
        labels: {
          fontColor: '#fff',
          fontSize: 24,
        }
      },
      scales : {
        yAxes:[
          {
            id: 'chart_1',
            ticks: { // y軸文字
              fontColor: "#fff",
              fontSize: 18,
              beginAtZero: true, // ???
              fixedStepSize: 10 // 設置固定的步長
            },
            gridLines: { // y軸網格線
              display: false,
              color: "#ccc"
            },
            scaleLabel: {
              display: true,
              labelString: 'PM2.5、溫度、濕度',
              fontColor: '#fff',
              fontSize: 20
            },
            position: 'left',
          },
          {
            id: 'chart_co2',
            // type: 'linear',
            ticks: {
              fontColor: '#fa0',
              fontSize: '18',
              beginAtZero: true, // 從0開始
              // fixedStepSize: 10 // 設置固定的步長
              display: false,
            },
            gridLines: {
              display: true,
              color: '#aaaaaa80'
            },
            scaleLabel: {
              display: false,
              labelString: 'CO2',
              fontColor: '#fa0',
              fontSize: 20
            },
            position: 'right',
          }
        ],
        xAxes:[
          {
            ticks: { // x軸文字
              fontColor: "#fff",
              fontSize: 18,
              // autoSkip: true,
              // maxTicksLimit: 10 // x軸總共秀幾個item
            },
            gridLines: { //x軸網格線
              display: false,
              color: "#888"
            },
            scaleLabel: {
              display: false,
              labelString: '時間',
              fontColor: '#fff',
              fontSize: 20
            },
          }
        ],
      },
      tooltips: { // hover視窗
        mode: 'interpolate',
        intersect: false,
        backgroundColor: '#ff00ff90',
        caretSize: 15, // 箭頭尺寸
        titleFontSize: 16,
        bodyFontSize: 22
      },
      plugins: {
        crosshair: {
          line: {
            color: '#f33',
            width: 3
          },
          sync: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
        },
      },
    },
  }),

  mounted () {
    this.fake_data();
    this.renderChart(this.chartdata, this.options)
  },
  computed: {
  },
  methods: {
    childFunc() {
      this.renderChart(this.chartdata, this.options)
    },
    fake_data() {
      this.chartdata.datasets[0].data = fakeCO2
      this.chartdata.datasets[1].data = fakePM25
      this.chartdata.labels = fakeLabels
    }
  },
}
</script>

<style lang="scss" scoped>
</style>