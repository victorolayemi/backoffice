!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{Ya9h:function(t,a,r){"use strict";r.r(a),r.d(a,"ChartlibModule",function(){return p});var n,l,o=r("fXoL"),i=r("XiUz"),s=r("Wp6s"),d=r("LPYB"),h=[{path:"",component:(n=function t(){e(this,t),this.globalChartOptions={responsive:!0,legend:{display:!1,position:"bottom"}},this.barChartLabels=["1","2","3","4","5","6","7"],this.barChartType="bar",this.barChartLegend=!0,this.barChartData=[{data:[6,5,8,8,5,5,4],label:"Series A",borderWidth:0},{data:[5,4,4,2,6,2,5],label:"Series B",borderWidth:0}],this.barChartOptions=Object.assign({scaleShowVerticalLines:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},position:"left",ticks:{beginAtZero:!0,suggestedMax:9}}]}},this.globalChartOptions),this.barChartHorizontalType="horizontalBar",this.barChartHorizontalOptions=Object.assign({scaleShowVerticalLines:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}]}},this.globalChartOptions),this.barChartStackedOptions=Object.assign({scaleShowVerticalLines:!1,tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},stacked:!0,ticks:{beginAtZero:!0}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},stacked:!0}]}},this.globalChartOptions),this.doughnutChartColors=[{backgroundColor:["#f44336","#3f51b5","#ffeb3b","#4caf50","#2196f"]}],this.doughnutChartLabels=["Download Sales","In-Store Sales","Mail-Order Sales"],this.doughnutChartData=[350,450,100],this.doughnutChartType="doughnut",this.doughnutOptions=Object.assign({elements:{arc:{borderWidth:0}}},this.globalChartOptions),this.lineChartData=[{data:[6,5,8,8,5,5,4],label:"Series A",borderWidth:1},{data:[5,4,4,2,6,2,5],label:"Series B",borderWidth:1}],this.lineChartLabels=["1","2","3","4","5","6","7"],this.lineChartOptions=Object.assign({animation:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}]}},this.globalChartOptions),this.lineChartColors=[{backgroundColor:"#7986cb",borderColor:"#3f51b5",pointBackgroundColor:"#3f51b5",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"},{backgroundColor:"#eeeeee",borderColor:"#e0e0e0",pointBackgroundColor:"#e0e0e0",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(77,83,96,1)"},{backgroundColor:"rgba(148,159,177,0.2)",borderColor:"rgba(148,159,177,1)",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.lineChartLegend=!0,this.lineChartType="line",this.lineChartSteppedData=[{data:[6,5,8,8,5,5,4],label:"Series A",borderWidth:1,fill:!1,steppedLine:!0},{data:[5,4,4,2,6,2,5],label:"Series B",borderWidth:1,fill:!1,steppedLine:!0}],this.lineChartPointsData=[{data:[6,5,8,8,5,5,4],label:"Series A",borderWidth:1,fill:!1,pointRadius:10,pointHoverRadius:15,showLine:!1},{data:[5,4,4,2,6,2,5],label:"Series B",borderWidth:1,fill:!1,pointRadius:10,pointHoverRadius:15,showLine:!1}],this.lineChartPointsOptions=Object.assign({scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}]},elements:{point:{pointStyle:"rectRot"}}},this.globalChartOptions),this.bubbleChartData=[{data:[{x:6,y:5,r:15},{x:5,y:4,r:10},{x:8,y:4,r:6},{x:8,y:4,r:6},{x:5,y:14,r:14},{x:5,y:6,r:8},{x:4,y:2,r:10}],label:"Series A",borderWidth:1}],this.bubbleChartType="bubble",this.ComboChartData=[{data:[6,5,8,8,5,5,4],label:"Series A",borderWidth:1,type:"line",fill:!1},{data:[5,4,4,2,6,2,5],label:"Series B",borderWidth:1,type:"bar"}],this.ComboChartLabels=["1","2","3","4","5","6","7"],this.ComboChartOptions=Object.assign({animation:!1,scales:{xAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"}}],yAxes:[{gridLines:{color:"rgba(0,0,0,0.02)",zeroLineColor:"rgba(0,0,0,0.02)"},ticks:{beginAtZero:!0,suggestedMax:9}}]}},this.globalChartOptions),this.pieChartLabels=["Download Sales","In-Store Sales","Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.polarAreaChartLabels=["Download Sales","In-Store Sales","Mail Sales","Telesales","Corporate Sales"],this.polarAreaChartData=[300,500,100,40,120],this.polarAreaLegend=!0,this.polarAreaChartType="polarArea",this.radarChartLabels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],this.radarChartData=[{data:[65,59,90,81,56,55,40],label:"Series A"},{data:[28,48,40,19,96,27,100],label:"Series B"}],this.radarChartType="radar"},n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o["\u0275\u0275defineComponent"]({type:n,selectors:[["app-chartlib"]],decls:97,vars:69,consts:[["fxLayout","row wrap"],["fxFlex.gt-sm","33.33","fxFlex.gt-xs","50","fxFlex","100"],["height","200","baseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"],["height","200","baseChart","",1,"chart",3,"data","labels","options","colors","chartType"],["height","200","baseChart","",1,"chart",3,"data","options","colors","labels","chartType"],["height","200","baseChart","",1,"chart",3,"data","options","colors","labels","legend","chartType"],["height","200","baseChart","",1,"chart",3,"datasets","options","colors","labels","chartType"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"mat-card"),o["\u0275\u0275elementStart"](3,"mat-card-title"),o["\u0275\u0275text"](4,"Bar"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"mat-card-subtitle"),o["\u0275\u0275text"](6,"Basic"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"mat-card-content"),o["\u0275\u0275element"](8,"canvas",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"div",1),o["\u0275\u0275elementStart"](10,"mat-card"),o["\u0275\u0275elementStart"](11,"mat-card-title"),o["\u0275\u0275text"](12,"Bar"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](13,"mat-card-subtitle"),o["\u0275\u0275text"](14,"Horizontal"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"mat-card-content"),o["\u0275\u0275element"](16,"canvas",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"div",1),o["\u0275\u0275elementStart"](18,"mat-card"),o["\u0275\u0275elementStart"](19,"mat-card-title"),o["\u0275\u0275text"](20,"Bar"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"mat-card-subtitle"),o["\u0275\u0275text"](22,"Stacked"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"mat-card-content"),o["\u0275\u0275element"](24,"canvas",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"div",1),o["\u0275\u0275elementStart"](26,"mat-card"),o["\u0275\u0275elementStart"](27,"mat-card-title"),o["\u0275\u0275text"](28,"Line"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"mat-card-subtitle"),o["\u0275\u0275text"](30,"Basic"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](31,"mat-card-content"),o["\u0275\u0275element"](32,"canvas",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](33,"div",1),o["\u0275\u0275elementStart"](34,"mat-card"),o["\u0275\u0275elementStart"](35,"mat-card-title"),o["\u0275\u0275text"](36,"Line"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](37,"mat-card-subtitle"),o["\u0275\u0275text"](38,"Stepped"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](39,"mat-card-content"),o["\u0275\u0275element"](40,"canvas",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](41,"div",1),o["\u0275\u0275elementStart"](42,"mat-card"),o["\u0275\u0275elementStart"](43,"mat-card-title"),o["\u0275\u0275text"](44,"Line"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](45,"mat-card-subtitle"),o["\u0275\u0275text"](46,"Points"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](47,"mat-card-content"),o["\u0275\u0275element"](48,"canvas",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](49,"div",1),o["\u0275\u0275elementStart"](50,"mat-card"),o["\u0275\u0275elementStart"](51,"mat-card-title"),o["\u0275\u0275text"](52,"Mixed"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](53,"mat-card-subtitle"),o["\u0275\u0275text"](54,"Mix different charts"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](55,"mat-card-content"),o["\u0275\u0275element"](56,"canvas",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](57,"div",1),o["\u0275\u0275elementStart"](58,"mat-card"),o["\u0275\u0275elementStart"](59,"mat-card-title"),o["\u0275\u0275text"](60,"Bubble"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](61,"mat-card-subtitle"),o["\u0275\u0275text"](62,"Display three dimensions of data"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](63,"mat-card-content"),o["\u0275\u0275element"](64,"canvas",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](65,"div",1),o["\u0275\u0275elementStart"](66,"mat-card"),o["\u0275\u0275elementStart"](67,"mat-card-title"),o["\u0275\u0275text"](68,"Doughnut"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](69,"mat-card-subtitle"),o["\u0275\u0275text"](70,"Pie chart with a cutout"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](71,"mat-card-content"),o["\u0275\u0275element"](72,"canvas",3),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](73,"div",1),o["\u0275\u0275elementStart"](74,"mat-card"),o["\u0275\u0275elementStart"](75,"mat-card-title"),o["\u0275\u0275text"](76,"Pie"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](77,"mat-card-subtitle"),o["\u0275\u0275text"](78,"Without the cutout"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](79,"mat-card-content"),o["\u0275\u0275element"](80,"canvas",4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](81,"div",1),o["\u0275\u0275elementStart"](82,"mat-card"),o["\u0275\u0275elementStart"](83,"mat-card-title"),o["\u0275\u0275text"](84,"Polar area"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](85,"mat-card-subtitle"),o["\u0275\u0275text"](86,"Each segment has the same angle"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](87,"mat-card-content"),o["\u0275\u0275element"](88,"canvas",5),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](89,"div",1),o["\u0275\u0275elementStart"](90,"mat-card"),o["\u0275\u0275elementStart"](91,"mat-card-title"),o["\u0275\u0275text"](92,"Radar"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](93,"mat-card-subtitle"),o["\u0275\u0275text"](94,"Multiple data points and the variation between them"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](95,"mat-card-content"),o["\u0275\u0275element"](96,"canvas",6),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartOptions)("colors",t.lineChartColors)("legend",t.barChartLegend)("chartType",t.barChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartHorizontalOptions)("colors",t.lineChartColors)("legend",t.barChartLegend)("chartType",t.barChartHorizontalType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.barChartData)("labels",t.barChartLabels)("options",t.barChartStackedOptions)("colors",t.lineChartColors)("legend",t.barChartLegend)("chartType",t.barChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.lineChartData)("labels",t.lineChartLabels)("options",t.lineChartOptions)("colors",t.lineChartColors)("legend",t.lineChartLegend)("chartType",t.lineChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.lineChartSteppedData)("labels",t.lineChartLabels)("options",t.lineChartOptions)("colors",t.lineChartColors)("legend",t.lineChartLegend)("chartType",t.lineChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.lineChartPointsData)("labels",t.lineChartLabels)("options",t.lineChartPointsOptions)("colors",t.lineChartColors)("legend",t.lineChartLegend)("chartType",t.lineChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.ComboChartData)("labels",t.lineChartLabels)("options",t.ComboChartOptions)("colors",t.lineChartColors)("legend",t.lineChartLegend)("chartType",t.barChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.bubbleChartData)("labels",t.lineChartLabels)("options",t.lineChartOptions)("colors",t.lineChartColors)("legend",t.lineChartLegend)("chartType",t.bubbleChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("data",t.doughnutChartData)("labels",t.doughnutChartLabels)("options",t.doughnutOptions)("colors",t.doughnutChartColors)("chartType",t.doughnutChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("data",t.pieChartData)("options",t.doughnutOptions)("colors",t.doughnutChartColors)("labels",t.pieChartLabels)("chartType",t.pieChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("data",t.polarAreaChartData)("options",t.doughnutOptions)("colors",t.doughnutChartColors)("labels",t.polarAreaChartLabels)("legend",t.polarAreaLegend)("chartType",t.polarAreaChartType),o["\u0275\u0275advance"](8),o["\u0275\u0275property"]("datasets",t.radarChartData)("options",t.globalChartOptions)("colors",t.lineChartColors)("labels",t.radarChartLabels)("chartType",t.radarChartType))},directives:[i.c,i.a,s.a,s.i,s.h,s.d,d.a],styles:[""]}),n)}],c=r("ofXK"),m=r("YUcS"),b=r("tyNb"),p=((l=function t(){e(this,t)}).\u0275mod=o["\u0275\u0275defineNgModule"]({type:l}),l.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||l)},imports:[[c.c,b.i.forChild(h),d.b,s.g,m.a]]}),l)}}])}();