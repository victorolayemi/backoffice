(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{DTAf:function(t,e,n){"use strict";n.r(e),n.d(e,"AddModule",function(){return F});var o=n("ofXK"),a=n("qFsG"),l=n("FKr1"),i=n("tyNb"),r=n("YUcS"),m=n("bTqV"),s=n("Wp6s"),c=n("NFeN"),f=n("MutI"),p=n("STbY"),g=n("d3UM"),d=n("0IaG"),C=n("bv9b"),M=n("3Pt+"),_=n("AytR"),O=n("tk/3"),P=n("lDzL"),x=n("fXoL"),b=n("XiUz"),h=n("kmnG");function u(t,e){if(1&t&&(x["\u0275\u0275elementStart"](0,"mat-error"),x["\u0275\u0275text"](1),x["\u0275\u0275elementEnd"]()),2&t){const t=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275textInterpolate1"](" ",t.required," ")}}function y(t,e){1&t&&x["\u0275\u0275element"](0,"mat-progress-bar",42)}function w(t,e){if(1&t&&(x["\u0275\u0275elementStart"](0,"h4",40),x["\u0275\u0275text"](1),x["\u0275\u0275template"](2,y,1,0,"mat-progress-bar",41),x["\u0275\u0275elementEnd"]()),2&t){const t=x["\u0275\u0275nextContext"]().$implicit,e=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275textInterpolate1"](" ",null==t?null:t.name," "),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",e.uploading)}}function v(t,e){if(1&t&&(x["\u0275\u0275elementStart"](0,"h4",43),x["\u0275\u0275text"](1),x["\u0275\u0275elementStart"](2,"mat-icon"),x["\u0275\u0275text"](3,"task_alt"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&t){const t=x["\u0275\u0275nextContext"]().$implicit;x["\u0275\u0275advance"](1),x["\u0275\u0275textInterpolate1"](" ",null==t?null:t.name," ")}}function k(t,e){if(1&t){const t=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"div",22),x["\u0275\u0275elementStart"](1,"div",23),x["\u0275\u0275namespaceSVG"](),x["\u0275\u0275elementStart"](2,"svg",24),x["\u0275\u0275element"](3,"polygon",25),x["\u0275\u0275elementStart"](4,"g"),x["\u0275\u0275element"](5,"path",26),x["\u0275\u0275element"](6,"path",27),x["\u0275\u0275element"](7,"path",28),x["\u0275\u0275element"](8,"path",29),x["\u0275\u0275element"](9,"path",30),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](10,"polygon",31),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275namespaceHTML"](),x["\u0275\u0275elementStart"](11,"div",32),x["\u0275\u0275template"](12,w,3,2,"h4",33),x["\u0275\u0275template"](13,v,4,1,"h4",34),x["\u0275\u0275elementStart"](14,"p",35),x["\u0275\u0275text"](15),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](16,"app-progress",36),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](17,"div",37),x["\u0275\u0275elementStart"](18,"a",38),x["\u0275\u0275listener"]("click",function(){return x["\u0275\u0275restoreView"](t),x["\u0275\u0275nextContext"]().upload()}),x["\u0275\u0275elementStart"](19,"mat-icon",39),x["\u0275\u0275text"](20,"cloud_upload"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275text"](21," Upload"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit,n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](12),x["\u0275\u0275property"]("ngIf",!n.uploaded),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",n.uploaded),x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",n.formatBytes(null==t?null:t.size)," "),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("progress",null==t?null:t.progress)}}function z(t,e){1&t&&(x["\u0275\u0275elementStart"](0,"span"),x["\u0275\u0275text"](1,"Submit"),x["\u0275\u0275elementEnd"]())}function S(t,e){1&t&&x["\u0275\u0275element"](0,"img",44)}const E=[{path:"",component:(()=>{class t{constructor(t,e,n){this.fb=t,this.http=e,this.router=n,this.loading=!1,this.ColumnMode=P.a,this.uploading=!1,this.uploaded=!1,this.required="This Field is required"}ngOnInit(){this.form=this.fb.group({title:[null,M.Validators.compose([M.Validators.required,M.Validators.minLength(2)])],image:[null,M.Validators.required]}),this.uploadForm=this.fb.group({banner:[""]})}onSubmit(t){let e=localStorage.getItem("authToken"),n=new O.d({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});if(this.form.valid){this.loading=!0;let t=JSON.stringify(this.form.value);this.http.post(_.a.apiUrl+"admin/banners",t,{headers:n}).subscribe(t=>{console.log(t),this.loading=!1,this.router.navigate(["/banners"])},t=>{console.log(t),this.error=t,this.loading=!1})}}onFileDropped(t){this.prepareFilesList(t)}fileBrowseHandler(t){this.prepareFilesList(t)}deleteFile(t){this.files.splice(t,1),this.uploaded=!1}uploadFilesSimulator(t){setTimeout(()=>{if(t!==this.files.length){const e=setInterval(()=>{100===this.files[t].progress?(clearInterval(e),this.uploadFilesSimulator(t+1)):this.files[t].progress+=1},200)}},1e3)}prepareFilesList(t){for(const e of t)e.progress=0,this.files=new Array,this.files.push(e);this.uploadForm.get("profile").setValue(this.files[0]),this.uploadFilesSimulator(0),console.log(this.files[0])}upload(){this.uploading=!0;const t=new FormData;t.append("photo",this.uploadForm.get("banner").value),this.http.post(_.a.apiUrl+"upload-image",t,{}).subscribe(t=>{this.form.get("image").setValue(t.photo),console.log(t),this.uploaded=!0,this.uploading=!1},t=>{console.log(t),this.uploading=!1})}formatBytes(t,e){if(0===t)return"0 Bytes";const n=e<=0?0:e||2,o=Math.floor(Math.log(t)/Math.log(1024));return parseFloat((t/Math.pow(1024,o)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}}return t.\u0275fac=function(e){return new(e||t)(x["\u0275\u0275directiveInject"](M.FormBuilder),x["\u0275\u0275directiveInject"](O.b),x["\u0275\u0275directiveInject"](i.f))},t.\u0275cmp=x["\u0275\u0275defineComponent"]({type:t,selectors:[["app-add-banners"]],decls:38,vars:6,consts:[[1,"form",3,"formGroup","ngSubmit"],["fxLayoutAlign","left"],["fxLayout","row wrap",1,"col-gap"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","50","fxFlex.lg","100","fxFlex.xl","100"],["appearance","outline"],["matInput","","placeholder","Company Name","formControlName","title","required",""],[4,"ngIf"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","100","fxFlex.lg","100","fxFlex.xl","100"],["appDnd","",1,"upload-container",3,"fileDropped"],["type","file","id","fileDropRef","accept","image/*",3,"change"],["fileDropRef",""],["xmlns","http://www.w3.org/2000/svg","width","30","height","30","viewBox","0 0 63 64"],["fill","#3B454F","fill-rule","nonzero"],["d","M42.656 15.135a1.953 1.953 0 0 1-1.391-.578L31.5 4.795l-9.765 9.762a1.97 1.97 0 1 1-2.785-2.785L30.106.616a1.97 1.97 0 0 1 2.785 0l11.157 11.156a1.97 1.97 0 0 1-1.392 3.363z"],["d","M31.5 36.791a1.97 1.97 0 0 1-1.969-1.969V2.01a1.97 1.97 0 0 1 3.938 0v32.812a1.97 1.97 0 0 1-1.969 1.969z"],["d","M55.781 63.041H7.22A7.225 7.225 0 0 1 0 55.822V41.385a4.599 4.599 0 0 1 4.594-4.594h7.234a4.567 4.567 0 0 1 4.402 3.276l2.814 9.382a.658.658 0 0 0 .628.467h23.656a.658.658 0 0 0 .628-.467l2.814-9.385a4.572 4.572 0 0 1 4.402-3.273h7.234A4.599 4.599 0 0 1 63 41.385v14.437a7.225 7.225 0 0 1-7.219 7.219zM4.594 40.729a.656.656 0 0 0-.657.656v14.437a3.286 3.286 0 0 0 3.282 3.282H55.78a3.286 3.286 0 0 0 3.282-3.282V41.385a.656.656 0 0 0-.657-.656h-7.234a.65.65 0 0 0-.628.467L47.73 50.58a4.628 4.628 0 0 1-4.402 3.274H19.672a4.567 4.567 0 0 1-4.402-3.276l-2.814-9.382a.65.65 0 0 0-.628-.467H4.594z"],["for","fileDropRef"],[1,"files-list"],["class","single-file",4,"ngFor","ngForOf"],[1,"col-sm-12","col-sm-offset-5"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["src","assets/images/loading.png","width","30","height","30",4,"ngIf"],[1,"single-file"],[1,"file-icon",2,"width","50px"],["version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 58 58",0,"xml","space","preserve",2,"enable-background","new 0 0 58 58"],["points","51.5,14 37.5,0 6.5,0 6.5,58 51.5,58 ",2,"fill","#EDEADA"],["d","M16.5,23h25c0.552,0,1-0.447,1-1s-0.448-1-1-1h-25c-0.552,0-1,0.447-1,1S15.948,23,16.5,23z",2,"fill","#CEC9AE"],["d","M16.5,15h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S15.948,15,16.5,15z",2,"fill","#CEC9AE"],["d","M41.5,29h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,29,41.5,29z",2,"fill","#CEC9AE"],["d","M41.5,37h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,37,41.5,37z",2,"fill","#CEC9AE"],["d","M41.5,45h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,45,41.5,45z",2,"fill","#CEC9AE"],["points","37.5,0 37.5,14 51.5,14 ",2,"fill","#CEC9AE"],[1,"info"],["class","name",4,"ngIf"],["class","name","style","color: green",4,"ngIf"],[1,"size"],[3,"progress"],[1,"delete"],["mat-raised-button","",2,"background-color","green","color","#fff",3,"click"],["aria-label","upload"],[1,"name"],["style","width: 120px;","mode","indeterminate",4,"ngIf"],["mode","indeterminate",2,"width","120px"],[1,"name",2,"color","green"],["src","assets/images/loading.png","width","30","height","30"]],template:function(t,e){1&t&&(x["\u0275\u0275elementStart"](0,"form",0),x["\u0275\u0275listener"]("ngSubmit",function(){return e.onSubmit(e.form.value)}),x["\u0275\u0275elementStart"](1,"mat-card"),x["\u0275\u0275elementStart"](2,"mat-card-header",1),x["\u0275\u0275elementStart"](3,"mat-card-subtitle"),x["\u0275\u0275elementStart"](4,"h2"),x["\u0275\u0275text"](5,"Add Banner"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](6,"mat-card-content"),x["\u0275\u0275elementStart"](7,"div",2),x["\u0275\u0275elementStart"](8,"div",3),x["\u0275\u0275elementStart"](9,"mat-form-field",4),x["\u0275\u0275elementStart"](10,"mat-label"),x["\u0275\u0275text"](11,"Title"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](12,"input",5),x["\u0275\u0275template"](13,u,2,1,"mat-error",6),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](14,"br"),x["\u0275\u0275element"](15,"br"),x["\u0275\u0275elementStart"](16,"mat-label"),x["\u0275\u0275text"](17,"Banner"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](18,"div",7),x["\u0275\u0275elementStart"](19,"div",8),x["\u0275\u0275listener"]("fileDropped",function(t){return e.onFileDropped(t)}),x["\u0275\u0275elementStart"](20,"input",9,10),x["\u0275\u0275listener"]("change",function(t){return e.fileBrowseHandler(t.target.files)}),x["\u0275\u0275elementEnd"](),x["\u0275\u0275namespaceSVG"](),x["\u0275\u0275elementStart"](22,"svg",11),x["\u0275\u0275elementStart"](23,"g",12),x["\u0275\u0275element"](24,"path",13),x["\u0275\u0275element"](25,"path",14),x["\u0275\u0275element"](26,"path",15),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275namespaceHTML"](),x["\u0275\u0275elementStart"](27,"h4"),x["\u0275\u0275text"](28,"Drag and drop file here"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](29,"label",16),x["\u0275\u0275text"](30,"Browse for file"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](31,"div",17),x["\u0275\u0275template"](32,k,22,4,"div",18),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](33,"br"),x["\u0275\u0275elementStart"](34,"div",19),x["\u0275\u0275elementStart"](35,"button",20),x["\u0275\u0275template"](36,z,2,0,"span",6),x["\u0275\u0275template"](37,S,1,0,"img",21),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&t&&(x["\u0275\u0275property"]("formGroup",e.form),x["\u0275\u0275advance"](13),x["\u0275\u0275property"]("ngIf",!e.form.controls.title.valid&&e.form.controls.title.touched),x["\u0275\u0275advance"](19),x["\u0275\u0275property"]("ngForOf",e.files),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("disabled",e.loading),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",!e.loading),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",e.loading))},directives:[M["\u0275angular_packages_forms_forms_y"],M.NgControlStatusGroup,M.FormGroupDirective,s.a,s.e,b.b,s.h,s.d,b.c,b.a,h.c,h.g,a.b,M.DefaultValueAccessor,M.NgControlStatus,M.FormControlName,M.RequiredValidator,o.o,o.n,m.b,h.b,m.a,c.a,C.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:98%}.upload-container[_ngcontent-%COMP%]{height:120px;padding:20px;text-align:center;border:1px dashed #979797;position:relative;margin:0 auto}.upload-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.upload-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;width:183px;height:20px;border-radius:21.5px;background-color:#db202f;padding:8px 10px}.upload-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;color:#38424c}.fileover[_ngcontent-%COMP%]{-webkit-animation:shake 1s;animation:shake 1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.files-list[_ngcontent-%COMP%]{margin-top:1.5rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]{display:-ms-flexbox;padding:.5rem;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;border:1px dashed #979797;margin-bottom:1rem;display:flex;-ms-flex-positive:1;flex-grow:1}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;margin-left:.5rem;cursor:pointer;-ms-flex-item-align:end;align-self:flex-end}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#353f4a;margin:0}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#a4a4a4;margin:0 0 .25rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%}@-webkit-keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}to{transform:translate(1px,-2px) rotate(-1deg)}}@keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}to{transform:translate(1px,-2px) rotate(-1deg)}}.mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 calc(14px * .83)/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 calc(14px * .67)/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2[_ngcontent-%COMP%], .mat-body-strong[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-caption[_ngcontent-%COMP%], .mat-small[_ngcontent-%COMP%]{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-content[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{-ms-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.3333333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{-ms-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.3333433333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.7916666667em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.3333533333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.5416666667em;top:calc(100% - 1.6666666667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{-ms-transform:translateY(-1.28122em) scale(.75);transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{-ms-transform:translateY(-1.2812em) scale(.75);transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{-ms-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{-ms-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{-ms-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{-ms-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.3333433333%}.mat-grid-tile-footer[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%], .mat-select[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%], .mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:400}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%], .mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%], .mat-list-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node[_ngcontent-%COMP%], .mat-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);-ms-transform:scale(0);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-pane[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{pointer-events:auto;box-sizing:border-box;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{\n  }@keyframes cdk-text-field-autofill-start{\n  }@-webkit-keyframes cdk-text-field-autofill-end{\n  }@keyframes cdk-text-field-autofill-end{\n  }.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:0!important}.mat-focus-indicator[_ngcontent-%COMP%], .mat-mdc-focus-indicator[_ngcontent-%COMP%]{position:relative}.app-dark   [_nghost-%COMP%]     .ql-snow .ql-picker .ql-picker-label{color:#fff}.app-dark   [_nghost-%COMP%]     .ql-snow .ql-stroke{stroke:#fff}.app-dark   [_nghost-%COMP%]     .ql-snow .ql-fill, .app-dark   [_nghost-%COMP%]     .ql-snow .ql-stroke.ql-fill{fill:#fff}[dir=rtl]   [_nghost-%COMP%]     .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{right:auto;left:0}[_nghost-%COMP%]     quill-editor{display:block}[_nghost-%COMP%]     .ql-container.ql-snow{border-radius:0 0 5px 5px;height:200px}[_nghost-%COMP%]     .ql-toolbar.ql-snow{border:1px solid #ccc;border-radius:5px 5px 0 0}[_nghost-%COMP%]     .ql-container.ql-snow, [_nghost-%COMP%]     .ql-toolbar.ql-snow{border:1px solid #ccc}.mat-dialog-but[align=end][_ngcontent-%COMP%]{-ms-flex-pack:end;justify-content:flex-end}.mat-dialog-but[align=center][_ngcontent-%COMP%]{-ms-flex-pack:center;justify-content:center}"]}),t})()}];var N=n("QibW"),H=n("/t3+"),R=n("CzEO");let F=(()=>{class t{}return t.\u0275mod=x["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=x["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.c,i.i.forChild(E),a.c,c.b,s.g,m.c,d.f,f.e,C.b,p.c,N.c,H.b,h.e,g.b,l.j,r.a,M.FormsModule,R.b.forRoot(),M.ReactiveFormsModule]]}),t})()}}]);