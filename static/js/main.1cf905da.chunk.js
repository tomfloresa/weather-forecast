(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{53:function(n,e,t){n.exports=t(85)},85:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),c=t(25),i=t.n(c),o=t(9),u=t(15),l=t(10),s=t(11),p=t(21),f=(t(84),t(50)),m=t(13),h=t(2),b={colors:{main:"red",white:"white"},fonts:{main:"Poppins",secondary:"Nunito"},shadows:{main:"rgba(52, 69, 89, 0.2) 0px 6px 8px 0px"}},d=t(14),v=t.n(d),x=t(23),w=t(3),g=t(24),j=t.n(g),O=t(17),E="375px",y="425px",k="768px",M="1024px",W="1440px",z="2560px",C={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(E,")"),mobileL:"(min-width: ".concat(y,")"),tablet:"(min-width: ".concat(k,")"),laptop:"(min-width: ".concat(M,")"),laptopL:"(min-width: ".concat(W,")"),desktop:"(min-width: ".concat(z,")"),desktopL:"(min-width: ".concat(z,")")},D=t(45);function P(){var n=Object(w.a)(["\n  background-color: ",";\n  border-radius: 18px;\n  box-shadow: ",";\n  margin: 16px 0;\n  padding: 8px 16px;\n  box-sizing: border-box;\n  font-family: ",";\n"]);return P=function(){return n},n}var S=h.b.div(P(),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.main}),(function(n){return n.theme.fonts.main})),Y=function(n){var e=n.children,t=Object(D.a)(n,["children"]);return r.a.createElement(S,t,e&&e)},B=t(49),L=t.n(B),J=(t(66),function(n){var e=n.slides,t=n.config;return r.a.createElement(L.a,t,e&&e.map((function(n){return r.a.createElement("div",null,n)})))}),_=function(n){var e=[],t=0;return n.forEach((function(n,a,r){var c=n,i=a-1>=0?r[a-1]:n;if(j.a.unix(c.dt).isSame(j.a.unix(i.dt),"day")){if("undefined"===typeof e[t]){e.push([]),t=e.length-1}e[t].push(c)}else{e.push([]),t=e.length-1,e[t].push(c)}})),e},A=function(n){var e=[],t=[],a=[];return n.forEach((function(n){e.push(n.main.temp_min),t.push(n.main.temp_max),a.push(n.weather[0].icon)})),{min:Math.min.apply(null,e),max:Math.max.apply(null,t),icon:F(a)}},F=function(n){if(0===n.length)return null;for(var e={},t=n[0],a=1,r=0;r<n.length;r++){var c=n[r];null==e[c]?e[c]=1:e[c]++,e[c]>a&&(t=c,a=e[c])}return t},H=function(n){return"http://openweathermap.org/img/wn/".concat(n,"@2x.png")};function I(){var n=Object(w.a)(["\n  display: block;\n"]);return I=function(){return n},n}function N(){var n=Object(w.a)(["\n  font-size: ",";\n  line-height: 100%;\n  display: block;\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    font-size: ",";\n  }\n"]);return N=function(){return n},n}function V(){var n=Object(w.a)(["\n  font-size: ",";\n  font-weight: 500;\n  display: block;\n"]);return V=function(){return n},n}function $(){var n=Object(w.a)(["\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return $=function(){return n},n}function q(){var n=Object(w.a)(["\n  flex-grow: 2;\n"]);return q=function(){return n},n}function G(){var n=Object(w.a)(["\n  padding: 8px;\n  color: ",";\n  background: #0077ff;\n  display: block;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-weight: 800;\n  width: fit-content;\n"]);return G=function(){return n},n}function K(){var n=Object(w.a)(["\n  display: flex;\n"]);return K=function(){return n},n}var Q=h.b.div(K()),R=h.b.span(G(),(function(n){return n.theme.colors.white})),T=h.b.div(q()),U=h.b.div($()),X=h.b.span(V(),Object(O.a)("22px")),Z=h.b.span(N(),Object(O.a)("120px"),C.mobileS,Object(O.a)("60px"),C.mobileM,Object(O.a)("90px")),nn=h.b.img(I()),en=function(n){var e=n.weather;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement(Y,null,r.a.createElement(R,null,"Hoy \xb7 ".concat(j.a.unix(e.dt).local().format("DD/MM/YYYY"))),r.a.createElement(Q,null,r.a.createElement(T,null,r.a.createElement(X,null,"Ahora:"),r.a.createElement(Z,null,"".concat(Math.ceil(e.main.temp),"\xbaC"))),r.a.createElement(U,null,r.a.createElement(nn,{src:H(e.weather[0].icon)})))))};function tn(){var n=Object(w.a)(["\n  display: block;\n  font-weight: 800;\n  text-align: center;\n"]);return tn=function(){return n},n}function an(){var n=Object(w.a)([""]);return an=function(){return n},n}function rn(){var n=Object(w.a)(["\n  margin: auto;\n  display: block;\n"]);return rn=function(){return n},n}function cn(){var n=Object(w.a)(["\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n"]);return cn=function(){return n},n}var on=Object(h.b)(Y)(cn()),un=h.b.img(rn()),ln=h.b.div(an()),sn=h.b.span(tn()),pn=function(n){var e=n.forecastedWeather;return r.a.createElement(on,null,r.a.createElement(un,{src:H(e.icon)}),r.a.createElement(ln,null,r.a.createElement(sn,null,"Min: ".concat(Math.ceil(e.min),"\xbaC")),r.a.createElement(sn,null,"Min: ".concat(Math.ceil(e.max),"\xbaC"))))},fn=t(30),mn=t(31),hn=t.n(mn),bn={id:"3873544",appid:"e93c9b1819b9b592322f0b65a4da5e40",units:"metric"},dn=function(){var n=Object(x.a)(v.a.mark((function n(){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",hn.a.get("".concat("https://api.openweathermap.org/data/2.5","/").concat("weather"),{params:Object(fn.a)({},bn)}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),vn=function(){var n=Object(x.a)(v.a.mark((function n(){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",hn.a.get("".concat("https://api.openweathermap.org/data/2.5","/").concat("forecast"),{params:Object(fn.a)({},bn)}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function xn(){var n=Object(w.a)(["\n  width: 100%;\n  margin: 24px 0;\n"]);return xn=function(){return n},n}function wn(){var n=Object(w.a)(["\n  height: 100%;\n  width: 100%;\n  padding: ",";\n  background-color: #eff6ff;\n  box-sizing: border-box;\n"]);return wn=function(){return n},n}var gn=h.b.div(wn(),Object(O.a)("24px")),jn=h.b.div(xn()),On={pagination:{clickable:!0},slidesPerView:2,spaceBetween:22,observer:!0},En=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this,n))).state={currentWeather:null},t}return Object(p.a)(e,n),Object(u.a)(e,[{key:"componentDidMount",value:function(){var n=Object(x.a)(v.a.mark((function n(){var e,t,a,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,dn();case 3:return n.next=5,n.sent.data;case 5:return e=n.sent,n.next=8,vn();case 8:return n.next=10,n.sent.data;case 10:t=n.sent,a=_(t.list),r=a.map((function(n){return A(n)})),console.log(r),this.setState({currentWeather:e,forecastPerDay:r}),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),console.log(n.t0);case 20:case"end":return n.stop()}}),n,this,[[0,17]])})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state,e=n.currentWeather,t=n.forecastPerDay;return r.a.createElement(gn,null,r.a.createElement(en,{weather:e}),r.a.createElement(jn,null,r.a.createElement(J,{config:On,slides:t?t.map((function(n){return r.a.createElement(pn,{forecastedWeather:n,key:n.min})})):[r.a.createElement(Y,null)]})))}}]),e}(a.Component),yn=function(n){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(h.a,{theme:b},r.a.createElement(f.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/forecast",component:En}))))}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(yn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.1cf905da.chunk.js.map