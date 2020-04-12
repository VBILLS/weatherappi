(this.webpackJsonphackernewsapi=this.webpackJsonphackernewsapi||[]).push([[0],{31:function(e,t,a){e.exports=a(57)},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),l=a(6),u=a(12),i=a.n(u),s=a(15),m=Object(n.createContext)();function d(e){var t=Object(n.useState)({lat:44.4758442,lng:-73.212121,foradd:"Burlington, VT 05401, USA",address_components:[]}),a=Object(l.a)(t,2),c=a[0],o=a[1],u=Object(n.useMemo)((function(){return[c,o]}),[c]);return r.a.createElement(m.Provider,{value:u},e.children)}var f=Object(n.createContext)();function p(e){var t=Object(n.useState)({latitude:"",longitude:"",timezone:"",currently:{},minutely:{},hourly:{},daily:{},flags:{}}),a=Object(l.a)(t,2),c=a[0],o=a[1],u=Object(n.useMemo)((function(){return[c,o]}),[c]);return r.a.createElement(f.Provider,{value:u},e.children)}var E=a(17),g=a(7),h=a(8);function b(){var e=Object(g.a)(["\n  font-weight: 400;\n  background-color: #514158;\n  color: #f3f3f3;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 4px 2px 2px #00000099;\n  cursor: pointer;\n  text-align: center;\n  vertical-align: middle;\n  padding: 0.375rem 0.75rem;\n  text-transform: none;\n"]);return b=function(){return e},e}var v=h.a.button(b()),y=function(e){var t=e.children,a=Object(E.a)(e,["children"]);return r.a.createElement(v,a,t)},j=a(58);var w=a(59),O=a(60),x=a(61);var N=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(m),u=Object(l.a)(o,2),i=(u[0],u[1]);return r.a.createElement(w.a,{id:"address-search"},r.a.createElement(O.a,{name:"address-value",onChange:function(e){c(e.target.value)},placeholder:"Search your Address",value:a}),r.a.createElement(x.a,{onClick:function(e){e.preventDefault(),c(e.target.value);fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(a,"&key=").concat("AIzaSyBUjNgOEVtBlVa0wPG2yPBmzFs2AdOwMZE")).then((function(e){return e.json()})).then((function(e){if("OK"===e.status){var t=e.results[0];i({lat:t.geometry.location.lat,lng:t.geometry.location.lng,foradd:t.formatted_address,address_components:t.address_components}),console.log("res-after-setLoc",e)}else console.log(e.status)})).catch((function(e){return console.log(e)}))},outline:!0,color:"success"},"Search ",r.a.createElement("i",{className:"fas fa-search-location"})))},k=a(62),S=a(63),M=a(64),P=a(72),z=a(65),C=a(66),B=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement(k.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(S.a,{className:"text-light"},"Weather App"),r.a.createElement(M.a,{onClick:function(){return c(!a)},className:"mr-2"}),r.a.createElement(P.a,{isOpen:a,navbar:!0},r.a.createElement(z.a,{className:"ml-auto",navbar:!0},r.a.createElement(C.a,null,r.a.createElement(N,null)))))},A=a(19);a(48);var G=function(){var e=Object(n.useContext)(m),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e.coords.latitude,",").concat(e.coords.longitude,"&key=").concat("AIzaSyBUjNgOEVtBlVa0wPG2yPBmzFs2AdOwMZE")).then((function(e){return e.json()})).then((function(e){return c({lat:e.results[0].geometry.location.lat,lng:e.results[0].geometry.location.lng,foradd:e.results[4].formatted_address,address_components:e.results})})).catch((function(e){return console.log(e)}))}))}),[]),r.a.createElement("div",{className:"mapcontainer"},r.a.createElement("strong",null,a.foradd),r.a.createElement(A.b,{googleMapsApiKey:"AIzaSyBUjNgOEVtBlVa0wPG2yPBmzFs2AdOwMZE",googleMapsClientId:"899476668967-dvt8f7rdo7k8kc8ao30cmuqrrlhuinoc.apps.googleusercontent.com",onError:function(e){return console.error()}},r.a.createElement(A.a,{id:"weather-loc-map",zoom:10,center:a},r.a.createElement(A.c,{position:a}))))},I=a(67),V=a(68);function T(){var e=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: #514158;\n  border: none;\n  border-radius: 5px;\n  padding: 0.5rem;\n  box-shadow: 4px 2px 2px #00000099;\n"]);return T=function(){return e},e}var D=h.a.div(T());function W(){var e=Object(g.a)(["\n  margin-top: 0.5rem;\n  text-align: center;\n"]);return W=function(){return e},e}function _(){var e=Object(g.a)(["\n  font-size: 24px;\n"]);return _=function(){return e},e}function F(){var e=Object(g.a)(["\n  color: #b8a2c2;\n"]);return F=function(){return e},e}function U(){var e=Object(g.a)(["\n  flex: 0 0 auto;\n  width: 3rem;\n  height: 4rem;\n  font-size: 8px;\n  padding: 2px;\n  margin: 2px;\n  border: 1px solid #312b33;\n"]);return U=function(){return e},e}function H(){var e=Object(g.a)(["\n  margin: 0;\n  max-width: 70%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n"]);return H=function(){return e},e}function L(){var e=Object(g.a)(["\n  max-width: 30%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n"]);return L=function(){return e},e}function Z(){var e=Object(g.a)(["\n  max-width: 100%;\n  max-height: 8rem;\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return Z=function(){return e},e}var K=h.a.div(Z()),J=h.a.div(L()),q=h.a.div(H()),R=Object(h.a)(D)(U()),Q=h.a.h3(F()),X=h.a.i(_()),Y=h.a.p(W());function $(){var e=Object(g.a)(["\n  width: 50%;\n"]);return $=function(){return e},e}function ee(){var e=Object(g.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n"]);return ee=function(){return e},e}function te(){var e=Object(g.a)(["\n  width: 100%;\n  height: auto;\n  font-size: 0.7rem;\n  text-align: center;\n"]);return te=function(){return e},e}var ae=Object(h.a)(R)(te()),ne=h.a.div(ee()),re=h.a.div($()),ce=(a(49),function(e){var t=e.data,a=function(e){var t=e.toString(),a=parseInt(t+"000",10);return new Date(a)},n=a(t.time),c=t.icon,o=a(t.sunriseTime),l=o.getHours(),u=o.getMinutes(),i="".concat(l,":").concat(u),s=a(t.sunsetTime),m=s.getHours(),d=s.getMinutes(),f="".concat(m,":").concat(d);return r.a.createElement(ae,{key:t.time},r.a.createElement(I.a,{noGutters:!0},r.a.createElement(ne,null,r.a.createElement("span",{className:"dow-daily-card"},function(e){var t;switch(e){case 0:t="Sunday";break;case 1:t="Monday";break;case 2:t="Tuesday";break;case 3:t="Wednesday";break;case 4:t="Thursday";break;case 5:t="Friday";break;case 6:t="Saturday";break;default:t="Invalid day"}return t}(n.getDay())),r.a.createElement("strong",{className:"icon-daily-card"},r.a.createElement("i",{className:"wi wi-forecast-io-"+c}))),r.a.createElement(re,null,t.summary)),r.a.createElement(I.a,{noGutters:!0,className:"sunandmoon-daily-card"},r.a.createElement(V.a,null,"Sunrise: ",i),r.a.createElement(V.a,null,"Sunset: ",f),r.a.createElement(V.a,null,"MoonPhase: ",t.moonPhase)),r.a.createElement(I.a,{noGutters:!0,className:"temp-daily-card"},r.a.createElement(V.a,null,"Temp Min: ",t.temperatureMin),r.a.createElement(V.a,null,"Temp Max: ",t.temperatureMax)))});function oe(){var e=Object(g.a)(["\n  margin-top: 0.5rem;\n  text-align: center;\n"]);return oe=function(){return e},e}function le(){var e=Object(g.a)(["\n  font-size: 24px;\n"]);return le=function(){return e},e}function ue(){var e=Object(g.a)(["\n  color: #b8a2c2;\n"]);return ue=function(){return e},e}function ie(){var e=Object(g.a)(["\n  width: 70%;\n  height: 180px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 2px;\n\n  overflow-y: auto;\n"]);return ie=function(){return e},e}function se(){var e=Object(g.a)([""]);return se=function(){return e},e}function me(){var e=Object(g.a)(["\n  max-height: 200px;\n"]);return me=function(){return e},e}var de=Object(h.a)(K)(me()),fe=Object(h.a)(J)(se()),pe=Object(h.a)(q)(ie()),Ee=h.a.h3(ue()),ge=h.a.i(le()),he=h.a.p(oe());var be=function(){var e=Object(n.useContext)(f),t=Object(l.a)(e,1)[0],a=t.daily.icon,c=t.daily;return r.a.createElement(de,null,r.a.createElement(fe,null,r.a.createElement(Ee,null,"Daily:"),r.a.createElement(ge,{className:"wi wi-forecast-io-"+a}),r.a.createElement(he,{className:"daily-summary-main"},c.summary)),r.a.createElement(pe,null,c.data&&c.data.map((function(e){return r.a.createElement(ce,{key:e.time,data:e})}))))},ve=a(69),ye=a(70);var je=function(){var e=Object(n.useContext)(f),t=Object(l.a)(e,1)[0],a=t.hourly.icon,c=t.hourly;return r.a.createElement(K,null,r.a.createElement(J,null,r.a.createElement(Q,null,"Hourly:"),r.a.createElement(X,{className:"wi wi-forecast-io-"+a}),r.a.createElement(Y,{className:"hourly-summary-main"},c.summary)),r.a.createElement(q,null,c.data&&c.data.map((function(e){var t=function(e){var t=e.toString(),a=parseInt(t+"000",10);return new Date(a)}(e.time),a=e.icon;return r.a.createElement(R,{key:e.time},r.a.createElement(ve.a,null,t.getHours()," -",r.a.createElement("strong",null,r.a.createElement("i",{className:"wi wi-forecast-io-"+a}))),r.a.createElement(ye.a,null,r.a.createElement("i",{className:"fas fa-thermometer-half"})," ",e.temperature,r.a.createElement("br",null),r.a.createElement("i",{className:"fas fa-umbrella"})," ",e.precipProbability))}))))},we=a(30),Oe=function(e){var t=e.children,a=Object(E.a)(e,["children"]);return r.a.createElement(D,a,t)},xe=a(71);a(50);var Ne=function(e){var t=e.cur,a=t.icon;return r.a.createElement(xe.a,{className:"WeatherResponse-div m-2"},r.a.createElement(Oe,{className:"currently"},r.a.createElement("div",{className:"main-title-curSum"},r.a.createElement("h1",{className:"cur-icon"},r.a.createElement("i",{className:"wi wi-forecast-io-"+a})),r.a.createElement("h3",{className:"cur-summary lead"},t.summary)),r.a.createElement(ve.a,{className:"cur-temCardTitleerature lead"},"Temp: ",r.a.createElement("strong",null,t.temperature),"Feels Like: ",r.a.createElement("strong",null,t.apparentTemperature)),r.a.createElement(ye.a,{className:"card-text-curSum"},r.a.createElement(I.a,{className:"cur-dew-hum"},r.a.createElement(V.a,null,"Dew Point: ",t.dewPoint),r.a.createElement(V.a,null,"Humidity: ",t.humidity)),r.a.createElement(I.a,{className:"cur-wind"},r.a.createElement(V.a,null,"Wind Speed: ",t.windSpeed),r.a.createElement(V.a,null,"Gust: ",t.windGust)),r.a.createElement(I.a,{className:"cur-uv-ozone"},r.a.createElement(V.a,null,"UVIndex: ",t.uvIndex),r.a.createElement(V.a,null,"Ozone: ",t.ozone)))))};a(51);var ke=function(){var e=Object(n.useContext)(m),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(f),u=Object(l.a)(o,2),d=u[0],p=u[1],E=Object(n.useState)(!1),g=Object(l.a)(E,2),h=g[0],b=g[1];function v(){return(v=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("starting handleGetLocName"),"AIzaSyBUjNgOEVtBlVa0wPG2yPBmzFs2AdOwMZE",b(!0),fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(a.lat,",").concat(a.lng,"&key=").concat("AIzaSyBUjNgOEVtBlVa0wPG2yPBmzFs2AdOwMZE")).then((function(e){return e.json()})).then((function(e){"OK"===e.status?(console.log("res-after-latLngCallLoc",e),c(Object(we.a)({},a,{address_components:e.results,foradd:e.results[5].formatted_address}))):console.log(e.status)})).catch((function(e){return console.log(e)})),b(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("starting fetchWeatherData"),"https://cors-anywhere.herokuapp.com/",b(!0),e.next=5,fetch("".concat("https://cors-anywhere.herokuapp.com/","https://api.darksky.net/forecast/64ba8a3916e562da1c3038e0e454a0e8/").concat(a.lat,",").concat(a.lng),{method:"GET",headers:new Headers({Accept:"application/json"})}).then((function(e){return e.json()})).then((function(e){p(e),b(!1),console.log("setweathdata - run")})).catch((function(e){return console.error}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{className:"weatherMain"},h?r.a.createElement(j.a,null):r.a.createElement("div",{className:"weatherMain-button-div"},r.a.createElement(y,{className:"weatherMain-button",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){c({lat:e.coords.latitude,lng:e.coords.longitude}),console.log("WeatherMain -- geo loc - setloc",a)}))}},r.a.createElement("i",{className:"fas fa-location-arrow"})),r.a.createElement(y,{className:"weatherMain-button",onClick:function(){return w.apply(this,arguments)}},"Get Weather"),r.a.createElement(y,{className:"weatherMain-button",onClick:function(){return v.apply(this,arguments)}},"Get Location Name")),r.a.createElement(Ne,{cur:d.currently}))},Se=(a(52),function(){return r.a.createElement(xe.a,{fluid:!0},r.a.createElement("div",{className:"mainpage-map-curtemp"},r.a.createElement(G,null),r.a.createElement(ke,null)),r.a.createElement("div",{className:"main-summaries"},r.a.createElement(je,null),r.a.createElement(be,null)))});a(53),a(54);var Me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(p,null,r.a.createElement(B,null),r.a.createElement(xe.a,{fluid:!0,className:"mt-2"},r.a.createElement(Se,null),r.a.createElement("div",{className:"poweredby-div"},r.a.createElement("a",{href:"https://darksky.net/poweredby/"},"Weather Powered By Dark Sky"))))))};a(55),a(56);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Me,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.25372fa7.chunk.js.map