/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(["zepto"],function($){function t(t,a){$(t).append(r.nomore_word),a?$("#toast_data").text(a):$("#toast_data").text("没有更多数据了")}function a(){$("#toast_data").animate({opacity:0},500,"ease-out",function(){$("#toast_data").css("z-index",-12)})}function o(){$("#toast_data").css("z-index",12).animate({opacity:.85},500,"ease-out")}function s(){o(),window.setTimeout(a,3e3)}function e(t,a){$(t).append(r.nomore_word_short),a?$("#toast_data_short").text(a):$("#toast_data_short").text("没有更多数据了"),r.left_px=i()}function _(){$("#toast_data_short").css("left",r.left_px+"px").animate({opacity:0},500,"ease-out",function(){$("#toast_data_short").css("z-index",-12)})}function d(){$("#toast_data_short").css({"z-index":12,left:r.left_px+"px"}).animate({opacity:.85},500,"ease-out")}function n(){d(),window.setTimeout(_,3e3)}function i(){var t=$("#toast_data_short").width(),a=$("body").width(),o=(a-t)/2;return Math.floor(o)}var r={nomore_word:'<div class="toast_data" id="toast_data"></div>',nomore_word_short:'<div class="toast_data_short" id="toast_data_short"></div>',left_px:0};return{alet_data:r,toast_data:t,nomoredata_hide:a,nomoredata_show:o,alert_word_show:s,toast_data_short:e,nomoredata_hide_short:_,nomoredata_show_short:d,alert_word_show_short:n,count_leftpx:i}});
//# sourceMappingURL=../maps/js/common/alert_word.js.map
