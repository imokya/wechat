!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WechatShare=t():e.WechatShare=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=Object.assign||function(){for(var e=[].slice.call(arguments),t=e.shift(),n=0;n<e.length;n++){var o=e[n];for(var r in o)t[r]=o[r]}return t},r=function(e){var t=new XMLHttpRequest;t.onload=function(){if(200===this.status){var t=JSON.parse(this.response);e.success&&e.success(t)}},t.onerror=function(){e.error&&e.error()},t.open(e.type,e.url,!0),t.setRequestHeader("Content-Type","application/x-www-form-urlencoded");var n=a(e.data);t.send(n)},i=function(e){var t={trigger:!0};o(t,e);var n=document.createElement("script");n.onload=function(){t.trigger&&t.success&&t.success(),t.removeOnLoad&&document.body.removeChild(n)},n.onerror=function(){t.error&&t.error()};var r=a(t.data),i=t.data?t.url+"?"+r:t.url;n.src=i,document.body.appendChild(n)},a=function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t.split("&").slice(0,-1).join("&")},u={ajax:function(e){if(e.jsonp){var t="Xing"+ +new Date;e.trigger=!1,e.removeOnLoad=!0,e.data.callback=t,window[t]=function(n){e.success&&e.success(n),window[t]=null},i(e)}else r(e)},loadScript:i},c={apiURL:"//www.xintea.cn/sdk/api.php",wxURL:"//res.wx.qq.com/open/js/jweixin-1.4.0.js"},s=function(){function e(e){var t={apiURL:c.apiURL,wxURL:c.wxURL,url:encodeURIComponent(location.href.split("#")[0]),debug:!1,type:"post",jsonp:!0,data:{link:location.href,title:"",desc:"",imgUrl:"",success:null,cancel:null,fail:null,complete:null}};this.config=o({},t,e),this.init()}return e.prototype.init=function(){var e=this;u.loadScript({url:this.config.wxURL,success:function(){e.initShare()}})},e.prototype.initShare=function(){var e=this;u.ajax({url:this.config.apiURL,type:this.config.type,data:{url:this.config.url},jsonp:this.config.jsonp,success:function(t){e.initData(t)}})},e.prototype.initData=function(e){var t=this;wx&&(wx.config({debug:this.config.debug,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareWeibo"]}),wx.ready((function(){wx.updateAppMessageShareData(t.config.data),wx.updateTimelineShareData(t.config.data),wx.onMenuShareWeibo(t.config.data)})))},e.prototype.shareToFriend=function(e){var t=o({},this.config.data,e);wx.updateAppMessageShareData(t)},e.prototype.shareToTimeline=function(e){var t=o({},this.config.data,e);wx.updateTimelineShareData(t)},e.prototype.shareToWeibo=function(e){var t=o({},this.config.data,e);wx.onMenuShareWeibo(t)},e}();t.default=s}]).default}));