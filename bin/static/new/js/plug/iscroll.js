/**
 * rechargeB - rechargeB详情
 * @version v1.0.0
 * @link 
 * @license ISC
 */
!function(){function t(t,i){this.wrapper="string"==typeof t?document.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var s in i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&o.hasPerspective?" translateZ(0)":"",this.options.useTransition=o.hasTransition&&this.options.useTransition,this.options.useTransform=o.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?o.ease[this.options.bounceEasing]||o.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,3==this.options.probeType&&(this.options.useTransition=!1),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function i(t,i,s){var e=document.createElement("div"),o=document.createElement("div");return s===!0&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator","h"==t?(s===!0&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),e.className="iScrollHorizontalScrollbar"):(s===!0&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),e.className="iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}function s(t,i){this.wrapper="string"==typeof i.el?document.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var s in i)this.options[s]=i[s];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(o.addEvent(this.indicator,"touchstart",this),o.addEvent(window,"touchend",this)),this.options.disablePointer||(o.addEvent(this.indicator,o.prefixPointerEvent("pointerdown"),this),o.addEvent(window,o.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(o.addEvent(this.indicator,"mousedown",this),o.addEvent(window,"mouseup",this))),this.options.fade&&(this.wrapperStyle[o.style.transform]=this.scroller.translateZ,this.wrapperStyle[o.style.transitionDuration]=o.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},o=function(){function t(t){return e!==!1&&(""===e?t:e+t.charAt(0).toUpperCase()+t.substr(1))}var i={},s=document.createElement("div").style,e=function(){for(var t,i=["t","webkitT","MozT","msT","OT"],e=0,o=i.length;e<o;e++)if(t=i[e]+"ransform",t in s)return i[e].substr(0,i[e].length-1);return!1}();i.getTime=Date.now||function(){return(new Date).getTime()},i.extend=function(t,i){for(var s in i)t[s]=i[s]},i.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},i.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},i.prefixPointerEvent=function(t){return window.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t},i.momentum=function(t,i,s,e,o,n){var r,h,a=t-i,l=Math.abs(a)/s;return n=void 0===n?6e-4:n,r=t+l*l/(2*n)*(a<0?-1:1),h=l/n,r<e?(r=o?e-o/2.5*(l/8):e,a=Math.abs(r-t),h=a/l):r>0&&(r=o?o/2.5*(l/8):0,a=Math.abs(t)+r,h=a/l),{destination:Math.round(r),duration:h}};var o=t("transform");return i.extend(i,{hasTransform:o!==!1,hasPerspective:t("perspective")in s,hasTouch:"ontouchstart"in window,hasPointer:window.PointerEvent||window.MSPointerEvent,hasTransition:t("transition")in s}),i.isBadAndroid=/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion),i.extend(i.style={},{transform:o,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),i.hasClass=function(t,i){var s=new RegExp("(^|\\s)"+i+"(\\s|$)");return s.test(t.className)},i.addClass=function(t,s){if(!i.hasClass(t,s)){var e=t.className.split(" ");e.push(s),t.className=e.join(" ")}},i.removeClass=function(t,s){if(i.hasClass(t,s)){var e=new RegExp("(^|\\s)"+s+"(\\s|$)","g");t.className=t.className.replace(e," ")}},i.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},i.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},i.extend(i.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),i.extend(i.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return Math.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var i=4;return(t-=1)*t*((i+1)*t+i)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var i=.22,s=.4;return 0===t?0:1==t?1:s*Math.pow(2,-10*t)*Math.sin((t-i/4)*(2*Math.PI)/i)+1}}}),i.tap=function(t,i){var s=document.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},i.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||(i=document.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,t.view,1,s.screenX,s.screenY,s.clientX,s.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),i._constructed=!0,s.dispatchEvent(i))},i}();t.prototype={version:"5.1.3",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if((1==o.eventType[t.type]||0===t.button)&&this.enabled&&(!this.initiated||o.eventType[t.type]===this.initiated)){!this.options.preventDefault||o.isBadAndroid||o.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=o.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=o.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,i=this.getComputedPosition(),this._translate(Math.round(i.x),Math.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&o.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,n,r=t.touches?t.touches[0]:t,h=r.pageX-this.pointX,a=r.pageY-this.pointY,l=o.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=h,this.distY+=a,e=Math.abs(this.distX),n=Math.abs(this.distY),!(l-this.endTime>300&&e<10&&n<10)){if(this.directionLocked||this.options.freeScroll||(e>n+this.options.directionLockThreshold?this.directionLocked="h":n>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);a=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}h=this.hasHorizontalScroll?h:0,a=this.hasVerticalScroll?a:0,i=this.x+h,s=this.y+a,(i>0||i<this.maxScrollX)&&(i=this.options.bounce?this.x+h/3:i>0?0:this.maxScrollX),(s>0||s<this.maxScrollY)&&(s=this.options.bounce?this.y+a/3:s>0?0:this.maxScrollY),this.directionX=h>0?-1:h<0?1:0,this.directionY=a>0?-1:a<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),l-this.startTime>300&&(this.startTime=l,this.startX=this.x,this.startY=this.y,1==this.options.probeType&&this._execEvent("scroll")),this.options.probeType>1&&this._execEvent("scroll")}}},_end:function(t){if(this.enabled&&o.eventType[t.type]===this.initiated){this.options.preventDefault&&!o.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var i,s,e=(t.changedTouches?t.changedTouches[0]:t,o.getTime()-this.startTime),n=Math.round(this.x),r=Math.round(this.y),h=Math.abs(n-this.startX),a=Math.abs(r-this.startY),l=0,c="";if(this.isInTransition=0,this.initiated=0,this.endTime=o.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(n,r),!this.moved)return this.options.tap&&o.tap(t,this.options.tap),this.options.click&&o.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&h<100&&a<100)return void this._execEvent("flick");if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?o.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:n,duration:0},s=this.hasVerticalScroll?o.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:r,duration:0},n=i.destination,r=s.destination,l=Math.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var p=this._nearestSnap(n,r);this.currentPage=p,l=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(n-p.x),1e3),Math.min(Math.abs(r-p.y),1e3)),300),n=p.x,r=p.y,this.directionX=0,this.directionY=0,c=this.options.bounceEasing}return n!=this.x||r!=this.y?((n>0||n<this.maxScrollX||r>0||r<this.maxScrollY)&&(c=o.ease.quadratic),void this.scrollTo(n,r,l,c)):void this._execEvent("scrollEnd")}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||this.y>0?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=o.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);s>-1&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||o.ease.circular,this.isInTransition=this.options.useTransition&&s>0,!s||this.options.useTransition&&e.style?(this._transitionTimingFunction(e.style),this._transitionTime(s),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,n){if(t=t.nodeType?t:this.scroller.querySelector(t)){var r=o.offset(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,s===!0&&(s=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),e===!0&&(e=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=s||0,r.top-=e||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,i=void 0===i||null===i||"auto"===i?Math.max(Math.abs(this.x-r.left),Math.abs(this.y-r.top)):i,this.scrollTo(r.left,r.top,i,n)}},_transitionTime:function(t){if(t=t||0,this.scrollerStyle[o.style.transitionDuration]=t+"ms",!t&&o.isBadAndroid&&(this.scrollerStyle[o.style.transitionDuration]="0.001s"),this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTime(t)},_transitionTimingFunction:function(t){if(this.scrollerStyle[o.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[o.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=Math.round(t),i=Math.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var i=t?o.removeEvent:o.addEvent,s=this.options.bindToWrapper?this.wrapper:window;i(window,"orientationchange",this),i(window,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),o.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,o.prefixPointerEvent("pointerdown"),this),i(s,o.prefixPointerEvent("pointermove"),this),i(s,o.prefixPointerEvent("pointercancel"),this),i(s,o.prefixPointerEvent("pointerup"),this)),o.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=window.getComputedStyle(this.scroller,null);return this.options.useTransform?(s=s[o.style.transform].split(")")[0].split(", "),t=+(s[12]||s[4]),i=+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),i=+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){function t(t){for(var i=h.indicators.length;i--;)t.call(h.indicators[i])}var e,o=this.options.interactiveScrollbars,n="string"!=typeof this.options.scrollbars,r=[],h=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(e={el:i("v",o,this.options.scrollbars),interactive:o,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(e.el),r.push(e)),this.options.scrollX&&(e={el:i("h",o,this.options.scrollbars),interactive:o,defaultScrollbars:!0,customStyle:n,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(e.el),r.push(e))),this.options.indicators&&(r=r.concat(this.options.indicators));for(var a=r.length;a--;)this.indicators.push(new s(this,r[a]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){t(function(){this.fade()})}),this.on("scrollCancel",function(){t(function(){this.fade()})}),this.on("scrollStart",function(){t(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){t(function(){this.fade(1,!0)})})),this.on("refresh",function(){t(function(){this.refresh()})}),this.on("destroy",function(){t(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){o.addEvent(this.wrapper,"wheel",this),o.addEvent(this.wrapper,"mousewheel",this),o.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){o.removeEvent(this.wrapper,"wheel",this),o.removeEvent(this.wrapper,"mousewheel",this),o.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){t.preventDefault(),t.stopPropagation();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n._execEvent("scrollEnd"),n.wheelTimeout=void 0},400),"deltaX"in t)1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,s=-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,s=-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,i>0?e--:i<0&&e++,s>0?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+Math.round(this.hasHorizontalScroll?i:0),o=this.y+Math.round(this.hasVerticalScroll?s:0),e>0?e=0:e<this.maxScrollX&&(e=this.maxScrollX),o>0?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0),this.options.probeType>1&&this._execEvent("scroll")}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,r=0,h=0,a=0,l=this.options.snapStepX||this.wrapperWidth,c=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(this.options.snap===!0)for(s=Math.round(l/2),e=Math.round(c/2);a>-this.scrollerWidth;){for(this.pages[r]=[],t=0,o=0;o>-this.scrollerHeight;)this.pages[r][t]={x:Math.max(a,this.maxScrollX),y:Math.max(o,this.maxScrollY),width:l,height:c,cx:a-s,cy:o-e},o-=c,t++;a-=l,r++}else for(n=this.options.snap,t=n.length,i=-1;r<t;r++)(0===r||n[r].offsetLeft<=n[r-1].offsetLeft)&&(h=0,i++),this.pages[h]||(this.pages[h]=[]),a=Math.max(-n[r].offsetLeft,this.maxScrollX),o=Math.max(-n[r].offsetTop,this.maxScrollY),s=a-Math.round(n[r].offsetWidth/2),e=o-Math.round(n[r].offsetHeight/2),this.pages[h][i]={x:a,y:o,width:n[r].offsetWidth,height:n[r].offsetHeight,cx:s,cy:e},a>this.maxScrollX&&h++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(this.x-this.startX),1e3),Math.min(Math.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,e=this.pages.length,o=0;if(Math.abs(t-this.absStartX)<this.snapThresholdX&&Math.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(t>0?t=0:t<this.maxScrollX&&(t=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return s==this.currentPage.pageX&&(s+=this.directionX,s<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&(o+=this.directionY,o<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}},goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(o-this.x),1e3),Math.min(Math.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i},this.scrollTo(o,n,s,e)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s++,s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;s--,s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];o.addEvent(window,"keydown",this),this.on("destroy",function(){o.removeEvent(window,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,n=s?this.currentPage.pageY:this.y,r=o.getTime(),h=this.keyTime||0,a=.25;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(Math.round(i.x),Math.round(i.y)),this.isInTransition=!1),this.keyAcceleration=r-h<200?Math.min(this.keyAcceleration+a,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:n+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:n-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,n=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:e=0,n=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:n+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:n-=s?1:5+this.keyAcceleration>>0;break;default:return}if(s)return void this.goToPage(e,n);e>0?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),n>0?(n=0,this.keyAcceleration=0):n<this.maxScrollY&&(n=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,n,0),this.keyTime=r}},_animate:function(t,i,s,n){function r(){var d,u,m,f=o.getTime();return f>=p?(h.isAnimating=!1,h._translate(t,i),void(h.resetPosition(h.options.bounceTime)||h._execEvent("scrollEnd"))):(f=(f-c)/s,m=n(f),d=(t-a)*m+a,u=(i-l)*m+l,h._translate(d,u),h.isAnimating&&e(r),void(3==h.options.probeType&&h._execEvent("scroll")))}var h=this,a=this.x,l=this.y,c=o.getTime(),p=c+s;this.isAnimating=!0,r()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},s.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.interactive&&(o.removeEvent(this.indicator,"touchstart",this),o.removeEvent(this.indicator,o.prefixPointerEvent("pointerdown"),this),o.removeEvent(this.indicator,"mousedown",this),o.removeEvent(window,"touchmove",this),o.removeEvent(window,o.prefixPointerEvent("pointermove"),this),o.removeEvent(window,"mousemove",this),o.removeEvent(window,"touchend",this),o.removeEvent(window,o.prefixPointerEvent("pointerup"),this),o.removeEvent(window,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=o.getTime(),this.options.disableTouch||o.addEvent(window,"touchmove",this),this.options.disablePointer||o.addEvent(window,o.prefixPointerEvent("pointermove"),this),this.options.disableMouse||o.addEvent(window,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,n,r=t.touches?t.touches[0]:t,h=o.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=r.pageX-this.lastPointX,this.lastPointX=r.pageX,s=r.pageY-this.lastPointY,this.lastPointY=r.pageY,e=this.x+i,n=this.y+s,this._pos(e,n),1==this.scroller.options.probeType&&h-this.startTime>300?(this.startTime=h,this.scroller._execEvent("scroll")):this.scroller.options.probeType>1&&this.scroller._execEvent("scroll"),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),o.removeEvent(window,"touchmove",this),o.removeEvent(window,o.prefixPointerEvent("pointermove"),this),o.removeEvent(window,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(this.scroller.x-i.x),1e3),Math.min(Math.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0,this.indicatorStyle[o.style.transitionDuration]=t+"ms",!t&&o.isBadAndroid&&(this.indicatorStyle[o.style.transitionDuration]="0.001s")},transitionTimingFunction:function(t){this.indicatorStyle[o.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(o.addClass(this.wrapper,"iScrollBothScrollbars"),o.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(o.removeClass(this.wrapper,"iScrollBothScrollbars"),o.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=Math.max(Math.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=Math.max(Math.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&Math.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&Math.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=Math.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?"scale"==this.options.shrink?(this.width=Math.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=Math.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?"scale"==this.options.shrink?(this.height=Math.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",i=this.maxPosY+this.indicatorHeight-this.height):i=this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),
this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[o.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?Math.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?Math.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[o.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):window.IScroll=t}();