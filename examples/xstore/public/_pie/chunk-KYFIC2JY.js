import{c as x}from"./chunk-HUUNSSFL.js";import{b as w,c as j,e as q}from"./chunk-NSU4EOFU.js";q();function g(){throw new Error("Cycle detected")}function U(){if(a>1)a--;else{for(var t,i=!1;p!==void 0;){var r=p;for(p=void 0,$++;r!==void 0;){var n=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&A(r))try{r.c()}catch(f){i||(t=f,i=!0)}r=n}}if($=0,a--,i)throw t}}var s=void 0,p=void 0,a=0,$=0,S=0;function P(t){if(s!==void 0){var i=t.n;if(i===void 0||i.t!==s)return s.s=i={i:0,S:t,p:void 0,n:s.s,t:s,e:void 0,x:void 0,r:i},t.n=i,32&s.f&&t.S(i),i;if(i.i===-1)return i.i=0,i.p!==void 0&&(i.p.n=i.n,i.n!==void 0&&(i.n.p=i.p),i.p=void 0,i.n=s.s,s.s.p=i,s.s=i),i}}function u(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}u.prototype.h=function(){return!0};u.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};u.prototype.U=function(t){var i=t.e,r=t.x;i!==void 0&&(i.x=r,t.e=void 0),r!==void 0&&(r.e=i,t.x=void 0),t===this.t&&(this.t=r)};u.prototype.subscribe=function(t){var i=this;return l(function(){var r=i.value,n=32&this.f;this.f&=-33;try{t(r)}finally{this.f|=n}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.peek=function(){return this.v};Object.defineProperty(u.prototype,"value",{get:function(){var t=P(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){$>100&&g(),this.v=t,this.i++,S++,a++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{U()}}}});function b(t){return new u(t)}function A(t){for(var i=t.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function G(t){for(var i=t.s;i!==void 0;i=i.n){var r=i.S.n;r!==void 0&&(i.r=r),i.S.n=i,i.i=-1}}function M(t){for(var i=t.s,r=void 0;i!==void 0;){var n=i.n;i.i===-1?(i.S.U(i),i.n=void 0):(r!==void 0&&(r.p=i),i.p=void 0,i.n=r,r=i),i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=n}t.s=r}function h(t){u.call(this,void 0),this.x=t,this.s=void 0,this.g=S-1,this.f=4}(h.prototype=new u).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===S))return!0;if(this.g=S,this.f|=1,this.i>0&&!A(this))return this.f&=-2,!0;var t=s;try{G(this),s=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return s=t,M(this),this.f&=-2,!0};h.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}u.prototype.S.call(this,t)};h.prototype.U=function(t){if(u.prototype.U.call(this,t),this.t===void 0){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};h.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};h.prototype.peek=function(){if(this.h()||g(),16&this.f)throw this.v;return this.v};Object.defineProperty(h.prototype,"value",{get:function(){1&this.f&&g();var t=P(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function k(t){return new h(t)}function R(t){var i=t.u;if(t.u=void 0,typeof i=="function"){a++;var r=s;s=void 0;try{i()}catch(n){throw t.f&=-2,t.f|=8,E(t),n}finally{s=r,U()}}}function E(t){for(var i=t.s;i!==void 0;i=i.n)i.S.U(i);t.x=void 0,t.s=void 0,R(t)}function z(t){if(s!==this)throw new Error("Out-of-order effect");M(this),s=t,this.f&=-2,8&this.f&&E(this),U()}function d(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}d.prototype.c=function(){var t=this.S();try{!(8&this.f)&&this.x!==void 0&&(this.u=this.x())}finally{t()}};d.prototype.S=function(){1&this.f&&g(),this.f|=1,this.f&=-9,R(this),G(this),a++;var t=s;return s=this,z.bind(this,t)};d.prototype.N=function(){2&this.f||(this.f|=2,this.o=p,p=this)};d.prototype.d=function(){this.f|=8,1&this.f||E(this)};function l(t){var i=new d(t);return i.c(),i.d.bind(i)}var O,N;function c(t,i){w[t]=i.bind(null,w[t]||function(){})}function m(t){N&&N(),N=t&&t.S()}function V(t){var i=this,r=t.data,n=D(r);n.value=r;var f=x(function(){for(var o=i.__v;o=o.__;)if(o.__c){o.__c.__$f|=4;break}return i.__$u.c=function(){i.base.data=f.peek()},k(function(){var e=n.value.value;return e===0?0:e===!0?"":e||""})},[]);return f.value}V.displayName="_st";Object.defineProperties(u.prototype,{constructor:{configurable:!0},type:{configurable:!0,value:V},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});c("__b",function(t,i){if(typeof i.type=="string"){var r,n=i.props;for(var f in n)if(f!=="children"){var o=n[f];o instanceof u&&(r||(i.__np=r={}),r[f]=o,n[f]=o.peek())}}t(i)});c("__r",function(t,i){m();var r,n=i.__c;n&&(n.__$f&=-2,(r=n.__$u)===void 0&&(n.__$u=r=function(f){var o;return l(function(){o=this}),o.c=function(){n.__$f|=1,n.setState({})},o}())),O=n,m(r),t(i)});c("__e",function(t,i,r,n){m(),O=void 0,t(i,r,n)});c("diffed",function(t,i){m(),O=void 0;var r;if(typeof i.type=="string"&&(r=i.__e)){var n=i.__np,f=i.props;if(n){var o=r.U;if(o)for(var e in o){var v=o[e];v!==void 0&&!(e in n)&&(v.d(),o[e]=void 0)}else r.U=o={};for(var _ in n){var y=o[_],C=n[_];y===void 0?(y=B(r,_,C,f),o[_]=y):y.o(C,f)}}}t(i)});function B(t,i,r,n){var f=i in t&&t.ownerSVGElement===void 0,o=b(r);return{o:function(e,v){o.value=e,n=v},d:l(function(){var e=o.value.value;n[i]!==e&&(n[i]=e,f?t[i]=e:e?t.setAttribute(i,e):t.removeAttribute(i))})}}c("unmount",function(t,i){if(typeof i.type=="string"){var r=i.__e;if(r){var n=r.U;if(n){r.U=void 0;for(var f in n){var o=n[f];o&&o.d()}}}}else{var e=i.__c;if(e){var v=e.__$u;v&&(e.__$u=void 0,v.d())}}t(i)});c("__h",function(t,i,r,n){n<3&&(i.__$f|=2),t(i,r,n)});j.prototype.shouldComponentUpdate=function(t,i){var r=this.__$u;if(!(r&&r.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var n in i)return!0;for(var f in t)if(f!=="__source"&&t[f]!==this.props[f])return!0;for(var o in this.props)if(!(o in t))return!0;return!1};function D(t){return x(function(){return b(t)},[])}export{b as a,D as b};
