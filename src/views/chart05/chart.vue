<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-crosshair';

export default {
  extends: Line,
  props: ['CO2Array', 'PM25Array', 'XAxis', 'HUMArray', 'TMPArray'],
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
          borderWidth: 1.5,
        },
        {
          label: 'PM2.5',
          backgroundColor: '#af0',
          borderColor: '#af0',
          data: [],
          pointRadius: [],
          fill: false,
          yAxisID: 'chart_1',
          lineTension: 0.1, // 設置為0以禁用曲線
          borderWidth: 1.5,
        },
        {
          label: 'HUM',
          backgroundColor: '#f0a',
          borderColor: '#f0a',
          data: [],
          pointRadius: [],
          fill: false,
          yAxisID: 'chart_1',
          lineTension: 0.1, // 設置為0以禁用曲線
          borderWidth: 1.5,
        },
        {
          label: 'TMP',
          backgroundColor: '#0af',
          borderColor: '#0af',
          data: [],
          pointRadius: [],
          fill: false,
          yAxisID: 'chart_1',
          lineTension: 0.1, // 設置為0以禁用曲線
          borderWidth: 1.5,
        },
      ]
    },
    options: {
      responsive: true, // 預設true
      maintainAspectRatio: false, // 預設false
      animation: {
        duration: 500, // 0=禁用動畫
        easing: 'easeOutElastic',
      },
      elements: {
        point: {
          radius: 0 // 圓點尺寸 / 0=沒有圓點
        }
      },
      tooltips: { // hover 顯示的設定
        backgroundColor: '#33333390',
        titleFontSize: 20,
        bodyFontSize: 20
      },
      title: {
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
          fontColor: '#333',
          fontSize: 24,
        }
      },
      scales: {
        yAxes: [
          {
            id: 'chart_1',
            ticks: { // y軸文字
              display: true,
              fontColor: "#333",
              fontSize: 14,
              beginAtZero: true, // ???
              fixedStepSize: 10 // 設置固定的步長
            },
            gridLines: { // y軸網格線
              display: true,
              color: "#ccc"
            },
            scaleLabel: {
              display: true,
              labelString: 'PM2.5、溫度、濕度',
              fontColor: '#333',
              fontSize: 12
            },
            position: 'left',
          },
          {
            id: 'chart_co2',
            // type: 'linear',
            ticks: {
              fontColor: '#fa0',
              fontSize: '14',
              beginAtZero: true, // 從0開始
              // fixedStepSize: 10 // 設置固定的步長
              display: true,
            },
            gridLines: {
              display: false,
              color: '#aaaaaa80'
            },
            scaleLabel: {
              display: true,
              labelString: 'CO2',
              fontColor: '#fa0',
              fontSize: 12
            },
            position: 'right',
          },
          // {
          //   id: 'chart_hum',
          //   // type: 'linear',
          //   ticks: {
          //     fontColor: '#f0a',
          //     fontSize: '18',
          //     beginAtZero: true, // 從0開始
          //     // fixedStepSize: 10 // 設置固定的步長
          //     display: false,
          //   },
          //   gridLines: {
          //     display: false,
          //     color: '#aaaaaa80'
          //   },
          //   scaleLabel: {
          //     display: false,
          //     labelString: 'HUM',
          //     fontColor: '#f0a',
          //     fontSize: 20
          //   },
          //   position: 'left',
          // },
          // {
          //   id: 'chart_tmp',
          //   // type: 'linear',
          //   ticks: {
          //     fontColor: '#0af',
          //     fontSize: '18',
          //     beginAtZero: true, // 從0開始
          //     // fixedStepSize: 10 // 設置固定的步長
          //     display: false,
          //   },
          //   gridLines: {
          //     display: false,
          //     color: '#aaaaaa80'
          //   },
          //   scaleLabel: {
          //     display: false,
          //     labelString: 'HUM',
          //     fontColor: '#0af',
          //     fontSize: 20
          //   },
          //   position: 'left',
          // }
        ],
        xAxes: [
          {
            ticks: { // x軸文字
              fontColor: "#333",
              fontSize: 18,
              // autoSkip: true,
              // maxTicksLimit: 10 // x軸總共秀幾個item
              maxTicksLimit: 0,
              fontSize: 14,
              maxRotation: 0,
              minRotation: 0,
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
            color: '#333',
            width: 2
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

  created() { },
  mounted() {
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
      this.chartdata.datasets[0].pointRadius = this.CO2Array.map((item, index) => {
        return index == this.chartdata.datasets[0].data.length - 1 ? 6 : 2
      })
      this.chartdata.datasets[1].pointRadius = this.PM25Array.map((item, index) => {
        return index == this.chartdata.datasets[1].data.length - 1 ? 6 : 2
      })
      this.chartdata.datasets[2].pointRadius = this.HUMArray.map((item, index) => {
        return index == this.chartdata.datasets[2].data.length - 1 ? 6 : 2
      })
      this.chartdata.datasets[3].pointRadius = this.TMPArray.map((item, index) => {
        return index == this.chartdata.datasets[3].data.length - 1 ? 6 : 2
      })
    },
    getFatherData() {
      this.chartdata.datasets[0].data = this.CO2Array
      this.chartdata.datasets[1].data = this.PM25Array
      this.chartdata.datasets[2].data = this.HUMArray
      this.chartdata.datasets[3].data = this.TMPArray
      this.chartdata.labels = this.XAxis
      this.options.scales.xAxes[0].ticks.maxTicksLimit = this.XAxis.length / 4
    },
  },
}
</script>

<style lang="scss" scoped></style>