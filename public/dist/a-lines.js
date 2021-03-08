(()=>{var t={814:()=>{const t=document.getElementById("drawing-app"),e=t.getContext("2d"),i=utils.captureMouse(t),n=()=>{e.lineTo(i.x,i.y),e.strokeStyle="blue",e.stroke()};t.addEventListener("mousedown",(function(){e.beginPath(),e.moveTo(i.x,i.y),t.addEventListener("mousemove",n,!1)}),!1),t.addEventListener("mouseup",(function(){t.removeEventListener("mousemove",n,!1)}),!1)},922:()=>{new class{constructor(){this.canvas=document.getElementById("multi-curve"),this.context=this.canvas.getContext("2d"),this.points=[],this.numPoints=5,this.showVariant(),this.addClickListener()}addClickListener(){this.canvas.addEventListener("click",(()=>{this.showVariant()}),!1)}showVariant(){this.clearRect(),this.resetPoints(),this.generatePoints(),this.draw(),this.drawLines()}generatePoints(){for(let t=0;t<this.numPoints;t++)this.points.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height})}resetPoints(){this.points=[]}draw(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.numPoints;t+=2)this.context.quadraticCurveTo(this.points[t].x,this.points[t].y,this.points[t+1].x,this.points[t+1].y);this.context.strokeStyle="blue",this.context.stroke()}drawLines(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.numPoints;t+=2)this.context.lineTo(this.points[t].x,this.points[t].y),this.context.lineTo(this.points[t+1].x,this.points[t+1].y);this.context.strokeStyle="red",this.context.stroke()}clearRect(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}},583:()=>{window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,17)}),window.cancelAnimationFrame||(window.cancelAnimationFrame=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout),window.utils={},window.utils.captureMouse=function(t){var e={x:0,y:0,event:null},i=document.body.scrollLeft,n=document.documentElement.scrollLeft,s=document.body.scrollTop,o=document.documentElement.scrollTop,r=t.offsetLeft,c=t.offsetTop;return t.addEventListener("mousemove",(function(t){var a,h;t.pageX||t.pageY?(a=t.pageX,h=t.pageY):(a=t.clientX+i+n,h=t.clientY+s+o),a-=r,h-=c,e.x=a,e.y=h,e.event=t}),!1),e},window.utils.captureTouch=function(t){var e={x:null,y:null,isPressed:!1,event:null},i=document.body.scrollLeft,n=document.documentElement.scrollLeft,s=document.body.scrollTop,o=document.documentElement.scrollTop,r=t.offsetLeft,c=t.offsetTop;return t.addEventListener("touchstart",(function(t){e.isPressed=!0,e.event=t}),!1),t.addEventListener("touchend",(function(t){e.isPressed=!1,e.x=null,e.y=null,e.event=t}),!1),t.addEventListener("touchmove",(function(t){var a,h,u=t.touches[0];u.pageX||u.pageY?(a=u.pageX,h=u.pageY):(a=u.clientX+i+n,h=u.clientY+s+o),a-=r,h-=c,e.x=a,e.y=h,e.event=t}),!1),e},window.utils.parseColor=function(t,e){return!0===e?"number"==typeof t?0|t:("string"==typeof t&&"#"===t[0]&&(t=t.slice(1)),window.parseInt(t,16)):("number"==typeof t&&(t="#"+("00000"+(0|t).toString(16)).substr(-6)),t)},window.utils.colorToRGB=function(t,e){"string"==typeof t&&"#"===t[0]&&(t=window.parseInt(t.slice(1),16));var i=t>>16&255,n=t>>8&255,s=255&t,o=(e=void 0===e?1:e)<0?0:e>1?1:e;return 1===o?"rgb("+i+","+n+","+s+")":"rgba("+i+","+n+","+s+","+o+")"},window.utils.containsPoint=function(t,e,i){return!(e<t.x||e>t.x+t.width||i<t.y||i>t.y+t.height)},window.utils.intersects=function(t,e){return!(t.x+t.width<e.x||e.x+e.width<t.x||t.y+t.height<e.y||e.y+e.height<t.y)}}},e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={exports:{}};return t[n](s,s.exports,i),s.exports}(()=>{"use strict";i(583),i(814);class t{constructor(t){this.canvas=document.getElementById(t),this.context=this.canvas.getContext("2d"),this.mouse=utils.captureMouse(this.canvas),this.x0=100,this.y0=200,this.x2=300,this.y2=200,this.cursorX,this.cursorY,this.initMouseMoveListener()}initMouseMoveListener(){this.canvas.addEventListener("mousemove",(()=>{this.clearRect(),this.setCursorPosition(),this.drawRedLines(),this.drawCurveLine()}),!1)}drawRedLines(){this.context.beginPath(),this.context.strokeStyle="red",this.context.moveTo(this.x0,this.y0),this.context.lineTo(this.cursorX,this.cursorY),this.context.moveTo(this.x2,this.y2),this.context.lineTo(this.cursorX,this.cursorY),this.context.stroke()}drawCurveLine(){this.context.beginPath(),this.context.moveTo(this.x0,this.y0),this.context.quadraticCurveTo(this.cursorX,this.cursorY,this.x2,this.y2),this.context.strokeStyle="blue",this.context.stroke()}setCursorPosition(){this.cursorX=this.mouse.x,this.cursorY=this.mouse.y}clearRect(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}new t("drawing-curves"),new class extends t{setCursorPosition(){this.cursorX=2*this.mouse.x-(this.x0+this.x2)/2,this.cursorY=2*this.mouse.y-(this.y0+this.y2)/2}}("curve-through-point"),i(922)})()})();