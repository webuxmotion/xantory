(()=>{var t={4266:()=>{new class{constructor(){this.canvas=document.getElementById("custom-bezier"),this.context=this.canvas.getContext("2d"),this.points=[],this.numPoints=3,this.showVariant(),this.addClickListener()}addClickListener(){this.canvas.addEventListener("click",(()=>{this.showVariant()}),!1)}showVariant(){this.clearRect(),this.resetPoints(),this.generatePoints(),this.draw(),this.drawLines(),this.drawCustomBezier()}generatePoints(){for(let t=0;t<this.numPoints;t++)this.points.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height})}resetPoints(){this.points=[]}getBezierCoord(t,i,s,e){return(1-e)**2*t+2*e*(1-e)*i+e**2*s}drawCustomBezier(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=.2;t<1;t+=.2){const i=this.getBezierCoord(this.points[0].x,this.points[1].x,this.points[2].x,t),s=this.getBezierCoord(this.points[0].y,this.points[1].y,this.points[2].y,t);this.context.lineTo(i,s)}this.context.lineTo(this.points[2].x,this.points[2].y),this.context.strokeStyle="yellow",this.context.stroke()}draw(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.numPoints;t+=2)this.context.quadraticCurveTo(this.points[t].x,this.points[t].y,this.points[t+1].x,this.points[t+1].y);this.context.strokeStyle="blue",this.context.stroke()}drawLines(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.numPoints;t+=2)this.context.lineTo(this.points[t].x,this.points[t].y),this.context.lineTo(this.points[t+1].x,this.points[t+1].y);this.context.strokeStyle="red",this.context.stroke()}clearRect(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}},9814:()=>{const t=document.getElementById("drawing-app"),i=t.getContext("2d"),s=utils.captureMouse(t),e=()=>{i.lineTo(s.x,s.y),i.strokeStyle="blue",i.stroke()};t.addEventListener("mousedown",(function(){i.beginPath(),i.moveTo(s.x,s.y),t.addEventListener("mousemove",e,!1)}),!1),t.addEventListener("mouseup",(function(){t.removeEventListener("mousemove",e,!1)}),!1)},6618:()=>{new class{constructor(){this.canvas=document.getElementById("multi-curve-2"),this.context=this.canvas.getContext("2d"),this.points=[],this.numPoints=3,this.ctrlPoint={},this.showVariant(),this.addClickListener()}addClickListener(){this.canvas.addEventListener("click",(()=>{this.showVariant()}),!1)}showVariant(){this.clearRect(),this.resetPoints(),this.generatePoints(),this.draw(),this.drawLines()}generatePoints(){for(let t=0;t<this.numPoints;t++)this.points.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height})}resetPoints(){this.points=[]}draw(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(var t=1;t<this.numPoints-2;t++)this.ctrlPoint.x=(this.points[t].x+this.points[t+1].x)/2,this.ctrlPoint.y=(this.points[t].y+this.points[t+1].y)/2,this.context.quadraticCurveTo(this.points[t].x,this.points[t].y,this.ctrlPoint.x,this.ctrlPoint.y);this.context.quadraticCurveTo(this.points[t].x,this.points[t].y,this.points[t+1].x,this.points[t+1].y),this.context.strokeStyle="blue",this.context.stroke()}drawLines(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.numPoints;t+=2)this.context.lineTo(this.points[t].x,this.points[t].y),this.context.lineTo(this.points[t+1].x,this.points[t+1].y);this.context.strokeStyle="red",this.context.stroke()}clearRect(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}},2675:()=>{new class{constructor(){this.canvas=document.getElementById("multi-curve-3"),this.context=this.canvas.getContext("2d"),this.points=[],this.numPoints=5,this.ctrlPoint={},this.ctrlPoint1={},this.showVariant(),this.addClickListener()}addClickListener(){this.canvas.addEventListener("click",(()=>{this.showVariant()}),!1)}showVariant(){this.clearRect(),this.resetPoints(),this.generatePoints(),this.draw(),this.drawLines()}generatePoints(){for(let t=0;t<this.numPoints;t++)this.points.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height})}resetPoints(){this.points=[]}draw(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y),this.ctrlPoint1.x=(this.points[0].x+this.points[this.numPoints-1].x)/2,this.ctrlPoint1.y=(this.points[0].y+this.points[this.numPoints-1].y)/2,this.context.beginPath(),this.context.moveTo(this.ctrlPoint1.x,this.ctrlPoint1.y);for(var t=0;t<this.numPoints-1;t++)this.ctrlPoint.x=(this.points[t].x+this.points[t+1].x)/2,this.ctrlPoint.y=(this.points[t].y+this.points[t+1].y)/2,this.context.quadraticCurveTo(this.points[t].x,this.points[t].y,this.ctrlPoint.x,this.ctrlPoint.y);this.context.quadraticCurveTo(this.points[t].x,this.points[t].y,this.ctrlPoint1.x,this.ctrlPoint1.y),this.context.strokeStyle="blue",this.context.stroke()}drawLines(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.numPoints;t+=2)this.context.lineTo(this.points[t].x,this.points[t].y),this.context.lineTo(this.points[t+1].x,this.points[t+1].y);this.context.lineTo(this.points[0].x,this.points[0].y),this.context.strokeStyle="red",this.context.stroke()}clearRect(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}},4922:()=>{new class{constructor(){this.canvas=document.getElementById("multi-curve"),this.context=this.canvas.getContext("2d"),this.points=[],this.numPoints=3,this.showVariant(),this.addClickListener()}addClickListener(){this.canvas.addEventListener("click",(()=>{this.showVariant()}),!1)}showVariant(){this.clearRect(),this.resetPoints(),this.generatePoints(),this.draw(),this.drawLines()}generatePoints(){for(let t=0;t<this.numPoints;t++)this.points.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height})}resetPoints(){this.points=[]}draw(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.numPoints;t+=2)this.context.quadraticCurveTo(this.points[t].x,this.points[t].y,this.points[t+1].x,this.points[t+1].y);this.context.strokeStyle="blue",this.context.stroke()}drawLines(){this.context.beginPath(),this.context.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.numPoints;t+=2)this.context.lineTo(this.points[t].x,this.points[t].y),this.context.lineTo(this.points[t+1].x,this.points[t+1].y);this.context.strokeStyle="red",this.context.stroke()}clearRect(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}},8583:()=>{window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,17)}),window.cancelAnimationFrame||(window.cancelAnimationFrame=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout),window.utils={},window.utils.captureMouse=function(t){var i={x:0,y:0,event:null},s=document.body.scrollLeft,e=document.documentElement.scrollLeft,n=document.body.scrollTop,o=document.documentElement.scrollTop,h=t.offsetLeft,r=t.offsetTop;return t.addEventListener("mousemove",(function(t){var a,c;t.pageX||t.pageY?(a=t.pageX,c=t.pageY):(a=t.clientX+s+e,c=t.clientY+n+o),a-=h,c-=r,i.x=a,i.y=c,i.event=t}),!1),i},window.utils.captureTouch=function(t){var i={x:null,y:null,isPressed:!1,event:null},s=document.body.scrollLeft,e=document.documentElement.scrollLeft,n=document.body.scrollTop,o=document.documentElement.scrollTop,h=t.offsetLeft,r=t.offsetTop;return t.addEventListener("touchstart",(function(t){i.isPressed=!0,i.event=t}),!1),t.addEventListener("touchend",(function(t){i.isPressed=!1,i.x=null,i.y=null,i.event=t}),!1),t.addEventListener("touchmove",(function(t){var a,c,l=t.touches[0];l.pageX||l.pageY?(a=l.pageX,c=l.pageY):(a=l.clientX+s+e,c=l.clientY+n+o),a-=h,c-=r,i.x=a,i.y=c,i.event=t}),!1),i},window.utils.parseColor=function(t,i){return!0===i?"number"==typeof t?0|t:("string"==typeof t&&"#"===t[0]&&(t=t.slice(1)),window.parseInt(t,16)):("number"==typeof t&&(t="#"+("00000"+(0|t).toString(16)).substr(-6)),t)},window.utils.colorToRGB=function(t,i){"string"==typeof t&&"#"===t[0]&&(t=window.parseInt(t.slice(1),16));var s=t>>16&255,e=t>>8&255,n=255&t,o=(i=void 0===i?1:i)<0?0:i>1?1:i;return 1===o?"rgb("+s+","+e+","+n+")":"rgba("+s+","+e+","+n+","+o+")"},window.utils.containsPoint=function(t,i,s){return!(i<t.x||i>t.x+t.width||s<t.y||s>t.y+t.height)},window.utils.intersects=function(t,i){return!(t.x+t.width<i.x||i.x+i.width<t.x||t.y+t.height<i.y||i.y+i.height<t.y)}}},i={};function s(e){if(i[e])return i[e].exports;var n=i[e]={exports:{}};return t[e](n,n.exports,s),n.exports}(()=>{"use strict";s(8583),s(9814);class t{constructor(t){this.canvas=document.getElementById(t),this.context=this.canvas.getContext("2d"),this.mouse=utils.captureMouse(this.canvas),this.x0=100,this.y0=200,this.x2=300,this.y2=200,this.cursorX,this.cursorY,this.initMouseMoveListener()}initMouseMoveListener(){this.canvas.addEventListener("mousemove",(()=>{this.clearRect(),this.setCursorPosition(),this.drawRedLines(),this.drawCurveLine()}),!1)}drawRedLines(){this.context.beginPath(),this.context.strokeStyle="red",this.context.moveTo(this.x0,this.y0),this.context.lineTo(this.cursorX,this.cursorY),this.context.moveTo(this.x2,this.y2),this.context.lineTo(this.cursorX,this.cursorY),this.context.stroke()}drawCurveLine(){this.context.beginPath(),this.context.moveTo(this.x0,this.y0),this.context.quadraticCurveTo(this.cursorX,this.cursorY,this.x2,this.y2),this.context.strokeStyle="blue",this.context.stroke()}setCursorPosition(){this.cursorX=this.mouse.x,this.cursorY=this.mouse.y}clearRect(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}function i(t,i){void 0===t&&(t=40),void 0===i&&(i="#ff0000"),this.x=0,this.y=0,this.radius=t,this.rotation=0,this.scaleX=1,this.scaleY=1,this.color=utils.parseColor(i),this.lineWidth=1}new t("drawing-curves"),new class extends t{setCursorPosition(){this.cursorX=2*this.mouse.x-(this.x0+this.x2)/2,this.cursorY=2*this.mouse.y-(this.y0+this.y2)/2}}("curve-through-point"),s(4922),s(6618),s(2675),s(4266),i.prototype.draw=function(t){t.save(),t.translate(this.x,this.y),t.rotate(this.rotation),t.scale(this.scaleX,this.scaleY),t.lineWidth=this.lineWidth,t.fillStyle=this.color,t.beginPath(),t.arc(0,0,this.radius,0,2*Math.PI,!0),t.closePath(),t.fill(),this.lineWidth>0&&t.stroke(),t.restore()};const e=i;new class{constructor(){this.canvas=document.getElementById("circle-path-movement"),this.context=this.canvas.getContext("2d"),this.ball=new e,this.ball.radius=5,this.angle=0,this.centerX=this.canvas.width/2,this.centerY=this.canvas.height/2,this.radius=100,this.speed=.05,this.drawFrame()}draw(){this.clearRect(),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.ball.x=this.centerX+Math.sin(this.angle)*this.radius,this.ball.y=this.centerY+Math.cos(this.angle)*this.radius,this.angle-=this.speed,this.angle<2*Math.PI*-1&&(this.angle=0),this.ball.draw(this.context)}drawFrame(){window.requestAnimationFrame(this.drawFrame.bind(this,this.canvas)),this.draw()}clearRect(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}}})()})();