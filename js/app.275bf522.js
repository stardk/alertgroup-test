(function(t){function e(e){for(var n,a,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&m.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/alertgroup-test/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"244c":function(t,e,i){},"450b":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},o=[],a=(i("5c0b"),i("2877")),r={},c=Object(a["a"])(r,s,o,!1,null,null,null),l=c.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("header",{staticClass:"header"},[i("div",{staticClass:"header__container"},[i("span",{staticClass:"header__logo"},[t._v(" Логотип ")]),i("button",{staticClass:"header__button",on:{click:function(e){return t.toForm()}}},[t._v(" Форма ")])])]),t._m(0),t._m(1),i("div",{staticClass:"bottomLine"}),i("main",{staticClass:"content"},[t._m(2),i("div",{staticClass:"content__cards"},[i("h1",[t._v(" Lorem ipsum dolor sit ")]),i("div",{staticClass:"content__cards__items"},t._l(12,(function(e){return i("div",{key:e,staticClass:"card"},[i("h3",[t._v(" "+t._s(t.getCardTitle())+" ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ")])])})),0)]),i("a",{attrs:{id:"location"}}),t._m(3),i("a",{attrs:{id:"files"}}),i("div",{staticClass:"content__files"},[i("h1",[t._v(" Файлы ")]),i("FileList")],1),t._m(4)])])},m=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"leftLink"},[i("a",{attrs:{href:"#files"}},[t._v(" Файлы ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rightLink"},[i("a",{attrs:{href:"#location"}},[t._v(" Местоположение ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content__intro"},[i("h1",[t._v(" Lorem ipsum dolor, consectetur adipiscing elit ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content__location"},[i("h1",[t._v(" Местоположение ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ")]),i("div",{staticClass:"content__location__map",attrs:{id:"map"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content__outro"},[i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ")])])}],p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"files"},[i("div",{staticClass:"files__tabs"},t._l(t.tabs,(function(e){return i("span",{key:e.id,staticClass:"tab",class:{activated:t.currentTab===e.id},on:{click:function(i){return t.getFiles(e.id)}}},[t._v(" "+t._s(e.name)+" ")])})),0),i("div",{staticClass:"files__content"},t._l(t.currentFiles,(function(e){return i("div",{key:e.id,staticClass:"file"},[i("div",{staticClass:"file__info"},[i("span",{staticClass:"file__info__name"},[t._v(" "+t._s(e.name)+" ")]),i("span",{staticClass:"file__info__size"},[t._v(" "+t._s(e.size+" мб")+" ")]),i("span",{staticClass:"file__info__divider"},[t._v(" | ")]),i("span",{staticClass:"file__info__date"},[t._v(" "+t._s(e.date)+" ")])]),i("div",{staticClass:"file__download"},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M23.3124 11.7224C22.9304 11.7224 22.6248 12.028 22.6248 12.41V18.6647C22.6248 20.3659 21.2394 21.7462 19.5433 21.7462H4.45671C2.75552 21.7462 1.37521 20.3608 1.37521 18.6647V12.3082C1.37521 11.9261 1.06961 11.6205 0.687606 11.6205C0.305603 11.6205 0 11.9261 0 12.3082V18.6647C0 21.1248 2.0017 23.1214 4.45671 23.1214H19.5433C22.0034 23.1214 24 21.1197 24 18.6647V12.41C24 12.0331 23.6944 11.7224 23.3124 11.7224Z",fill:"#C78555"}}),i("path",{attrs:{d:"M11.5165 17.6613C11.6489 17.7937 11.8272 17.865 12.0004 17.865C12.1735 17.865 12.3518 17.7988 12.4842 17.6613L16.8543 13.2912C17.1243 13.0212 17.1243 12.5883 16.8543 12.3183C16.5844 12.0484 16.1515 12.0484 15.8815 12.3183L12.688 15.517V1.56621C12.688 1.1842 12.3824 0.878601 12.0004 0.878601C11.6184 0.878601 11.3128 1.1842 11.3128 1.56621V15.517L8.11411 12.3183C7.84416 12.0484 7.41122 12.0484 7.14127 12.3183C6.87132 12.5883 6.87132 13.0212 7.14127 13.2912L11.5165 17.6613Z",fill:"#C78555"}})])])])})),0)])},f=[],_=(i("4de4"),{name:"FileList",data:function(){return{tabs:[{name:"Все",id:10},{name:"TAB1",id:1},{name:"TAB2",id:2},{name:"TAB3",id:3}],files:[{id:1,name:"Lorem ipsum Lorem ipsum",size:.42,date:"28.05.2019 15:53"},{id:2,name:"Lorem ipsum Lorem ipsum",size:.29,date:"12.03.2019 10:42"},{id:3,name:"Lorem ipsum Lorem ipsum",size:1.54,date:"05.02.2019 13:08"}],currentFiles:[],currentTab:null}},methods:{getFiles:function(t){this.currentFiles=t>3?this.files:this.files.filter((function(e){return e.id===t})),this.currentTab=t}},mounted:function(){this.getFiles(10)}}),v=_,h=(i("f546"),Object(a["a"])(v,p,f,!1,null,"856af2a8",null)),C=h.exports,b={name:"About",components:{FileList:C},data:function(){return{titles:["Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet","Lorem ipsum dolor","Lorem ipsum"]}},methods:{getCardTitle:function(){return this.titles[Math.floor(Math.random()*this.titles.length)]},toForm:function(){return this.$router.push({name:"form"})}},created:function(){ymaps.ready((function(){var t=new ymaps.Map("map",{coordinates:[55.753994,37.622093],center:[59.9268411,30.3446759],zoom:16}),e=new ymaps.Placemark([59.92662143,30.34425143],{balloonContentHeader:'<a href="https://alertgroup.ru/">Наш сайт</a>',balloonContentBody:"<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>",balloonContentFooter:'<a href="mailto:info@alertgroup.ru">Напишите нам!</a>'});t.geoObjects.add(e)}))}},g=b,L=(i("a650"),Object(a["a"])(g,d,m,!1,null,"081a2b66",null)),w=L.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("header",{staticClass:"header"},[i("div",{staticClass:"header__container"},[i("span",{staticClass:"header__logo"},[t._v(" Логотип ")]),i("button",{staticClass:"header__button",on:{click:function(e){return t.toHome()}}},[t._v(" Главная ")])])]),i("div",{staticClass:"leftLine"}),i("div",{staticClass:"rightLine"}),i("div",{staticClass:"bottomLine"}),i("main",{staticClass:"content"},[i("div",{staticClass:"content__form"},[i("h1",[t._v(" Lorem ipsum dolor ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.info.phoneNumber,expression:"info.phoneNumber"}],staticClass:"content__form__input",attrs:{placeholder:"Ваш телефон*",type:"tel",name:"phone"},domProps:{value:t.info.phoneNumber},on:{input:function(e){e.target.composing||t.$set(t.info,"phoneNumber",e.target.value)}}}),i("button",{staticClass:"content__form__button",on:{click:function(e){return t.sendForm()}}},[t._v(" Отправить ")]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error"},[t._v(" Заполните, пожалуйста, все поля ")]),i("div",{staticClass:"content__form__checkbox",on:{click:function(e){t.checked=!t.checked}}},[i("div",{staticClass:"box-container"},[t.checked?i("svg",{attrs:{width:"6",height:"5",viewBox:"0 0 6 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M0.0692308 2.72157C0.0230769 2.67541 0 2.60618 0 2.56003C0 2.51387 0.0230769 2.44464 0.0692308 2.39849L0.392308 2.07541C0.484615 1.98311 0.623077 1.98311 0.715385 2.07541L0.738462 2.09849L2.00769 3.46003C2.05385 3.50618 2.12308 3.50618 2.16923 3.46003L5.26154 0.252336H5.28462C5.37692 0.160029 5.51538 0.160029 5.60769 0.252336L5.93077 0.575413C6.02308 0.667721 6.02308 0.806182 5.93077 0.89849L2.23846 4.72926C2.19231 4.77541 2.14615 4.79849 2.07692 4.79849C2.00769 4.79849 1.96154 4.77541 1.91538 4.72926L0.115385 2.7908L0.0692308 2.72157Z",fill:"#C78555"}})]):t._e()]),i("span",{staticClass:"label"},[t._v(" Я принимаю условия ")])])]),t._m(0)])])},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content__outro"},[i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ")])])}],x=(i("d3b7"),i("23d1")),O=i.n(x),j={name:"Form",data:function(){return{checked:!1,error:!1,info:{phoneNumber:""}}},methods:{toHome:function(){return this.$router.push({name:"about"})},phoneMask:function(){var t=document.querySelector(".content__form__input"),e=new O.a("+9(999)999-99-99");e.mask(t)},sendForm:function(){this.checked&&"_"!==this.info.phoneNumber[15]?(this.error=!1,fetch("http://localhost:8080/",{method:"POST",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify(this.info)})):this.error=!0}},mounted:function(){this.phoneMask()}},F=j,$=(i("6c68"),Object(a["a"])(F,y,k,!1,null,"b905ce94",null)),T=$.exports;n["a"].use(u["a"]);var M=[{path:"/",redirect:{name:"about"}},{path:"/about",name:"about",component:w},{path:"/form",name:"form",component:T}],E=new u["a"]({routes:M}),P=E;n["a"].config.productionTip=!1,new n["a"]({router:P,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"6c68":function(t,e,i){"use strict";var n=i("450b"),s=i.n(n);s.a},8618:function(t,e,i){},"9c0c":function(t,e,i){},a650:function(t,e,i){"use strict";var n=i("8618"),s=i.n(n);s.a},f546:function(t,e,i){"use strict";var n=i("244c"),s=i.n(n);s.a}});
//# sourceMappingURL=app.275bf522.js.map