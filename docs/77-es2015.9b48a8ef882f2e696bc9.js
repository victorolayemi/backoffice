(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{vVG6:function(e,t,a){"use strict";a.r(t),a.d(t,"VehicleMakeModule",function(){return $});var n=a("ofXK"),i=a("qFsG"),o=a("lDzL"),l=a("tyNb"),r=a("tk/3"),s=a("AytR"),c=a("fXoL"),d=a("XiUz"),m=a("kmnG"),h=a("d3UM"),p=a("FKr1"),u=a("bTqV"),g=a("NFeN"),f=a("1jcm");function x(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"strong"),c["\u0275\u0275text"](1,"Make"),c["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&c["\u0275\u0275text"](0),2&e&&c["\u0275\u0275textInterpolate1"](" ",t.value," ")}function S(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"mat-slide-toggle",18),c["\u0275\u0275listener"]("change",function(t){c["\u0275\u0275restoreView"](e);const a=c["\u0275\u0275nextContext"](),n=a.value,i=a.row;return c["\u0275\u0275nextContext"]().updateValue(t,"status",n,i)}),c["\u0275\u0275elementEnd"]()}}function b(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"mat-slide-toggle",19),c["\u0275\u0275listener"]("change",function(t){c["\u0275\u0275restoreView"](e);const a=c["\u0275\u0275nextContext"](),n=a.value,i=a.row;return c["\u0275\u0275nextContext"]().updateValue(t,"status",n,i)}),c["\u0275\u0275elementEnd"]()}}function w(e,t){if(1&e&&(c["\u0275\u0275template"](0,S,1,0,"mat-slide-toggle",16),c["\u0275\u0275template"](1,b,1,0,"mat-slide-toggle",17)),2&e){const e=t.value;c["\u0275\u0275property"]("ngIf","active"==e),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngIf","inactive"==e)}}const k=function(){return["/add-vehicle-make"]},y=[{path:"",component:(()=>{class e{constructor(e,t){this.http=e,this.router=t,this.rows=[],this.temp=[],this.ColumnMode=o.a,this.searchTerms="",this.url="",this.status="",this.editing={},this.isLoading=!1,this.total=0,this.p=1}ngOnInit(){this.getS({offset:0})}getVehicle(e){this.isLoading=!0;let t=localStorage.getItem("authToken"),a=new r.d({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});this.http.get(""+e,{headers:a}).subscribe(e=>{this.rows=e.data,this.total=e.total,console.log(e),this.isLoading=!1})}getS(e){this.p=e.offset;let t=e.offset+1;this.url=""!=this.searchTerms?`${s.a.apiUrl}admin/vehicle-make?page=${t}&q=${this.searchTerms}`:`${s.a.apiUrl}admin/vehicle-make?page=${t}`,console.log(this.url),this.getVehicle(this.url)}updateValue(e,t,a,n){this.status=1==e.checked?"active":"inactive",this.isLoading=!0,this.editing[n.$$index+"-"+t]=!1;let i={status:this.status};console.log(n);let o=localStorage.getItem("authToken"),l=new r.d({Authorization:"Bearer "+o,Accept:"application/json","Content-Type":"application/json"});this.http.put(`${s.a.apiUrl}admin/vehicle-make/${n.id}?page=${this.p}`,i,{headers:l}).subscribe(e=>{this.getS({offset:this.p}),this.rows=e.data,this.isLoading=!1})}changeStatus(e){this.status=e.value,this.isLoading=!0;let t=localStorage.getItem("authToken"),a=new r.d({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${s.a.apiUrl}admin/vehicle-make?status=${this.status}&per_page=50`,{headers:a}).subscribe(e=>{this.rows=e.data,this.total=e.total,console.log(e),this.isLoading=!1})}searchChange(e){this.searchTerms=e.target.value,this.isLoading=!0;let t=localStorage.getItem("authToken"),a=new r.d({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${s.a.apiUrl}admin/vehicle-make?q=${this.searchTerms}`,{headers:a}).subscribe(e=>{this.rows=e.data,this.total=e.total,console.log(e),this.isLoading=!1})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](r.b),c["\u0275\u0275directiveInject"](l.f))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["app-vehicle-make"]],decls:28,vars:12,consts:[["fxLayout","row wrap",1,"col-gap"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","75","fxFlex.lg","75","fxFlex.xl","75"],["appearance","outline"],["matInput","","placeholder","Search Vehicle Make",3,"keyup"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","25","fxFlex.lg","25","fxFlex.xl","25",1,"column"],["placeholder","Status",3,"selectionChange"],["value","active"],["value","inactive"],["fxLayout","row",2,"padding","20px 10px 20px 8px","right","0"],["fxLayoutAlign","end center","mat-raised-button","","color","primary",3,"routerLink"],["aria-label","add category"],["rowHeight","auto",1,"material","striped",3,"rows","columnMode","headerHeight","footerHeight","loadingIndicator","externalPaging","count","offset","limit","page"],["prop","make"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["name","status",3,"maxWidth"],["checked","","color","primary",3,"change",4,"ngIf"],[3,"change",4,"ngIf"],["checked","","color","primary",3,"change"],[3,"change"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"mat-form-field",2),c["\u0275\u0275elementStart"](3,"mat-label"),c["\u0275\u0275text"](4,"Search by Vehicle Make"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"input",3),c["\u0275\u0275listener"]("keyup",function(e){return t.searchChange(e)}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"div",4),c["\u0275\u0275elementStart"](7,"mat-form-field",2),c["\u0275\u0275elementStart"](8,"mat-label"),c["\u0275\u0275text"](9,"Filter By Status"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"mat-select",5),c["\u0275\u0275listener"]("selectionChange",function(e){return t.changeStatus(e)}),c["\u0275\u0275elementStart"](11,"mat-option"),c["\u0275\u0275text"](12,"Select Status"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"mat-option",6),c["\u0275\u0275text"](14,"Active"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"mat-option",7),c["\u0275\u0275text"](16,"Inactive"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"div",8),c["\u0275\u0275elementStart"](18,"button",9),c["\u0275\u0275elementStart"](19,"mat-icon",10),c["\u0275\u0275text"](20,"add"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](21," Add New Vehicle Make"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"ngx-datatable",11),c["\u0275\u0275listener"]("page",function(e){return t.getS(e)}),c["\u0275\u0275elementStart"](23,"ngx-datatable-column",12),c["\u0275\u0275template"](24,x,2,0,"ng-template",13),c["\u0275\u0275template"](25,v,1,1,"ng-template",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](26,"ngx-datatable-column",15),c["\u0275\u0275template"](27,w,2,2,"ng-template",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](18),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](11,k)),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("rows",t.rows)("columnMode",t.ColumnMode.force)("headerHeight",50)("footerHeight",50)("loadingIndicator",t.isLoading)("externalPaging",!0)("count",t.total)("offset",t.p)("limit",15),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("maxWidth",100))},directives:[d.c,d.a,m.c,m.g,i.b,h.a,p.o,u.b,d.b,l.g,g.a,o.e,o.c,o.d,o.b,n.o,f.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:98%}"]}),e})()},{path:"add",component:a("9AX5").a}];var E=a("YUcS"),C=a("Wp6s"),I=a("MutI"),F=a("STbY"),L=a("bv9b"),M=a("3Pt+"),T=a("QibW"),V=a("/t3+");let $=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,l.i.forChild(y),i.c,o.f,g.b,C.g,u.c,I.e,L.b,F.c,T.c,V.b,f.b,h.b,E.a,M.FormsModule,M.ReactiveFormsModule]]}),e})()}}]);