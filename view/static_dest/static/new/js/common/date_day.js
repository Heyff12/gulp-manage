/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
define(function(){function t(t){for(var e=[],n=t-70;n<=t+70;n++)e.push({id:n+"",value:n+"年"});return e}function e(t,e){for(var n=[],r=t;r<=e;r++)n.push({id:r+"",value:r+"年"});return n}function n(){for(var t=[],e=1;e<=12;e++)"-1"!=a.month_long&&e<10&&(e="0"+e),t.push({id:e+"",value:e+"月"});return t}function r(t){for(var e=[],n=1;n<=t;n++)"-1"!=a.day_long&&n<10&&(n="0"+n),e.push({id:n+"",value:n+"日"});return e}var a={start_year:-1,end_year:-1,start_num:-1,end_num:-1,month_long:-1,day_long:-1},u=new Date,o=u.getFullYear(),i=u.getMonth()+1,s=u.getDate(),f=function(n){if("-1"==a.start_year&&"-1"==a.end_year&&"-1"==a.start_num&&"-1"==a.end_num)setTimeout(function(){n(t(o))},0);else{var r,u;r="-1"==a.start_year?o-a.start_num:a.start_year,u="-1"==a.end_year?o+a.end_num:a.end_year,setTimeout(function(){n(e(r,u))},0)}},_=function(t,e){setTimeout(function(){e(n())},0)},l=function(t,e,n){"-1"!=a.month_long&&"0"==e.substr(0,1)&&(e=e.substr(1,1)),setTimeout(function(){if(/^3|5|7|8|10|12$/.test(e))n(r(31));else if(/^4|6|9|11$/.test(e))n(r(30));else if(/^1$/.test(e))n(r(31));else{if(!/^2$/.test(e))throw new Error("month is illegal");n(t%4===0&&t%100!==0||t%400===0?r(29):r(28))}},0)};return{time_free:a,yearData:f,monthData:_,dateData:l,nowYear:o,nowMonth:i,nowDate:s}});
//# sourceMappingURL=../maps/js/common/date_day.js.map
