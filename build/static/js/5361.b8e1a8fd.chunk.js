"use strict";(self.webpackChunkbkoz=self.webpackChunkbkoz||[]).push([[5361],{5361:function(t,n,i){i.r(n),i.d(n,{Connector:function(){return y}});var e=i(7762),o=i(5671),a=i(3144),r=i(136),c=i(516),s=i(4709),u=i(4452),l=0,v=1;function d(t,n,i,e){var o=t.actualOptions.interactivity.modes.connect;if(o)return function(t,n,i,e){var o=Math.floor(i.getRadius()/n.getRadius()),a=n.getFillColor(),r=i.getFillColor();if(a&&r){var c=n.getPosition(),u=i.getPosition(),d=(0,s.oc)(a,r,n.getRadius(),i.getRadius()),f=t.createLinearGradient(c.x,c.y,u.x,u.y);return f.addColorStop(l,(0,s.vz)(a,e)),f.addColorStop((0,s.uZ)(o,l,v),(0,s.iz)(d,e)),f.addColorStop(v,(0,s.vz)(r,e)),f}}(n,i,e,o.links.opacity)}function f(t,n,i){t.canvas.draw((function(e){var o,a=d(t,e,n,i);if(a){var r=n.getPosition(),c=i.getPosition();!function(t,n,i,e,o){(0,s.pS)(t,e,o),t.lineWidth=n,t.strokeStyle=i,t.stroke()}(e,null!==(o=n.retina.linksWidth)&&void 0!==o?o:0,a,r,c)}}))}var y=function(t){(0,r.Z)(i,t);var n=(0,c.Z)(i);function i(t){return(0,o.Z)(this,i),n.call(this,t)}return(0,a.Z)(i,[{key:"clear",value:function(){}},{key:"init",value:function(){var t=this.container,n=t.actualOptions.interactivity.modes.connect;n&&(t.retina.connectModeDistance=n.distance*t.retina.pixelRatio,t.retina.connectModeRadius=n.radius*t.retina.pixelRatio)}},{key:"interact",value:function(){var t=this,n=this.container;if(n.actualOptions.interactivity.events.onHover.enable&&"pointermove"===n.interactivity.status){var i=n.interactivity.mouse.position,o=n.retina,a=o.connectModeDistance,r=o.connectModeRadius;if(!a||a<0||!r||r<0||!i)return;var c=Math.abs(r),s=n.particles.quadTree.queryCircle(i,c,(function(n){return t.isEnabled(n)}));s.forEach((function(t,i){var o,r=t.getPosition(),c=(0,e.Z)(s.slice(i+1));try{for(c.s();!(o=c.n()).done;){var u=o.value,l=u.getPosition(),v=Math.abs(a),d=Math.abs(r.x-l.x),y=Math.abs(r.y-l.y);d<v&&y<v&&f(n,t,u)}}catch(h){c.e(h)}finally{c.f()}}))}}},{key:"isEnabled",value:function(t){var n,i=this.container,e=i.interactivity.mouse,o=(null!==(n=null===t||void 0===t?void 0:t.interactivity)&&void 0!==n?n:i.actualOptions.interactivity).events;return!(!o.onHover.enable||!e.position)&&(0,s.dB)("connect",o.onHover.mode)}},{key:"loadModeOptions",value:function(t){t.connect||(t.connect=new u.l);for(var n=arguments.length,i=new Array(n>1?n-1:0),e=1;e<n;e++)i[e-1]=arguments[e];for(var o=0,a=i;o<a.length;o++){var r=a[o];t.connect.load(null===r||void 0===r?void 0:r.connect)}}},{key:"reset",value:function(){}}]),i}(s.L8)}}]);
//# sourceMappingURL=5361.b8e1a8fd.chunk.js.map