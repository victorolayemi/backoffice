(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{h5ee:function(e,t,n){"use strict";n.r(t),n.d(t,"EditModule",function(){return z});var a=n("ofXK"),r=n("qFsG"),l=n("tyNb"),o=n("YUcS"),i=n("bTqV"),s=n("Wp6s"),m=n("NFeN"),p=n("MutI"),d=n("STbY"),c=n("d3UM"),f=n("bv9b"),g=n("3Pt+"),x=n("AytR"),h=n("tk/3"),u=n("lDzL"),v=n("fXoL"),b=n("XiUz"),E=n("kmnG");function C(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"div",23),v["\u0275\u0275element"](1,"img",24),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275nextContext"]();v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("src",e.baseUrl+e.data.image,v["\u0275\u0275sanitizeUrl"])}}function S(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"mat-error"),v["\u0275\u0275text"](1),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275nextContext"]();v["\u0275\u0275advance"](1),v["\u0275\u0275textInterpolate1"](" ",e.getNameError()," ")}}function y(e,t){1&e&&v["\u0275\u0275element"](0,"mat-progress-bar",45)}function w(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"h4",43),v["\u0275\u0275text"](1),v["\u0275\u0275template"](2,y,1,0,"mat-progress-bar",44),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275nextContext"]().$implicit,t=v["\u0275\u0275nextContext"]();v["\u0275\u0275advance"](1),v["\u0275\u0275textInterpolate1"](" ",null==e?null:e.name," "),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",t.uploading)}}function M(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"h4",46),v["\u0275\u0275text"](1),v["\u0275\u0275elementStart"](2,"mat-icon"),v["\u0275\u0275text"](3,"task_alt"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()),2&e){const e=v["\u0275\u0275nextContext"]().$implicit;v["\u0275\u0275advance"](1),v["\u0275\u0275textInterpolate1"](" ",null==e?null:e.name," ")}}function F(e,t){if(1&e){const e=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"div",25),v["\u0275\u0275elementStart"](1,"div",26),v["\u0275\u0275namespaceSVG"](),v["\u0275\u0275elementStart"](2,"svg",27),v["\u0275\u0275element"](3,"polygon",28),v["\u0275\u0275elementStart"](4,"g"),v["\u0275\u0275element"](5,"path",29),v["\u0275\u0275element"](6,"path",30),v["\u0275\u0275element"](7,"path",31),v["\u0275\u0275element"](8,"path",32),v["\u0275\u0275element"](9,"path",33),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](10,"polygon",34),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275namespaceHTML"](),v["\u0275\u0275elementStart"](11,"div",35),v["\u0275\u0275template"](12,w,3,2,"h4",36),v["\u0275\u0275template"](13,M,4,1,"h4",37),v["\u0275\u0275elementStart"](14,"p",38),v["\u0275\u0275text"](15),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](16,"app-progress",39),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](17,"div",40),v["\u0275\u0275elementStart"](18,"a",41),v["\u0275\u0275listener"]("click",function(){return v["\u0275\u0275restoreView"](e),v["\u0275\u0275nextContext"]().upload()}),v["\u0275\u0275elementStart"](19,"mat-icon",42),v["\u0275\u0275text"](20,"cloud_upload"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](21," Upload"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=v["\u0275\u0275nextContext"]();v["\u0275\u0275advance"](12),v["\u0275\u0275property"]("ngIf",!n.uploaded),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",n.uploaded),v["\u0275\u0275advance"](2),v["\u0275\u0275textInterpolate1"](" ",n.formatBytes(null==e?null:e.size)," "),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("progress",null==e?null:e.progress)}}function I(e,t){1&e&&(v["\u0275\u0275elementStart"](0,"span"),v["\u0275\u0275text"](1,"Update"),v["\u0275\u0275elementEnd"]())}function _(e,t){1&e&&v["\u0275\u0275element"](0,"img",47)}const O=[{path:"",component:(()=>{class e{constructor(e,t,n,a){this.fb=e,this.http=t,this.router=n,this.activatedRoute=a,this.loading=!1,this.ColumnMode=u.a,this.uploading=!1,this.uploaded=!1,this.isLoading=!1,this.baseUrl=x.a.baseUrl}ngOnInit(){this.form=this.fb.group({name:[null,g.Validators.compose([g.Validators.required,g.Validators.minLength(2)])],image:[null]}),this.uploadForm=this.fb.group({profile:[""]}),this.getItems()}getNameError(){return this.form.get("name").hasError("required")?"Name of the category is required)":this.form.get("name").hasError("minLength")?"Category name must be at least 2 characters long":""}getDisplayError(){return this.form.get("name").hasError("required")?"Display order is required":""}getItems(){this.isLoading=!0;let e=localStorage.getItem("authToken"),t=new h.d({Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"});this.http.get(`${x.a.apiUrl}admin/vehicle-category/${this.activatedRoute.snapshot.paramMap.get("id")}`,{headers:t}).subscribe(e=>{this.form.get("name").setValue(e.name),this.data=e,this.form.get("image").setValue(e.image),this.isLoading=!1})}onSubmit(e){let t=localStorage.getItem("authToken"),n=new h.d({Authorization:"Bearer "+t,Accept:"application/json","Content-Type":"application/json"});if(this.form.valid){this.loading=!0;let e=JSON.stringify(this.form.value);this.http.put(`${x.a.apiUrl}admin/vehicle-category/${this.activatedRoute.snapshot.paramMap.get("id")}`,e,{headers:n}).subscribe(e=>{console.log(e),this.loading=!1,this.router.navigate(["/vehicle-category"])},e=>{console.log(e),this.error=e,this.loading=!1})}}onFileDropped(e){this.prepareFilesList(e)}fileBrowseHandler(e){this.prepareFilesList(e)}deleteFile(e){this.files.splice(e,1),this.uploaded=!1}uploadFilesSimulator(e){setTimeout(()=>{if(e!==this.files.length){const t=setInterval(()=>{100===this.files[e].progress?(clearInterval(t),this.uploadFilesSimulator(e+1)):this.files[e].progress+=1},200)}},1e3)}prepareFilesList(e){for(const t of e)t.progress=0,this.files=new Array,this.files.push(t);this.uploadForm.get("profile").setValue(this.files[0]),this.uploadFilesSimulator(0),console.log(this.files[0])}upload(){this.uploading=!0;const e=new FormData;e.append("photo",this.uploadForm.get("profile").value),this.http.post(x.a.apiUrl+"upload-image",e,{}).subscribe(e=>{this.form.get("image").setValue(e.photo),console.log(e),this.uploaded=!0,this.uploading=!1},e=>{console.log(e),this.uploading=!1})}formatBytes(e,t){if(0===e)return"0 Bytes";const n=t<=0?0:t||2,a=Math.floor(Math.log(e)/Math.log(1024));return parseFloat((e/Math.pow(1024,a)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}}return e.\u0275fac=function(t){return new(t||e)(v["\u0275\u0275directiveInject"](g.FormBuilder),v["\u0275\u0275directiveInject"](h.b),v["\u0275\u0275directiveInject"](l.f),v["\u0275\u0275directiveInject"](l.a))},e.\u0275cmp=v["\u0275\u0275defineComponent"]({type:e,selectors:[["app-edit-vehicle-category"]],decls:39,vars:7,consts:[[1,"form",3,"formGroup","ngSubmit"],["fxLayoutAlign","left"],["fxLayout","row wrap",1,"col-gap"],["fxFlex.xs","100","fxFlex.sm","20","fxFlex.md","20","fxFlex.lg","20","fxFlex.xl","20","class","column",4,"ngIf"],["fxFlex.xs","100","fxFlex.sm","80","fxFlex.md","80","fxFlex.lg","80","fxFlex.xl","80",1,"column"],["appearance","outline"],["matInput","","placeholder","Name","formControlName","name"],[4,"ngIf"],["fxFlex.xs","100","fxFlex.sm","100","fxFlex.md","100","fxFlex.lg","100","fxFlex.xl","100",1,"column"],["appDnd","",1,"upload-container",3,"fileDropped"],["type","file","id","fileDropRef","accept","image/*",3,"change"],["fileDropRef",""],["xmlns","http://www.w3.org/2000/svg","width","30","height","30","viewBox","0 0 63 64"],["fill","#3B454F","fill-rule","nonzero"],["d","M42.656 15.135a1.953 1.953 0 0 1-1.391-.578L31.5 4.795l-9.765 9.762a1.97 1.97 0 1 1-2.785-2.785L30.106.616a1.97 1.97 0 0 1 2.785 0l11.157 11.156a1.97 1.97 0 0 1-1.392 3.363z"],["d","M31.5 36.791a1.97 1.97 0 0 1-1.969-1.969V2.01a1.97 1.97 0 0 1 3.938 0v32.812a1.97 1.97 0 0 1-1.969 1.969z"],["d","M55.781 63.041H7.22A7.225 7.225 0 0 1 0 55.822V41.385a4.599 4.599 0 0 1 4.594-4.594h7.234a4.567 4.567 0 0 1 4.402 3.276l2.814 9.382a.658.658 0 0 0 .628.467h23.656a.658.658 0 0 0 .628-.467l2.814-9.385a4.572 4.572 0 0 1 4.402-3.273h7.234A4.599 4.599 0 0 1 63 41.385v14.437a7.225 7.225 0 0 1-7.219 7.219zM4.594 40.729a.656.656 0 0 0-.657.656v14.437a3.286 3.286 0 0 0 3.282 3.282H55.78a3.286 3.286 0 0 0 3.282-3.282V41.385a.656.656 0 0 0-.657-.656h-7.234a.65.65 0 0 0-.628.467L47.73 50.58a4.628 4.628 0 0 1-4.402 3.274H19.672a4.567 4.567 0 0 1-4.402-3.276l-2.814-9.382a.65.65 0 0 0-.628-.467H4.594z"],["for","fileDropRef"],[1,"files-list"],["class","single-file",4,"ngFor","ngForOf"],[1,"col-sm-12","col-sm-offset-5"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["src","assets/images/loading.png","width","30","height","30",4,"ngIf"],["fxFlex.xs","100","fxFlex.sm","20","fxFlex.md","20","fxFlex.lg","20","fxFlex.xl","20",1,"column"],[2,"width","120px",3,"src"],[1,"single-file"],[1,"file-icon",2,"width","50px"],["version","1.1","id","Capa_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 58 58",0,"xml","space","preserve",2,"enable-background","new 0 0 58 58"],["points","51.5,14 37.5,0 6.5,0 6.5,58 51.5,58 ",2,"fill","#EDEADA"],["d","M16.5,23h25c0.552,0,1-0.447,1-1s-0.448-1-1-1h-25c-0.552,0-1,0.447-1,1S15.948,23,16.5,23z",2,"fill","#CEC9AE"],["d","M16.5,15h10c0.552,0,1-0.447,1-1s-0.448-1-1-1h-10c-0.552,0-1,0.447-1,1S15.948,15,16.5,15z",2,"fill","#CEC9AE"],["d","M41.5,29h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,29,41.5,29z",2,"fill","#CEC9AE"],["d","M41.5,37h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,37,41.5,37z",2,"fill","#CEC9AE"],["d","M41.5,45h-25c-0.552,0-1,0.447-1,1s0.448,1,1,1h25c0.552,0,1-0.447,1-1S42.052,45,41.5,45z",2,"fill","#CEC9AE"],["points","37.5,0 37.5,14 51.5,14 ",2,"fill","#CEC9AE"],[1,"info"],["class","name",4,"ngIf"],["class","name","style","color: green",4,"ngIf"],[1,"size"],[3,"progress"],[1,"delete"],["mat-raised-button","",2,"background-color","green","color","#fff",3,"click"],["aria-label","upload"],[1,"name"],["style","width: 120px;","mode","indeterminate",4,"ngIf"],["mode","indeterminate",2,"width","120px"],[1,"name",2,"color","green"],["src","assets/images/loading.png","width","30","height","30"]],template:function(e,t){1&e&&(v["\u0275\u0275elementStart"](0,"form",0),v["\u0275\u0275listener"]("ngSubmit",function(){return t.onSubmit(t.form.value)}),v["\u0275\u0275elementStart"](1,"mat-card"),v["\u0275\u0275elementStart"](2,"mat-card-header",1),v["\u0275\u0275elementStart"](3,"mat-card-subtitle"),v["\u0275\u0275elementStart"](4,"h2"),v["\u0275\u0275text"](5,"Editing Category"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](6,"mat-card-content"),v["\u0275\u0275elementStart"](7,"div",2),v["\u0275\u0275template"](8,C,2,1,"div",3),v["\u0275\u0275elementStart"](9,"div",4),v["\u0275\u0275elementStart"](10,"mat-form-field",5),v["\u0275\u0275elementStart"](11,"mat-label"),v["\u0275\u0275text"](12,"Name"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](13,"input",6),v["\u0275\u0275template"](14,S,2,1,"mat-error",7),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](15,"br"),v["\u0275\u0275element"](16,"br"),v["\u0275\u0275elementStart"](17,"mat-label"),v["\u0275\u0275text"](18,"Change Image"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](19,"div",8),v["\u0275\u0275elementStart"](20,"div",9),v["\u0275\u0275listener"]("fileDropped",function(e){return t.onFileDropped(e)}),v["\u0275\u0275elementStart"](21,"input",10,11),v["\u0275\u0275listener"]("change",function(e){return t.fileBrowseHandler(e.target.files)}),v["\u0275\u0275elementEnd"](),v["\u0275\u0275namespaceSVG"](),v["\u0275\u0275elementStart"](23,"svg",12),v["\u0275\u0275elementStart"](24,"g",13),v["\u0275\u0275element"](25,"path",14),v["\u0275\u0275element"](26,"path",15),v["\u0275\u0275element"](27,"path",16),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275namespaceHTML"](),v["\u0275\u0275elementStart"](28,"h4"),v["\u0275\u0275text"](29,"Drag and drop file here"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](30,"label",17),v["\u0275\u0275text"](31,"Browse for file"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](32,"div",18),v["\u0275\u0275template"](33,F,22,4,"div",19),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](34,"br"),v["\u0275\u0275elementStart"](35,"div",20),v["\u0275\u0275elementStart"](36,"button",21),v["\u0275\u0275template"](37,I,2,0,"span",7),v["\u0275\u0275template"](38,_,1,0,"img",22),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()),2&e&&(v["\u0275\u0275property"]("formGroup",t.form),v["\u0275\u0275advance"](8),v["\u0275\u0275property"]("ngIf",t.data),v["\u0275\u0275advance"](6),v["\u0275\u0275property"]("ngIf",!t.form.controls.name.valid&&t.form.controls.name.touched),v["\u0275\u0275advance"](19),v["\u0275\u0275property"]("ngForOf",t.files),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("disabled",t.loading),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",!t.loading),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("ngIf",t.loading))},directives:[g["\u0275angular_packages_forms_forms_y"],g.NgControlStatusGroup,g.FormGroupDirective,s.a,s.e,b.b,s.h,s.d,b.c,a.o,b.a,E.c,E.g,r.b,g.DefaultValueAccessor,g.NgControlStatus,g.FormControlName,a.n,i.b,E.b,i.a,m.a,f.a],styles:["mat-form-field[_ngcontent-%COMP%]{width:98%}.upload-container[_ngcontent-%COMP%]{height:120px;padding:20px;text-align:center;border:1px dashed #979797;position:relative;margin:0 auto}.upload-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;z-index:2;width:100%;height:100%;top:0;left:0}.upload-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;width:183px;height:20px;border-radius:21.5px;background-color:#db202f;padding:8px 10px}.upload-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;color:#38424c}.fileover[_ngcontent-%COMP%]{-webkit-animation:shake 1s;animation:shake 1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.files-list[_ngcontent-%COMP%]{margin-top:1.5rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]{display:-ms-flexbox;padding:.5rem;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;border:1px dashed #979797;margin-bottom:1rem;display:flex;-ms-flex-positive:1;flex-grow:1}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;margin-left:.5rem;cursor:pointer;-ms-flex-item-align:end;align-self:flex-end}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#353f4a;margin:0}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%]{font-size:12px;font-weight:500;color:#a4a4a4;margin:0 0 .25rem}.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%}@-webkit-keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}to{transform:translate(1px,-2px) rotate(-1deg)}}@keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}to{transform:translate(1px,-2px) rotate(-1deg)}}"]}),e})()}];var P=n("QibW"),k=n("/t3+");let z=(()=>{class e{}return e.\u0275mod=v["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,l.i.forChild(O),r.c,m.b,s.g,i.c,p.e,f.b,d.c,P.c,k.b,E.e,c.b,o.a,g.FormsModule,g.ReactiveFormsModule]]}),e})()}}]);