/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(["jsbridge"],function(a){var n=a.JSBridge,t=function(a,t){n.H5CallNative({name:"alert",data:a||{},callback:function(a){t(a)}})},c=function(a,t){n.H5CallNative({name:"toast",data:a||{},callback:function(a){t(a)}})},l=function(a,t){n.H5CallNative({name:"close",data:a||{},callback:function(a){t(a)}})},e=function(a,t){n.H5CallNative({name:"closeAll",data:a||{},callback:function(a){t(a)}})},i=function(a,t){n.H5CallNative({name:"openUri",data:a||{},callback:function(a){t(a)}})},o=function(a,t){n.H5CallNative({name:"getDeviceInfo",data:a||{},callback:function(a){t(a)}})},f=function(a,t){n.H5CallNative({name:"getLocation",data:a||{},callback:function(a){t(a)}})},u=function(a,t){n.H5CallNative({name:"setNavTitle",data:a||{},callback:function(a){t(a)}})},v=function(a,t){n.H5CallNative({name:"setNavBack",data:a||{},callback:function(a){t(a)}})},N=function(a,t){n.H5CallNative({name:"setNavMenu",data:a||{},callback:function(a){t(a)}})},d=function(a,t){n.H5CallNative({name:"scanQrcode",data:a||{},callback:function(a){t(a)}})},s=function(a,t){n.H5CallNative({name:"share",data:a||{},callback:function(a){t(a)}})};return{alert:t,toast:c,close:l,closeAll:e,openUri:i,getDeviceInfo:o,getLocation:f,setNavTitle:u,setNavBack:v,setNavMenu:N,scanQrcode:d,share:s}});
//# sourceMappingURL=../maps/js/common/native.js.map
