(self["webpackChunk_2023chart_test"]=self["webpackChunk_2023chart_test"]||[]).push([[107],{3107:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return S}});var s,o,i=function(){var t=this,a=t._self._c;return a("div",[a("h1",[t._v("sample")]),a("div",{staticClass:"chart-container"},[a("chart",{staticClass:"my-chart",attrs:{CO2Array:t.CO2Array,PM25Array:t.PM25Array,XAxis:t.XAxis}})],1)])},r=[],n=e(6663),l=(e(1243),{extends:n.x1,props:["CO2Array","PM25Array","XAxis"],data:()=>({chartdata:{labels:[],datasets:[{label:"CO2",backgroundColor:"#fa0",borderColor:"#fa0",data:[],fill:!1,yAxisID:"chart_co2",lineTension:0},{label:"PM2.5",backgroundColor:"#af0",borderColor:"#af0",data:[],fill:!1,yAxisID:"chart_1",lineTension:0}]},options:{responsive:!0,maintainAspectRatio:!1,tooltips:{backgroundColor:"#33333390",titleFontSize:20,bodyFontSize:20},title:{display:!1,text:"標題標題",fontColor:"#fff",fontSize:40,position:"bottom"},legend:{display:!1,position:"top",align:"end",labels:{fontColor:"#fff",fontSize:24}},scales:{yAxes:[{id:"chart_1",ticks:{fontColor:"#fff",fontSize:18,beginAtZero:!0,fixedStepSize:10},gridLines:{display:!1,color:"#ccc"},scaleLabel:{display:!0,labelString:"PM2.5、溫度、濕度",fontColor:"#fff",fontSize:20},position:"left"},{id:"chart_co2",ticks:{fontColor:"#fa0",fontSize:"18",beginAtZero:!0,display:!1},gridLines:{display:!0,color:"#aaaaaa80"},scaleLabel:{display:!1,labelString:"CO2",fontColor:"#fa0",fontSize:20},position:"right"}],xAxes:[{ticks:{fontColor:"#333",fontSize:18},gridLines:{display:!1,color:"#888"},scaleLabel:{display:!1,labelString:"時間",fontColor:"#fff",fontSize:20}}]},tooltips:{mode:"interpolate",intersect:!1,backgroundColor:"#ff00ff90",caretSize:15,titleFontSize:16,bodyFontSize:22},plugins:{crosshair:{line:{color:"#f33",width:3},sync:{enabled:!1},zoom:{enabled:!1}}}}}),mounted(){this.getFatherData(),this.renderChart(this.chartdata,this.options)},computed:{},methods:{childFunc(){this.renderChart(this.chartdata,this.options)},getFatherData(){this.chartdata.datasets[0].data=this.CO2Array,this.chartdata.datasets[1].data=this.PM25Array,this.chartdata.labels=this.XAxis}}}),c=l,d=e(3736),h=(0,d.Z)(c,s,o,!1,null,"66754c7a",null),x=h.exports;const p=[],u=[],g=[],f=[],m=[];function v(t,a){return Math.floor(Math.random()*(a-t+1)+t)}for(let C=0;C<100;C++)p.push(v(300,600));for(let C=0;C<100;C++)u.push(v(1,200));for(let C=0;C<100;C++)g.push(v(1,100));for(let C=0;C<100;C++)f.push(v(15,35));for(let C=1;C<=40;C++)m.push(C);var y={components:{chart:x},created(){this.getData()},mounted(){},data(){return{CO2Array:[],PM25Array:[],XAxis:[]}},methods:{getData(){this.CO2Array=p,this.PM25Array=u,this.XAxis=m}}},b=y,A=(0,d.Z)(b,i,r,!1,null,"54c8d36a",null),S=A.exports},1243:function(t,a,e){
/*!
 * chartjs-plugin-crosshair v1.1.6
 * https://chartjs-plugin-crosshair.netlify.com
 * (c) 2020 Chart.js Contributors
 * Released under the MIT license
 */
(function(t,a){a(e(7757))})(0,(function(t){"use strict";function a(t){t.Interaction.modes.interpolate=function(a,e,s){for(var o=[],i=0;i<a.data.datasets.length;i++)if(a.data.datasets[i].interpolate){var r=a.getDatasetMeta(i);if(!r.hidden){var n=a.scales[r.xAxisID],l=a.scales[r.yAxisID],c=n.getValueForPixel(e.x),d=a.data.datasets[i].data,h=d.findIndex((function(t){return t.x>=c}));if(-1!==h){var x=d[h-1],p=d[h];if(x&&p)var u=(p.y-x.y)/(p.x-x.x),g=x.y+(c-x.x)*u;if(a.data.datasets[i].steppedLine&&x&&(g=x.y),!isNaN(g)){var f=l.getPixelForValue(g);if(!isNaN(f)){var m={value:g,xValue:c,tooltipPosition:function(){return this._model},hasValue:function(){return!0},_model:{x:e.x,y:f},_datasetIndex:i,_index:o.length,_xScale:{getLabelForIndex:function(t){return o[t].xValue}},_yScale:{getLabelForIndex:function(t){return o[t].value}},_chart:a};o.push(m)}}}}}var v=t.Interaction.modes.x(a,e,s);for(h=0;h<v.length;h++){var y=v[h];a.data.datasets[y._datasetIndex].interpolate||o.push(y)}return o}}function e(t){var a=t.helpers,e={line:{color:"#F66",width:1,dashPattern:[]},sync:{enabled:!0,group:1,suppressTooltips:!1},zoom:{enabled:!0,zoomboxBackgroundColor:"rgba(66,133,244,0.2)",zoomboxBorderColor:"#48F",zoomButtonText:"Reset Zoom",zoomButtonClass:"reset-zoom"},snap:{enabled:!1},callbacks:{beforeZoom:function(t,a){return!0},afterZoom:function(t,a){}}},s={id:"crosshair",afterInit:function(t){if(0!=t.config.options.scales.xAxes.length){var a=t.config.options.scales.xAxes[0].type;if("linear"===a||"time"===a||"category"===a||"logarithmic"===xscaleType){void 0===t.options.plugins.crosshair&&(t.options.plugins.crosshair=e),t.crosshair={enabled:!1,x:null,originalData:[],originalXRange:{},dragStarted:!1,dragStartX:null,dragEndX:null,suppressTooltips:!1,reset:function(){this.resetZoom(t,!1,!1)}.bind(this)};var s=this.getOption(t,"sync","enabled");s&&(t.crosshair.syncEventHandler=function(a){this.handleSyncEvent(t,a)}.bind(this),t.crosshair.resetZoomEventHandler=function(a){var e=this.getOption(t,"sync","group");a.chartId!==t.id&&a.syncGroup===e&&this.resetZoom(t,!0)}.bind(this),window.addEventListener("sync-event",t.crosshair.syncEventHandler),window.addEventListener("reset-zoom-event",t.crosshair.resetZoomEventHandler)),t.panZoom=this.panZoom.bind(this,t)}}},destroy:function(t){var a=this.getOption(t,"sync","enabled");a&&(window.removeEventListener("sync-event",t.crosshair.syncEventHandler),window.removeEventListener("reset-zoom-event",t.crosshair.resetZoomEventHandler))},panZoom:function(t,a){if(0!==t.crosshair.originalData.length){var e=t.crosshair.end-t.crosshair.start,s=t.crosshair.min,o=t.crosshair.max;a<0?(t.crosshair.start=Math.max(t.crosshair.start+a,s),t.crosshair.end=t.crosshair.start===s?s+e:t.crosshair.end+a):(t.crosshair.end=Math.min(t.crosshair.end+a,t.crosshair.max),t.crosshair.start=t.crosshair.end===o?o-e:t.crosshair.start+a),this.doZoom(t,t.crosshair.start,t.crosshair.end)}},getOption:function(t,s,o){return a.getValueOrDefault(t.options.plugins.crosshair[s]?t.options.plugins.crosshair[s][o]:void 0,e[s][o])},getXScale:function(t){return t.data.datasets.length?t.scales[t.getDatasetMeta(0).xAxisID]:null},getYScale:function(t){return t.scales[t.getDatasetMeta(0).yAxisID]},handleSyncEvent:function(t,a){var e=this.getOption(t,"sync","group");if(a.chartId!==t.id&&a.syncGroup===e){var s=this.getXScale(t);if(s){var o=void 0===a.original.native.buttons?a.original.native.which:a.original.native.buttons;"mouseup"===a.original.type&&(o=0);var i={type:a.original.type,chart:t,x:s.getPixelForValue(a.xValue),y:a.original.y,native:{buttons:o},stop:!0};t.controller.eventHandler(i)}}},afterEvent:function(t,a){if(0!=t.config.options.scales.xAxes.length){var e=t.config.options.scales.xAxes[0].type;if("linear"===e||"time"===e||"category"===e||"logarithmic"===xscaleType){var s=this.getXScale(t);if(s){var o=void 0===a.native.buttons?a.native.which:a.native.buttons;"mouseup"===a.native.type&&(o=0);var i=this.getOption(t,"sync","enabled"),r=this.getOption(t,"sync","group");if(!a.stop&&i){var n=new CustomEvent("sync-event");n.chartId=t.id,n.syncGroup=r,n.original=a,n.xValue=s.getValueForPixel(a.x),window.dispatchEvent(n)}var l=this.getOption(t,"sync","suppressTooltips");if(t.crosshair.suppressTooltips=a.stop&&l,t.crosshair.enabled="mouseout"!==a.type&&a.x>s.getPixelForValue(s.min)&&a.x<s.getPixelForValue(s.max),!t.crosshair.enabled)return a.x>s.getPixelForValue(s.max)&&t.update(),!0;var c=this.getOption(t,"zoom","enabled");if(1===o&&!t.crosshair.dragStarted&&c&&(t.crosshair.dragStartX=a.x,t.crosshair.dragStarted=!0),t.crosshair.dragStarted&&0===o){t.crosshair.dragStarted=!1;var d=s.getValueForPixel(t.crosshair.dragStartX),h=s.getValueForPixel(t.crosshair.x);Math.abs(t.crosshair.dragStartX-t.crosshair.x)>1&&this.doZoom(t,d,h),t.update()}t.crosshair.x=a.x,t.draw()}}}},afterDraw:function(t){if(t.crosshair.enabled)return t.crosshair.dragStarted?this.drawZoombox(t):(this.drawTraceLine(t),this.interpolateValues(t),this.drawTracePoints(t)),!0},beforeTooltipDraw:function(t){return!t.crosshair.dragStarted&&!t.crosshair.suppressTooltips},resetZoom:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e){for(var s=0;s<t.data.datasets.length;s++){var o=t.data.datasets[s];o.data=t.crosshair.originalData.shift(0)}var i="ticks";t.options.scales.xAxes[0].time&&(i="time"),t.crosshair.originalXRange.min?(t.options.scales.xAxes[0][i].min=t.crosshair.originalXRange.min,t.crosshair.originalXRange.min=null):delete t.options.scales.xAxes[0][i].min,t.crosshair.originalXRange.max?(t.options.scales.xAxes[0][i].max=t.crosshair.originalXRange.max,t.crosshair.originalXRange.max=null):delete t.options.scales.xAxes[0][i].max}t.crosshair.button&&t.crosshair.button.parentNode&&(t.crosshair.button.parentNode.removeChild(t.crosshair.button),t.crosshair.button=!1);var r=this.getOption(t,"sync","enabled");if(!a&&e&&r){var n=this.getOption(t,"sync","group"),l=new CustomEvent("reset-zoom-event");l.chartId=t.id,l.syncGroup=n,window.dispatchEvent(l)}if(e){var c=t.options.animation;t.options.animation=!1,t.update(),t.options.animation=c}},doZoom:function(t,s,o){if(s>o){var i=s;s=o,o=i}var r=a.getValueOrDefault(t.options.plugins.crosshair.callbacks?t.options.plugins.crosshair.callbacks.beforeZoom:void 0,e.callbacks.beforeZoom);if(!r(s,o))return!1;if("time"===t.options.scales.xAxes[0].type?(t.options.scales.xAxes[0].time.min&&0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.min=t.options.scales.xAxes[0].time.min),t.options.scales.xAxes[0].time.max&&0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.max=t.options.scales.xAxes[0].time.max)):(t.options.scales.xAxes[0].ticks.min&&void 0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.min=t.options.scales.xAxes[0].ticks.min),t.options.scales.xAxes[0].ticks.max&&void 0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.max=t.options.scales.xAxes[0].ticks.max)),!t.crosshair.button){var n=document.createElement("button"),l=this.getOption(t,"zoom","zoomButtonText"),c=this.getOption(t,"zoom","zoomButtonClass"),d=document.createTextNode(l);n.appendChild(d),n.className=c,n.addEventListener("click",function(){this.resetZoom(t)}.bind(this)),t.canvas.parentNode.appendChild(n),t.crosshair.button=n}t.options.scales.xAxes[0].time?(t.options.scales.xAxes[0].time.min=s,t.options.scales.xAxes[0].time.max=o):(t.options.scales.xAxes[0].ticks.min=s,t.options.scales.xAxes[0].ticks.max=o);for(var h=0===t.crosshair.originalData.length,x=0;x<t.data.datasets.length;x++){var p=[],u=0,g=!1,f=!1;h&&(t.crosshair.originalData[x]=t.data.datasets[x].data);for(var m=t.crosshair.originalData[x],v=0;v<m.length;v++){var y=m[v],b=this.getXScale(t).getRightValue(y);b>=s&&!g&&u>0&&(p.push(m[u-1]),g=!0),b>=s&&b<=o&&p.push(y),b>o&&!f&&u<m.length&&(p.push(y),f=!0),u+=1}t.data.datasets[x].data=p}if(t.crosshair.start=s,t.crosshair.end=o,h){var A=this.getXScale(t);t.crosshair.min=A.min,t.crosshair.max=A.max}t.update();var S=this.getOption(t,"callbacks","afterZoom");S(s,o)},drawZoombox:function(t){var a=this.getYScale(t),e=this.getOption(t,"zoom","zoomboxBorderColor"),s=this.getOption(t,"zoom","zoomboxBackgroundColor");t.ctx.beginPath(),t.ctx.rect(t.crosshair.dragStartX,a.getPixelForValue(a.max),t.crosshair.x-t.crosshair.dragStartX,a.getPixelForValue(a.min)-a.getPixelForValue(a.max)),t.ctx.lineWidth=1,t.ctx.strokeStyle=e,t.ctx.fillStyle=s,t.ctx.fill(),t.ctx.fillStyle="",t.ctx.stroke(),t.ctx.closePath()},drawTraceLine:function(t){var a=this.getYScale(t),e=this.getOption(t,"line","width"),s=this.getOption(t,"line","color"),o=this.getOption(t,"line","dashPattern"),i=this.getOption(t,"snap","enabled"),r=t.crosshair.x,n=!1===t.config.options.hover.intersect;i&&n&&t.active.length&&(r=t.active[0]._view.x),t.ctx.beginPath(),t.ctx.setLineDash(o),t.ctx.moveTo(r,a.getPixelForValue(a.max)),t.ctx.lineWidth=e,t.ctx.strokeStyle=s,t.ctx.lineTo(r,a.getPixelForValue(a.min)),t.ctx.stroke(),t.ctx.setLineDash([])},drawTracePoints:function(t){for(var a=0;a<t.data.datasets.length;a++){var e=t.data.datasets[a],s=t.getDatasetMeta(a),o=t.scales[s.yAxisID];!s.hidden&&e.interpolate&&(t.ctx.beginPath(),t.ctx.arc(t.crosshair.x,o.getPixelForValue(e.interpolatedValue),3,0,2*Math.PI,!1),t.ctx.fillStyle="white",t.ctx.lineWidth=2,t.ctx.strokeStyle=e.borderColor,t.ctx.fill(),t.ctx.stroke())}},interpolateValues:function(t){for(var a=0;a<t.data.datasets.length;a++){var e=t.data.datasets[a],s=t.getDatasetMeta(a),o=t.scales[s.xAxisID],i=o.getValueForPixel(t.crosshair.x);if(!s.hidden&&e.interpolate){var r=e.data,n=r.findIndex((function(t){return t.x>=i})),l=r[n-1],c=r[n];if(t.data.datasets[a].steppedLine&&l)e.interpolatedValue=l.y;else if(l&&c){var d=(c.y-l.y)/(c.x-l.x);e.interpolatedValue=l.y+(i-l.x)*d}else e.interpolatedValue=NaN}}}};t.plugins.register(s)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t,a(t),e(t)}))}}]);
//# sourceMappingURL=107.75ca793a.js.map