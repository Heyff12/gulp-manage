/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
"use strict";function hideMenu(){WeixinJSBridge.call("hideOptionMenu"),WeixinJSBridge.call("hideToolbar")}"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",hideMenu,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",hideMenu),document.attachEvent("onWeixinJSBridgeReady",hideMenu)):hideMenu(),require(["../require-config"],function(){require(["zepto","ajax_rule"],function($,e){$(function(){function n(e){var n=e.shopname;$(".js_shopname").text(n)}function i(n){var i=n.recharge;if("0"==i);else{var a={c:r("c")};e.ajax_rule(" /prepaid/v1/api/c/bindinfo","GET","json",a,".zheceng1",t)}}function t(e){var n=e.mobile;$(".js_mobile").text(n)}function r(e){var n;if(location.href.split("?").length<2)return!1;for(var i=location.href.split("?")[1].split("&"),t=i.length,r=0;r<t;r++){var a=i[r].split("=");if(a[0]==e)return n=a[1]}}$(document).ready(function(){var t={h:r("h")};e.ajax_rule("/prepaid/v1/api/c/merchant_info","GET","json",t,".zheceng",n);var a={c:r("c"),h:r("h"),o:r("o"),grid_index:"1"};e.ajax_rule("/prepaid/v1/api/c/recharge/before","GET","json",a,".zheceng2",i)})})})});
//# sourceMappingURL=../maps/js/recharge/protol.js.map
