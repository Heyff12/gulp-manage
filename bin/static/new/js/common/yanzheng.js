/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(function(){function e(e){var t;if(location.href.split("?").length<2)return!1;for(var r=location.href.split("?")[1].split("&"),a=r.length,s=0;s<a;s++){var n=r[s].split("=");if(n[0]==e)return t=n[1]}}function t(e,t,r){var a=$(e).val(),s=new RegExp("^[一-龥]{"+t+","+r+"}$");s.test(a)?$(e).removeClass("border_red"):$(e).addClass("border_red")}function r(e){var t=$(e).val(),r=/^1[0-9]{10}$/;r.test(t)?$(e).removeClass("border_red"):$(e).addClass("border_red")}function a(e){var t=$(e).val(),r=/^[a-zA-Z0-9_\-\'\.]+@[a-zA-Z0-9_]+(\.[a-z]+){1,2}$/;r.test(t)?$(e).removeClass("error_tips"):$(e).addClass("error_tips")}function s(e,t,r){var a=$(e).val(),s=a.length;s<=t||s>r?$(e).addClass("border_red"):$(e).removeClass("border_red")}function n(e){var t=$(e).height(),r=t/2-20;$(e).css("marginTop",-r+"px")}function l(e){var t=$(e).val(),r=/^[0-9]{6}$/;r.test(t)?$(e).parents("dl").removeClass("error_data"):$(e).parents("dl").addClass("error_data")}function o(e,t,r){var a=$(e).val()||$(e).text();a.length<t||a.length>r||!a.length?$(e).parents("section").next(".remark").show().addClass("error_tips"):$(e).parents("section").next(".remark").hide().removeClass("error_tips")}function i(e){var t=$(e).val(),r=/(^(0\d{2,3}(-){0,1}){1}\d{7,8})(-\d{3,5}){0,1}$|^1[0-9]{10}$/;r.test(t)?$(e).parents("section").next(".remark").hide().removeClass("error_tips"):$(e).parents("section").next(".remark").show().addClass("error_tips")}function d(e,t,r,a){var s=$(e).val()||$(e).text();s-0>a?$(e).addClass("error_tips"):s.length<t||s.length>r||!s.length?$(e).addClass("error_tips"):$(e).removeClass("error_tips")}function v(e,t,r){var a=$(e).val(),s=/(^(\d{3,4}-)?\d{7,8})$|^1[0-9]{10}$/;s.test(a)?r(e):t(e)}function _(e,t,r){var a=$(e).val(),s=/^[0-9]{6}$/;s.test(a)?r(e):t(e)}function c(e,t,r,a,s){var n=$(e).val(),l=new RegExp("^[一-龥]{"+t+","+r+"}$");l.test(n)?s(e):a(e)}function p(e,t,r,a,s){var n=$(e).val()||$(e).text();n.length<t||n.length>r?a(e):s(e)}return{get_hash:e,china_test:t,tel_test:r,birth_test:s,alert_top:n,code_test:l,name_test:o,tel_activity:i,numprice_test:d,email_test:a,tel_test_all:v,code_test_all:_,china_test_all:c,detail_test_all:p}});