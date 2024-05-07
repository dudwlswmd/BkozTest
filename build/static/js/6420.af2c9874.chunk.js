"use strict";(self.webpackChunkbkoz=self.webpackChunkbkoz||[]).push([[6420],{6420:function(e,i,t){t.r(i),t.d(i,{Repulser:function(){return v}});var n=t(7762),r=t(5671),o=t(3144),a=t(136),s=t(516),l=t(4709),c=t(4794),u="repulse",v=function(e){(0,a.Z)(t,e);var i=(0,s.Z)(t);function t(e,o){var a;return(0,r.Z)(this,t),(a=i.call(this,o))._clickRepulse=function(){var e,i=a.container,t=i.actualOptions.interactivity.modes.repulse;if(t){var r=null!==(e=i.repulse)&&void 0!==e?e:{particles:[]};if(r.finish||(r.count||(r.count=0),r.count++,r.count===i.particles.count&&(r.finish=!0)),r.clicking){var o=i.retina.repulseModeDistance;if(!o||o<0)return;var s=Math.pow(o/6,3),c=i.interactivity.mouse.clickPosition;if(void 0===c)return;var u,v=new l.Cd(c.x,c.y,s),p=i.particles.quadTree.query(v,(function(e){return a.isEnabled(e)})),f=(0,n.Z)(p);try{for(f.s();!(u=f.n()).done;){var d=u.value,y=(0,l.oW)(c,d.position),h=y.dx,k=y.dy,m=y.distance,g=Math.pow(m,2),b=-s*t.speed/g;if(g<=s){r.particles.push(d);var R=l.OW.create(h,k);R.length=b,d.velocity.setTo(R)}}}catch(x){f.e(x)}finally{f.f()}}else if(!1===r.clicking){var w,_=(0,n.Z)(r.particles);try{for(_.s();!(w=_.n()).done;){var O=w.value;O.velocity.setTo(O.initialVelocity)}}catch(x){_.e(x)}finally{_.f()}r.particles=[]}}},a._hoverRepulse=function(){var e=a.container,i=e.interactivity.mouse.position,t=e.retina.repulseModeDistance;!t||t<0||!i||a._processRepulse(i,t,new l.Cd(i.x,i.y,t))},a._processRepulse=function(e,i,t,r){var o,s=a.container,c=s.particles.quadTree.query(t,(function(e){return a.isEnabled(e)})),u=s.actualOptions.interactivity.modes.repulse;if(u){var v,p=u.easing,f=u.speed,d=u.factor,y=u.maxSpeed,h=(0,l._X)(p),k=(null!==(o=null===r||void 0===r?void 0:r.speed)&&void 0!==o?o:f)*d,m=(0,n.Z)(c);try{for(m.s();!(v=m.n()).done;){var g=v.value,b=(0,l.oW)(g.position,e),R=b.dx,w=b.dy,_=b.distance,O=(0,l.uZ)(h(1-_/i)*k,0,y),x=l.OW.create(_?R/_*O:k,_?w/_*O:k);g.position.addTo(x)}}catch(C){m.e(C)}finally{m.f()}}},a._singleSelectorRepulse=function(e,i){var t=a.container,n=t.actualOptions.interactivity.modes.repulse;if(n){var r=document.querySelectorAll(e);r.length&&r.forEach((function(e){var r=e,o=t.retina.pixelRatio,s={x:(r.offsetLeft+.5*r.offsetWidth)*o,y:(r.offsetTop+.5*r.offsetHeight)*o},c=.5*r.offsetWidth*o,u="circle"===i.type?new l.Cd(s.x,s.y,c):new l.Ae(r.offsetLeft*o,r.offsetTop*o,r.offsetWidth*o,r.offsetHeight*o),v=n.divs,p=(0,l.iC)(v,r);a._processRepulse(s,c,u,p)}))}},a._engine=e,o.repulse||(o.repulse={particles:[]}),a.handleClickMode=function(e){var i=a.container.actualOptions.interactivity.modes.repulse;if(i&&e===u){o.repulse||(o.repulse={particles:[]});var t=o.repulse;t.clicking=!0,t.count=0;var r,s=(0,n.Z)(o.repulse.particles);try{for(s.s();!(r=s.n()).done;){var c=r.value;a.isEnabled(c)&&c.velocity.setTo(c.initialVelocity)}}catch(v){s.e(v)}finally{s.f()}t.particles=[],t.finish=!1,setTimeout((function(){o.destroyed||(t.clicking=!1)}),i.duration*l.X5)}},a}return(0,o.Z)(t,[{key:"clear",value:function(){}},{key:"init",value:function(){var e=this.container,i=e.actualOptions.interactivity.modes.repulse;i&&(e.retina.repulseModeDistance=i.distance*e.retina.pixelRatio)}},{key:"interact",value:function(){var e=this,i=this.container,t=i.actualOptions,n=i.interactivity.status===l.Wt,r=t.interactivity.events,o=r.onHover,a=o.enable,s=o.mode,c=r.onClick,v=c.enable,p=c.mode,f=r.onDiv;n&&a&&(0,l.dB)(u,s)?this._hoverRepulse():v&&(0,l.dB)(u,p)?this._clickRepulse():(0,l.XD)(u,f,(function(i,t){return e._singleSelectorRepulse(i,t)}))}},{key:"isEnabled",value:function(e){var i,t=this.container,n=t.actualOptions,r=t.interactivity.mouse,o=(null!==(i=null===e||void 0===e?void 0:e.interactivity)&&void 0!==i?i:n.interactivity).events,a=o.onDiv,s=o.onHover,c=o.onClick,v=(0,l.wm)(u,a);if(!(v||s.enable&&r.position||c.enable&&r.clickPosition))return!1;var p=s.mode,f=c.mode;return(0,l.dB)(u,p)||(0,l.dB)(u,f)||v}},{key:"loadModeOptions",value:function(e){e.repulse||(e.repulse=new c.H);for(var i=arguments.length,t=new Array(i>1?i-1:0),n=1;n<i;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++){var a=o[r];e.repulse.load(null===a||void 0===a?void 0:a.repulse)}}},{key:"reset",value:function(){}}]),t}(l.L8)}}]);
//# sourceMappingURL=6420.af2c9874.chunk.js.map