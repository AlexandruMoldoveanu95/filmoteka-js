!function(){var e,t,n,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},i=r.parcelRequirefb50;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},r.parcelRequirefb50=i);var u=i("i7mVp"),s=i("4tSb9");i("1RLhk");var c=i("l4SeJ"),l=i("1KhuP"),d=i("dJUdQ"),f=i("kvC6y"),u=i("i7mVp"),s=i("4tSb9"),c=i("l4SeJ"),l=i("1KhuP"),d=i("dJUdQ"),p=i("5xtVg");document.querySelector(".number-buttons");var h=document.getElementById("numberButtonsContainer"),v=1;function m(e){var t=document.createElement("button");return t.innerText=e,t.classList.add("pagination__button"),t.setAttribute("data-page",e),t}!function(e,t){if(t.innerHTML="",v<5){for(var n=2;n<=6;n++){var r=m(n-1);v===n-1&&r.classList.add("active"),t.appendChild(r)}y(),E(),v!==e&&t.appendChild(m(e))}else if(v>=3&&v<e){t.appendChild(m(1)),y(),E();for(var a=v;a<=v+1;a++){var o=m(a);t.appendChild(o)}y(),E(),v!==e&&t.appendChild(m(e))}}(1,h);var b=1;function g(){var e=b,t=e+5-1;document.querySelectorAll(".number-buttons .pagination__button").forEach(function(e){h.removeChild(e)});for(var n=e;n<=t;n++)!function(e){var t=m(e);h.appendChild(t),t.addEventListener("click",function(){_(t.getAttribute("data-page"))})}(n)}function y(){var e=document.createElement("button");e.innerText="►",e.classList.add("next-btn"),e.disabled=!1,e.addEventListener("click",function(){b+=5,g()});var t=document.getElementById("numberButtonsContainer");t.parentNode.insertBefore(e,t.nextSibling)}function E(){var e=document.createElement("button");e.innerText="◄",e.classList.add("prev-btn"),e.disabled=!1,e.addEventListener("click",function(){(b-=5)<1&&(b=1),g()});var t=document.getElementById("numberButtonsContainer");t.parentNode.insertBefore(e,t)}g();var _=(e=(0,u._)(function(e){var t,n,r,a,o=arguments;return(0,s.__generator)(this,function(i){switch(i.label){case 0:t=o.length>1&&void 0!==o[1]&&o[1],n=o.length>2&&void 0!==o[2]?o[2]:"",i.label=1;case 1:return i.trys.push([1,7,,8]),[4,(0,c.fetchGenreList)()];case 2:if(r=i.sent(),!t)return[3,4];return[4,(0,d.fetchMovies)(n,e)];case 3:return a=i.sent(),[3,6];case 4:return[4,(0,d.fetchPopularMovies)(e)];case 5:a=i.sent(),i.label=6;case 6:return(0,l.handleResponse)(a,t,r),[3,8];case 7:return console.error("Error",i.sent()),[3,8];case 8:return[2]}})}),function(t){return e.apply(this,arguments)});(0,d.fetchPopularMovies)(v).then(function(e){(0,l.markupGalleryItem)(e.results),L(v=localStorage.getItem("currentPage"),e.total_pages),(0,p.openModal)(e)}).catch(function(e){return console.log(e)}).finally(function(){});var L=document.querySelectorAll(".pagination__button");L.forEach(function(e){e.addEventListener("click",function(){_(e.dataset.page,"true"===e.dataset.search,"")})});var p=i("5xtVg"),u=i("i7mVp"),s=i("4tSb9"),d=i("dJUdQ"),l=i("1KhuP"),c=i("l4SeJ"),p=i("5xtVg"),x=document.querySelector("#form__search"),C=document.querySelector("#searchError"),S=1,M="",w=[];x.addEventListener("submit",(t=(0,u._)(function(e){var t,n;return(0,s.__generator)(this,function(r){switch(r.label){case 0:if(e.preventDefault(),""===(t=x.querySelector('[name="searchQuery"]').value))return C.textContent="Please write something",[2];C.textContent="",M!==t&&(M=t,S=1,q()),r.label=1;case 1:return r.trys.push([1,4,,5]),[4,(0,d.fetchMovies)(M,S)];case 2:return n=r.sent(),[4,(0,c.fetchGenreList)()];case 3:return w=r.sent(),(0,l.handleResponse)(n,!1,w),(0,p.initializeModal)(),1!==S||n.results.length||(C.textContent="Search result not successful. Enter the correct movie name."),x.reset(),[3,5];case 4:return console.error(r.sent()),C.textContent="Error occurred. Please try again later.",[3,5];case 5:return[2]}})}),function(e){return t.apply(this,arguments)}));var q=function(){var e=document.querySelector(".gallery");e&&(e.innerHTML="")},P=function(){(0,l.getGalleryElement)()};(n=(0,u._)(function(){var e,t;return(0,s.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),_(1),[4,(0,c.fetchGenreList)()];case 1:return e=n.sent(),[4,(0,d.fetchPopularMovies)(1)];case 2:return t=n.sent(),(0,l.handleResponse)(t,!0,e),(0,p.initializeModal)(),(0,f.showLoader)(),(0,f.hideLoader)(),[3,4];case 3:return console.error("Error",n.sent()),[3,4];case 4:return P(),[2]}})}),function(){return n.apply(this,arguments)})()}();
//# sourceMappingURL=index.a78777b8.js.map