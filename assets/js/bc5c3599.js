import{M as I,C as w}from"./bd41ffe6.js";import{_ as B,f,i as M,o as p,c as _,j as C,r as i,h as G,w as a,g as r,t as g,F as D,b as N,a as l,k as P,n as j,e as q,l as E,d as U}from"./bae183dd.js";const z={__name:"CsGridBox",props:{width:{type:Number,default:200}},setup(c){const d=c,n=f(null);return M(()=>{const e=Math.floor(n._value.offsetWidth/d.width);n._value.style.setProperty("--column",e)}),(e,v)=>(p(),_("div",{class:"grid-box",ref_key:"gridBox",ref:n},[C(e.$slots,"default",{},void 0,!0)],512))}},R=B(z,[["__scopeId","data-v-d8e6badc"]]);const A={class:"card-header"},L={class:"cs-card-content"},W={class:"card-item"},H={class:"label"},J={class:"value"},K={class:"cs-card-footer"},Q={class:"cs-card-operation"},X={class:"operation-btn"},Y={__name:"CsCard",props:{clickable:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},iconClass:{type:String,default:"icon-time"},data:{type:Object,default:()=>{}},title:{type:String,default:""},footerText:{type:String,default:""},formItems:{type:Array,default:()=>[]}},emits:["on-click","on-delete","on-update"],setup(c,{emit:d}){const n=c,e=d,v=()=>{n.clickable&&e("on-click")},T=()=>{n.clickable&&e("on-update")},b=()=>{n.clickable&&e("on-delete")};return(m,y)=>{const k=i("el-tag"),x=i("el-tooltip"),h=i("el-card");return p(),G(h,{class:j(["cs-card","cs-content-box",{"is-clickable":c.clickable}]),onClick:v},{header:a(()=>[r("div",A,[r("span",null,g(c.title),1)])]),default:a(()=>[C(m.$slots,"default",{},()=>[r("div",L,[(p(!0),_(D,null,N(c.formItems,t=>(p(),_("div",W,[l(k,null,{default:a(()=>[r("span",H,g(t.label)+":",1),r("span",J,g(c.data[t.propName||t.prop]),1)]),_:2},1024)]))),256))])],!0),C(m.$slots,"footer",{},()=>[r("div",K,[r("span",null,g(c.footerText),1)])],!0),c.clickable?C(m.$slots,"operation",{key:0},()=>[r("div",Q,[r("div",X,[l(x,{placement:"top",content:"修改","only-show-overflow":!1},{default:a(()=>[r("i",{class:"icon-compose",onClick:T})]),_:1}),l(x,{placement:"top",content:"删除","only-show-overflow":!1},{default:a(()=>[r("i",{class:"icon-close-solid",onClick:b})]),_:1})])])],!0):P("",!0)]),_:3},8,["class"])}}},Z=B(Y,[["__scopeId","data-v-8e303b83"]]),ee={class:"margin-bottom-20 text-right"},te=q({__name:"ExcelExport",setup(c){const d=f(!1),n=f([]),e=E({id:"",name:"",description:"",script:"",createTime:""}),v=E({name:[{required:!0,message:"Please input name",trigger:"blur"}],script:[{required:!0,message:"Please input script",trigger:"blur"}]});(()=>{n.value=new w().getCoverts()})();const b=f(null),m=()=>{var t;(t=b.value)==null||t.validate(o=>{if(o){const u=new w(e.name,e.description,e.script);e.id&&(u.id=e.id,u.createTime=e.createTime),console.info(u),n.value=u.save(),d.value=!1}})},y=f(),k=()=>{var t;e.id="",e.name="",e.description="",e.script="",d.value=!0,(t=y.value)==null||t.updateValue("")},x=t=>{n.value=new w().delete(t.id)},h=t=>{var o;e.id=t.id,e.name=t.name,e.description=t.description,e.script=t.script,e.createTime=t.createTime,d.value=!0,(o=y.value)==null||o.updateValue(t.script)};return(t,o)=>{const u=i("el-button"),$=i("el-input"),V=i("el-form-item"),S=i("el-form"),F=i("el-drawer");return p(),_("div",null,[r("div",ee,[l(u,{type:"primary",onClick:k},{default:a(()=>o[4]||(o[4]=[U(" 添加转换器")])),_:1})]),l(R,{class:"card-box",width:286},{default:a(()=>[(p(!0),_(D,null,N(n.value,s=>(p(),_("div",{class:"card",key:s.id},[l(Z,{title:s.name,data:s,"form-items":[{label:"创建时间",prop:"createTime"},{label:"脚本描述",prop:"description"}],onOnUpdate:O=>h(s),onOnDelete:O=>x(s)},null,8,["title","data","onOnUpdate","onOnDelete"])]))),128))]),_:1}),l(F,{modelValue:d.value,"onUpdate:modelValue":o[3]||(o[3]=s=>d.value=s),title:"添加转换器",size:"68%"},{footer:a(()=>[l(u,{type:"primary",onClick:m},{default:a(()=>o[5]||(o[5]=[U("保存")])),_:1})]),default:a(()=>[l(S,{ref_key:"ruleFormRef",ref:b,rules:v,model:e,"label-width":"auto","status-icon":""},{default:a(()=>[l(V,{label:"名称",prop:"name"},{default:a(()=>[l($,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.name=s)},null,8,["modelValue"])]),_:1}),l(V,{label:"描述",prop:"description"},{default:a(()=>[l($,{modelValue:e.description,"onUpdate:modelValue":o[1]||(o[1]=s=>e.description=s),type:"textarea"},null,8,["modelValue"])]),_:1}),l(V,{label:"script脚本",prop:"script"},{default:a(()=>[l(I,{ref_key:"editor",ref:y,class:"text-left",modelValue:e.script,"onUpdate:modelValue":o[2]||(o[2]=s=>e.script=s),height:"402px"},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1},8,["modelValue"])])}}});const ae=B(te,[["__scopeId","data-v-a4b8146c"]]);export{ae as default};
