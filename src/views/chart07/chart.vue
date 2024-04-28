<script>
//https://www.chartjs.org/chartjs-plugin-annotation/0.5.7/
// https://stackoverflow.com/questions/64878459/annotation-dont-show-in-vue-chartjs
import { Line } from 'vue-chartjs'
// import 'chartjs-plugin-crosshair';
import ChartAnnotation from 'chartjs-plugin-annotation';

export default {
  extends: Line,
  props: ['CO2Array', 'PM25Array', 'XAxis'],
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: 'PM2.5',
          backgroundColor: '#38a',
          borderColor: '#38a',
          data: [],
          fill: false,
          yAxisID: 'chart_1',
          lineTension: 0, // 設置為0以禁用曲線
          borderWidth: 1,
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
    
      elements: {
        point: {
          radius: 0 // 圓點尺寸 / 0=沒有圓點
        }
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
              display: true,
              fontColor: "#333",
              fontSize: 18,
              beginAtZero: true, // ???
              fixedStepSize: 10, // 設置固定的步長
            },
            gridLines: { // y軸網格線
              display: true,
              color: "#ccc"
            },
            scaleLabel: {
              display: true,
              labelString: 'PM2.5',
              fontColor: '#333',
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
              maxTicksLimit: 24, // x軸總共秀幾個item
            },
            gridLines: { //x軸網格線
              display: true,
              color: "#aaa"
            },
            scaleLabel: {
              display: true,
              labelString: '時間',
              fontColor: '#333',
              fontSize: 20
            },
          }
        ],
      },
      
      
      tooltips: { // hover視窗
        // mode: 'interpolate',
        mode: 'index',
        intersect: false,
        backgroundColor: '#ff00ff90',
        caretSize: 15, // 箭頭尺寸
        titleFontSize: 16,
        bodyFontSize: 22
      },
      annotation: {
        drawTime: "afterDraw",
        annotations: [{
          id:'xx01',
          drawTime: "afterDraw",
          type: 'line',
          mode: 'horizontal',
          scaleID: 'chart_1',
          value: '30',
          borderColor: '#f00',
          borderWidth: 2,
        },
        {
          id:'xx02',
          drawTime: "afterDraw",
          type: 'line',
          mode: 'horizontal',
          scaleID: 'chart_1',
          value: '20',
          borderColor: '#fa0',
          borderWidth: 2,
        },
        {
          id:'xx03',
          drawTime: "beforeDatasetsDraw",
          type: 'box',
          yScaleID: 'chart_1',
          // xScaleID: 'x-axis-0',
          // xMin: "01:00",
          // xMax: "10:00",
          yMin: 40,
          yMax: 50,
          backgroundColor: '#33ff3380'
        }]
      },

      plugins: {
        crosshair: {
          line: {
            color: '#f33',
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
    
    this.addPlugin(ChartAnnotation);
    this.renderChart(this.chartdata, {...this.options,annotation: Object.assign({}, this.options.annotation)})
    
  },
  computed: {
  },
  methods: {
    childFunc() {
      this.renderChart(this.chartdata, this.options)
    },
    getFatherData() {
      // this.chartdata.datasets[0].data = ["200", "300", "400", null, null,null,"500", "480", "521", "524","490"]
      this.chartdata.datasets[0].data = this.PM25Array
      this.chartdata.labels = this.XAxis
    },
  },
}
</script>

<style lang="scss" scoped>
</style>

