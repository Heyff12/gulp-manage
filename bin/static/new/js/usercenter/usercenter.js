/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
"use strict";function hideMenu(){WeixinJSBridge.call("hideOptionMenu"),WeixinJSBridge.call("hideToolbar")}function get_dl(){console.log(dl_data_set);var e=dl_data_set.size,a=["20160922004499345678","20160922004499345692","20160922004499345699","20160922004499345694","20160922004499345695","20160922004499345696","20160922004499345697","20160922004499345690","20160922004499345698","20160922004499345699","20160922004499345992"],t=(10*Math.random()).toFixed(0),s=[a[t]];console.log(t),dl_data_set.add(a[t]);var r=dl_data_set.size;if(r===e)return console.log("相同"+dl_data_set+"____"+s),!1;console.log("不同"+dl_data_set+"____"+s);var d='<dl class="js_datadl" data-bizsn="'+a[t]+'"><dt>-48.00</dt><dd>储值消费</dd><dd class="grey">2016-08-10 15:06:55</dd><div class="clearfix"></div></dl>';$("#js_diff_get").append(d)}function get_rechargelist(){$.ajax({url:"/prepaid/v1/api/transactions",type:"GET",dataType:"json",data:{c:get_hash("c"),h:get_hash("h"),pos:$("#js_pos").val(),count:20},beforeSend:function(){$("#loading").show(),$(".zheceng").show()},success:function(e){if("0000"!=e.respcd)$("#alert_alert").show(),$(".zheceng").show(),e.respmsg?$("#alert_alert .alert_con_br").html(e.respmsg):$("#alert_alert .alert_con_br").html(e.resperr);else{var a=e.data;$(a).each(function(e,t){for(var s,r,d,l=$(".js_datadl").map(function(){return $(this).attr("data-bizsn")}).get(),n=l.length,c=((a[e].txamt/100).toFixed(2),(a[e].pay_amt/100).toFixed(2)),i=(a[e].present_amt/100).toFixed(2),o=(a[e].pay_amt/100).toFixed(0),_=(a[e].present_amt/100).toFixed(0),h=a[e].sysdtm,p=a[e].biz_type,g=a[e].biz_sn,u="0",e=n-1;e>0;e--)if(l[e]==g){u="1";break}return"1"==u||("1"==p?(s="储值",r="+"+c,d='<dl class="js_datadl" data-bizsn="'+g+'"><dt class="orange">+'+i+'</dt><dd>储值赠送<span class="buy_back orange">储值'+o+"送"+_+'</span></dd><dd class="grey">'+h+'</dd><div class="clearfix"></div></dl><dl><dt class="orange">'+r+"</dt><dd>"+s+'</dd><dd class="grey">'+h+'</dd><div class="clearfix"></div></dl>'):(s="储值消费",r="-"+c,d='<dl class="js_datadl" data-bizsn="'+g+'"><dt>'+r+"</dt><dd>"+s+'</dd><dd class="grey">'+h+'</dd><div class="clearfix"></div></dl>'),void $("#js_diff_get").append(d))});var t=$("#js_pos").val()-0;a.length<20?($("#alert_alert").show(),$("#alert_alert .alert_con_br").html("数据已加载完毕"),$(".zheceng1").show(),$(".js_click_more").hide()):($(".js_click_more").show(),t+=20,$("#js_pos").val(t)),$(".zheceng").hide()}},error:function(e){$("#alert_alert").show(),$(".zheceng").show(),$("#alert_alert .alert_con_br").html("网络超时!")},complete:function(){$("#loading").hide()}})}function get_rechargelist_set(){$.ajax({url:"/prepaid/v1/api/transactions",type:"GET",dataType:"json",data:{c:get_hash("c"),h:get_hash("h"),pos:$("#js_pos").val(),count:20},beforeSend:function(){$("#loading").show(),$(".zheceng").show()},success:function(e){if("0000"!=e.respcd)$("#alert_alert").show(),$(".zheceng").show(),e.respmsg?$("#alert_alert .alert_con_br").html(e.respmsg):$("#alert_alert .alert_con_br").html(e.resperr);else{var a=e.data;$(a).each(function(e,t){var s,r,d,l=((a[e].txamt/100).toFixed(2),(a[e].pay_amt/100).toFixed(2)),n=(a[e].present_amt/100).toFixed(2),c=a[e].sysdtm,i=a[e].biz_type,o=a[e].biz_sn,_=dl_data_set.size;dl_data_set.add(o);var h=dl_data_set.size;return h!==_&&("1"==i?(s="储值",r="+"+l,d='<dl class="js_datadl" data-bizsn="'+o+'"><dt class="orange">+'+n+'</dt><dd>储值赠送<span class="buy_back orange">储值'+l+"送"+n+'</span></dd><dd class="grey">'+c+'</dd><div class="clearfix"></div></dl><dl><dt class="orange">'+r+"</dt><dd>"+s+'</dd><dd class="grey">'+c+'</dd><div class="clearfix"></div></dl>'):(s="储值消费",r="-"+l,d='<dl class="js_datadl" data-bizsn="'+o+'"><dt>'+r+"</dt><dd>"+s+'</dd><dd class="grey">'+c+'</dd><div class="clearfix"></div></dl>'),void $("#js_diff_get").append(d))});var t=$("#js_pos").val()-0;a.length<20?($("#alert_alert").show(),$("#alert_alert .alert_con_br").html("数据已加载完毕"),$(".zheceng").show(),$(".js_click_more").hide()):($(".js_click_more").show(),t+=20,$("#js_pos").val(t)),$(".zheceng").hide()}},error:function(e){$("#alert_alert").show(),$(".zheceng").show(),$("#alert_alert .alert_con_br").html("网络超时!")},complete:function(){$("#loading").hide()}})}function get_rechargelist(){$.ajax({url:"/prepaid/v1/api/transactions",type:"GET",dataType:"json",data:{c:get_hash("c"),h:get_hash("h"),pos:$("#js_pos").val(),count:20},beforeSend:function(){$("#loading").show(),$(".zheceng").show()},success:function(e){if("0000"!=e.respcd)$("#alert_alert").show(),$(".zheceng").show(),e.respmsg?$("#alert_alert .alert_con_br").html(e.respmsg):$("#alert_alert .alert_con_br").html(e.resperr);else{var a=e.data;$(".js_datadl").map(function(){return $(this).attr("data-bizsn")}).get();$(a).each(function(e,t){var s,r,d,l=((a[e].txamt/100).toFixed(2),(a[e].pay_amt/100).toFixed(2)),n=(a[e].present_amt/100).toFixed(2),c=a[e].sysdtm,i=a[e].biz_type,o=a[e].biz_sn,_=dl_data_set.size;dl_data_set.add(o);var h=dl_data_set.size;return h!==_&&("1"==i?(s="储值",r="+"+l,d='<dl class="js_datadl" data-bizsn="'+o+'"><dt class="orange">+'+n+'</dt><dd>储值赠送<span class="buy_back orange">储值'+l+"送"+n+'</span></dd><dd class="grey">'+c+'</dd><div class="clearfix"></div></dl><dl><dt class="orange">'+r+"</dt><dd>"+s+'</dd><dd class="grey">'+c+'</dd><div class="clearfix"></div></dl>'):(s="储值消费",r="-"+l,d='<dl class="js_datadl" data-bizsn="'+o+'"><dt>'+r+"</dt><dd>"+s+'</dd><dd class="grey">'+c+'</dd><div class="clearfix"></div></dl>'),void $("#js_diff_get").append(d))});var t=$("#js_pos").val()-0;a.length<20?($("#alert_alert").show(),$("#alert_alert .alert_con_br").html("数据已加载完毕"),$(".zheceng").show(),$(".js_click_more").hide()):($(".js_click_more").show(),t+=20,$("#js_pos").val(t)),$(".zheceng").hide()}},error:function(e){$("#alert_alert").show(),$(".zheceng").show(),$("#alert_alert .alert_con_br").html("网络超时!")},complete:function(){$("#loading").hide()}})}function get_rechargedetail(){var e=get_hash("h");$.ajax({url:"/prepaid/v1/api/c/merchants/"+e,type:"GET",dataType:"json",data:{c:get_hash("c")},beforeSend:function(){$("#loading").show(),$(".zheceng").show()},success:function(e){if("0000"!=e.respcd)$("#alert_alert").show(),$(".zheceng").show(),e.respmsg?$("#alert_alert .alert_con_br").html(e.respmsg):$("#alert_alert .alert_con_br").html(e.resperr);else{var a=e.data,t=(a.balance/100).toFixed(2),s=a.pay_url,r=a.recharge_url,d=a.prepaid_detail,l=a.merchant_name,n=a.expired;document.title=l,$(".js_detail_price").text(t),$(".js_charge_list").attr("href",d),$(".js_detail_buy").attr("href",r),$(".js_detail_pay").attr("href",s),"0"!=n?$(".js_detail_buy").hide():$(".js_detail_buy").show(),$(".zheceng").hide()}},error:function(e){$("#alert_alert").show(),$(".zheceng").show(),$("#alert_alert .alert_con_br").html("网络超时!")},complete:function(){$("#loading").hide()}})}function get_rule_detail(){$.ajax({url:"/prepaid/v1/api/c/rulexplain",type:"GET",dataType:"json",data:{c:get_hash("c"),h:get_hash("h")},beforeSend:function(){$("#loading").show(),$(".zheceng1").show()},success:function(e){if("0000"!=e.respcd)$("#alert_alert").show(),$(".zheceng1").show(),e.respmsg?$("#alert_alert .alert_con_br").html(e.respmsg):$("#alert_alert .alert_con_br").html(e.resperr);else{for(var a=e.data,t=a.length,s=0;s<t;s++){var r="<li><span>"+a[s]+"</span></li>";$(".js_ul_rules").append(r)}$(".zheceng1").hide()}},error:function(e){$("#alert_alert").show(),$(".zheceng1").show(),$("#alert_alert .alert_con_br").html("网络超时!")},complete:function(){$("#loading").hide()}})}function get_rechargeli_c(){$.ajax({url:"/prepaid/v1/api/c/merchants",type:"GET",dataType:"json",data:{c:get_hash("c")},beforeSend:function(){$("#loading").show(),$(".zheceng").show()},success:function(e){if("0000"!=e.respcd)$("#alert_alert").show(),$(".zheceng").show(),e.respmsg?$("#alert_alert .alert_con_br").html(e.respmsg):$("#alert_alert .alert_con_br").html(e.resperr);else{var a=e.data,t=a.length;if($(".js_company_num").text(t),"0"==t)return $(".zheceng").hide(),!1;$(a).each(function(e,t){var s=(a[e].max_cashback_amt/100).toFixed(0),r=(a[e].balance/100).toFixed(2),d=a[e].merchant_name,l=a[e].merchant_url,n=a[e].recharge_url,c=(a[e].pay_url,a[e].prepaid_detail,'<li data-url="'+l+'"><header><span class="js_company_name">'+d+'</span></header><p class="grey">储值余额</p><p class="price orange">￥<span class="js_company_diff">'+r+'</span></p><dl class="company_dl"><dt><i class="sale"></i>最高返现金额达<span class="js_company_sale">'+s+'</span>元</dt><dd class="js_recharge_now"><a href="'+n+'">立即储值</a></dd><div class="clearfix"></div></dl><span class="bg_img"></span><span class="zhe"></span></li>');$(".js_usercenter_ul").append(c)}),$(".zheceng").hide()}},error:function(e){$("#alert_alert").show(),$(".zheceng").show(),$("#alert_alert .alert_con_br").html("网络超时!")},complete:function(){$("#loading").hide()}})}function get_hash(e){var a;if(location.href.split("?").length<2)return!1;for(var t=location.href.split("?")[1].split("&"),s=t.length,r=0;r<s;r++){var d=t[r].split("=");if(d[0]==e)return a=d[1]}}function now_date(){var e=new Date,a=e.getFullYear(),t=tow_num(e.getMonth()+1),s=tow_num(e.getDate()),r=tow_num(e.getHours()),d=tow_num(e.getMinutes()),l=tow_num(e.getSeconds()),n=a+"-"+t+"-"+s+" "+r+":"+d+":"+l;return n}function tow_num(e){var a="0"+e,t=a.substr(-2,2);return t}function alert_top(e){var a=$(e).height(),t=a/2;$(e).css("marginTop",-t+"px")}"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",hideMenu,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",hideMenu),document.attachEvent("onWeixinJSBridgeReady",hideMenu)):hideMenu(),$(".js_usercenter_index").get(0)&&~function(){$(document).ready(function(){$(".js_usercenter_ul li header").on("click",function(){var e=$(this).parents("li").attr("data-url");location.href=e}),$(".js_usercenter_ul li .zhe").on("click",function(){var e=$(this).parents("li").attr("data-url");location.href=e})})}(),$(".js_usercenter_detail").get(0)&&~function(){$(document).ready(function(){})}();var dl_data=$(".js_datadl").map(function(){return $(this).attr("data-bizsn")}),dl_data_set=new Set(dl_data.get(0));$(".js_usercenter_list").get(0)&&~function(){$(document).ready(function(){}),$(".js_click_more").on("click",function(){get_dl()})}(),$(".js_alert_con_close").on("click",function(){$(".alert_con").hide(),$(".zheceng").hide(),$(".zheceng1").hide()});