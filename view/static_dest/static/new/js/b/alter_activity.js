/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
"use strict";function delete_rule(e){var t=$(".js_rule dd").length-0;2==t&&($(e).parents("dd").remove(),$(".js_rule dd i.js_ruledelete").remove()),$(e).parents("dd").remove(),$(".js_rule_error").removeClass("span_tips"),$(".js_add_activity").find(".add_rule").css("display","inline-block"),$(".js_add_activity").find(".add_rule_no").css("display","none")}require(["../require-config"],function(){require(["zepto","yanzheng","ajax_rule","localstorage","iosselect","date_get","alert_word"],function($,e,t,s,a,i,n){$(function(){function r(){var e=$(".js_startime"),t=$(".js_endtime"),s='<i class="ic_tips"></i>';if(e.val()&&t.val()){var a=e.attr("data-year"),i=e.attr("data-month"),n=e.attr("data-day"),r=t.attr("data-year"),d=t.attr("data-month"),l=t.attr("data-day"),o=a+"/"+i+"/"+n+" 00:00:00",u=r+"/"+d+"/"+l+" 23:59:59",c=new Date(o).getTime(),m=new Date(u).getTime(),p=new Date(_).getTime();if(!e.hasClass("grey")){if(c-p<0)return $(".js_timetips").addClass("error_tips").find("span").html(s+"开始不能比今天早"),!1;$(".js_timetips").removeClass("error_tips").find("span").html("")}m-c>31536e6?$(".js_timetips").addClass("error_tips").find("span").html(s+"时间范围在365天之内"):m-c>=0?$(".js_timetips").removeClass("error_tips").find("span").html(""):$(".js_timetips").addClass("error_tips").find("span").html(s+"结束时间不能比开始时间早")}else $(".js_timetips").addClass("error_tips").find("span").html(s+"时间范围在365天之内")}function d(e){var t=e.countdown_day;t>0?($(".js_startime").removeAttr("disabled").removeClass("grey"),$(".js_tel").removeAttr("disabled").removeClass("grey")):($(".js_startime").attr("disabled","disabled").addClass("grey"),$(".js_tel").attr("disabled","disabled").addClass("grey"));var s=e.rules,a=e.merchant_name,i=e.info,n=i.start_time,r=i.end_time,d=i.mch_mobile,o=i.desc;$(".js_shopname").val(a),$(".js_tel").val(d),$(".js_endtime").focus(),$(".js_note").val(o);var _=o.length-0;$(".js_wordtip span").text(40-_);var u=n.substr(0,10),c=u.split("-");u&&($(".js_startime").data("year",c[0]),$(".js_startime").data("month",l(c[1])),$(".js_startime").data("day",l(c[2])),$(".js_startime").val(l(c[1])+"月"+l(c[2])+"日"),$("#startime").val(c[0]+"-"+l(c[1])+"-"+l(c[2])));var m=r.substr(0,10),p=m.split("-");if(m&&($(".js_endtime").data("year",p[0]),$(".js_endtime").data("month",l(p[1])),$(".js_endtime").data("day",l(p[2])),$(".js_endtime").val(l(p[1])+"月"+l(p[2])+"日"),$("#endtime").val(p[0]+"-"+l(p[1])+"-"+l(p[2]))),!s)return!1;for(var j=0;j<s.length;j++){var h,v=(s[j].pay_amt/100).toFixed(0),f=(s[j].present_amt/100).toFixed(0),y=s[j].grid_index;h=t>0?'<dd data-index="'+y+'">储值<input class="text text_short js_chu js_storule" type="tel" value="'+v+'" name="chu" />元送<input class="text text_short js_song js_storule" type="tel" value="'+f+'" name="song" />元<i class="delete js_ruledelete" onclick="delete_rule(this)"></i></dd>':'<dd data-index="'+y+'">储值<input class="text text_short js_chu js_storule" type="tel" value="'+v+'" name="chu" />元送<input class="text text_short js_song js_storule" type="tel" value="'+f+'" name="song" />元</dd>',$(".js_rule").append(h)}return t>0?($(".js_storule").removeAttr("disabled").removeClass("grey"),$(".js_add_activity").attr("data-click","1"),s.length<=1&&$(document).find(".js_rule dd").eq(0).find("i.js_ruledelete").remove(),void(s.length>=4?($(".js_rule").find(".add_rule").css("display","none"),$(".js_rule").find(".add_rule_no").css("display","inline-block")):($(".js_rule").find(".add_rule").css("display","inline-block"),$(".js_rule").find(".add_rule_no").css("display","none")))):($(".js_storule").attr("disabled","disabled").addClass("grey"),$(".js_add_activity").attr("data-click","0"),$(".js_rule").find(".add_rule").css("display","none"),$(".js_rule").find(".add_rule_no").css("display","inline-block"),!1)}function l(e){return e<10?e.substr(-1):e}function o(e){$(".js_shopname").val(e)}var _=i.nowYear+"/"+i.nowMonth+"/"+i.nowDate+" 00:00:00";$(document).ready(function(){n.toast_data_short("body","金额需大于0且不超过2000");t.ajax_rule("/prepaid/v1/api/b/merchant_info","GET","json","",".zheceng",o),t.ajax_rule("/prepaid/v1/api/b/cur_activity","GET","json","",".zheceng1",d)}),$(".js_startime").on("click",function(){var e=document.querySelector(".js_startime"),t=e.dataset.year,s=e.dataset.month,n=e.dataset.day;new a(3,[i.yearData,i.monthData,i.dateData],{container:".ios_select_container",title:"选择开始时间",itemHeight:50,itemShowCount:3,relation:[1,1,0,0],oneLevelId:t,twoLevelId:s,threeLevelId:n,callback:function(t,s,a){e.dataset.year=t.id,e.dataset.month=s.id,e.dataset.day=a.id,e.value=s.id+"月"+a.id+"日",$("#startime").val(t.id+"-"+s.id+"-"+a.id)}})}),$(".js_endtime").on("click",function(){var e=document.querySelector(".js_endtime"),t=e.dataset.year,s=e.dataset.month,n=e.dataset.day;new a(3,[i.yearData,i.monthData,i.dateData],{container:".ios_select_container",title:"选择结束时间",itemHeight:50,itemShowCount:3,relation:[1,1,0,0],oneLevelId:t,twoLevelId:s,threeLevelId:n,callback:function(t,s,a){e.dataset.year=t.id,e.dataset.month=s.id,e.dataset.day=a.id,e.value=s.id+"月"+a.id+"日",$("#endtime").val(t.id+"-"+s.id+"-"+a.id)}})}),$(".js_add_activity").on("click",function(){if("1"!=$(this).attr("data-click"))return!1;var e=$(".js_rule dd").length-0,t='<dd data-index="">储值<input class="text text_short js_chu js_storule" type="tel" value="" name="pay_amt" />元送<input class="text text_short js_song js_storule" type="tel" value="" name="present_amt" />元<i class="delete js_ruledelete" onclick="delete_rule(this)"></i></dd>';e<=3?(1==e&&$(".js_rule dd").append('<i class="delete js_ruledelete" onclick="delete_rule(this)"></i>'),3==e&&($(this).find(".add_rule").css("display","none"),$(this).find(".add_rule_no").css("display","inline-block")),$(".js_rule").append(t),$(".js_rule_error").removeClass("span_tips")):$(".js_rule_error").addClass("span_tips")}),$(document).on("input",".js_storule",function(){var e=$(this).val(),t=e.replace(/[^\d]/g,"");if(0==t.length)return $(this).val(""),!1;if(1==t.length&&"0"==t)return $(this).val(""),!1;var s=t.split(".")[0],a=s.substr(0,1);if("0"==a&&(s=s.substr(1)),s.length>4&&(s=s.substr(0,4)),t.split(".").length>1){var i=t.split(".")[1].substr(0,2);t=s-0+"."+i}else t=s-0;$(this).val(t)}),$(".js_note").on("input",function(){var e=$(this).val(),t=e.length-0;return t<=40&&void $(".js_wordtip").find("span").text(40-t)}),(window.navigator.appVersion.match(/iphone/gi)||/Mac OS X/i.test(navigator.userAgent))&&($(".js_note").on({focus:function(){$(".section_footer").hide()},blur:function(){$(".section_footer").show()}}),$(".js_tel").on({focus:function(){$(".section_footer").hide()},blur:function(){$(".section_footer").show()}}),$(document).on("focus",".js_storule",function(){$(".section_footer").hide()}),$(document).on("blur",".js_storule",function(){$(".section_footer").show()})),$(".js_addactivity_sub").on("click",function(){e.tel_activity(".js_tel"),e.name_test(".js_note",0,40),r(),$(".js_storule").each(function(){e.numprice_test(this,0,4,2e3)}),$(".js_storule").each(function(){if($(this).hasClass("error_tips"))return n.alert_word_show_short(),!1});var t=$(".error_tips").length;if(t>0)return!1;s.set_storage();for(var a=[],i=$(".js_rule dd").length,d=0;d<i;d++){var l=$(".js_rule dd").eq(d),o=(l.find(".js_chu").attr("name"),l.find(".js_chu").val()),_=(l.find(".js_song").attr("name"),l.find(".js_song").val()),u={grid_index:d+1,pay_amt:100*o,present_amt:100*_};a.push(u)}s.setone_storage("rules",JSON.stringify(a)),location.href=location.protocol+"//"+location.host+"/prepaid/v1/page/b/activity_preview.html?edit=mend"})})})});
//# sourceMappingURL=../maps/js/b/alter_activity.js.map
