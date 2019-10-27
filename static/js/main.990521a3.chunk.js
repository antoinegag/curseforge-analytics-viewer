(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,a,t){e.exports=t(322)},321:function(e,a,t){},322:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(49),o=t.n(r),i=t(25),c=t(26),s=t(28),u=t(27),m=t(29),d=t(30),p=t(148),h=t.n(p),E=t(80),y=t(332),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={stats:null},t.fileReader=new FileReader,t.handleFileChosen=t.handleFileChosen.bind(Object(d.a)(Object(d.a)(t))),t.handleFileRead=t.handleFileRead.bind(Object(d.a)(Object(d.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"handleFileRead",value:function(e){var a,t=e.currentTarget.result;h.a.parse(t,{complete:function(e){return a=e}}),this.props.onData(a)}},{key:"handleFileChosen",value:function(e){if(e){var a=new FileReader;a.onloadend=this.handleFileRead,a.readAsText(e)}}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"mt-1"},l.a.createElement(E.a,{pointing:"below"},"Find analytics data at ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//minecraft.curseforge.com/dashboard/projects"},"https://minecraft.curseforge.com/dashboard/projects")),l.a.createElement("br",null),l.a.createElement(y.a,{type:"file",id:"file",className:"input-file",accept:".csv",onChange:function(a){return e.handleFileChosen(a.target.files[0])}}))}}]),a}(l.a.Component),b=t(167);function g(e){var a=Object(b.a)(e),t=a[0];t.splice(1,2),a.shift(),a.pop();var n=[],l={name:a[1][2],id:a[1][1]},r=0,o=0,i=0,c=0,s=0;a.forEach(function(e){var a={date:e[0],points:parseFloat(e[3]),historicalDownload:parseInt(e[4]),dailyDownload:parseInt(e[5]),dailyUniqueDownload:parseInt(e[6]),dailyTwitchAppDownload:parseInt(e[7]),dailyCurseForgeDownload:parseInt(e[8])};r+=a.points,o+=a.dailyDownload,i+=a.dailyUniqueDownload,c+=a.dailyCurseForgeDownload,s+=a.dailyTwitchAppDownload,n.push(a)});var u=r/n.length,m={curseDownloadSum:c,twitchDownloadSum:s,pointSum:r,downloadSum:o,uniqueDownloadSum:i,cursePercentage:c/o*100,twitchPercentage:s/o*100,pointDailyAverage:u,growth:o/n[0].historicalDownload*100,downloadDailyAverage:o/n.length,uniqueness:i/o*100};return{project:l,fields:t,stats:n,summary:m}}var w=t(333),v=t(52),D=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(w.a,{style:{minHeight:"50px"},inverted:!0,attached:!0},l.a.createElement(w.a.Item,null,l.a.createElement(v.a,{color:"orange",name:"pie graph",size:"big"}),"CurseForge Analtytics Viewer"),l.a.createElement(w.a.Menu,{position:"right"},l.a.createElement(w.a.Item,{href:"//github.com/antoinegag/curseforge-analytics-viewer/blob/master/README.md#privacy"},l.a.createElement(v.a,{name:"privacy",size:"large"})," Privacy"),l.a.createElement(w.a.Item,{href:"//github.com/antoinegag/curseforge-analytics-viewer"},l.a.createElement(v.a,{name:"github",size:"large"})," Source Code")))}}]),a}(l.a.Component),j=t(329),O=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props,a=e.fields,t=e.stats;return l.a.createElement(j.a,null,l.a.createElement(j.a.Header,null,l.a.createElement(j.a.Row,null,a.map(function(e){return l.a.createElement(j.a.HeaderCell,null,e)}))),l.a.createElement(j.a.Body,null,t.map(function(e){return l.a.createElement(j.a.Row,null,Object.entries(e).map(function(e){return l.a.createElement(j.a.Cell,null,e[1].toLocaleString())}))})))}}]),a}(l.a.Component),k=t(107),S=t.n(k),F=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"renderPlot",value:function(e,a,t,n){return l.a.createElement("div",{className:"plot-container"},l.a.createElement(S.a,{useResizeHandler:!0,data:[{x:a,y:t,type:"scatter",mode:"lines+points",marker:{color:n||"red"}}],layout:{title:e,autosize:!0}}))}},{key:"renderDailyPoints",value:function(e){var a=this.props.stats;return this.renderPlot("Daily points",e,a.map(function(e){return e.points}))}},{key:"renderDownloads",value:function(e){var a=this.props.stats;return l.a.createElement("div",{className:"plot-container"},l.a.createElement(S.a,{useResizeHandler:!0,data:[{x:e,y:a.map(function(e){return e.dailyCurseForgeDownload}),name:"Daily CurseForge Download",type:"scatter",mode:"lines+points",marker:{color:"orange"},stackgroup:"one"},{x:e,y:a.map(function(e){return e.dailyTwitchAppDownload}),name:"Daily Twitch App Download",type:"scatter",mode:"lines+points",marker:{color:"purple"},stackgroup:"one"},{x:e,y:a.map(function(e){return e.dailyUniqueDownload}),name:"Unique downloads",type:"scatter",mode:"lines+points",marker:{color:"red"}},{x:e,y:a.map(function(e){return e.dailyDownload}),name:"Daily downloads",type:"scatter",mode:"lines+points",marker:{color:"green"}}],layout:{title:"Downloads",autosize:!0}}))}},{key:"renderHistoricalDownload",value:function(e){var a=this.props.stats;return this.renderPlot("Historical Download",e,a.map(function(e){return e.historicalDownload}),"red")}},{key:"render",value:function(){var e=this.props.stats.map(function(e){return e.date});return l.a.createElement("div",null,this.renderDailyPoints(e),this.renderDownloads(e),this.renderHistoricalDownload(e))}}]),a}(l.a.Component),C=t(335),x=t(327),A=t(328),L=t(79),R=t(330),V=t(334),q=t(326),P=t(336),U=t(108),N=t.n(U),T=t(156);var z=function(e){var a=e.analytics,t=(a.project,a.fields,a.stats,a.summary),r=t.pointSum,o=t.downloadSum,i=t.uniqueDownloadSum,c=t.cursePercentage,s=t.twitchPercentage,u=(t.curseDownloadSum,t.twitchDownloadSum,t.pointDailyAverage),m=t.growth,d=t.downloadDailyAverage,p=t.uniqueness,h=Object(n.useState)("USD"),E=Object(L.a)(h,2),y=E[0],f=E[1],b=.05*r,g=.05*u,w=function(){var e=Object(n.useState)([]),a=Object(L.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)(function(){!function(){var e=Object(T.a)(N.a.mark(function e(){var a,t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=CAD,GBP,EUR,USD");case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:t=e.sent,l(t.rates);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()()},[]),t}(),D=Object.keys(w).map(function(e){return{value:e,text:e}}),j=b*w[y],O=g*w[y];return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(C.a,{as:"h2"},"Points"),l.a.createElement("div",null,"Currency :"," ",l.a.createElement(R.a,{options:D,onChange:function(e,a){f(a.value)},defaultValue:"USD"})),l.a.createElement(V.a.Group,{size:"tiny"},l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,r.toLocaleString()," pts"),l.a.createElement(V.a.Label,null,"Total")),l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,u.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," pts"),l.a.createElement(V.a.Label,null,"Daily average")),l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,isNaN(j)?l.a.createElement(q.a,null):j.toFixed(2)," ",y),l.a.createElement(V.a.Label,null,"Estimated revenues",l.a.createElement(P.a,{trigger:l.a.createElement(v.a,{name:"question circle"}),content:"Calculated on a 1 pts to $0.05 USD rate"}))),l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,isNaN(O)?l.a.createElement(q.a,null):O.toFixed(2)," ",y),l.a.createElement(V.a.Label,null,"Daily estimated revenues",l.a.createElement(P.a,{trigger:l.a.createElement(v.a,{name:"question circle"}),content:"Calculated on a 1pts to $0.05 USD rate"}))))),l.a.createElement("div",{className:"mt-1"},l.a.createElement(C.a,{as:"h2"},"Downloads"),l.a.createElement(V.a.Group,{size:"tiny"},l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,o.toLocaleString()),l.a.createElement(V.a.Label,null,l.a.createElement(v.a,{name:"download"}),"Total")),l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,d.toLocaleString(void 0,{maximumFractionDigits:0})),l.a.createElement(V.a.Label,null,"Daily average")),l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,i.toLocaleString()),l.a.createElement(V.a.Label,null,"Total unique")),l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,p.toFixed(1),"%"),l.a.createElement(V.a.Label,null,"Uniqueness")),l.a.createElement(V.a,null,l.a.createElement(V.a.Value,null,m.toFixed(1),"%"),l.a.createElement(V.a.Label,null,l.a.createElement(v.a,{name:"rocket"}),"Growth"))),l.a.createElement(V.a.Group,{size:"tiny"},l.a.createElement(V.a,{color:"purple"},l.a.createElement(V.a.Value,null,s.toFixed(1),"%"),l.a.createElement(V.a.Label,null,"from Twitch App",l.a.createElement(v.a,{name:"twitch"}))),l.a.createElement(V.a,{color:"orange"},l.a.createElement(V.a.Value,null,c.toFixed(1),"%"),l.a.createElement(V.a.Label,null,"from Curse",l.a.createElement(v.a,{name:"fire"}))))))},I=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={analytics:null},t.handleAnalytics=t.handleAnalytics.bind(Object(d.a)(Object(d.a)(t))),t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"handleAnalytics",value:function(e){this.setState({analytics:g(e.data)})}},{key:"renderAnalytics",value:function(){var e=this.state.analytics,a=e.project,t=e.fields,n=e.stats,r={start:n[0].date,end:n[n.length-1].date};return l.a.createElement("div",{style:{marginLeft:"1rem",marginRight:"1rem"}},l.a.createElement(C.a,{as:"h2"},l.a.createElement(v.a,{name:"chart line"}),l.a.createElement(C.a.Content,null,a.name,l.a.createElement(C.a.Subheader,null,"Id. ",a.id))),l.a.createElement(C.a,{as:"h3"},l.a.createElement(v.a,{name:"calendar alternate outline"}),r.start," to ",r.end," (",n.length-1," days)"),l.a.createElement(x.a,null),l.a.createElement(z,{analytics:this.state.analytics}),l.a.createElement(F,{fields:t,stats:n}),l.a.createElement(C.a,{as:"h2"},l.a.createElement(v.a,{name:"database"}),"Raw data"),l.a.createElement(O,{fields:t,stats:n}))}},{key:"render",value:function(){var e=this.state.analytics;return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(A.a,{textAlign:"center"},l.a.createElement(f,{onData:this.handleAnalytics}),l.a.createElement("b",null,"Note:")," your file is ",l.a.createElement("strong",null,"NOT")," uploaded to any server."),e&&this.renderAnalytics())}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(321);o.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[178,1,2]]]);
//# sourceMappingURL=main.990521a3.chunk.js.map