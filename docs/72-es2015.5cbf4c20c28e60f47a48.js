(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{NXr7:function(t,e,n){"use strict";n.r(e),n.d(e,"CitiesModule",function(){return _});var a=n("ofXK"),i=n("qFsG"),o=n("bTqV"),l=n("d3UM"),r=n("kmnG"),s=n("YUcS"),c=n("1jcm"),m=n("lDzL"),p=n("tyNb"),u=n("tk/3"),d=n("AytR"),h=n("fXoL"),g=n("XiUz"),f=n("FKr1");function x(t,e){if(1&t){const t=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"mat-option",24),h["\u0275\u0275listener"]("click",function(){return h["\u0275\u0275restoreView"](t),h["\u0275\u0275nextContext"](),h["\u0275\u0275reference"](6).value=""}),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;h["\u0275\u0275property"]("value",t.iso2),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](t.name)}}function S(t,e){if(1&t&&(h["\u0275\u0275elementStart"](0,"mat-option",25),h["\u0275\u0275text"](1),h["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;h["\u0275\u0275property"]("value",t.id),h["\u0275\u0275advance"](1),h["\u0275\u0275textInterpolate"](t.name)}}function y(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"strong"),h["\u0275\u0275text"](1,"City"),h["\u0275\u0275elementEnd"]())}function v(t,e){1&t&&h["\u0275\u0275text"](0),2&t&&h["\u0275\u0275textInterpolate1"](" ",e.value," ")}function C(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"strong"),h["\u0275\u0275text"](1,"State Code"),h["\u0275\u0275elementEnd"]())}function w(t,e){1&t&&h["\u0275\u0275text"](0),2&t&&h["\u0275\u0275textInterpolate1"](" ",e.value," ")}function b(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"strong"),h["\u0275\u0275text"](1,"Country Code"),h["\u0275\u0275elementEnd"]())}function E(t,e){1&t&&h["\u0275\u0275text"](0),2&t&&h["\u0275\u0275textInterpolate1"](" ",e.value," ")}function I(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"strong"),h["\u0275\u0275text"](1,"Latitude"),h["\u0275\u0275elementEnd"]())}function $(t,e){1&t&&h["\u0275\u0275text"](0),2&t&&h["\u0275\u0275textInterpolate1"](" ",e.value," ")}function k(t,e){1&t&&(h["\u0275\u0275elementStart"](0,"strong"),h["\u0275\u0275text"](1,"Longitude"),h["\u0275\u0275elementEnd"]())}function T(t,e){1&t&&h["\u0275\u0275text"](0),2&t&&h["\u0275\u0275textInterpolate1"](" ",e.value," ")}function j(t,e){if(1&t){const t=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"mat-slide-toggle",28),h["\u0275\u0275listener"]("change",function(e){h["\u0275\u0275restoreView"](t);const n=h["\u0275\u0275nextContext"](),a=n.value,i=n.row;return h["\u0275\u0275nextContext"]().updateValue(e,"status",a,i)}),h["\u0275\u0275elementEnd"]()}}function F(t,e){if(1&t){const t=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"mat-slide-toggle",29),h["\u0275\u0275listener"]("change",function(e){h["\u0275\u0275restoreView"](t);const n=h["\u0275\u0275nextContext"](),a=n.value,i=n.row;return h["\u0275\u0275nextContext"]().updateValue(e,"status",a,i)}),h["\u0275\u0275elementEnd"]()}}function L(t,e){if(1&t&&(h["\u0275\u0275template"](0,j,1,0,"mat-slide-toggle",26),h["\u0275\u0275template"](1,F,1,0,"mat-slide-toggle",27)),2&t){const t=e.value;h["\u0275\u0275property"]("ngIf","active"==t),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("ngIf","inactive"==t)}}const A=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.router=e,this.editing={},this.rows=[],this.temp=[],this.country_code="",this.countrySelected=!1,this.ColumnMode=m.a,this.state="",this.searchTerms="",this.isLoading=!1,this.total=0,this.p=0}ngOnInit(){this.getS({offset:0})}ngAfterViewInit(){this.getCountries()}getCities(t){this.isLoading=!0;let e=localStorage.getItem("authToken"),n=new u.d({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});this.http.get(""+t,{headers:n}).subscribe(t=>{this.rows=t.data,this.total=t.total,console.log(t),this.isLoading=!1})}getS(t){this.p=t.offset;let e=t.offset+1;this.url=""!=this.country_code?`${d.a.apiUrl}admin/city?page=${e}&country=${this.country_code}`:""!=this.searchTerms?`${d.a.apiUrl}admin/city?page=${e}&q=${this.searchTerms}`:`${d.a.apiUrl}admin/city?page=${e}`,""!=this.state&&""!=this.country_code&&(this.url=`${d.a.apiUrl}admin/city?page=${e}&state=${this.state}`),console.log(this.url),this.getCities(this.url)}updateValue(t,e,n,a){this.isLoading=!0,this.status=1==t.checked?"active":"inactive",this.editing[a.$$index+"-"+e]=!1;let i={status:this.status};console.log(a);let o=localStorage.getItem("authToken"),l=new u.d({Authorization:"Bearer "+o,Accept:"application/json","Content-Type":"application/json"});this.http.put(`${d.a.apiUrl}admin/city/${a.id}?page=${this.p}`,i,{headers:l}).subscribe(t=>{console.log(t),this.getS({offset:this.p}),this.isLoading=!1})}getCountries(){let t=localStorage.getItem("authToken"),e=new u.d({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});this.http.get(d.a.apiUrl+"admin/country?per_page=250",{headers:e}).subscribe(t=>{this.countries=t.data})}getState(){let t=localStorage.getItem("authToken"),e=new u.d({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${d.a.apiUrl}admin/state?per_page=250&country=${this.country_code}`,{headers:e}).subscribe(t=>{this.states=t.data})}changeCountry(t){this.p=0,this.state="",this.searchTerms="",this.country_code=t.value,this.countrySelected=!0,this.isLoading=!0;let e=localStorage.getItem("authToken"),n=new u.d({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${d.a.apiUrl}admin/city?country=${this.country_code}`,{headers:n}).subscribe(t=>{this.rows=t.data,this.total=t.total,this.isLoading=!1,this.getState()})}changeStates(t){this.p=0,this.isLoading=!0,this.state=t.value;let e=localStorage.getItem("authToken"),n=new u.d({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${d.a.apiUrl}admin/city?state=${this.state}`,{headers:n}).subscribe(t=>{this.rows=t.data,this.total=t.total,this.isLoading=!1,this.getState()})}changeStatus(t){this.p=0,this.state="",this.searchTerms="",this.country_code="",this.isLoading=!0;let e=localStorage.getItem("authToken"),n=new u.d({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${d.a.apiUrl}admin/city?status=${t.value}`,{headers:n}).subscribe(t=>{this.rows=t.data,this.total=t.total,console.log(t),this.isLoading=!1})}searchChange(t){this.country_code="",this.searchTerms=t.target.value,this.isLoading=!0;let e=localStorage.getItem("authToken"),n=new u.d({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${d.a.apiUrl}admin/city?q=${this.searchTerms}`,{headers:n}).subscribe(t=>{this.rows=t.data,this.total=t.total,console.log(t),this.isLoading=!1})}}return t.\u0275fac=function(e){return new(e||t)(h["\u0275\u0275directiveInject"](u.b),h["\u0275\u0275directiveInject"](p.f))},t.\u0275cmp=h["\u0275\u0275defineComponent"]({type:t,selectors:[["app-cities"]],decls:54,vars:11,consts:[["fxLayout","row wrap",1,"col-gap"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","40","fxFlex.lg","40","fxFlex.xl","40",1,"column"],["appearance","outline"],["matInput","","placeholder","Search City","name","search",3,"keyup","click"],["search",""],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","20","fxFlex.lg","20","fxFlex.xl","20",1,"column"],["placeholder","Level","name","country_code",3,"selectionChange"],["country_code",""],[3,"value","click",4,"ngFor","ngForOf"],["placeholder","State","name","state",3,"selectionChange"],["state",""],[3,"value",4,"ngFor","ngForOf"],["placeholder","Status",3,"selectionChange"],["value","active",3,"click"],["value","inactive",3,"click"],["rowHeight","auto",1,"material","striped",3,"rows","columnMode","headerHeight","footerHeight","loadingIndicator","externalPaging","count","offset","limit","page"],["prop","name"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","state_code"],["prop","country_code"],["prop","latitude"],["prop","longitude"],["name","status"],[3,"value","click"],[3,"value"],["checked","","color","primary",3,"change",4,"ngIf"],[3,"change",4,"ngIf"],["checked","","color","primary",3,"change"],[3,"change"]],template:function(t,e){if(1&t){const t=h["\u0275\u0275getCurrentView"]();h["\u0275\u0275elementStart"](0,"div",0),h["\u0275\u0275elementStart"](1,"div",1),h["\u0275\u0275elementStart"](2,"mat-form-field",2),h["\u0275\u0275elementStart"](3,"mat-label"),h["\u0275\u0275text"](4,"Search by Name"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"input",3,4),h["\u0275\u0275listener"]("keyup",function(t){return e.searchChange(t)})("click",function(){h["\u0275\u0275restoreView"](t);const e=h["\u0275\u0275reference"](12),n=h["\u0275\u0275reference"](21);return e.value="",n.value=""}),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](7,"div",5),h["\u0275\u0275elementStart"](8,"mat-form-field",2),h["\u0275\u0275elementStart"](9,"mat-label"),h["\u0275\u0275text"](10,"Filter By Country"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](11,"mat-select",6,7),h["\u0275\u0275listener"]("selectionChange",function(t){return e.changeCountry(t)}),h["\u0275\u0275elementStart"](13,"mat-option"),h["\u0275\u0275text"](14,"Select Country"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](15,x,2,2,"mat-option",8),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](16,"div",5),h["\u0275\u0275elementStart"](17,"mat-form-field",2),h["\u0275\u0275elementStart"](18,"mat-label"),h["\u0275\u0275text"](19,"Filter By State"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](20,"mat-select",9,10),h["\u0275\u0275listener"]("selectionChange",function(t){return e.changeStates(t)}),h["\u0275\u0275elementStart"](22,"mat-option"),h["\u0275\u0275text"](23,"Select State"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275template"](24,S,2,2,"mat-option",11),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](25,"div",5),h["\u0275\u0275elementStart"](26,"mat-form-field",2),h["\u0275\u0275elementStart"](27,"mat-label"),h["\u0275\u0275text"](28,"Filter By Status"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](29,"mat-select",12),h["\u0275\u0275listener"]("selectionChange",function(t){return e.changeStatus(t)}),h["\u0275\u0275elementStart"](30,"mat-option"),h["\u0275\u0275text"](31,"Select Status"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](32,"mat-option",13),h["\u0275\u0275listener"]("click",function(){h["\u0275\u0275restoreView"](t);const e=h["\u0275\u0275reference"](12),n=h["\u0275\u0275reference"](21),a=h["\u0275\u0275reference"](6);return e.value="",n.value="",a.value=""}),h["\u0275\u0275text"](33,"Active"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](34,"mat-option",14),h["\u0275\u0275listener"]("click",function(){h["\u0275\u0275restoreView"](t);const e=h["\u0275\u0275reference"](12),n=h["\u0275\u0275reference"](21),a=h["\u0275\u0275reference"](6);return e.value="",n.value="",a.value=""}),h["\u0275\u0275text"](35,"Inactive"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](36,"ngx-datatable",15),h["\u0275\u0275listener"]("page",function(t){return e.getS(t)}),h["\u0275\u0275elementStart"](37,"ngx-datatable-column",16),h["\u0275\u0275template"](38,y,2,0,"ng-template",17),h["\u0275\u0275template"](39,v,1,1,"ng-template",18),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](40,"ngx-datatable-column",19),h["\u0275\u0275template"](41,C,2,0,"ng-template",17),h["\u0275\u0275template"](42,w,1,1,"ng-template",18),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](43,"ngx-datatable-column",20),h["\u0275\u0275template"](44,b,2,0,"ng-template",17),h["\u0275\u0275template"](45,E,1,1,"ng-template",18),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](46,"ngx-datatable-column",21),h["\u0275\u0275template"](47,I,2,0,"ng-template",17),h["\u0275\u0275template"](48,$,1,1,"ng-template",18),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](49,"ngx-datatable-column",22),h["\u0275\u0275template"](50,k,2,0,"ng-template",17),h["\u0275\u0275template"](51,T,1,1,"ng-template",18),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](52,"ngx-datatable-column",23),h["\u0275\u0275template"](53,L,2,2,"ng-template",18),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()}2&t&&(h["\u0275\u0275advance"](15),h["\u0275\u0275property"]("ngForOf",e.countries),h["\u0275\u0275advance"](9),h["\u0275\u0275property"]("ngForOf",e.states),h["\u0275\u0275advance"](12),h["\u0275\u0275property"]("rows",e.rows)("columnMode",e.ColumnMode.force)("headerHeight",50)("footerHeight",50)("loadingIndicator",e.isLoading)("externalPaging",!0)("count",e.total)("offset",e.p)("limit",15))},directives:[g.c,g.a,r.c,r.g,i.b,l.a,f.o,a.n,m.e,m.c,m.d,m.b,a.o,c.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:98%}"]}),t})()}];let _=(()=>{class t{}return t.\u0275mod=h["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.c,p.i.forChild(A),i.c,o.c,l.b,r.e,s.a,c.b,m.f]]}),t})()}}]);