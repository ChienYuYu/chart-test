(self["webpackChunk_2023chart_test"]=self["webpackChunk_2023chart_test"]||[]).push([[845],{1845:function(t,a,e){"use strict";e.r(a),e.d(a,{default:function(){return y}});var s,i,o=function(){var t=this,a=t._self._c;return a("div",[t._m(0),a("div",{staticClass:"chart-container"},[a("chart",{staticClass:"my-chart",attrs:{fakeData:t.fakeData,fakeData02:t.fakeData02,XAxis:t.XAxis}})],1)])},r=[function(){var t=this,a=t._self._c;return a("h4",[t._v("方波"),a("br"),t._v("square wave")])}],n=e(6663),l=(e(1243),{extends:n.x1,props:["fakeData","fakeData02","XAxis"],data:()=>({chartdata:{labels:[],datasets:[{label:"square wave sample",data:[],borderColor:"#f50",borderWidth:0,fill:!1,steppedLine:!0,borderDash:[10,10]},{label:"line",data:[],borderColor:"#a0f",borderWidth:2,fill:!1,steppedLine:!1,lineTension:0}]},options:{responsive:!0,maintainAspectRatio:!1,tooltips:{backgroundColor:"#33333390",titleFontSize:20,bodyFontSize:20},title:{display:!1,text:"標題標題",fontColor:"#fff",fontSize:40,position:"bottom"},legend:{display:!0,position:"top",align:"end",labels:{fontColor:"#333",fontSize:16}},scales:{yAxes:[{id:"chart_1",ticks:{fontColor:"#333",fontSize:18,beginAtZero:!0,stepSize:1},gridLines:{display:!0,color:"#ccc"},scaleLabel:{display:!0,labelString:"PM2.5、溫度、濕度",fontColor:"#fff",fontSize:20},position:"left"}],xAxes:[{ticks:{fontColor:"#333",fontSize:18,maxTicksLimit:10},gridLines:{display:!0,color:"#888"},scaleLabel:{display:!1,labelString:"時間",fontColor:"#fff",fontSize:20}}]},tooltips:{mode:"interpolate",intersect:!1,backgroundColor:"#ff00ff90",caretSize:15,titleFontSize:16,bodyFontSize:22},plugins:{crosshair:{line:{color:"#3f3",width:1},sync:{enabled:!1},zoom:{enabled:!1}}}}}),mounted(){this.getFatherData(),this.renderChart(this.chartdata,this.options)},computed:{},methods:{childFunc(){this.renderChart(this.chartdata,this.options)},getFatherData(){this.chartdata.datasets[0].data=this.fakeData,this.chartdata.datasets[1].data=this.fakeData02,this.chartdata.labels=this.XAxis}}}),c=l,d=e(3736),h=(0,d.Z)(c,s,i,!1,null,"42ed6e93",null),x=h.exports;const u=[1,0,1,3,8,2,1,0,2,0],p=[],g=[];function f(t,a){return Math.floor(Math.random()*(a-t+1)+t)}for(let S=0;S<100;S++)p.push(f(1,10));for(let S=1;S<=10;S++)g.push(S);var m={components:{chart:x},created(){this.getData()},mounted(){},data(){return{fakeData:[],XAxis:[]}},methods:{getData(){this.fakeData=u,this.fakeData02=p,this.XAxis=g}}},v=m,b=(0,d.Z)(v,o,r,!1,null,"03edd896",null),y=b.exports},1243:function(t,a,e){
/*!
 * chartjs-plugin-crosshair v1.1.6
 * https://chartjs-plugin-crosshair.netlify.com
 * (c) 2020 Chart.js Contributors
 * Released under the MIT license
 */
(function(t,a){a(e(7757))})(0,(function(t){"use strict";function a(t){t.Interaction.modes.interpolate=function(a,e,s){for(var i=[],o=0;o<a.data.datasets.length;o++)if(a.data.datasets[o].interpolate){var r=a.getDatasetMeta(o);if(!r.hidden){var n=a.scales[r.xAxisID],l=a.scales[r.yAxisID],c=n.getValueForPixel(e.x),d=a.data.datasets[o].data,h=d.findIndex((function(t){return t.x>=c}));if(-1!==h){var x=d[h-1],u=d[h];if(x&&u)var p=(u.y-x.y)/(u.x-x.x),g=x.y+(c-x.x)*p;if(a.data.datasets[o].steppedLine&&x&&(g=x.y),!isNaN(g)){var f=l.getPixelForValue(g);if(!isNaN(f)){var m={value:g,xValue:c,tooltipPosition:function(){return this._model},hasValue:function(){return!0},_model:{x:e.x,y:f},_datasetIndex:o,_index:i.length,_xScale:{getLabelForIndex:function(t){return i[t].xValue}},_yScale:{getLabelForIndex:function(t){return i[t].value}},_chart:a};i.push(m)}}}}}var v=t.Interaction.modes.x(a,e,s);for(h=0;h<v.length;h++){var b=v[h];a.data.datasets[b._datasetIndex].interpolate||i.push(b)}return i}}function e(t){var a=t.helpers,e={line:{color:"#F66",width:1,dashPattern:[]},sync:{enabled:!0,group:1,suppressTooltips:!1},zoom:{enabled:!0,zoomboxBackgroundColor:"rgba(66,133,244,0.2)",zoomboxBorderColor:"#48F",zoomButtonText:"Reset Zoom",zoomButtonClass:"reset-zoom"},snap:{enabled:!1},callbacks:{beforeZoom:function(t,a){return!0},afterZoom:function(t,a){}}},s={id:"crosshair",afterInit:function(t){if(0!=t.config.options.scales.xAxes.length){var a=t.config.options.scales.xAxes[0].type;if("linear"===a||"time"===a||"category"===a||"logarithmic"===xscaleType){void 0===t.options.plugins.crosshair&&(t.options.plugins.crosshair=e),t.crosshair={enabled:!1,x:null,originalData:[],originalXRange:{},dragStarted:!1,dragStartX:null,dragEndX:null,suppressTooltips:!1,reset:function(){this.resetZoom(t,!1,!1)}.bind(this)};var s=this.getOption(t,"sync","enabled");s&&(t.crosshair.syncEventHandler=function(a){this.handleSyncEvent(t,a)}.bind(this),t.crosshair.resetZoomEventHandler=function(a){var e=this.getOption(t,"sync","group");a.chartId!==t.id&&a.syncGroup===e&&this.resetZoom(t,!0)}.bind(this),window.addEventListener("sync-event",t.crosshair.syncEventHandler),window.addEventListener("reset-zoom-event",t.crosshair.resetZoomEventHandler)),t.panZoom=this.panZoom.bind(this,t)}}},destroy:function(t){var a=this.getOption(t,"sync","enabled");a&&(window.removeEventListener("sync-event",t.crosshair.syncEventHandler),window.removeEventListener("reset-zoom-event",t.crosshair.resetZoomEventHandler))},panZoom:function(t,a){if(0!==t.crosshair.originalData.length){var e=t.crosshair.end-t.crosshair.start,s=t.crosshair.min,i=t.crosshair.max;a<0?(t.crosshair.start=Math.max(t.crosshair.start+a,s),t.crosshair.end=t.crosshair.start===s?s+e:t.crosshair.end+a):(t.crosshair.end=Math.min(t.crosshair.end+a,t.crosshair.max),t.crosshair.start=t.crosshair.end===i?i-e:t.crosshair.start+a),this.doZoom(t,t.crosshair.start,t.crosshair.end)}},getOption:function(t,s,i){return a.getValueOrDefault(t.options.plugins.crosshair[s]?t.options.plugins.crosshair[s][i]:void 0,e[s][i])},getXScale:function(t){return t.data.datasets.length?t.scales[t.getDatasetMeta(0).xAxisID]:null},getYScale:function(t){return t.scales[t.getDatasetMeta(0).yAxisID]},handleSyncEvent:function(t,a){var e=this.getOption(t,"sync","group");if(a.chartId!==t.id&&a.syncGroup===e){var s=this.getXScale(t);if(s){var i=void 0===a.original.native.buttons?a.original.native.which:a.original.native.buttons;"mouseup"===a.original.type&&(i=0);var o={type:a.original.type,chart:t,x:s.getPixelForValue(a.xValue),y:a.original.y,native:{buttons:i},stop:!0};t.controller.eventHandler(o)}}},afterEvent:function(t,a){if(0!=t.config.options.scales.xAxes.length){var e=t.config.options.scales.xAxes[0].type;if("linear"===e||"time"===e||"category"===e||"logarithmic"===xscaleType){var s=this.getXScale(t);if(s){var i=void 0===a.native.buttons?a.native.which:a.native.buttons;"mouseup"===a.native.type&&(i=0);var o=this.getOption(t,"sync","enabled"),r=this.getOption(t,"sync","group");if(!a.stop&&o){var n=new CustomEvent("sync-event");n.chartId=t.id,n.syncGroup=r,n.original=a,n.xValue=s.getValueForPixel(a.x),window.dispatchEvent(n)}var l=this.getOption(t,"sync","suppressTooltips");if(t.crosshair.suppressTooltips=a.stop&&l,t.crosshair.enabled="mouseout"!==a.type&&a.x>s.getPixelForValue(s.min)&&a.x<s.getPixelForValue(s.max),!t.crosshair.enabled)return a.x>s.getPixelForValue(s.max)&&t.update(),!0;var c=this.getOption(t,"zoom","enabled");if(1===i&&!t.crosshair.dragStarted&&c&&(t.crosshair.dragStartX=a.x,t.crosshair.dragStarted=!0),t.crosshair.dragStarted&&0===i){t.crosshair.dragStarted=!1;var d=s.getValueForPixel(t.crosshair.dragStartX),h=s.getValueForPixel(t.crosshair.x);Math.abs(t.crosshair.dragStartX-t.crosshair.x)>1&&this.doZoom(t,d,h),t.update()}t.crosshair.x=a.x,t.draw()}}}},afterDraw:function(t){if(t.crosshair.enabled)return t.crosshair.dragStarted?this.drawZoombox(t):(this.drawTraceLine(t),this.interpolateValues(t),this.drawTracePoints(t)),!0},beforeTooltipDraw:function(t){return!t.crosshair.dragStarted&&!t.crosshair.suppressTooltips},resetZoom:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(e){for(var s=0;s<t.data.datasets.length;s++){var i=t.data.datasets[s];i.data=t.crosshair.originalData.shift(0)}var o="ticks";t.options.scales.xAxes[0].time&&(o="time"),t.crosshair.originalXRange.min?(t.options.scales.xAxes[0][o].min=t.crosshair.originalXRange.min,t.crosshair.originalXRange.min=null):delete t.options.scales.xAxes[0][o].min,t.crosshair.originalXRange.max?(t.options.scales.xAxes[0][o].max=t.crosshair.originalXRange.max,t.crosshair.originalXRange.max=null):delete t.options.scales.xAxes[0][o].max}t.crosshair.button&&t.crosshair.button.parentNode&&(t.crosshair.button.parentNode.removeChild(t.crosshair.button),t.crosshair.button=!1);var r=this.getOption(t,"sync","enabled");if(!a&&e&&r){var n=this.getOption(t,"sync","group"),l=new CustomEvent("reset-zoom-event");l.chartId=t.id,l.syncGroup=n,window.dispatchEvent(l)}if(e){var c=t.options.animation;t.options.animation=!1,t.update(),t.options.animation=c}},doZoom:function(t,s,i){if(s>i){var o=s;s=i,i=o}var r=a.getValueOrDefault(t.options.plugins.crosshair.callbacks?t.options.plugins.crosshair.callbacks.beforeZoom:void 0,e.callbacks.beforeZoom);if(!r(s,i))return!1;if("time"===t.options.scales.xAxes[0].type?(t.options.scales.xAxes[0].time.min&&0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.min=t.options.scales.xAxes[0].time.min),t.options.scales.xAxes[0].time.max&&0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.max=t.options.scales.xAxes[0].time.max)):(t.options.scales.xAxes[0].ticks.min&&void 0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.min=t.options.scales.xAxes[0].ticks.min),t.options.scales.xAxes[0].ticks.max&&void 0===t.crosshair.originalData.length&&(t.crosshair.originalXRange.max=t.options.scales.xAxes[0].ticks.max)),!t.crosshair.button){var n=document.createElement("button"),l=this.getOption(t,"zoom","zoomButtonText"),c=this.getOption(t,"zoom","zoomButtonClass"),d=document.createTextNode(l);n.appendChild(d),n.className=c,n.addEventListener("click",function(){this.resetZoom(t)}.bind(this)),t.canvas.parentNode.appendChild(n),t.crosshair.button=n}t.options.scales.xAxes[0].time?(t.options.scales.xAxes[0].time.min=s,t.options.scales.xAxes[0].time.max=i):(t.options.scales.xAxes[0].ticks.min=s,t.options.scales.xAxes[0].ticks.max=i);for(var h=0===t.crosshair.originalData.length,x=0;x<t.data.datasets.length;x++){var u=[],p=0,g=!1,f=!1;h&&(t.crosshair.originalData[x]=t.data.datasets[x].data);for(var m=t.crosshair.originalData[x],v=0;v<m.length;v++){var b=m[v],y=this.getXScale(t).getRightValue(b);y>=s&&!g&&p>0&&(u.push(m[p-1]),g=!0),y>=s&&y<=i&&u.push(b),y>i&&!f&&p<m.length&&(u.push(b),f=!0),p+=1}t.data.datasets[x].data=u}if(t.crosshair.start=s,t.crosshair.end=i,h){var S=this.getXScale(t);t.crosshair.min=S.min,t.crosshair.max=S.max}t.update();var D=this.getOption(t,"callbacks","afterZoom");D(s,i)},drawZoombox:function(t){var a=this.getYScale(t),e=this.getOption(t,"zoom","zoomboxBorderColor"),s=this.getOption(t,"zoom","zoomboxBackgroundColor");t.ctx.beginPath(),t.ctx.rect(t.crosshair.dragStartX,a.getPixelForValue(a.max),t.crosshair.x-t.crosshair.dragStartX,a.getPixelForValue(a.min)-a.getPixelForValue(a.max)),t.ctx.lineWidth=1,t.ctx.strokeStyle=e,t.ctx.fillStyle=s,t.ctx.fill(),t.ctx.fillStyle="",t.ctx.stroke(),t.ctx.closePath()},drawTraceLine:function(t){var a=this.getYScale(t),e=this.getOption(t,"line","width"),s=this.getOption(t,"line","color"),i=this.getOption(t,"line","dashPattern"),o=this.getOption(t,"snap","enabled"),r=t.crosshair.x,n=!1===t.config.options.hover.intersect;o&&n&&t.active.length&&(r=t.active[0]._view.x),t.ctx.beginPath(),t.ctx.setLineDash(i),t.ctx.moveTo(r,a.getPixelForValue(a.max)),t.ctx.lineWidth=e,t.ctx.strokeStyle=s,t.ctx.lineTo(r,a.getPixelForValue(a.min)),t.ctx.stroke(),t.ctx.setLineDash([])},drawTracePoints:function(t){for(var a=0;a<t.data.datasets.length;a++){var e=t.data.datasets[a],s=t.getDatasetMeta(a),i=t.scales[s.yAxisID];!s.hidden&&e.interpolate&&(t.ctx.beginPath(),t.ctx.arc(t.crosshair.x,i.getPixelForValue(e.interpolatedValue),3,0,2*Math.PI,!1),t.ctx.fillStyle="white",t.ctx.lineWidth=2,t.ctx.strokeStyle=e.borderColor,t.ctx.fill(),t.ctx.stroke())}},interpolateValues:function(t){for(var a=0;a<t.data.datasets.length;a++){var e=t.data.datasets[a],s=t.getDatasetMeta(a),i=t.scales[s.xAxisID],o=i.getValueForPixel(t.crosshair.x);if(!s.hidden&&e.interpolate){var r=e.data,n=r.findIndex((function(t){return t.x>=o})),l=r[n-1],c=r[n];if(t.data.datasets[a].steppedLine&&l)e.interpolatedValue=l.y;else if(l&&c){var d=(c.y-l.y)/(c.x-l.x);e.interpolatedValue=l.y+(o-l.x)*d}else e.interpolatedValue=NaN}}}};t.plugins.register(s)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t,a(t),e(t)}))}}]);
//# sourceMappingURL=845.126c7a84.js.map