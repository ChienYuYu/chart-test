<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-crosshair';

export default {
  extends: Line,
  props: ['CO2Array', 'PM25Array', 'XAxis'],
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
          lineTension: 0.1, // 設置為0以禁用曲線
        },
        {
          label: 'PM2.5',
          backgroundColor: '#af0',
          borderColor: '#af0',
          data: [],
          // pointRadius: [0, 0, 0, 5] ,
          pointRadius: [],
          fill: false,
          yAxisID: 'chart_1',
          lineTension: 0.1, // 設置為0以禁用曲線
        },
      ]
    },
    options: {
      responsive: true, // 預設true
      maintainAspectRatio: false, // 預設false
      elements: {
        point:{
          radius: 0 // 圓點尺寸 / 0=沒有圓點
        }
      },
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
              fontColor: "#333",
              fontSize: 18,
              // autoSkip: true,
              // maxTicksLimit: 10 // x軸總共秀幾個item
            },
            gridLines: { //x軸網格線
              display: false,
              color: "#333"
            },
            scaleLabel: {
              display: false,
              labelString: '時間',
              fontColor: '#333',
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

  created() {},
  mounted () {
    this.getFatherData();
    this.setPointRadius();
    this.renderChart(this.chartdata, this.options)
  },
  computed: {},
  methods: {
    childFunc() {
      this.renderChart(this.chartdata, this.options)
    },
   
    setPointRadius() {
      this.chartdata.datasets[0].pointRadius = this.CO2Array.map((item, index)=> {
        return index == this.chartdata.datasets[0].data.length -1 ? 7:0
      })
      this.chartdata.datasets[1].pointRadius = this.PM25Array.map((item, index)=> {
        return index == this.chartdata.datasets[1].data.length -1 ? 7:0
      })
    },
    getFatherData() {
      this.chartdata.datasets[0].data = this.CO2Array
      this.chartdata.datasets[1].data = this.PM25Array
      this.chartdata.labels = this.XAxis
    },
  },
}
</script>

<style lang="scss" scoped>
</style>