<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-crosshair';

export default {
  extends: Line,
  props: ['fakeData', 'fakeData02', 'XAxis'],
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'square wave sample',
          data: [],
          borderColor: '#f50',
          borderWidth: 0,
          fill: false,
          steppedLine: true, // 設置 steppedLine 為 true 來顯示方波
          borderDash: [10, 10] // 設置為虛線，數字代表虛線和空白的長度
        },
        {
          label: 'line',
          data: [],
          borderColor: '#a0f',
          borderWidth: 2,
          fill: false,
          steppedLine: false, // 設置 steppedLine 為 true 來顯示方波
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
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          fontColor: '#333',
          fontSize: 16,
        }
      },
      scales : {
        yAxes:[
          {
            id: 'chart_1',
            ticks: { // y軸文字
              fontColor: "#333",
              fontSize: 18,
              // fixedStepSize: 10, // 設置固定的步長
              beginAtZero: true, // ???
              stepSize:1,
            },
            gridLines: { // y軸網格線
              display: true,
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
        ],
        xAxes:[
          {
            ticks: { // x軸文字
              fontColor: "#333",
              fontSize: 18,
              // autoSkip: true,
              maxTicksLimit: 10 // x軸總共秀幾個item
            },
            gridLines: { //x軸網格線
              display: true,
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
            color: '#3f3',
            width: 1
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
    this.getFatherData();
    this.renderChart(this.chartdata, this.options)
  },
  computed: {
  },
  methods: {
    childFunc() {
      this.renderChart(this.chartdata, this.options)
    },
    getFatherData() {
      this.chartdata.datasets[0].data = this.fakeData
      this.chartdata.datasets[1].data = this.fakeData02
      this.chartdata.labels = this.XAxis
    },
  },
}
</script>

<style lang="scss" scoped>
</style>