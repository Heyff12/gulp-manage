/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
require(["../require-config"],function(){require(["zepto","ajax_rule"],function($,i){$(function(){function n(i){var n=i.playbill,t=i.tbcard,e=i.tbpaster;$(".js_haibao").find("img").attr("src",n),$(".js_zhuotie").find("img").attr("src",e),$(".js_zhuotieb").find("img").attr("src",t)}$(document).ready(function(){i.ajax_rule("/prepaid/v1/api/b/materials","GET","json","",".zheceng",n)}),$(".js_section_ul").on("click","li",function(){var i=$(this).index();$(this).addClass("tab").siblings("li").removeClass("tab"),$(".js_section_index").eq(i).show().siblings(".js_section_index").hide()}),$(".js_emailpic_sub").on("click",function(){location.href=location.protocol+"//"+location.host+"/prepaid/v1/page/b/down_material.html"})})})});