(this.webpackJsonpcrearch=this.webpackJsonpcrearch||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/instagram.a93dd8e3.svg"},19:function(e,t,a){e.exports=a.p+"static/media/twitter.a43f09a9.svg"},20:function(e,t,a){e.exports=a.p+"static/media/facebook.a2b97f58.svg"},21:function(e,t,a){e.exports=a.p+"static/media/logo.2ebdeb86.svg"},31:function(e,t,a){e.exports=a(66)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(6),l=a.n(n),o=(a(36),a(37),a(2)),i=(a(38),a(18)),h=a.n(i),s=a(19),g=a.n(s),d=a(20),m=a.n(d),p=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"foottext"},c.a.createElement("p",null,"creArch \xa9 2020")),c.a.createElement("div",{className:"socmed"},c.a.createElement("a",{href:"https://www.twitter.com/crearch",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"iconlogo",src:g.a,alt:"twitter-logo"})),c.a.createElement("a",{href:"https://www.instagram.com/cre_arch",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"iconlogo",src:h.a,alt:"instagram-logo"})),c.a.createElement("a",{href:"https://www.facebook.com/Cre_Arch-102378538229159",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"iconlogo",src:m.a,alt:"facebook-logo"}))))},u=(a(39),a(21)),w=a.n(u),v=a(7),b=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"logofile"},c.a.createElement(v.b,{to:"/Jovan-MS-module-ii/",target:"_self"},c.a.createElement("img",{src:w.a,alt:"website-logo"}))),c.a.createElement("div",{className:"headtext"},c.a.createElement(v.b,{to:"/Jovan-MS-module-ii/",target:"_self"},"creArch - architectural photography")),c.a.createElement("nav",null,c.a.createElement(v.c,{to:"/Jovan-MS-module-ii/gallery"},"gallery "),c.a.createElement(v.c,{to:"/Jovan-MS-module-ii/about"}," about "),c.a.createElement(v.c,{to:"/Jovan-MS-module-ii/contact"}," contact ")))},E=a(28);a(45);function y(){var e=Object(E.a)(),t=e.register,a=e.handleSubmit,r=e.errors;return c.a.createElement("form",{onSubmit:a((function(e){console.log(e)}))},c.a.createElement("label",null,"Your Name"),c.a.createElement("input",{name:"name",ref:t}),c.a.createElement("label",null,"Your Email Address"),c.a.createElement("input",{name:"exampleRequired",ref:t({required:!0,maxLength:10})}),r.exampleRequired&&c.a.createElement("p",{className:"errortext"},"This field is required"),c.a.createElement("label",null,"Your Message"),c.a.createElement("input",{name:"message",ref:t}),c.a.createElement("input",{type:"submit"}))}var f=document.getElementById("root");l.a.render(c.a.createElement(y,null),f);var _=c.a.createElement(y,null),j=(a(46),a(47),a(23)),k=["https://crear.ch/webdev_gallery/slide_1.jpg","https://crear.ch/webdev_gallery/slide_2.jpg","https://crear.ch/webdev_gallery/slide_3.jpg","https://crear.ch/webdev_gallery/slide_4.jpg","https://crear.ch/webdev_gallery/slide_5.jpg"],I=function(){return c.a.createElement("div",null,c.a.createElement(j.Slide,null,c.a.createElement("div",{className:"each-slide"},c.a.createElement("div",{style:{backgroundImage:"url(".concat(k[0],")")}})),c.a.createElement("div",{className:"each-slide"},c.a.createElement("div",{style:{backgroundImage:"url(".concat(k[1],")")}})),c.a.createElement("div",{className:"each-slide"},c.a.createElement("div",{style:{backgroundImage:"url(".concat(k[2],")")}})),c.a.createElement("div",{className:"each-slide"},c.a.createElement("div",{style:{backgroundImage:"url(".concat(k[3],")")}})),c.a.createElement("div",{className:"each-slide"},c.a.createElement("div",{style:{backgroundImage:"url(".concat(k[4],")")}}))))},N=a(24),M=a(25),S=a(29),x=a(30),J=a(9),A=function(e){Object(x.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(N.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},e.onMarkerClick=function(t,a,r){return e.setState({selectedPlace:t,activeMarker:a,showingInfoWindow:!0})},e.onClose=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e}return Object(M.a)(a,[{key:"render",value:function(){return c.a.createElement(J.Map,{google:this.props.google,zoom:17,initialCenter:{lat:51.52178829,lng:-.13025871},style:{width:"80%",height:"50%"}},c.a.createElement(J.Marker,{onClick:this.onMarkerClick,name:"creArch Photography London"}),c.a.createElement(J.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},c.a.createElement("div",null,c.a.createElement("h4",null,this.state.selectedPlace.name))))}}]),a}(r.Component),W=Object(J.GoogleApiWrapper)({apiKey:"AIzaSyDXmEALg0mzs2uTtieP1Drx5pzgSNsbjus"})(A),C=(a(63),function(){return c.a.createElement("div",{className:"home"},c.a.createElement(I,null))}),P=(a(64),function(){return c.a.createElement("div",{className:"about"},c.a.createElement("img",{className:"photographer",alt:"Photographer",src:"https://crear.ch/photographer.jpg"}),c.a.createElement("p",null,"I am a London based photographer specialising in Architecture Photography."),c.a.createElement("p",null,"Originally from another city, I studied architecture and photography at the University of the Architecture and Photography at another city. I\u2019ve spent my early career working for several architectural practices around the world as an architectural assistant."),c.a.createElement("p",null,"With a career change and moving to another country, I have moved towards shooting architecture and different design photography. I have spent the last few years working for a number of clients in this city and across another city, town and London."),c.a.createElement("p",null,"I enjoy the exploration involved in capturing the best angles possible, the problem solving for interior compositions and working with light to create dynamic and dramatic images."),c.a.createElement("p",null,"Even though I am based in London, I am always open to opportunities across the UK, Europe and worldwide."),c.a.createElement("p",null,"If you are an architect, interior designer, developer or work in the construction industry, please do get in contact and let me know how I can help you create imagery of value for your business."),c.a.createElement("p",null,"Jovan"))}),O=(a(65),function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("p",{className:"contacttext"},"Please get in touch using the form below"),_,c.a.createElement("p",{className:"contacttext"},"You can find us at the location below (click on the marker)"),c.a.createElement("div",{className:"map"},c.a.createElement(W,null)))}),L=a(26),q=[{src:"https://crear.ch/webdev_gallery/00.jpg",width:3,height:2},{src:"https://crear.ch/webdev_gallery/01.jpg",width:3,height:4},{src:"https://crear.ch/webdev_gallery/02.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/03.jpg",width:3,height:4},{src:"https://crear.ch/webdev_gallery/04.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/05.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/06.jpg",width:3,height:4},{src:"https://crear.ch/webdev_gallery/07.jpg",width:3,height:4},{src:"https://crear.ch/webdev_gallery/08.jpg",width:2,height:3},{src:"https://crear.ch/webdev_gallery/09.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/10.jpg",width:3,height:4},{src:"https://crear.ch/webdev_gallery/11.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/12.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/13.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/14.jpg",width:3,height:2},{src:"https://crear.ch/webdev_gallery/15.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/16.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/17.jpg",width:2,height:3},{src:"https://crear.ch/webdev_gallery/18.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/19.jpg",width:3,height:4},{src:"https://crear.ch/webdev_gallery/20.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/21.jpg",width:3,height:2},{src:"https://crear.ch/webdev_gallery/22.jpg",width:2,height:3},{src:"https://crear.ch/webdev_gallery/23.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/24.jpg",width:2,height:3},{src:"https://crear.ch/webdev_gallery/25.jpg",width:2,height:3},{src:"https://crear.ch/webdev_gallery/26.jpg",width:3,height:2},{src:"https://crear.ch/webdev_gallery/27.jpg",width:2,height:3},{src:"https://crear.ch/webdev_gallery/28.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/29.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/30.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/31.jpg",width:4,height:3},{src:"https://crear.ch/webdev_gallery/32.jpg",width:3,height:2},{src:"https://crear.ch/webdev_gallery/33.jpg",width:4,height:3}],z=function(){return c.a.createElement(L.a,{photos:q,direction:"column"})};l.a.render(c.a.createElement(z,null),document.getElementById("root"));var B=z;var Y=function(){return c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/Jovan-MS-module-ii",exact:!0,component:C}),c.a.createElement(o.a,{path:"/Jovan-MS-module-ii/gallery",component:B}),c.a.createElement(o.a,{path:"/Jovan-MS-module-ii/about",component:P}),c.a.createElement(o.a,{path:"/Jovan-MS-module-ii/contact",component:O}),c.a.createElement(o.a,{path:"/Jovan-MS-module-ii*",render:function(){return c.a.createElement("img",{alt:"404",src:"https://crear.ch/404_page.svg"})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(v.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null),c.a.createElement(Y,null),c.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d41add80.chunk.js.map