"use strict";(self.webpackChunkbkoz=self.webpackChunkbkoz||[]).push([[5166],{5166:function(e,t,n){n.r(t),n.d(t,{EmojiDrawer:function(){return p}});var a=n(4165),i=n(5861),o=n(9439),r=n(7762),c=n(5671),l=n(3144),u=n(4709);var f=n(1792),s='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"',p=function(){function e(){(0,c.Z)(this,e),this._emojiShapeDict=new Map}return(0,l.Z)(e,[{key:"destroy",value:function(){var e,t=(0,r.Z)(this._emojiShapeDict);try{for(t.s();!(e=t.n()).done;){var n=(0,o.Z)(e.value,2),a=n[0],i=n[1];i instanceof ImageBitmap&&(null===i||void 0===i||i.close(),this._emojiShapeDict.delete(a))}}catch(c){t.e(c)}finally{t.f()}}},{key:"draw",value:function(e){!function(e){var t=e.context,n=e.particle,a=e.radius,i=e.opacity,o=n.emojiData,r=2*a,c=t.globalAlpha;o&&(t.globalAlpha=i,t.drawImage(o,-a,-a,r,r),t.globalAlpha=c)}(e)}},{key:"init",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.actualOptions,f.h.find((function(e){return(0,u.dB)(e,n.particles.shape.type)}))){e.next=3;break}return e.abrupt("return");case 3:return i=[(0,u.mx)(s)],(o=f.h.map((function(e){return n.particles.shape.options[e]})).find((function(e){return!!e})))&&(0,u.KH)(o,(function(e){e.font&&i.push((0,u.mx)(e.font))})),e.next=7,Promise.all(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"particleDestroy",value:function(e){delete e.emojiData}},{key:"particleInit",value:function(e,t){var n,a=t.shapeData;if(null!==a&&void 0!==a&&a.value){var i=(0,u.wA)(a.value,t.randomIndexData),o=null!==(n=a.font)&&void 0!==n?n:s;if(i){var r="".concat(i,"_").concat(o),c=this._emojiShapeDict.get(r);if(c)t.emojiData=c;else{var l,f=2*(0,u.KI)(t.size.value),p=(0,u.KI)(t.size.value);if("undefined"!==typeof OffscreenCanvas){var v=new OffscreenCanvas(f,f),m=v.getContext("2d");if(!m)return;m.font="400 ".concat(2*p,"px ").concat(o),m.textBaseline="middle",m.textAlign="center",m.fillText(i,p,p),l=v.transferToImageBitmap()}else{var h=document.createElement("canvas");h.width=f,h.height=f;var d=h.getContext("2d");if(!d)return;d.font="400 ".concat(2*p,"px ").concat(o),d.textBaseline="middle",d.textAlign="center",d.fillText(i,p,p),l=h}this._emojiShapeDict.set(r,l),t.emojiData=l}}}}}]),e}()}}]);
//# sourceMappingURL=5166.b012a5f7.chunk.js.map