(()=>{var e={8583:()=>{window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return window.setTimeout(e,17)}),window.cancelAnimationFrame||(window.cancelAnimationFrame=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame||window.clearTimeout),window.utils={},window.utils.captureMouse=function(e){var t={x:0,y:0,event:null},n=document.body.scrollLeft,i=document.documentElement.scrollLeft,o=document.body.scrollTop,a=document.documentElement.scrollTop,s=e.offsetLeft,r=e.offsetTop;return e.addEventListener("mousemove",(function(e){var c,u;e.pageX||e.pageY?(c=e.pageX,u=e.pageY):(c=e.clientX+n+i,u=e.clientY+o+a),c-=s,u-=r,t.x=c,t.y=u,t.event=e}),!1),t},window.utils.captureTouch=function(e){var t={x:null,y:null,isPressed:!1,event:null},n=document.body.scrollLeft,i=document.documentElement.scrollLeft,o=document.body.scrollTop,a=document.documentElement.scrollTop,s=e.offsetLeft,r=e.offsetTop;return e.addEventListener("touchstart",(function(e){t.isPressed=!0,t.event=e}),!1),e.addEventListener("touchend",(function(e){t.isPressed=!1,t.x=null,t.y=null,t.event=e}),!1),e.addEventListener("touchmove",(function(e){var c,u,m=e.touches[0];m.pageX||m.pageY?(c=m.pageX,u=m.pageY):(c=m.clientX+n+i,u=m.clientY+o+a),c-=s,u-=r,t.x=c,t.y=u,t.event=e}),!1),t},window.utils.parseColor=function(e,t){return!0===t?"number"==typeof e?0|e:("string"==typeof e&&"#"===e[0]&&(e=e.slice(1)),window.parseInt(e,16)):("number"==typeof e&&(e="#"+("00000"+(0|e).toString(16)).substr(-6)),e)},window.utils.colorToRGB=function(e,t){"string"==typeof e&&"#"===e[0]&&(e=window.parseInt(e.slice(1),16));var n=e>>16&255,i=e>>8&255,o=255&e,a=(t=void 0===t?1:t)<0?0:t>1?1:t;return 1===a?"rgb("+n+","+i+","+o+")":"rgba("+n+","+i+","+o+","+a+")"},window.utils.containsPoint=function(e,t,n){return!(t<e.x||t>e.x+e.width||n<e.y||n>e.y+e.height)},window.utils.intersects=function(e,t){return!(e.x+e.width<t.x||t.x+t.width<e.x||e.y+e.height<t.y||t.y+t.height<e.y)}}},t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}(()=>{"use strict";n(8583),new class{constructor(){this.canvas=document.getElementById("pixel-move"),this.context=this.canvas.getContext("2d"),this.mouse=utils.captureMouse(this.canvas),this.drawFrame()}drawFrame(){window.requestAnimationFrame(this.drawFrame.bind(this,this.canvas));for(var e=0;e<this.canvas.width;e+=10)for(var t=0;t<this.canvas.height;t+=10)this.context.fillStyle=e%20==0?"#fee":e%30==0?"#eee":"#bee",this.context.fillRect(e,t,10,10);const n=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),i=n.data;for(var o=0;o<n.height;o+=1)for(var a=0;a<n.width;a+=1){const e=a-this.mouse.x,t=o-this.mouse.y,s=Math.sqrt(e*e+t*t),r=4*(a+o*n.width),c=i[r],u=i[r+1],m=i[r+2];i[r]=256*Math.sin(c*s*5e-4),i[r+1]=256*Math.sin(u*s*5e-4),i[r+2]=256*Math.sin(m*s*5e-4)}this.context.putImageData(n,0,0)}}})()})();