!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{M4UK:function(n,a,o){"use strict";o.r(a),o.d(a,"CompanyModule",function(){return K});var l=o("ofXK"),r=o("qFsG"),i=o("lDzL"),m=o("tyNb"),p=o("tk/3"),c=o("AytR"),u=o("fXoL"),d=o("kmnG"),s=o("XiUz"),f=o("bTqV"),g=o("NFeN");function x(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"ID"),u["\u0275\u0275elementEnd"]())}function h(t,e){1&t&&u["\u0275\u0275text"](0),2&t&&u["\u0275\u0275textInterpolate1"](" ",e.value," ")}function b(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"Image"),u["\u0275\u0275elementEnd"]())}function y(t,e){if(1&t&&u["\u0275\u0275element"](0,"img",18),2&t){var n=e.value,a=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("src",a.baseUrl+n,u["\u0275\u0275sanitizeUrl"])}}function v(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"Name"),u["\u0275\u0275elementEnd"]())}function S(t,e){1&t&&u["\u0275\u0275text"](0),2&t&&u["\u0275\u0275textInterpolate1"](" ",e.value," ")}function E(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"Email"),u["\u0275\u0275elementEnd"]())}function w(t,e){1&t&&u["\u0275\u0275text"](0),2&t&&u["\u0275\u0275textInterpolate1"](" ",e.value," ")}function C(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"Phone Number"),u["\u0275\u0275elementEnd"]())}function I(t,e){1&t&&u["\u0275\u0275text"](0),2&t&&u["\u0275\u0275textInterpolate1"](" ",e.value," ")}function k(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"Country"),u["\u0275\u0275elementEnd"]())}function L(t,e){1&t&&u["\u0275\u0275text"](0),2&t&&u["\u0275\u0275textInterpolate1"](" ",e.value," ")}function A(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"VAT"),u["\u0275\u0275elementEnd"]())}function M(t,e){1&t&&u["\u0275\u0275text"](0),2&t&&u["\u0275\u0275textInterpolate1"](" ",e.value," ")}function j(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"Zip Code"),u["\u0275\u0275elementEnd"]())}function z(t,e){1&t&&u["\u0275\u0275text"](0),2&t&&u["\u0275\u0275textInterpolate1"](" ",e.value," ")}function T(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"strong"),u["\u0275\u0275text"](1,"Status"),u["\u0275\u0275elementEnd"]())}function U(t,e){1&t&&u["\u0275\u0275text"](0),2&t&&u["\u0275\u0275textInterpolate1"](" ",e.value," ")}var F=function(){return["/add-food-category"]};function N(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"button",19),u["\u0275\u0275elementStart"](1,"mat-icon",4),u["\u0275\u0275text"](2,"edit"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&t&&u["\u0275\u0275property"]("routerLink",u["\u0275\u0275pureFunction0"](1,F))}function H(t,e){if(1&t){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",20),u["\u0275\u0275listener"]("click",function(){u["\u0275\u0275restoreView"](n);var t=e.row;return u["\u0275\u0275nextContext"]().deleteCompany(t)}),u["\u0275\u0275elementStart"](1,"mat-icon",4),u["\u0275\u0275text"](2,"delete"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}}var R,W,V=function(){return["/add-company"]},_=[{path:"",component:(R=function(){function n(e,a){t(this,n),this.http=e,this.router=a,this.rows=[],this.temp=[],this.ColumnMode=i.a,this.isLoading=!1,this.total=0,this.p=1}var a,o,l;return a=n,(o=[{key:"ngOnInit",value:function(){this.baseUrl=c.a.baseUrl,this.getCompany({offset:0})}},{key:"updateFilter",value:function(t){var e=t.target.value.toLowerCase(),n=this.temp.filter(function(t){return-1!==t.name.toLowerCase().indexOf(e)||!e});this.rows=n}},{key:"getCompany",value:function(t){var e=this;this.isLoading=!0,console.log(t.offset+1),this.p=t.offset;var n=t.offset+1,a=localStorage.getItem("authToken"),o=new p.d({Authorization:"Bearer "+a,Accept:"application/json","Content-Type":"application/json"});this.http.get("".concat(c.a.apiUrl,"admin/company?page=").concat(n),{headers:o}).subscribe(function(t){e.rows=t.data,e.total=t.total,console.log(t),e.isLoading=!1})}},{key:"deleteCompany",value:function(t){var e=this,n=localStorage.getItem("authToken"),a=new p.d({Authorization:"Bearer "+n,Accept:"application/json","Content-Type":"application/json"});this.http.delete("".concat(c.a.apiUrl,"admin/company/").concat(t.id),{headers:a}).subscribe(function(t){e.getCompany({offset:e.p})})}}])&&e(a.prototype,o),l&&e(a,l),n}(),R.\u0275fac=function(t){return new(t||R)(u["\u0275\u0275directiveInject"](p.b),u["\u0275\u0275directiveInject"](m.f))},R.\u0275cmp=u["\u0275\u0275defineComponent"]({type:R,selectors:[["app-company"]],decls:39,vars:11,consts:[[1,"mb-1",2,"width","100%"],["matInput","","placeholder","Type to filter the name column...","required","",3,"keyup"],["fxLayout","row",2,"padding","20px 10px 20px 8px","right","0"],["fxLayoutAlign","end center","mat-raised-button","","color","primary",3,"routerLink"],["aria-label","add category"],["rowHeight","auto",1,"material","striped",3,"rows","columnMode","headerHeight","footerHeight","loadingIndicator"],["prop","id"],["ngx-datatable-header-template",""],["ngx-datatable-cell-template",""],["prop","profile_picture"],["name","Name"],["prop","email"],["prop","phone_number"],["prop","country"],["prop","vat_number"],["prop","zip_code"],["prop","status"],["name","",3,"canAutoResize","maxWidth"],["width","30px","height","30px",3,"src"],["mat-icon-button","","color","primary",3,"routerLink"],["mat-icon-button","",2,"color","red",3,"click"]],template:function(t,e){1&t&&(u["\u0275\u0275elementStart"](0,"mat-form-field",0),u["\u0275\u0275elementStart"](1,"input",1),u["\u0275\u0275listener"]("keyup",function(t){return e.updateFilter(t)}),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"div",2),u["\u0275\u0275elementStart"](3,"button",3),u["\u0275\u0275elementStart"](4,"mat-icon",4),u["\u0275\u0275text"](5,"add"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](6," Add New Company"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"ngx-datatable",5),u["\u0275\u0275elementStart"](8,"ngx-datatable-column",6),u["\u0275\u0275template"](9,x,2,0,"ng-template",7),u["\u0275\u0275template"](10,h,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"ngx-datatable-column",9),u["\u0275\u0275template"](12,b,2,0,"ng-template",7),u["\u0275\u0275template"](13,y,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"ngx-datatable-column",10),u["\u0275\u0275template"](15,v,2,0,"ng-template",7),u["\u0275\u0275template"](16,S,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"ngx-datatable-column",11),u["\u0275\u0275template"](18,E,2,0,"ng-template",7),u["\u0275\u0275template"](19,w,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"ngx-datatable-column",12),u["\u0275\u0275template"](21,C,2,0,"ng-template",7),u["\u0275\u0275template"](22,I,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](23,"ngx-datatable-column",13),u["\u0275\u0275template"](24,k,2,0,"ng-template",7),u["\u0275\u0275template"](25,L,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](26,"ngx-datatable-column",14),u["\u0275\u0275template"](27,A,2,0,"ng-template",7),u["\u0275\u0275template"](28,M,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](29,"ngx-datatable-column",15),u["\u0275\u0275template"](30,j,2,0,"ng-template",7),u["\u0275\u0275template"](31,z,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](32,"ngx-datatable-column",16),u["\u0275\u0275template"](33,T,2,0,"ng-template",7),u["\u0275\u0275template"](34,U,1,1,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](35,"ngx-datatable-column",17),u["\u0275\u0275template"](36,N,3,2,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](37,"ngx-datatable-column",17),u["\u0275\u0275template"](38,H,3,0,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&t&&(u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("routerLink",u["\u0275\u0275pureFunction0"](10,V)),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("rows",e.rows)("columnMode",e.ColumnMode.force)("headerHeight",50)("footerHeight",50)("loadingIndicator",e.isLoading),u["\u0275\u0275advance"](28),u["\u0275\u0275property"]("canAutoResize",!1)("maxWidth",50),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("canAutoResize",!1)("maxWidth",50))},directives:[d.c,r.b,s.c,f.b,s.b,m.g,g.a,i.e,i.c,i.d,i.b],styles:[""]}),R)},{path:"add",component:o("bfD0").a}],q=o("YUcS"),D=o("Wp6s"),O=o("MutI"),P=o("STbY"),X=o("bv9b"),B=o("3Pt+"),G=o("QibW"),J=o("/t3+"),K=((W=function e(){t(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:W}),W.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||W)},imports:[[l.c,m.i.forChild(_),r.c,i.f,g.b,D.g,f.c,O.e,X.b,P.c,G.c,J.b,q.a,B.FormsModule,B.ReactiveFormsModule]]}),W)}}])}();