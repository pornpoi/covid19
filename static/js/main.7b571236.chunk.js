(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},105:function(e,a,t){e.exports=t(252)},111:function(e,a,t){},112:function(e,a,t){},209:function(e,a){e.exports={dashboard24HoursPerformanceChart:{data:e=>({labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],datasets:[{borderColor:"#6bd098",backgroundColor:"#6bd098",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[300,310,316,322,330,326,333,345,338,354]},{borderColor:"#f17e5d",backgroundColor:"#f17e5d",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[320,340,365,360,370,385,390,384,408,420]},{borderColor:"#fcc468",backgroundColor:"#fcc468",pointRadius:0,pointHoverRadius:0,borderWidth:3,data:[370,394,415,409,425,445,460,450,478,484]}]}),options:{legend:{display:!1},tooltips:{enabled:!1},scales:{yAxes:[{ticks:{fontColor:"#9f9f9f",beginAtZero:!1,maxTicksLimit:5},gridLines:{drawBorder:!1,zeroLineColor:"#ccc",color:"rgba(255,255,255,0.05)"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent",display:!1},ticks:{padding:20,fontColor:"#9f9f9f"}}]}}},dashboardEmailStatisticsChart:{data:e=>({labels:[1,2,3],datasets:[{label:"Emails",pointRadius:0,pointHoverRadius:0,backgroundColor:["#e3e3e3","#4acccd","#fcc468","#ef8157"],borderWidth:0,data:[342,480,530,120]}]}),options:{legend:{display:!1},pieceLabel:{render:"percentage",fontColor:["white"],precision:2},tooltips:{enabled:!1},scales:{yAxes:[{ticks:{display:!1},gridLines:{drawBorder:!1,zeroLineColor:"transparent",color:"rgba(255,255,255,0.05)"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(255,255,255,0.1)",zeroLineColor:"transparent"},ticks:{display:!1}}]}}},dashboardNASDAQChart:{data:{labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],datasets:[{data:[0,19,15,20,30,40,40,50,25,30,50,70],fill:!1,borderColor:"#fbc658",backgroundColor:"transparent",pointBorderColor:"#fbc658",pointRadius:4,pointHoverRadius:4,pointBorderWidth:8},{data:[0,5,10,12,20,27,30,34,42,45,55,63],fill:!1,borderColor:"#51CACF",backgroundColor:"transparent",pointBorderColor:"#51CACF",pointRadius:4,pointHoverRadius:4,pointBorderWidth:8}]},options:{legend:{display:!1,position:"top"}}}}},252:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(37),c=t.n(l),s=t(11),o=t(19),i=(t(110),t(111),t(112),t(113),t(38)),m=t(18),d=t(259),p=t(260),u=t(261),g=t(262),E=t(263),b=t(264),h=t(265),v=t(266),f=t(98),N=t(267),w=t(268),C=t(269),x=t(271),k=t(272),y=t(270),O=t(29),S=t.n(O),R=t(52),A=t(57),L=(t(115),t(253)),T=t(254),D=t(255),W=t(256),B=t(257),j=t(258),H=(t(209),t(53)),z=t.n(H);var J=[{path:"/dashboard",name:"Dashboard",icon:"nc-icon nc-bank",component:()=>{const e=Object(n.useState)({}),a=Object(A.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)({}),s=Object(A.a)(c,2),o=(s[0],s[1]),i=function(){var e=Object(R.a)(S.a.mark(function e(){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("http://covid19.th-stat.com/api/open/today");case 3:a=e.sent,console.log(a.data),l(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(R.a)(S.a.mark(function e(){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("http://covid19.th-stat.com/api/open/timeline");case 3:a=e.sent,console.log(a.data),o(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(()=>(i(),m(),()=>{console.log("clenShop")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content"},r.a.createElement(L.a,null,r.a.createElement(T.a,{lg:"3",md:"6",sm:"6"},r.a.createElement(D.a,{className:"card-stats"},r.a.createElement(W.a,null,r.a.createElement(L.a,null,r.a.createElement(T.a,{md:"4",xs:"5"},r.a.createElement("div",{className:"icon-big text-center icon-warning"},r.a.createElement("i",{className:"nc-icon nc-globe text-warning"}))),r.a.createElement(T.a,{md:"8",xs:"7"},r.a.createElement("div",{className:"numbers"},r.a.createElement("p",{className:"card-category"},"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21"),r.a.createElement(B.a,{tag:"p"},t.NewConfirmed),r.a.createElement("p",null))))),r.a.createElement(j.a,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"stats"},r.a.createElement("i",{className:"fas fa-sync-alt"})," \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e13 : ",t.UpdateDate)))),r.a.createElement(T.a,{lg:"3",md:"6",sm:"6"},r.a.createElement(D.a,{className:"card-stats"},r.a.createElement(W.a,null,r.a.createElement(L.a,null,r.a.createElement(T.a,{md:"4",xs:"5"},r.a.createElement("div",{className:"icon-big text-center icon-warning"},r.a.createElement("i",{className:"nc-icon nc-money-coins text-success"}))),r.a.createElement(T.a,{md:"8",xs:"7"},r.a.createElement("div",{className:"numbers"},r.a.createElement("p",{className:"card-category"},"\u0e1c\u0e39\u0e49\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d\u0e23\u0e27\u0e21"),r.a.createElement(B.a,{tag:"p"},t.Confirmed),r.a.createElement("p",null))))),r.a.createElement(j.a,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"stats"},r.a.createElement("i",{className:"far fa-calendar"})," \u0e2a\u0e16\u0e34\u0e15\u0e34\u0e15\u0e34\u0e14\u0e40\u0e0a\u0e37\u0e49\u0e2d (\u0e40\u0e1e\u0e34\u0e48\u0e21/\u0e25\u0e14) : ",t.NewHospitalized)))),r.a.createElement(T.a,{lg:"3",md:"6",sm:"6"},r.a.createElement(D.a,{className:"card-stats"},r.a.createElement(W.a,null,r.a.createElement(L.a,null,r.a.createElement(T.a,{md:"4",xs:"5"},r.a.createElement("div",{className:"icon-big text-center icon-warning"},r.a.createElement("i",{className:"nc-icon nc-vector text-danger"}))),r.a.createElement(T.a,{md:"8",xs:"7"},r.a.createElement("div",{className:"numbers"},r.a.createElement("p",{className:"card-category"},"\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2b\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27"),r.a.createElement(B.a,{tag:"p"},t.Recovered),r.a.createElement("p",null))))),r.a.createElement(j.a,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"stats"},r.a.createElement("i",{className:"far fa-clock"}),"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e23\u0e31\u0e01\u0e29\u0e32\u0e2d\u0e35\u0e01 : ",t.Hospitalized)))),r.a.createElement(T.a,{lg:"3",md:"6",sm:"6"},r.a.createElement(D.a,{className:"card-stats"},r.a.createElement(W.a,null,r.a.createElement(L.a,null,r.a.createElement(T.a,{md:"4",xs:"5"},r.a.createElement("div",{className:"icon-big text-center icon-warning"},r.a.createElement("i",{className:"nc-icon nc-favourite-28 text-primary"}))),r.a.createElement(T.a,{md:"8",xs:"7"},r.a.createElement("div",{className:"numbers"},r.a.createElement("p",{className:"card-category"},"\u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e40\u0e1e\u0e34\u0e48\u0e21"),r.a.createElement(B.a,{tag:"p"},t.NewDeaths),r.a.createElement("p",null))))),r.a.createElement(j.a,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"stats"},r.a.createElement("i",{className:"fas fa-sync-alt"})," \u0e40\u0e2a\u0e35\u0e22\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e23\u0e27\u0e21 : ",t.Deaths)))))))},layout:"/admin"}];var P=class extends r.a.Component{constructor(e){super(e),this.state={isOpen:!1,dropdownOpen:!1,color:"transparent"},this.toggle=this.toggle.bind(this),this.dropdownToggle=this.dropdownToggle.bind(this),this.sidebarToggle=r.a.createRef()}toggle(){this.state.isOpen?this.setState({color:"transparent"}):this.setState({color:"dark"}),this.setState({isOpen:!this.state.isOpen})}dropdownToggle(e){this.setState({dropdownOpen:!this.state.dropdownOpen})}getBrand(){return"Dashboard : Covid 19 Thailand"}openSidebar(){document.documentElement.classList.toggle("nav-open"),this.sidebarToggle.current.classList.toggle("toggled")}updateColor(){window.innerWidth<993&&this.state.isOpen?this.setState({color:"dark"}):this.setState({color:"transparent"})}componentDidMount(){window.addEventListener("resize",this.updateColor.bind(this))}componentDidUpdate(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&(document.documentElement.classList.toggle("nav-open"),this.sidebarToggle.current.classList.toggle("toggled"))}render(){return r.a.createElement(d.a,{color:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"dark":this.state.color,expand:"lg",className:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"navbar-absolute fixed-top":"navbar-absolute fixed-top "+("transparent"===this.state.color?"navbar-transparent ":"")},r.a.createElement(p.a,{fluid:!0},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement("div",{className:"navbar-toggle"},r.a.createElement("button",{type:"button",ref:this.sidebarToggle,className:"navbar-toggler",onClick:()=>this.openSidebar()},r.a.createElement("span",{className:"navbar-toggler-bar bar1"}),r.a.createElement("span",{className:"navbar-toggler-bar bar2"}),r.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),r.a.createElement(u.a,{href:"/"},this.getBrand())),r.a.createElement(g.a,{onClick:this.toggle},r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),r.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),r.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0,className:"justify-content-end"},r.a.createElement("form",null,r.a.createElement(b.a,{className:"no-border"},r.a.createElement(h.a,{placeholder:"Search..."}),r.a.createElement(v.a,{addonType:"append"},r.a.createElement(f.a,null,r.a.createElement("i",{className:"nc-icon nc-zoom-split"}))))),r.a.createElement(N.a,{navbar:!0},r.a.createElement(w.a,null,r.a.createElement(m.a,{to:"#pablo",className:"nav-link btn-magnify"},r.a.createElement("i",{className:"nc-icon nc-layout-11"}),r.a.createElement("p",null,r.a.createElement("span",{className:"d-lg-none d-md-block"},"Stats")))),r.a.createElement(C.a,{nav:!0,isOpen:this.state.dropdownOpen,toggle:e=>this.dropdownToggle(e)},r.a.createElement(x.a,{caret:!0,nav:!0},r.a.createElement("i",{className:"nc-icon nc-bell-55"}),r.a.createElement("p",null,r.a.createElement("span",{className:"d-lg-none d-md-block"},"Some Actions"))),r.a.createElement(k.a,{right:!0},r.a.createElement(y.a,{tag:"a"},"Action"),r.a.createElement(y.a,{tag:"a"},"Another Action"),r.a.createElement(y.a,{tag:"a"},"Something else here"))),r.a.createElement(w.a,null,r.a.createElement(m.a,{to:"#pablo",className:"nav-link btn-rotate"},r.a.createElement("i",{className:"nc-icon nc-settings-gear-65"}),r.a.createElement("p",null,r.a.createElement("span",{className:"d-lg-none d-md-block"},"Account"))))))))}};var M,U=class extends r.a.Component{render(){return r.a.createElement("footer",{className:"footer"+(this.props.default?" footer-default":"")},r.a.createElement(p.a,{fluid:!!this.props.fluid},r.a.createElement(L.a,null,r.a.createElement("nav",{className:"footer-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.creative-tim.com",target:"_blank"},"Creative Tim")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://blog.creative-tim.com",target:"_blank"},"Blog")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.creative-tim.com/license",target:"_blank"},"Licenses")))),r.a.createElement("div",{className:"credits ml-auto"},r.a.createElement("div",{className:"copyright"},"\xa9 ",1900+(new Date).getYear(),", made with"," ",r.a.createElement("i",{className:"fa fa-heart heart"})," by Creative Tim")))))}},F=t(104),_=t.n(F);var I=class extends r.a.Component{constructor(e){super(e),this.activeRoute.bind(this),this.sidebar=r.a.createRef()}activeRoute(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}componentDidMount(){navigator.platform.indexOf("Win")>-1&&(M=new i.a(this.sidebar.current,{suppressScrollX:!0,suppressScrollY:!1}))}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&M.destroy()}render(){return r.a.createElement("div",{className:"sidebar","data-color":this.props.bgColor,"data-active-color":this.props.activeColor},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"https://www.creative-tim.com",className:"simple-text logo-mini"},r.a.createElement("div",{className:"logo-img"},r.a.createElement("img",{src:_.a,alt:"react-logo"}))),r.a.createElement("a",{href:"https://www.creative-tim.com",className:"simple-text logo-normal"},"COVID 19 Report")),r.a.createElement("div",{className:"sidebar-wrapper",ref:this.sidebar},r.a.createElement(N.a,null,this.props.routes.map((e,a)=>r.a.createElement("li",{className:this.activeRoute(e.path)+(e.pro?" active-pro":""),key:a},r.a.createElement(m.b,{to:e.layout+e.path,className:"nav-link",activeClassName:"active"},r.a.createElement("i",{className:e.icon}),r.a.createElement("p",null,e.name)))))))}};t(101);var Y;var Q=class extends r.a.Component{constructor(e){super(e),this.handleActiveClick=(e=>{this.setState({activeColor:e})}),this.handleBgClick=(e=>{this.setState({backgroundColor:e})}),this.state={backgroundColor:"black",activeColor:"info"},this.mainPanel=r.a.createRef()}componentDidMount(){navigator.platform.indexOf("Win")>-1&&(Y=new i.a(this.mainPanel.current),document.body.classList.toggle("perfect-scrollbar-on"))}componentWillUnmount(){navigator.platform.indexOf("Win")>-1&&(Y.destroy(),document.body.classList.toggle("perfect-scrollbar-on"))}componentDidUpdate(e){"PUSH"===e.history.action&&(this.mainPanel.current.scrollTop=0,document.scrollingElement.scrollTop=0)}render(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(I,Object.assign({},this.props,{routes:J,bgColor:this.state.backgroundColor,activeColor:this.state.activeColor})),r.a.createElement("div",{className:"main-panel",ref:this.mainPanel},r.a.createElement(P,this.props),r.a.createElement(o.d,null,J.map((e,a)=>r.a.createElement(o.b,{path:e.layout+e.path,component:e.component,key:a}))),r.a.createElement(U,{fluid:!0})))}};const V=Object(s.a)();c.a.render(r.a.createElement(o.c,{history:V},r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/admin",render:e=>r.a.createElement(Q,e)}),r.a.createElement(o.a,{to:"/admin/dashboard"}))),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.7b571236.chunk.js.map