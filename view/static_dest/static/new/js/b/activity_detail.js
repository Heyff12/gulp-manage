/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
"use strict";require(["../require-config"],function(){require(["zepto","yanzheng","close_tip"],function($,i,a){$(function(){function i(){var i,a='<li class="js_datadl" data-bizsn=""><dl><dt><img src="../../bin/static/img/ic_shop_round@3x.png"></dt><dd>储值赠送<span class="buy_back orange">储值50送5</span></dd><dd class="grey">2016-08-10 15:06:55</dd><div class="clearfix"></div></dl><span class="history_num">￥<i class="i_normal">5</i></span><div class="clearfix"></div></li>',s='<li class="js_datadl" data-bizsn=""><dl><dt><img src="../../bin/static/img/wxchar.png"></dt><dd>储值赠送<span class="buy_back orange">储值50送5</span></dd><dd class="grey">2016-08-10 15:06:55</dd><div class="clearfix"></div></dl><span class="history_num">￥<i class="i_normal">5</i></span><div class="clearfix"></div></li>';"1"==n?(i=a,n=0):(i=s,n=1);for(var t=0;t<20;t++)$(".js_ul_history").append(i);$(".load").hide(),d=!0,o=Math.floor($("body").height()).toFixed(0)}var s=null,d=!1,n=1,t=window.innerHeight,o=$("body").height();$(".js_datadl").map(function(){return $(this).attr("data-bizsn")});$(".js_activity_detail").get(0)&&~function(){$(document).ready(function(){i()}),$(window).on("scroll",function(a){var n=document.documentElement.scrollTop||document.body.scrollTop;n<o-t?clearTimeout(s):d&&(a.stopPropagation(),$(".load").show(),d=!1,s=window.setTimeout(i,3e3))})}(),a.close_tip()})})});
//# sourceMappingURL=../maps/js/b/activity_detail.js.map
