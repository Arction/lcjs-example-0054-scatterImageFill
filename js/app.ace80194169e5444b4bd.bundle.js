(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const n=a(89),{lightningChart:s,Themes:l,emptyFill:i,AxisTickStrategies:r,AxisScrollStrategies:o,DashedLine:d,emptyLine:c,ImageFill:m}=n,h=document.getElementById("chart")||document.body;h===document.body&&(h.style.width="100vw",h.style.height="100vh",h.style.margin="0px");const g=document.createElement("div"),u=document.createElement("div");h.append(g),h.append(u),g.style.width="100%",g.style.height="70%",u.style.width="100%",u.style.height="30%";const y=s({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}),S=y.ChartXY({container:g,theme:l[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}),p=(S.getDefaultAxisX().setTickStrategy(r.Time).setScrollStrategy(o.progressive).setDefaultInterval((e=>({end:e.dataMax??0,start:(e.dataMax??0)-15e3,stopAxisAfter:!1}))),S.getDefaultAxisY().setDefaultInterval({start:0,end:100})),w=S.addPointLineAreaSeries({dataPattern:null}).setAreaFillStyle(i).setStrokeStyle(c).setAutoScrollingEnabled(!1).setCursorEnabled(!1),x=new Image;x.crossOrigin="",x.src=document.head.baseURI+"examples/assets/0054/warning.png",w.setPointFillStyle(new m({source:x})).setPointAlignment({x:0,y:-1.1}).setPointSize(.8);const A=S.addPointLineAreaSeries({dataPattern:"ProgressiveX"}).setAreaFillStyle(i).setMaxSampleCount(1e5);p.addConstantLine().setValue(70).setStrokeStyle((e=>new d({fillStyle:e.getFillStyle()})));const v=y.ZoomBandChart({container:u});v.add(w).setAutoScrollingEnabled(!1).setPointAlignment({x:0,y:-1.1}).setPointSize(.5),v.add(A),v.getDefaultAxisY().setInterval({start:0,end:100});let P=50;setInterval((()=>{const e=performance.now(),t=P+(Math.random()-.4);A.appendSample({x:e,y:t}),P=t,t>70&&(P*=Math.random(),w.appendSample({x:e,y:t}))}),1e3/60)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);