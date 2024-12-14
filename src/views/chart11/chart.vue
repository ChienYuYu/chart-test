<script>
//https://www.chartjs.org/chartjs-plugin-annotation/0.5.7/
// https://stackoverflow.com/questions/64878459/annotation-dont-show-in-vue-chartjs
import { Line } from 'vue-chartjs'
// import 'chartjs-plugin-crosshair';
import ChartAnnotation from 'chartjs-plugin-annotation';

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['22:00','23:00',['00:00', '12/14'],'01:00','02:00','03:00','04:00','05:00','06:00','07:00'],
      datasets: [
        {
          label: 'PM2.5',
          backgroundColor: '#38a',
          borderColor: '#38a',
          data: [20,23,28,28,33,39,35,29,29,24],
          fill: false,
          yAxisID: 'chart_1',
          lineTension: 0, // 設置為0以禁用曲線
          borderWidth: 3,
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
        yAxes:[{
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
        }],
        xAxes:[{
          ticks: { // x軸文字
            fontColor: "#333",
            fontSize: 18,
            // autoSkip: true,
            maxTicksLimit: 24, // x軸總共秀幾個item
          },
          gridLines: { //x軸網格線
            display: true,
            color: "#ccc"
          },
          scaleLabel: {
            display: true,
            labelString: '時間',
            fontColor: '#333',
            fontSize: 20
          },
        }],
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
        annotations: [
          {
            id: 'temperature-line',
            drawTime: "afterDatasetsDraw",
            type: 'line',
            mode: 'horizontal',
            scaleID: 'chart_1',
            value: 26,
            borderColor: '#f00',
            borderWidth: 3,
            label: {
              enabled: true,
              content: '悶熱',
              position: 'right',
              backgroundColor: '#911A28',
              fontSize: 14,
              xPadding: 20,
              yPadding: 10,
              yAdjust: -25,
              xAdjust: 0,
            }
          },
          {
            id: 'temperature-line2',
            drawTime: "afterDatasetsDraw",
            type: 'line',
            mode: 'horizontal',
            scaleID: 'chart_1',
            value: 20,
            borderColor: '#A0D19A',
            borderWidth: 3,
            label: {
              enabled: true,
              content: '舒適',
              position: 'right',
              backgroundColor: '#618275',
              fontSize: 14,
              xPadding: 20,
              yPadding: 10,
              yAdjust: -25,
              xAdjust: 0,
            }
          },
        ]
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
    this.addPlugin(ChartAnnotation);

    // 深拷貝 options 以避免引用問題 // 解決annotations label文字沒出現
    const optionsCopy = JSON.parse(JSON.stringify(this.options)); //
    this.renderChart(this.chartdata, optionsCopy);
  },
  computed: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>