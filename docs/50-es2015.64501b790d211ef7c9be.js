(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"29D5":function(t,e,n){"use strict";n.r(e),n.d(e,"RideSettingCityModule",function(){return z});var a=n("ofXK"),o=n("qFsG"),i=n("lDzL"),l=n("tyNb"),r=n("tk/3"),d=n("AytR"),p=n("fXoL"),s=n("XiUz"),m=n("bTqV"),c=n("NFeN");function u(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"strong"),p["\u0275\u0275text"](1,"City"),p["\u0275\u0275elementEnd"]())}function g(t,e){1&t&&p["\u0275\u0275text"](0),2&t&&p["\u0275\u0275textInterpolate1"](" ",e.value," ")}function f(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"strong"),p["\u0275\u0275text"](1,"Country"),p["\u0275\u0275elementEnd"]())}function h(t,e){1&t&&p["\u0275\u0275text"](0),2&t&&p["\u0275\u0275textInterpolate1"](" ",e.value," ")}function x(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"strong"),p["\u0275\u0275text"](1,"Region"),p["\u0275\u0275elementEnd"]())}function b(t,e){1&t&&p["\u0275\u0275text"](0),2&t&&p["\u0275\u0275textInterpolate1"](" ",e.value," ")}function S(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"strong"),p["\u0275\u0275text"](1,"date"),p["\u0275\u0275elementEnd"]())}function y(t,e){1&t&&(p["\u0275\u0275text"](0),p["\u0275\u0275pipe"](1,"date")),2&t&&p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind2"](1,1,e.value,"dd-MMM-yyyy")," ")}function w(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"strong"),p["\u0275\u0275text"](1,"Status"),p["\u0275\u0275elementEnd"]())}function E(t,e){1&t&&p["\u0275\u0275text"](0),2&t&&p["\u0275\u0275textInterpolate1"](" ",e.value," ")}const v=function(t){return["/edit-ride-city",t]};function L(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"button",14),p["\u0275\u0275elementStart"](1,"mat-icon",15),p["\u0275\u0275text"](2,"edit"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t&&p["\u0275\u0275property"]("routerLink",p["\u0275\u0275pureFunction1"](1,v,e.value))}function I(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"button",16),p["\u0275\u0275elementStart"](1,"mat-icon",3),p["\u0275\u0275text"](2,"delete"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]())}const C=function(){return["/add-ride-city"]},M=[{path:"",component:(()=>{class t{constructor(t,e){this.http=t,this.router=e,this.rows=[],this.temp=[],this.ColumnMode=i.a,this.isLoading=!1,this.total=0,this.p=1}ngOnInit(){this.getSettings({offset:0})}fetch(t){const e=new XMLHttpRequest;e.open("GET","assets/data/company.json"),e.onload=()=>{t(JSON.parse(e.response))},e.send()}updateFilter(t){const e=t.target.value.toLowerCase(),n=this.temp.filter(t=>-1!==t.name.toLowerCase().indexOf(e)||!e);this.rows=n}getSettings(t){this.isLoading=!0,console.log(t.offset+1),this.p=t.offset;let e=t.offset+1,n=localStorage.getItem("authToken"),a=new r.d({Authorization:"Bearer "+n,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${d.a.apiUrl}admin/ride-settings?page=${e}`,{headers:a}).subscribe(t=>{this.rows=t.data,this.total=t.total,console.log(t),this.isLoading=!1})}deleteAdmin(t){let e=localStorage.getItem("authToken"),n=new r.d({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});this.http.delete(`${d.a.apiUrl}admin/ride-settings/${t.id}`,{headers:n}).subscribe(t=>{this.getSettings({offset:this.p})})}}return t.\u0275fac=function(e){return new(e||t)(p["\u0275\u0275directiveInject"](r.b),p["\u0275\u0275directiveInject"](l.f))},t.\u0275cmp=p["\u0275\u0275defineComponent"]({type:t,selectors:[["app-ride-settings-city"]],decls:27,vars:7,consts:[[2,"padding","20px 10px 20px 8px","right","0"],["fxLayout","row",2,"padding","20px 10px 20px 8px","right","0"],["fxLayoutAlign","end center","mat-raised-button","","color","primary",3,"routerLink"],["aria-label","add category"],["rowHeight","auto",1,"material","striped",3,"rows","columnMode","headerHeight","footerHeight","loadingIndicator"],["prop","cities"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","country"],["prop","state"],["prop","created_at"],["prop","status"],["prop","id"],["name",""],["mat-icon-button","","color","primary",3,"routerLink"],["aria-label","edit category"],["mat-icon-button","",2,"color","red"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"h2",0),p["\u0275\u0275text"](1,"Ride settings for Cities"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"button",2),p["\u0275\u0275elementStart"](4,"mat-icon",3),p["\u0275\u0275text"](5,"add"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](6," Add New City"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"ngx-datatable",4),p["\u0275\u0275elementStart"](8,"ngx-datatable-column",5),p["\u0275\u0275template"](9,u,2,0,"ng-template",6),p["\u0275\u0275template"](10,g,1,1,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"ngx-datatable-column",8),p["\u0275\u0275template"](12,f,2,0,"ng-template",6),p["\u0275\u0275template"](13,h,1,1,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"ngx-datatable-column",9),p["\u0275\u0275template"](15,x,2,0,"ng-template",6),p["\u0275\u0275template"](16,b,1,1,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](17,"ngx-datatable-column",10),p["\u0275\u0275template"](18,S,2,0,"ng-template",6),p["\u0275\u0275template"](19,y,2,4,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](20,"ngx-datatable-column",11),p["\u0275\u0275template"](21,w,2,0,"ng-template",6),p["\u0275\u0275template"](22,E,1,1,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](23,"ngx-datatable-column",12),p["\u0275\u0275template"](24,L,3,3,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](25,"ngx-datatable-column",13),p["\u0275\u0275template"](26,I,3,0,"ng-template",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("routerLink",p["\u0275\u0275pureFunction0"](6,C)),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("rows",e.rows)("columnMode",e.ColumnMode.force)("headerHeight",50)("footerHeight",50)("loadingIndicator",e.isLoading))},directives:[s.c,m.b,s.b,l.g,c.a,i.e,i.c,i.d,i.b],pipes:[a.f],styles:[""]}),t})()}];var j=n("YUcS"),k=n("Wp6s"),A=n("MutI"),F=n("STbY"),T=n("bv9b"),H=n("3Pt+"),N=n("QibW"),R=n("/t3+");let z=(()=>{class t{}return t.\u0275mod=p["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.c,l.i.forChild(M),o.c,i.f,c.b,k.g,m.c,A.e,T.b,F.c,N.c,R.b,j.a,H.FormsModule,H.ReactiveFormsModule]]}),t})()}}]);