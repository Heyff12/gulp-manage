/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
"use strict";require(["../require-config"],function(){require(["jquery","yanzheng","ajaxps","date"],function($,e,s,n){$(function(){s.get_rule_detail();var _=$("#hidden").val();"1"==_?($(".js_li_none").show(),$(".js_li_show").hide()):($(".js_li_none").hide(),$(".js_li_show").show()),$(".js_recharge_index").get(0)&&~function(){$(document).ready(function(){}),n.date(),$(document).on("click",".js_rechage_ul li",function(){$(this).addClass("li_choose").siblings("li").removeClass("li_choose")}),$(".js_content_sub").on("click",function(){$("#alert_message").show(),e.alert_top("#alert_message"),$(".zheceng").show()}),$(".js_alert_message").on("click",function(){var s=$(".js_hidden_first").val();$(".js_message_name").val(),$(".js_message_tel").val(),$(".js_message_birth").val();"1"==s?e.birth_test(".js_message_birth",-1,20):(e.tel_test(".js_message_tel"),e.china_test(".js_message_name",1,4),e.birth_test(".js_message_birth",-1,20));var n=$(".border_red").length;if(n>0)return!1})}(),$(".js_alert_con_close").on("click",function(){$(".alert_con").hide(),$(".zheceng").hide(),$(".zheceng1").hide(),$(".zheceng2").hide()})})})});
//# sourceMappingURL=../maps/js/recharge/recharge_rold.js.map
