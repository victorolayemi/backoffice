!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{jkDv:function(n,a,o){"use strict";o.r(a),o.d(a,"AdminModule",function(){return R});var l=o("ofXK"),r=o("qFsG"),i=o("lDzL"),m=o("tyNb"),p=o("tk/3"),d=o("AytR"),c=o("fXoL"),u=o("kmnG"),s=o("XiUz"),f=o("bTqV"),g=o("NFeN");function h(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"strong"),c["\u0275\u0275text"](1,"First Name"),c["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&c["\u0275\u0275text"](0),2&e&&c["\u0275\u0275textInterpolate1"](" ",t.value," ")}function x(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"strong"),c["\u0275\u0275text"](1,"Last Name"),c["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&c["\u0275\u0275text"](0),2&e&&c["\u0275\u0275textInterpolate1"](" ",t.value," ")}function y(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"strong"),c["\u0275\u0275text"](1,"Email"),c["\u0275\u0275elementEnd"]())}function S(e,t){1&e&&c["\u0275\u0275text"](0),2&e&&c["\u0275\u0275textInterpolate1"](" ",t.value," ")}function E(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"strong"),c["\u0275\u0275text"](1,"Phone Number"),c["\u0275\u0275elementEnd"]())}function w(e,t){1&e&&c["\u0275\u0275text"](0),2&e&&c["\u0275\u0275textInterpolate1"](" ",t.value," ")}function k(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"strong"),c["\u0275\u0275text"](1,"Email Verified"),c["\u0275\u0275elementEnd"]())}function I(e,t){1&e&&c["\u0275\u0275text"](0),2&e&&c["\u0275\u0275textInterpolate1"](" ",t.value," ")}function L(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"strong"),c["\u0275\u0275text"](1,"Joined"),c["\u0275\u0275elementEnd"]())}function A(e,t){1&e&&(c["\u0275\u0275text"](0),c["\u0275\u0275pipe"](1,"date")),2&e&&c["\u0275\u0275textInterpolate1"](" ",c["\u0275\u0275pipeBind2"](1,1,t.value,"dd-MMM-yyyy")," ")}function M(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"strong"),c["\u0275\u0275text"](1,"Status"),c["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&c["\u0275\u0275text"](0),2&e&&c["\u0275\u0275textInterpolate1"](" ",t.value," ")}var C=function(){return["/add-food-category"]};function F(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"button",16),c["\u0275\u0275elementStart"](1,"mat-icon",4),c["\u0275\u0275text"](2,"edit"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](1,C))}function N(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"button",17),c["\u0275\u0275elementStart"](1,"mat-icon",4),c["\u0275\u0275text"](2,"delete"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]())}var T,H,U=function(){return["/add-admin"]},J=[{path:"",component:(T=function(){function n(t,a){e(this,n),this.http=t,this.router=a,this.rows=[],this.temp=[],this.ColumnMode=i.a,this.isLoading=!1,this.total=0,this.p=1}var a,o,l;return a=n,(o=[{key:"ngOnInit",value:function(){this.getAdmin({offset:0})}},{key:"fetch",value:function(e){var t=new XMLHttpRequest;t.open("GET","assets/data/company.json"),t.onload=function(){e(JSON.parse(t.response))},t.send()}},{key:"updateFilter",value:function(e){var t=e.target.value.toLowerCase(),n=this.temp.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t)||!t});this.rows=n}},{key:"getAdmin",value:function(e){var t=this;this.isLoading=!0,console.log(e.offset+1),this.p=e.offset;var n=e.offset+1,a=localStorage.getItem("authToken"),o=new p.d({Authorization:"Bearer "+a,Accept:"application/json","Content-Type":"application/json"});this.http.get("".concat(d.a.apiUrl,"admin/users?page=").concat(n),{headers:o}).subscribe(function(e){t.rows=e.data,t.total=e.total,console.log(e),t.isLoading=!1})}},{key:"deleteAdmin",value:function(e){var t=this,n=localStorage.getItem("authToken"),a=new p.d({Authorization:"Bearer "+n,Accept:"application/json","Content-Type":"application/json"});this.http.delete("".concat(d.a.apiUrl,"admin/users/").concat(e.id),{headers:a}).subscribe(function(e){t.getAdmin({offset:t.p})})}}])&&t(a.prototype,o),l&&t(a,l),n}(),T.\u0275fac=function(e){return new(e||T)(c["\u0275\u0275directiveInject"](p.b),c["\u0275\u0275directiveInject"](m.f))},T.\u0275cmp=c["\u0275\u0275defineComponent"]({type:T,selectors:[["app-admin"]],decls:33,vars:7,consts:[[1,"mb-1",2,"width","100%"],["matInput","","placeholder","Type to filter the name column...","required","",3,"keyup"],["fxLayout","row",2,"padding","20px 10px 20px 8px","right","0"],["fxLayoutAlign","end center","mat-raised-button","","color","primary",3,"routerLink"],["aria-label","add category"],["rowHeight","auto",1,"material","striped",3,"rows","columnMode","headerHeight","footerHeight","loadingIndicator"],["prop","first_name"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","last_name"],["prop","email"],["prop","phone_number"],["prop","email_verified"],["prop","created_at"],["prop","status"],["name",""],["mat-icon-button","","color","primary",3,"routerLink"],["mat-icon-button","",2,"color","red"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"mat-form-field",0),c["\u0275\u0275elementStart"](1,"input",1),c["\u0275\u0275listener"]("keyup",function(e){return t.updateFilter(e)}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"div",2),c["\u0275\u0275elementStart"](3,"button",3),c["\u0275\u0275elementStart"](4,"mat-icon",4),c["\u0275\u0275text"](5,"add"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](6," Add New Admin User"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"ngx-datatable",5),c["\u0275\u0275elementStart"](8,"ngx-datatable-column",6),c["\u0275\u0275template"](9,h,2,0,"ng-template",7),c["\u0275\u0275template"](10,b,1,1,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"ngx-datatable-column",9),c["\u0275\u0275template"](12,x,2,0,"ng-template",7),c["\u0275\u0275template"](13,v,1,1,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"ngx-datatable-column",10),c["\u0275\u0275template"](15,y,2,0,"ng-template",7),c["\u0275\u0275template"](16,S,1,1,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](17,"ngx-datatable-column",11),c["\u0275\u0275template"](18,E,2,0,"ng-template",7),c["\u0275\u0275template"](19,w,1,1,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](20,"ngx-datatable-column",12),c["\u0275\u0275template"](21,k,2,0,"ng-template",7),c["\u0275\u0275template"](22,I,1,1,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](23,"ngx-datatable-column",13),c["\u0275\u0275template"](24,L,2,0,"ng-template",7),c["\u0275\u0275template"](25,A,2,4,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](26,"ngx-datatable-column",14),c["\u0275\u0275template"](27,M,2,0,"ng-template",7),c["\u0275\u0275template"](28,j,1,1,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](29,"ngx-datatable-column",15),c["\u0275\u0275template"](30,F,3,2,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](31,"ngx-datatable-column",15),c["\u0275\u0275template"](32,N,3,0,"ng-template",8),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("routerLink",c["\u0275\u0275pureFunction0"](6,U)),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("rows",t.rows)("columnMode",t.ColumnMode.force)("headerHeight",50)("footerHeight",50)("loadingIndicator",t.isLoading))},directives:[u.c,r.b,s.c,f.b,s.b,m.g,g.a,i.e,i.c,i.d,i.b],pipes:[l.f],styles:[""]}),T)},{path:"add",component:o("JKUf").a}],_=o("YUcS"),q=o("Wp6s"),z=o("MutI"),O=o("STbY"),X=o("bv9b"),B=o("3Pt+"),G=o("QibW"),P=o("/t3+"),R=((H=function t(){e(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:H}),H.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||H)},imports:[[l.c,m.i.forChild(J),r.c,i.f,g.b,q.g,f.c,z.e,X.b,O.c,G.c,P.b,_.a,B.FormsModule,B.ReactiveFormsModule]]}),H)}}])}();