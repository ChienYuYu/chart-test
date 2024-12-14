(self["webpackChunk_2023chart_test"]=self["webpackChunk_2023chart_test"]||[]).push([[745],{3745:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return D}});var s=function(){var t=this,a=t._self._c;return a("div",[a("h4",[t._v("接續chart03 增加圖表資料量可調")]),a("p"),t.showChart?a("div",{staticClass:"chart-container"},[a("chart",{ref:"child_chart",staticClass:"my-chart",style:t.XWidth,attrs:{CO2Array:t.CO2Array,PM25Array:t.PM25Array,XAxis:t.XAxis}})],1):t._e(),a("div",{staticStyle:{"margin-top":"30px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.XDataNum,expression:"XDataNum"}],attrs:{type:"number"},domProps:{value:t.XDataNum},on:{input:function(a){a.target.composing||(t.XDataNum=a.target.value)}}}),a("button",{staticStyle:{width:"150px"},attrs:{type:"button"},on:{click:function(a){return t.changeDataNum()}}},[t._v("更新X軸資料筆數")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.CO2DataNum,expression:"CO2DataNum"}],attrs:{type:"number"},domProps:{value:t.CO2DataNum},on:{input:function(a){a.target.composing||(t.CO2DataNum=a.target.value)}}}),a("button",{staticStyle:{width:"150px"},attrs:{type:"button"},on:{click:function(a){return t.changeCO2DataNum()}}},[t._v("更新CO2資料筆數")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.PM25DataNum,expression:"PM25DataNum"}],attrs:{type:"number"},domProps:{value:t.PM25DataNum},on:{input:function(a){a.target.composing||(t.PM25DataNum=a.target.value)}}}),a("button",{staticStyle:{width:"150px"},attrs:{type:"button"},on:{click:function(a){return t.changePM25DataNum()}}},[t._v("更新PM2.5資料筆數")]),a("br")]),a("button",{staticStyle:{"margin-top":"30px"},on:{click:function(a){return t.refresh()}}},[t._v("刷新")]),a("br")])},i=[];const r=[],o=[],n=[],l=[],c=[];function h(t,a){return Math.floor(Math.random()*(a-t+1)+t)}for(let C=0;C<10;C++)r.push(h(300,600));for(let C=0;C<10;C++)o.push(h(1,200));for(let C=0;C<100;C++)n.push(h(1,100));for(let C=0;C<100;C++)l.push(h(15,35));for(let C=1;C<=10;C++)c.push(C);var d,u,p=e(6663),x=(e(1243),{extends:p.x1,props:["CO2Array","PM25Array","XAxis"],data:()=>({chartdata:{labels:[],datasets:[{label:"CO2",backgroundColor:"#fa0",borderColor:"#fa0",data:[],fill:!1,yAxisID:"chart_co2",lineTension:.1},{label:"PM2.5",backgroundColor:"#af0",borderColor:"#af0",data:[],pointRadius:[],fill:!1,yAxisID:"chart_1",lineTension:.1}]},options:{responsive:!0,maintainAspectRatio:!1,elements:{point:{radius:0}},tooltips:{backgroundColor:"#33333390",titleFontSize:20,bodyFontSize:20},title:{display:!1,text:"標題標題",fontColor:"#fff",fontSize:40,position:"bottom"},legend:{display:!1,position:"top",align:"end",labels:{fontColor:"#fff",fontSize:24}},scales:{yAxes:[{id:"chart_1",ticks:{fontColor:"#fff",fontSize:18,beginAtZero:!0,fixedStepSize:10},gridLines:{display:!1,color:"#ccc"},scaleLabel:{display:!0,labelString:"PM2.5、溫度、濕度",fontColor:"#fff",fontSize:20},position:"left"},{id:"chart_co2",ticks:{fontColor:"#fa0",fontSize:"18",beginAtZero:!0,display:!1},gridLines:{display:!0,color:"#aaaaaa80"},scaleLabel:{display:!1,labelString:"CO2",fontColor:"#fa0",fontSize:20},position:"right"}],xAxes:[{ticks:{fontColor:"#333",fontSize:18,maxTicksLimit:0},gridLines:{display:!1,color:"#333"},scaleLabel:{display:!1,labelString:"時間",fontColor:"#333",fontSize:20}}]},tooltips:{mode:"interpolate",intersect:!1,backgroundColor:"#ff00ff90",caretSize:15,titleFontSize:16,bodyFontSize:22},plugins:{crosshair:{line:{color:"#f33",width:3},sync:{enabled:!1},zoom:{enabled:!1}}}}}),created(){},mounted(){this.getFatherData(),this.setPointRadius(),this.renderChart(this.chartdata,this.options)},computed:{},methods:{childFunc(){this.renderChart(this.chartdata,this.options)},setPointRadius(){this.chartdata.datasets[0].pointRadius=this.CO2Array.map(((t,a)=>a==this.chartdata.datasets[0].data.length-1?7:3)),this.chartdata.datasets[1].pointRadius=this.PM25Array.map(((t,a)=>a==this.chartdata.datasets[1].data.length-1?7:3))},getFatherData(){this.chartdata.datasets[0].data=this.CO2Array,this.chartdata.datasets[1].data=this.PM25Array,this.chartdata.labels=this.XAxis,this.options.scales.xAxes[0].ticks.maxTicksLimit=this.XAxis.length/10}}}),g=x,m=e(3736),f=(0,m.Z)(g,d,u,!1,null,"6879f2ca",null),v=f.exports,y={components:{chart:v},created(){this.getData()},mounted(){},computed:{XWidth(){return this.XDataNum<=50?"width: 1000px;":`width: ${20*this.XDataNum}px;`}},data(){return{showChart:!0,CO2Array:[],PM25Array:[],XAxis:[],XDataNum:0,CO2DataNum:0,PM25DataNum:0}},methods:{refresh(){this.$refs.child_chart.childFunc()},getData(){this.CO2Array=r,this.PM25Array=o,this.XAxis=c},async changeDataNum(){this.XAxis=[];for(let t=1;t<=parseInt(this.XDataNum);t++)await this.XAxis.push(t);this.$refs.child_chart.getFatherData(),this.refresh()},async changeCO2DataNum(){function t(t,a){return Math.floor(Math.random()*(a-t+1)+t)}this.CO2Array=[];for(let a=0;a<parseInt(this.CO2DataNum);a++)await this.CO2Array.push(t(300,600));this.$refs.child_chart.getFatherData(),this.$refs.child_chart.setPointRadius(),this.refresh()},async changePM25DataNum(){function t(t,a){return Math.floor(Math.random()*(a-t+1)+t)}this.PM25Array=[];for(let a=0;a<parseInt(this.PM25DataNum);a++)await this.PM25Array.push(t(1,200));this.$refs.child_chart.getFatherData(),this.$refs.child_chart.setPointRadius(),this.refresh()}}},b=y,A=(0,m.Z)(b,s,i,!1,null,"b04c57ce",null),D=A.exports},1243:function(t,a,e){
/*!
 * chartjs-plugin-crosshair v1.1.6
 * https://chartjs-plugin-crosshair.netlify.com
 * (c) 2020 Chart.js Contributors
 * Released under the MIT license
 */
(function(t,a){a(e(7757))})(0,(function(t){"use strict";function a(t){t.Interaction.modes.interpolate=function(a,e,s){for(var i=[],r=0;r<a.data.datasets.length;r++)if(a.data.datasets[r].interpolate){var o=a.getDatasetMeta(r);if(!o.hidden){var n=a.scales[o.xAxisID],l=a.scales[o.yAxisID],c=n.getValueForPixel(e.x),h=a.data.datasets[r].data,d=h.findIndex((function(t){return t.x>=c}));if(-1!==d){var u=h[d-1],p=h[d];if(u&&p)var x=(p.y-u.y)/(p.x-u.x),g=u.y+(c-u.x)*x;if(a.data.datasets[r].steppedLine&&u&&(g=u.y),!isNaN(g)){var m=l.getPixelForValue(g);if(!isNaN(m)){var f={value:g,xValue:c,tooltipPosition:function(){return this._model},hasValue:function(){return!0},_model:{x:e.x,y:m},_datasetIndex:r,_index:i.length,_xScale:{getLabelForIndex:function(t){return i[t].xValue}},_yScale:{getLabelForIndex:function(t){return i[t].value}},_chart:a};i.push(f)}}}}}var v=t.Interaction.modes.x(a,e,s);for(d=0;d<v.length;d++){var y=v[d];a.data.datasets[y._datasetIndex].interpolate||i.push(y)}return i}}function e(t){var a=t.helpers,e={line:{color:"#F66",width:1,dashPattern:[]},sync:{enabled:!0,group:1,suppressTooltips:!1},zoom:{enabled:!0,zoomboxBackgroundColor:"rgba(66,133,244,0.2)",zoomboxBorderColor:"#48F",zoomButtonText:"Reset Zoom",zoomButtonClass:"reset-zoom"},snap:{enabled:!1},callbacks:{beforeZoom:function(t,a){return!0},afterZoom:function(t,a){}}},s={id:"crosshair",afterInit:function(t){if(0!=t.config.options.scales.xAxes.length){var a=t.config.options.scales.xAxes[0].type;if("linear"===a||"time"===a||"category"===a||"logarithmic"===xscaleType){void 0===t.options.plugins.crosshair&&(t.options.plugins.crosshair=e),t.crosshair={enabled:!1,x:null,originalData:[],originalXRange:{},dragStarted:!1,dragStartX:null,dragEndX:null,suppressTooltips:!1,reset:function(){this.resetZoom(t,!1,!1)}.bind(this)};var s=this.getOption(t,"sync","enabled");s&&(t.crosshair.syncEventHandler=function(a){this.handleSyncEvent(t,a)}.bind(this),t.crosshair.resetZoomEventHandler=function(a){var e=this.getOption(t,"sync","group");a.chartId!==t.id&&a.syncGroup===e&&this.resetZoom(t,!0)}.bind(this),window.addEventListener("sync-event",t.crosshair.syncEventHandler),window.addEventListener("reset-zoom-event",t.crosshair.resetZoomEventHandler)),t.panZoom=this.panZoom.bind(this,t)}}},destroy:function(t){var a=this.getOption(t,"sync","enabled");a&&(window.removeEventListener("sync-event",t.crosshair.syncEventHandler),window.removeEventListener("reset-zoom-event",t.crosshair.resetZoomEventHandler))},panZoom:function(t,a){if(0!==t.crosshair.originalData.length){var e=t.crosshair.end-t.crosshair.start,s=t.crosshair.min,i=t.crosshair.max;a<0?(t.crosshair.start=Math.max(t.crosshair.start+a,s),t.crosshair.end=t.crosshair.start===s?s+e:t.crosshair.end+a):(t.crosshair.end=Math.min(t.crosshair.end+a,t.crosshair.max),t.crosshair.start=t.crosshair.end===i?i-e:t.crosshair.start+a),this.doZoom(t,t.crosshair.start,t.crosshair.end)}},getOption:function(t,s,i){return a.getValueOrDefault(t.options.plugins.crosshair[s]?t.options.plugins.crosshair[s][i]:void 0,e[s][i])},getXScale:function(t){return t.data.datasets.length?t.scales[t.getDatasetMeta(0).xAxisID]:null},getYScale:function(t){return t.scales[t.getDatasetMeta(0).yAxisID]},handleSyncEvent:function(t,a){var e=this.getOption(t,"sync","group");if(a.chartId!==t.id&&a.syncGroup===e){var s=this.getXScale(t);if(s){var i=void 0===a.original.native.buttons?a.original.native.which:a.original.native.buttons;"mouseup"===a.original.type&&(i=0);var r={type:a.original.type,chart:t,x:s.getPixelForValue(a.xValue),y:a.original.y,native:{buttons:i},stop:!0};t.controller.eventHandler(r)}}},afterEvent:function(t,a){if(0!=t.config.options.scales.xAxes.length){var e=t.config.options.scales.xAxes[0].type;if("linear"===e||"time"===e||"category"===e||"logarithmic"===xscaleType){var s=this.getXScale(t);if(s){var i=void 0===a.native.buttons?a.native.which:a.native.buttons;"mouseup"===a.native.type&&(i=0);var r=this.getOption(t,"sync","enabled"),o=this.getOption(t,"sync","group");if(!a.stop&&r){var n=new CustomEvent("sync-event");n.chartId=t.id,n.syncGroup=o,n.original=a,n.xValue=s.getValueForPixel(a.x),window.dispatchEvent(n)}var l=this.getOption(t,"sync","suppressTooltips");if(t.crosshair.suppressTooltips=a.stop&&l,t.crosshair.enabled="mouseout"!==a.type&&a.x>s.getPixelForValue(s.min)&&a.x<s.getPixelForValue(s.max),!t.crosshair.enabled)return a.x>s.getPixelForValue(s.max)&&t.update(),!0;var c=this.getOption(t,"zoom","enabled");if(1===i&&!t.crosshair.dragStarted&&c&&(t.crosshair.dragStartX=a.x,t.crosshair.dragStarted=!0),t.crosshair.dragStarted&&0===i){t.crosshair.dragStarted=!1;var h=s.getValueForPixel(t.crosshair.dragStartX),d=s.getValueForPixel(t.crosshair.x);Math.abs(t.crosshair.dragStartX-t.crosshair.x)>1&&this.doZoom(t,h,d),t.update()}t.crosshair.x=a.x,t.draw()}}}},afterDraw:function(t){if(t.crosshair.enabled)return t.crosshair.dragStarted?this.drawZoombox(t):(this.drawTraceLine(t),this.interpolateValues(t),this.drawTracePoints(t)),!0},beforeTooltipDraw:function(t){return!t.crosshair.dragStarted&&!t.crosshair.suppressTooltips},resetZoom:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e){for(var s=0;s<t.data.datasets.length;s++){var i=t.data.datasets[s];i.data=t.crosshair.originalData.shift(0)}var r="ticks";t.options.scales.xAxes[0].time&&(r="time"),t.crosshair.originalXRange.min?(t.options.scales.xAxes[0][r].min=t.crosshair.originalXRange.min,t.crosshair.originalXRange.min=null):delete t.options.scales.xAxes[0][r].min,t.crosshair.originalXRange.max?(t.options.scales.xAxes[0][r].max=t.crosshair.originalXRange.max,t.crosshair.originalXRange.max=null):delete t.options.scales.xAxes[0][r].max}t.crosshair.button&&t.crosshair.button.parentNode&&(t.crosshair.button.parentNode.removeChild(t.crosshair.button),t.crosshair.button=!1);var o=this.getOption(t,"sync","enabled");if(!a&&e&&o){var n=this.getOption(t,"sync","group"),l=new CustomEvent("reset-zoom-event");l.chartId=t.id,l.syncGroup=n,window.dispatchEvent(l)}if(e){var c=t.options.animation;t.options.animation=!1,t.update(),t.options.animation=c}},doZoom:function(t,s,i){if(s>i){var r=s;s=i,i=r}var o=a.getValueOrDefault(t.options.plugins.crosshair.callbacks?t.options.plugins.crosshair.callbacks.beforeZoom:void 0,e.callbacks.beforeZoom);if(!o(s,i))return!1;if("time"===t.options.scales.xAxes[0].type?(t.options.scales.xAxes[0].time.min&&0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.min=t.options.scales.xAxes[0].time.min),t.options.scales.xAxes[0].time.max&&0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.max=t.options.scales.xAxes[0].time.max)):(t.options.scales.xAxes[0].ticks.min&&void 0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.min=t.options.scales.xAxes[0].ticks.min),t.options.scales.xAxes[0].ticks.max&&void 0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.max=t.options.scales.xAxes[0].ticks.max)),!t.crosshair.button){var n=document.createElement("button"),l=this.getOption(t,"zoom","zoomButtonText"),c=this.getOption(t,"zoom","zoomButtonClass"),h=document.createTextNode(l);n.appendChild(h),n.className=c,n.addEventListener("click",function(){this.resetZoom(t)}.bind(this)),t.canvas.parentNode.appendChild(n),t.crosshair.button=n}t.options.scales.xAxes[0].time?(t.options.scales.xAxes[0].time.min=s,t.options.scales.xAxes[0].time.max=i):(t.options.scales.xAxes[0].ticks.min=s,t.options.scales.xAxes[0].ticks.max=i);for(var d=0===t.crosshair.originalData.length,u=0;u<t.data.datasets.length;u++){var p=[],x=0,g=!1,m=!1;d&&(t.crosshair.originalData[u]=t.data.datasets[u].data);for(var f=t.crosshair.originalData[u],v=0;v<f.length;v++){var y=f[v],b=this.getXScale(t).getRightValue(y);b>=s&&!g&&x>0&&(p.push(f[x-1]),g=!0),b>=s&&b<=i&&p.push(y),b>i&&!m&&x<f.length&&(p.push(y),m=!0),x+=1}t.data.datasets[u].data=p}if(t.crosshair.start=s,t.crosshair.end=i,d){var A=this.getXScale(t);t.crosshair.min=A.min,t.crosshair.max=A.max}t.update();var D=this.getOption(t,"callbacks","afterZoom");D(s,i)},drawZoombox:function(t){var a=this.getYScale(t),e=this.getOption(t,"zoom","zoomboxBorderColor"),s=this.getOption(t,"zoom","zoomboxBackgroundColor");t.ctx.beginPath(),t.ctx.rect(t.crosshair.dragStartX,a.getPixelForValue(a.max),t.crosshair.x-t.crosshair.dragStartX,a.getPixelForValue(a.min)-a.getPixelForValue(a.max)),t.ctx.lineWidth=1,t.ctx.strokeStyle=e,t.ctx.fillStyle=s,t.ctx.fill(),t.ctx.fillStyle="",t.ctx.stroke(),t.ctx.closePath()},drawTraceLine:function(t){var a=this.getYScale(t),e=this.getOption(t,"line","width"),s=this.getOption(t,"line","color"),i=this.getOption(t,"line","dashPattern"),r=this.getOption(t,"snap","enabled"),o=t.crosshair.x,n=!1===t.config.options.hover.intersect;r&&n&&t.active.length&&(o=t.active[0]._view.x),t.ctx.beginPath(),t.ctx.setLineDash(i),t.ctx.moveTo(o,a.getPixelForValue(a.max)),t.ctx.lineWidth=e,t.ctx.strokeStyle=s,t.ctx.lineTo(o,a.getPixelForValue(a.min)),t.ctx.stroke(),t.ctx.setLineDash([])},drawTracePoints:function(t){for(var a=0;a<t.data.datasets.length;a++){var e=t.data.datasets[a],s=t.getDatasetMeta(a),i=t.scales[s.yAxisID];!s.hidden&&e.interpolate&&(t.ctx.beginPath(),t.ctx.arc(t.crosshair.x,i.getPixelForValue(e.interpolatedValue),3,0,2*Math.PI,!1),t.ctx.fillStyle="white",t.ctx.lineWidth=2,t.ctx.strokeStyle=e.borderColor,t.ctx.fill(),t.ctx.stroke())}},interpolateValues:function(t){for(var a=0;a<t.data.datasets.length;a++){var e=t.data.datasets[a],s=t.getDatasetMeta(a),i=t.scales[s.xAxisID],r=i.getValueForPixel(t.crosshair.x);if(!s.hidden&&e.interpolate){var o=e.data,n=o.findIndex((function(t){return t.x>=r})),l=o[n-1],c=o[n];if(t.data.datasets[a].steppedLine&&l)e.interpolatedValue=l.y;else if(l&&c){var h=(c.y-l.y)/(c.x-l.x);e.interpolatedValue=l.y+(r-l.x)*h}else e.interpolatedValue=NaN}}}};t.plugins.register(s)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t,a(t),e(t)}))}}]);
//# sourceMappingURL=745.5cde6cf2.js.map