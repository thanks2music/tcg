!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";!function(e){var t=e("body");if(t.hasClass("single")){var n=t.find(".foogallery-container");if(n.length){n.wrap('<div class="re-gallery">');var r=n.find("a");r.length&&r.each(function(){var t=e(this).attr("data-caption-title"),n=e(this)[0].children,r=n[0].naturalWidth+"x"+n[0].naturalHeight,i=String(r);e(this).attr("data-size",i),e(this).wrap("<figure>"),e(this).after("<figcaption>"+t)})}}}(jQuery),function(e){for(var t=function(e){for(var t,n,r,i,a=e.childNodes,o=a.length,l=[],u=0;u<o;u++)1===(t=a[u]).nodeType&&(r=(n=t.children[0]).getAttribute("data-size").split("x"),i={src:n.getAttribute("href"),w:parseInt(r[0],10),h:parseInt(r[1],10)},t.children.length>1&&(i.title=t.children[1].innerHTML),n.children.length>0&&(i.msrc=n.children[0].getAttribute("src")),i.el=t,l.push(i));return l},n=function e(t,n){return t&&(n(t)?t:e(t.parentNode,n))},r=function(e,n,r,i){var a,o,l=document.querySelectorAll(".pswp")[0];if(o=t(n),a={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=o[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,r=t.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}}},i)if(a.galleryPIDs){for(var u=0;u<o.length;u++)if(o[u].pid==e){a.index=u;break}}else a.index=parseInt(e,10)-1;else a.index=parseInt(e,10);isNaN(a.index)||(r&&(a.showAnimationDuration=0),new PhotoSwipe(l,PhotoSwipeUI_Default,o,a).init())},i=document.querySelectorAll(e),a=0,o=i.length;a<o;a++)i[a].setAttribute("data-pswp-uid",a+1),i[a].onclick=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var t=e.target||e.srcElement,i=n(t,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});if(i){for(var a,o=i.parentNode,l=i.parentNode.childNodes,u=l.length,s=0,c=0;c<u;c++)if(1===l[c].nodeType){if(l[c]===i){a=s;break}s++}return a>=0&&r(a,o),!1}};var l=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),r=0;r<n.length;r++)if(n[r]){var i=n[r].split("=");i.length<2||(t[i[0]]=i[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t}();l.pid&&l.gid&&r(l.pid,i[l.gid-1],!0,!0)}(".re-gallery")}]);