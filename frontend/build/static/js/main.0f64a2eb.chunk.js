(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{195:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),s=(a(88),a(89),a(8)),i=a(3),o=a(12),m=a(13),u=a(15),d=a(16),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"home-content"},c.a.createElement("div",{className:"home-content__head"},c.a.createElement("div",null,c.a.createElement("img",{src:"/static/images/baby.jpg"})),c.a.createElement("div",{className:"home-content__title"},c.a.createElement("h2",{className:"home-content__title-text"},"\u0414\u0438\u043e\u0440\u0430\u043c\u0449\u0438\u043a-\u043c\u043e\u0434\u0435\u043b\u0438\u0441\u0442"),c.a.createElement("div",{className:"home-content__name"},"\u041c\u043e\u0438\u0441\u0435\u0439 \u0421\u043e\u043b\u043e\u043c\u043e\u043d\u043e\u0432\u0438\u0447"),c.a.createElement("div",{className:"contacts__content"},c.a.createElement("div",null,"anatanatov@mail.ru"),c.a.createElement("div",null,"+79119543437")))),c.a.createElement("div",{className:"home-content__text"},"\u0417\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u043c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0434\u0438\u043e\u0440\u0430\u043c, \u043c\u0430\u043a\u0435\u0442\u043e\u0432 \u0438 \u043c\u043e\u0434\u0435\u043b\u0435\u0439. \u0414\u0435\u043b\u0430\u044e \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u0437\u0430\u043a\u0430\u0437."))}}]),a}(c.a.Component),E=a(26),g=a.n(E),h=a(70),b=a.n(h),v={border:"1px solid #ccc",background:"#fff",fontSize:"1em",padding:0,margin:5,width:30,height:20,textAlign:"center"},f=function(e){var t=e.itemsperpage,a=e.nocolumns,n=e.items,r=e.pagesspan;return c.a.createElement(b.a,{itemsperpage:t,nocolumns:a,items:n,pagesspan:r},(function(e){var t=e.getBackButtonProps,r=e.getFastBackButtonProps,l=e.getFwdButtonProps,s=e.getFastFwdButtonProps,i=e.getSelPageButtonProps,o=(e.nopages,e.inipagearray),m=e.pagesforarray,u=e.currentpage,d=e.noitems,p=e.initialitem,E=e.lastitem,g=e.goBackBdisabled,h=e.goFastBackBdisabled,b=e.goFwdBdisabled,f=e.goFastFwdBdisabled;return c.a.createElement("tbody",null,c.a.createElement("tr",{className:"row"},n.slice(p,E).map((function(e,t){return e}))),d>0?[c.a.createElement("tr",{key:"pagingrow100"},c.a.createElement("td",{colSpan:a,style:{textAlign:"center"}},c.a.createElement("button",Object.assign({style:v},r(),{disabled:h}),"<<"),c.a.createElement("button",Object.assign({style:v},t(),{disabled:g}),"<"),Array.from({length:m},(function(e,t){return t+o})).map((function(e){return c.a.createElement("a",{href:"#dioramas",key:e},c.a.createElement("button",Object.assign({},i({page:e}),{disabled:u===e}),e))})),c.a.createElement("button",Object.assign({style:v},l(),{disabled:b}),">"),c.a.createElement("button",Object.assign({style:v},s(),{disabled:f}),">>")))]:null)}))},y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).refreshList=function(){g.a.get("http://localhost:8000/api/dioramas/").then((function(e){return n.setState({layoutsList:e.data})})).catch((function(e){return console.log(e)}))},n.renderItems=function(){return n.state.layoutsList.map((function(e){return c.a.createElement("td",{className:"card",key:e.id},c.a.createElement("div",{className:"img-area"},c.a.createElement(s.b,{to:"/dioramas/"+e.id},c.a.createElement("img",{src:"/static"+e.imgpath.split(";")[0],className:"img-list",alt:"..."}))),c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},e.title),c.a.createElement(s.b,{to:"/dioramas/"+e.id,className:"btn-more"}," \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 ")))}))},n.state={layoutsList:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h2",{id:"dioramas"},"\u041c\u043e\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"),c.a.createElement("table",{className:"table table-hover"},c.a.createElement(f,{itemsperpage:12,nocolumns:0,items:this.renderItems(),pagesspan:5}))),c.a.createElement("div",null))}}]),a}(c.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"contacts"},c.a.createElement("h2",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),c.a.createElement("div",{className:"contacts__content"},c.a.createElement("div",null,"anatanatov@mail.ru"),c.a.createElement("div",null,"+79119543437")))}}]),a}(c.a.Component),N=a(72),j=a(43),w=a(73),O=a(30);var x=function(e){var t=Object(n.useState)(0),a=Object(j.a)(t,2),r=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(j.a)(s,2),o=i[0],m=i[1],u=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;l(a),m(!0)}),[]),d=e.images.map((function(e){return{src:"/static/images/"+e,width:1,height:1}}));return c.a.createElement("div",null,c.a.createElement(w.a,{photos:d,onClick:u}),c.a.createElement(O.b,null,o?c.a.createElement(O.a,{onClose:function(){l(0),m(!1)}},c.a.createElement(O.c,{currentIndex:r,views:d.map((function(e){return Object(N.a)({},e,{srcset:e.srcSet,caption:e.title})}))})):null))},B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).refreshList=function(e){g.a.get("http://localhost:8000/api/dioramas/").then((function(e){return n.setState({layoutsList:e.data[n.props.match.params.id-1]})})).catch((function(e){return console.log(e)}))},n.renderItems=function(){return c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"back-link"},c.a.createElement(s.b,{to:"/dioramas"},"Back")),c.a.createElement("h2",{className:"card-title"},n.state.layoutsList.title),c.a.createElement(x,{images:n.editFirstImage()}),"\u0427\u0438\u0440\u043a\u0435\u0439\u0441\u043a\u0430\u044f \u0413\u042d\u0421"===n.state.layoutsList.title?c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/hcYYYt-6zYA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):"",c.a.createElement("p",{className:"card-text"},n.state.layoutsList.description))},n.state={layoutsList:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"getImage",value:function(){return String(this.state.layoutsList.imgpath).split(";")}},{key:"editFirstImage",value:function(){var e=this.getImage()[0].split("/"),t=this.getImage();return t[0]=e[2],t}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,this.renderItems()))}}]),a}(c.a.Component),_=a(77),F=a.n(_);var L=function(){return c.a.createElement(s.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("header",{id:"header",className:"header"},c.a.createElement("div",{className:"headdiv"},c.a.createElement("h1",null,"\u0414\u0438\u043e\u0440\u0430\u043c\u044b \u043d\u0430 \u0437\u0430\u043a\u0430\u0437"),c.a.createElement("img",{src:"/static/images/bgimages/mountains.svg",alt:"mountains"}),c.a.createElement("div",{className:"icons"},c.a.createElement(s.b,{to:"/vk",exact:"true",className:"icon-link",target:"_blank"},c.a.createElement("img",{src:"/static/images/icons/vk.svg",alt:"vk"})),c.a.createElement(s.b,{to:"/instagram",exact:"true",className:"icon-link",target:"_blank"},c.a.createElement("img",{src:"/static/images/icons/inst.svg",alt:"instagram"}))))),c.a.createElement("main",{className:"main"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:p}),c.a.createElement(i.a,{exact:!0,path:"/dioramas",component:y}),c.a.createElement(i.a,{exact:!0,path:"/contacts",component:k})),c.a.createElement(i.a,{exact:!0,path:"/dioramas/:id",component:B}),c.a.createElement(i.a,{path:"/vk",component:function(){return window.location="https://vk.com/id8360008",null}}),c.a.createElement(i.a,{path:"/instagram",component:function(){return window.location="https://instagram.com/",null}})),c.a.createElement("nav",{role:"navigation",id:"nav"},c.a.createElement(F.a,{upTolerance:1},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.c,{to:"/",exact:!0},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),c.a.createElement("li",null,c.a.createElement(s.c,{to:"/dioramas",exact:!0},"\u0420\u0430\u0431\u043e\u0442\u044b")),c.a.createElement("li",null,c.a.createElement(s.c,{to:"/contacts",exact:!0},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))))),c.a.createElement("footer",{className:"footer"},"This is Footer",c.a.createElement("br",null),"This is Footer",c.a.createElement("br",null),"This is Footer"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,t,a){e.exports=a(195)},88:function(e,t,a){},89:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.0f64a2eb.chunk.js.map