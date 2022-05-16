(function(){var e={7822:function(e,t,a){const l=a(6265);class n{constructor(e){this.username=e.UserName,this.accuracy=e.AccuracyTotal,this.aimFlow=e.FlowAimTotal,this.aimJump=e.JumpAimTotal,this.ppp=e.PerformanceTotal,this.precision=e.PrecisionTotal,this.speed=e.SpeedTotal,this.stamina=e.StaminaTotal}getValues(){return[this.aimJump,this.aimFlow,this.accuracy,this.stamina,this.speed,this.precision]}getStdValues(){let e=1.92*this.aimJump**.953,t=69.7*this.aimFlow**.596,a=19.8*this.precision**.8,l=.588*this.speed**1.175,n=3.06*this.stamina**.993,r=14.1*this.accuracy**.769;return[e,t,r,n,l,a]}getDrawData(){let e=this.getStdValues();return e=[e[2],e[1],e[0],e[5],e[4],e[3],e[2]],e.push(e[0]),{type:"scatterpolar",r:e,theta:["Accuracy","Flow","Jump","Precision","Speed","Stamina","Accuracy"],fill:"toself",name:this.username}}getNorValues(){let e=this.getStdValues(),t=e.reduce(((e,t)=>e+t**2),0)**.5;return e.map((e=>e/t))}compareTo(e){let t=e.getNorValues(),a=this.getNorValues().reduce(((e,a,l)=>e+a*t[l]),0)**.5;return 100*(1-2*Math.acos(a)/Math.PI)}}class r{constructor(e){this.base=e?.base??"https://syrin.me/pp+/api"}async getUser(e){let t;try{t=await l.get(`${this.base}/user/${e}/`)}catch(a){throw"连接pp+网站失败，请过段时间重试或手动输入数据"}if(!t||!t?.data)throw"获取数据失败，请过段时间重试或手动输入数据";if(!t?.data?.user_data)throw"查不到玩家 "+e+" 的信息";return new n(t?.data?.user_data)}}e.exports.e=n,e.exports.V=r},635:function(e,t,a){"use strict";var l=a(9242),n=a(3396);function r(e,t){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(a)}var i=a(89);const s={},u=(0,i.Z)(s,[["render",r]]);var o=u,c=a(678),m=(a(5135),a(6909),a(924),a(9202),a(1157),a(4134)),d=a(9455),p=a(8578),f=a(8185),h=a(7139);const w={class:"common-layout"},y=(0,n._)("br",null,null,-1),b=(0,n.Uk)("比一比"),g=(0,n._)("div",{id:"graph"},null,-1);function v(e,t,a,l,r,i){const s=(0,n.up)("LeftPlayerTable"),u=f.Dv,o=(0,n.up)("RightPlayerTable"),c=p.dq,v=d.mi,V=m.b2,_=m.G4;return(0,n.wg)(),(0,n.iD)("div",w,[(0,n.Wm)(_,null,{default:(0,n.w5)((()=>[(0,n.Wm)(V,null,{default:(0,n.w5)((()=>[(0,n.Wm)(c,{justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{span:8},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{ref:"leftplayer"},null,512)])),_:1}),(0,n.Wm)(u,{span:8},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{ref:"rightplayer"},null,512)])),_:1})])),_:1}),y,(0,n.Wm)(c,{justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{type:"primary",onClick:i.draw},{default:(0,n.w5)((()=>[b])),_:1},8,["onClick"])])),_:1}),(0,n.Wm)(c,{justify:"center"},{default:(0,n.w5)((()=>[g])),_:1}),(0,n.Wm)(c,{justify:"center"},{default:(0,n.w5)((()=>[(0,n._)("span",null,(0,h.zw)(r.msg),1)])),_:1})])),_:1})])),_:1})])}a(1840),a(4625),a(7302);var V=a(2720),_=a(5571);const W=(0,n.Uk)("获取pp+数据"),P=(0,n._)("br",null,null,-1);function T(e,t,a,l,r,i){const s=_.EZ,u=V.nH,o=f.Dv,c=d.mi,m=p.dq,w=V.ly;return(0,n.wg)(),(0,n.j4)(w,{"label-position":"left","label-width":"100px",style:{"max-width":"460px"}},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{gutter:24},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{span:16},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{label:"玩家名或uid"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{modelValue:r.username,"onUpdate:modelValue":t[0]||(t[0]=e=>r.username=e)},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(o,{span:4},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{type:"primary",onClick:i.getData,disabled:r.buttonDisabled},{default:(0,n.w5)((()=>[W])),_:1},8,["onClick","disabled"])])),_:1})])),_:1}),(0,n._)("span",null,(0,h.zw)(r.msg),1),P,(0,n.Wm)(u,{label:"Jump"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{modelValue:r.jump,"onUpdate:modelValue":t[1]||(t[1]=e=>r.jump=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(u,{label:"Flow"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{modelValue:r.flow,"onUpdate:modelValue":t[2]||(t[2]=e=>r.flow=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(u,{label:"Precision"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{modelValue:r.precision,"onUpdate:modelValue":t[3]||(t[3]=e=>r.precision=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(u,{label:"Speed"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{modelValue:r.speed,"onUpdate:modelValue":t[4]||(t[4]=e=>r.speed=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(u,{label:"Stamina"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{modelValue:r.stamina,"onUpdate:modelValue":t[5]||(t[5]=e=>r.stamina=e)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(u,{label:"Accuracy"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{modelValue:r.accuracy,"onUpdate:modelValue":t[6]||(t[6]=e=>r.accuracy=e)},null,8,["modelValue"])])),_:1})])),_:1})}var j=a(7822),D={name:"PlayerData",data(){return{buttonDisabled:!1,msg:" ",username:"",jump:0,flow:0,precision:0,speed:0,stamina:0,accuracy:0}},methods:{async getData(){try{this.msg=" ",this.buttonDisabled=!0;let e=new j.V,t=await e.getUser(this.username);this.username=t.username,[this.jump,this.flow,this.accuracy,this.stamina,this.speed,this.precision]=t.getValues(),this.buttonDisabled=!1}catch(e){this.msg=e,this.buttonDisabled=!1}},toPPP(){return new j.e({UserName:this.username,AccuracyTotal:this.accuracy,FlowAimTotal:this.flow,JumpAimTotal:this.jump,PrecisionTotal:this.precision,SpeedTotal:this.speed,StaminaTotal:this.stamina})}}};const U=(0,i.Z)(D,[["render",T]]);var k=U,x={name:"HomeView",components:{LeftPlayerTable:k,RightPlayerTable:k},setup(){if(!window.Plotly){let e=document.createElement("script");e.setAttribute("src","https://cdn.staticfile.org/plotly.js/1.58.5/plotly.min.js"),document.getElementsByTagName("head")[0].appendChild(e)}},data(){return{msg:""}},methods:{draw(){let e=this.$refs.leftplayer.toPPP(),t=this.$refs.rightplayer.toPPP(),a={polar:{radialaxis:{visible:!1}}};window.Plotly.newPlot("graph",[e.getDrawData(),t.getDrawData()],a),this.msg="两人的相似程度为： "+e.compareTo(t)?.toFixed(2)+"%"}}};const O=(0,i.Z)(x,[["render",v]]);var S=O;const A=[{path:"/",name:"home",component:S}],F=(0,c.p7)({history:(0,c.r5)(),routes:A});var C=F,J=a(65),N=(0,J.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,l.ri)(o).use(N).use(C).mount("#app")}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,l,n,r){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],r=e[c][2];for(var s=!0,u=0;u<l.length;u++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](l[u])}))?l.splice(u--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var o=n();void 0!==o&&(t=o)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[l,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,r,i=l[0],s=l[1],u=l[2],o=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(u)var c=u(a)}for(t&&t(l);o<i.length;o++)r=i[o],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},l=self["webpackChunkpppluspair"]=self["webpackChunkpppluspair"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[998],(function(){return a(635)}));l=a.O(l)})();