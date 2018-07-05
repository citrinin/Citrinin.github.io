!function o(i,s,u){function c(t,e){if(!s[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var a=s[t]={exports:{}};i[t][0].call(a.exports,function(e){return c(i[t][1][e]||e)},a,a.exports,o,i,s,u)}return s[t].exports}for(var l="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=e("../utils/request"),o=(r=a)&&r.__esModule?r:{default:r};var i="AIzaSyB2D-Cmek8ifPd0bHOFzKsdFTofnXBWoIE";n.default=function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.eventBus=t,this.eventBus.on("map:clicked",function(n){r.getPlaceName(n.lat,n.lng).then(function(e){r.eventBus.trigger("google:cityFound",e,n)},function(e){var t=prompt("Unknown place. Enter the name","Hollywood");t&&r.eventBus.trigger("google:cityFound",t,n)})}),this.getLatLng=function(e){return(0,o.default)("https://maps.googleapis.com/maps/api/geocode/json?address="+e+"&key="+i).then(function(e){return e.results[0].geometry.location})},this.getPlaceName=function(e,t){return(0,o.default)("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&result_type=locality&language=ru&key="+i).then(function(e){return e.results[0].address_components[0].short_name})}}},{"../utils/request":11}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),o=e("../utils/lsStorage"),i=(r=o)&&r.__esModule?r:{default:r};var s=function(){function o(e,t,n,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),this.maxItemAmount=t||0,this.allowRemove=e,this.items={},this.storageName=n,this.htmlElement=r,this.eventBus=a,this.init(),"Favorites"===this.storageName&&this.addRemoval()}return a(o,[{key:"init",value:function(){var t=this;"Favorites"===this.storageName&&this.eventBus.on("google:cityFound",this.addItem.bind(this)),i.default.getData(this.storageName).then(function(e){t.items=JSON.parse(e)||{},t.render()})}},{key:"render",value:function(){this.htmlElement.innerHTML="";var e=document.createElement("ul");for(var t in this.items){var n=document.createElement("li"),r=document.createElement("a");r.href="Favorites"===this.storageName?"#center="+this.items[t].lat+","+this.items[t].lng:"#city="+t,r.innerHTML=t+(this.allowRemove?'<span class="glyphicon glyphicon-remove cross-align-right"/>':""),n.appendChild(r),e.insertBefore(n,e.firstChild)}this.htmlElement.appendChild(e)}},{key:"addRemoval",value:function(){var n=this;this.allowRemove&&this.htmlElement.addEventListener("click",function(e){if(e.target.matches(".glyphicon-remove")){e.preventDefault();var t=e.target.parentElement.innerText;n.eventBus.trigger("list:removeFav",n.items[t]),delete n.items[t],i.default.setData(n.storageName,JSON.stringify(n.items)),n.render()}})}},{key:"addItem",value:function(e,t){void 0===this.items[e]&&(this.items[e]=t||{},"Favorites"===this.storageName&&this.eventBus.trigger("list:addFav",this.items[e]),0!==this.maxItemAmount&&Object.keys(this.items).length>this.maxItemAmount&&delete this.items[Object.keys(this.items)[0]],this.render(),i.default.setData(this.storageName,JSON.stringify(this.items)))}}]),o}();n.default=s},{"../utils/lsStorage":10}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var a=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.htmlElement=e,this.eventBus=t,this.init()}return r(n,[{key:"init",value:function(){var t=this;this.render(),this.htmlElement.addEventListener("keypress",function(e){e.target.matches("input")&&13==e.keyCode&&t.goToCity()}),this.htmlElement.addEventListener("click",function(e){e.target.matches("button")&&t.goToCity()})}},{key:"goToCity",value:function(){""!==this.input.value&&(this.eventBus.trigger("search:city",this.input.value),this.input.value="")}},{key:"render",value:function(){this.htmlElement.innerHTML="",this.input=document.createElement("input"),this.input.className="form-control input__city",this.input.placeholder="city",this.htmlElement.appendChild(this.input);var e=document.createElement("span");e.className="input-group-btn";var t=document.createElement("button");t.className="btn btn-default search button__search_city",t.type="button";var n=document.createElement("span");n.className="glyphicon glyphicon-search",t.appendChild(n),e.appendChild(t),this.htmlElement.appendChild(e)}}]),n}();n.default=a},{}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),d=o(e("../utils/skycons")),a=o(e("../utils/request"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=e,this.eventBus=t}return r(n,[{key:"getForecastByLatLng",value:function(e,t,n){var r=this;this.cityName=n,(0,a.default)("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5031e075946739a76f0e37598086d0a3/"+e+","+t+"?lang=ru&units=si").then(function(e){r.render(e.daily.data)})}},{key:"render",value:function(e){this.element.innerHTML="";var t=document.createElement("span");t.innerHTML="Place: "+this.cityName,this.element.appendChild(t);var n=document.createElement("table");n.className="weatherTable table";var r=document.createElement("tr"),a=document.createElement("th");a.innerHTML="Date";var o=new Date;r.appendChild(a);for(var i=0;i<7;i++){var s=document.createElement("th");s.innerHTML=o.getDate()+"."+(o.getMonth()+1),r.appendChild(s),o.setDate(o.getDate()+1)}n.appendChild(r),r=document.createElement("tr");var u=document.createElement("th");r.appendChild(u);for(var c=0;c<7;c++){var l=document.createElement("td");l.innerHTML='<canvas class="'+e[c].icon+'" width="30" height="30"></canvas>',r.appendChild(l)}n.appendChild(r),n.appendChild(this.createRow(e,"Day temperature, &#8451","temperatureHigh")),n.appendChild(this.createRow(e,"Night temperature, &#8451","temperatureLow")),n.appendChild(this.createRow(e,"Wind speed, m/s","windSpeed")),this.element.appendChild(n),(0,d.default)()}},{key:"createRow",value:function(e,t,n){var r=document.createElement("tr"),a=document.createElement("th");a.innerHTML=t,r.appendChild(a);for(var o=0;o<7;o++){var i=document.createElement("td");i.innerHTML=e[o][n],r.appendChild(i)}return r}}]),n}();n.default=i},{"../utils/request":11,"../utils/skycons":13}],5:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=a(e("../utils/debounce")),s=a(e("../utils/lsStorage"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=o.getCenter();this.eventBus.trigger("map:moved",t[0],t[1])}var c={},l=function(){function a(e,t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),this.startLat=t,this.startLng=n,this.eventBus=e,this.storageName=r,this.init()}return r(a,[{key:"moveTo",value:function(e,t){o.panTo([+e,+t],{duration:2e3})}},{key:"init",value:function(){var e=this;ymaps.ready(function(){e.createMap([e.startLat,e.startLng]),s.default.getData(e.storageName).then(function(e){var t=JSON.parse(e)||{};for(var n in t){var r=new ymaps.Placemark([t[n].lat,t[n].lng],{},{preset:"islands#yellowGlyphIcon",iconGlyph:"star"});c[t[n].lat+","+t[n].lng]=r,o.geoObjects.add(r)}}),e.eventBus.on("list:addFav",function(e){var t=new ymaps.Placemark([e.lat,e.lng],{},{preset:"islands#yellowGlyphIcon",iconGlyph:"star"});c[e.lat+","+e.lng]=t,o.geoObjects.add(t)}),e.eventBus.on("list:removeFav",function(e){o.geoObjects.remove(c[e.lat+","+e.lng]),delete c[e.lat+","+e.lng]})})}},{key:"createMap",value:function(e){var r=this;(o=new ymaps.Map("map",{center:[e[0],e[1]],zoom:12,controls:["zoomControl"]},{suppressMapOpenBlock:!0})).events.add("click",function(e){var t=e.get("coords"),n={lat:t[0],lng:t[1]};r.eventBus.trigger("map:clicked",n)}),o.events.add("actionend",(0,i.default)(u,700).bind(this))}}]),a}();n.default=l},{"../utils/debounce":8,"../utils/lsStorage":10}],6:[function(e,t,n){"use strict";var r=a(e("./routes"));function a(e){return e&&e.__esModule?e:{default:e}}new(a(e("./utils/router")).default)(r.default)},{"./routes":7,"./utils/router":12}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=d(e("./components/listComponent")),a=d(e("./components/googleSearch")),o=d(e("./components/yandexMap")),i=d(e("./components/weatherForecast")),s=d(e("./utils/eventBus")),u=d(e("./utils/userLocation")),c=d(e("./utils/request")),l=d(e("./components/searchComponent"));function d(e){return e&&e.__esModule?e:{default:e}}function h(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}document.querySelector(".myradio").addEventListener("click",function(e){c.default.type=document.querySelector('input[name="request__option"]:checked').value});var f=void 0,m=void 0,p=void 0,v=void 0,y=void 0,g=document.querySelector("#map"),w=document.querySelector("#weather"),b=[{match:"",onEnter:function(){u.default.then(function(e){window.location.hash="center="+e.latitude+","+e.longitude})}},{match:/city=(.+)/,onEnter:function(e){_()?(v.addItem(decodeURI(e)),m.getLatLng(e).then(function(e){p.moveTo(e.lat,e.lng)})):(L(e),v.addItem(decodeURI(e)),m.getLatLng(e).then(function(e){window.location.hash="center="+e.lat+","+e.lng}))}},{match:/^([+|-]?\d*\.?\d+)\,([+|-]?\d*\.?\d+)/,onEnter:function(n){var e;_()||L.apply(void 0,h(n)),(e=m).getPlaceName.apply(e,h(n)).then(function(e){var t;return(t=y).getForecastByLatLng.apply(t,h(n).concat([e]))}).catch(function(e){var t;return(t=y).getForecastByLatLng.apply(t,h(n).concat(["Unknown place"]))})}},{match:/center=([+|-]?\d*\.?\d+)\,([+|-]?\d*\.?\d+)/,onBeforeEnter:function(n){var e,t;_()?(e=p).moveTo.apply(e,h(n)):(L.apply(void 0,h(n)),(t=m).getPlaceName.apply(t,h(n)).then(function(e){var t;return(t=y).getForecastByLatLng.apply(t,h(n).concat([e]))}).catch(function(e){var t;return(t=y).getForecastByLatLng.apply(t,h(n).concat(["Unknown place"]))}))}},{match:"author",onEnter:function(){E(),w.hidden="true",document.querySelector(".active").className="",document.querySelector('[href="#author"]').parentElement.className="active",g.innerHTML="<div class='about'><h2>Author - <a href='https://github.com/Citrinin'>Kate Kuzkina</a></h2></div>"}},{match:"about",onEnter:function(){E(),w.hidden="true",document.querySelector(".active").className="",document.querySelector('[href="#about"]').parentElement.className="active",g.innerHTML="<div class='about'><h2>Wezzard</h2><h4>Wezzard is the weather site with daily forecast, search history and favorite places</h4></div>"}}];function _(){return!!(v&&m&&p&&y)}function E(){y=v=p=m=f=null}function L(e,t){w.removeAttribute("hidden"),g.innerHTML="",document.querySelector(".active").className="",document.querySelector('li [href="#"]').parentElement.className="active",f=new s.default,m=new a.default(f),Number.isNaN(+e)?m.getLatLng(e).then(function(e){p=new o.default(f,e.lat,e.lng,"Favorites")}):p=new o.default(f,e,t,"Favorites"),new r.default(!0,0,"Favorites",document.querySelector(".favorites__list"),f),v=new r.default(!1,5,"History",document.querySelector(".history__list")),y=new i.default(document.querySelector(".weather__forecast"),f),new l.default(document.querySelector(".input-group"),f),f.on("search:city",function(e){window.location.hash="city="+e}),f.on("map:moved",function(e,t){window.location.hash=e+","+t})}n.default=b},{"./components/googleSearch":1,"./components/listComponent":2,"./components/searchComponent":3,"./components/weatherForecast":4,"./components/yandexMap":5,"./utils/eventBus":9,"./utils/request":11,"./utils/userLocation":14}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(n,r){var a;return function(){var e=this,t=arguments;clearTimeout(a),a=setTimeout(function(){return n.apply(e,t)},r)}}},{}],9:[function(e,t,n){"use strict";function r(){this.listeners={}}Object.defineProperty(n,"__esModule",{value:!0}),r.prototype.trigger=function(e){for(var t=0;t<(this.listeners[e]||[]).length;t++){var n=this.listeners[e][t];if("function"==typeof n){var r=[].slice.call(arguments,1);n.apply(null,r),-1!==n.toString().indexOf("self.off")&&t--}}},r.prototype.on=function(e,t){this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(t)},r.prototype.off=function(e,t){if(null!=this.listeners[e]){var n=this.listeners[e].indexOf(t);this.listeners[e].splice(n,1)}},r.prototype.once=function(t,n){var r=this;r.on(t,function e(){n.apply(null,arguments),r.off(t,e)})},n.default=r},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={getData:function(e){return Promise.resolve(window.localStorage.getItem(e))},setData:function(e,t){return Promise.resolve(window.localStorage.setItem(e,t))}};n.default=r},{}],11:[function(e,t,n){"use strict";function a(e){return"XHR"===a.type?(r=e,new Promise(function(e,t){var n=new XMLHttpRequest;n.open("GET",r),n.onload=function(){200<=this.status&&this.status<300?e(JSON.parse(n.response)):t({status:this.status,statusText:n.statusText})},n.onerror=function(){t({status:this.status,statusText:n.statusText})},n.send()})):fetch(e).then(function(e){return e.json()});var r}Object.defineProperty(n,"__esModule",{value:!0}),a.type="XHR",n.default=a},{}],12:[function(e,t,n){"use strict";function r(e){var t=this;this.routes=e||[],this.currentRoute,this.previousRoute,this.currentParams,this.previousParams,window.addEventListener("hashchange",function(e){t.handler(window.location.hash)}),this.handler(window.location.hash)}Object.defineProperty(n,"__esModule",{value:!0}),r.prototype={handler:function(e){this.previousRoute=this.currentRoute,this.previousParams=this.currentParams,this.currentRoute=this.findNewRoute(e),this.launchHandlers()},findNewRoute:function(e){e=e.slice(1);for(var t=0;t<this.routes.length;t++){var n=this.routes[t];if("string"==typeof n.match&&n.match===e)return this.currentParams="",n;if("function"==typeof n.match&&n.match(e))return this.currentParams="",n;if(n.match instanceof RegExp&&n.match.test(e))return this.currentParams=e.match(n.match)||[],this.currentParams.splice(0,1),n}},launchHandlers:function(){var e=this;Promise.resolve().then(function(){e.previousRoute&&e.previousRoute.onLeave&&e.previousRoute.onLeave(e.previousParams)}).then(function(){e.currentRoute&&e.currentRoute.onBeforeEnter&&e.currentRoute.onBeforeEnter(e.currentParams)}).then(function(){e.currentRoute&&e.currentRoute.onEnter&&e.currentRoute.onEnter(e.currentParams)})}},n.default=r},{}],13:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){for(var e=document.querySelectorAll("canvas"),t=0;t<e.length;t++)r.set(e[t],Skycons[e[t].className.toUpperCase().replace(/-/g,"_")])};var r=new Skycons;!function(){for(var e=document.querySelectorAll("canvas"),t=0;t<e.length;t++)r.add(e[t],Skycons[e[t].className.toUpperCase().replace(/-/g,"_")]);r.play()}()},{}],14:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=e("./request");var o=(0,((r=a)&&r.__esModule?r:{default:r}).default)("http://ip-api.com/json").then(function(e){return{latitude:e.lat,longitude:e.lon}});n.default=o},{"./request":11}]},{},[6]);