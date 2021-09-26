var e=Object.defineProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n;import{defineComponent as r,reactive as o,toRefs as s,openBlock as d,createElementBlock as h}from"vue";let c,p;const l=new Promise(((e,t)=>{c=e,p=t}));function u(e){if(window.hcaptcha)return c(),l;if(document.getElementById("hcaptcha-api-script-id"))return l;window._hcaptchaOnLoad=c;const t=function(e){let t=e.apiEndpoint;return t=f(t,"render","explicit"),t=f(t,"onload","_hcaptchaOnLoad"),t=f(t,"recaptchacompat",!1===e.reCaptchaCompat?"off":null),t=f(t,"hl",e.language),t=f(t,"sentry",e.sentry),t=f(t,"endpoint",e.endpoint),t=f(t,"assethost",e.assethost),t=f(t,"imghost",e.imghost),t=f(t,"reportapi",e.reportapi),t}(e),i=document.createElement("script");return i.id="hcaptcha-api-script-id",i.src=t,i.async=!0,i.defer=!0,i.onerror=e=>{console.error("Failed to load api: "+t,e),p("Failed to load api.js")},document.head.appendChild(i),l}function f(e,t,i){if(null!=i){const n=e.includes("?")?"&":"?";return e+n+t+"="+encodeURIComponent(i)}return e}var g=(e,t)=>{for(const[i,n]of t)e[i]=n;return e};const m=r({name:"VueHcaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String,default:void 0},size:{type:String,default:void 0},tabindex:{type:String,default:void 0},language:{type:String,default:void 0},reCaptchaCompat:{type:Boolean,default:!0},challengeContainer:{type:String,default:void 0},rqdata:{type:String,default:void 0},sentry:{type:Boolean,default:!0},apiEndpoint:{type:String,default:"https://hcaptcha.com/1/api.js"},endpoint:{type:String,default:void 0},reportapi:{type:String,default:void 0},assethost:{type:String,default:void 0},imghost:{type:String,default:void 0}},setup(){const e=o({widgetId:null,hcaptcha:null,emitter:{all:r=r||new Map,on:function(e,t){var i=r.get(e);i?i.push(t):r.set(e,[t])},off:function(e,t){var i=r.get(e);i&&(t?i.splice(i.indexOf(t)>>>0,1):r.set(e,[]))},emit:function(e,t){var i=r.get(e);i&&i.slice().map((function(e){e(t)})),(i=r.get("*"))&&i.slice().map((function(i){i(e,t)}))}}});var r;return((e,r)=>{for(var o in r||(r={}))i.call(r,o)&&a(e,o,r[o]);if(t)for(var o of t(r))n.call(r,o)&&a(e,o,r[o]);return e})({},s(e))},mounted(){return u(this.$props).then(this.onApiLoaded).catch(this.onError)},beforeUnmount(){this.widgetId&&(this.hcaptcha.reset(this.widgetId),this.hcaptcha.remove(this.widgetId))},methods:{onApiLoaded(){this.hcaptcha=window.hcaptcha;const e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.onVerify,"expired-callback":this.onExpired,"chalexpired-callback":this.onChallengeExpired,"error-callback":this.onError,"open-callback":this.onOpen,"close-callback":this.onClose};this.challengeContainer&&(e["challenge-container"]=this.challengeContainer),this.widgetId=this.hcaptcha.render(this.$el,e),this.rqdata&&this.hcaptcha.setData(this.widgetId,{rqdata:this.rqdata}),this.onRendered()},execute(){this.widgetId?(this.hcaptcha.execute(this.widgetId),this.onExecuted()):this.emitter.on("rendered",this.execute)},reset(){this.widgetId?(this.hcaptcha.reset(this.widgetId),this.onReset()):this.$emit("error","Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.")},onRendered(){this.$emit("rendered"),this.emitter.emit("rendered","")},onExecuted(){this.$emit("executed")},onReset(){this.$emit("reset")},onError(e){this.$emit("error",e),this.reset()},onVerify(){const e=this.hcaptcha.getResponse(this.widgetId),t=this.hcaptcha.getRespKey(this.widgetId);this.$emit("verify",e,t)},onExpired(){this.$emit("expired")},onChallengeExpired(){this.$emit("challengeExpired")},onOpen(){this.$emit("opened")},onClose(){this.$emit("closed")}}}),y={id:"hcap-script"};var w=g(m,[["render",function(e,t,i,n,a,r){return d(),h("div",y)}]]);function v(e){v.installed||(v.installed=!0,e.component("Vuehcaptcha",w),e.component("VueHcaptcha",w))}const b={install:v};let x=null;"undefined"!=typeof window?x=window.Vue:"undefined"!=typeof global&&(x=global.Vue),x&&x.use(b);export{w as default,v as install};
//# sourceMappingURL=vue-hcaptcha.es.js.map
