(this["webpackJsonpcard-frontend"]=this["webpackJsonpcard-frontend"]||[]).push([[0],{106:function(e,t,a){e.exports=a(122)},111:function(e,t,a){},115:function(e,t,a){e.exports=a.p+"static/media/bulb-logo.bd730b9d.png"},116:function(e,t,a){e.exports=a.p+"static/media/loginAnimation.0fd658ff.gif"},120:function(e,t,a){e.exports=a.p+"static/media/bulb-logo.bd730b9d.png"},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),r=a.n(i),s=(a(111),a(12)),l=a(13),c=a(14),u=a(15),m=a(184),d=a(29),g=a(160),h=a(161),p=a(187),f=a(125),w=a(4),S=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){e.preventDefault(),a.str_url="http://127.0.0.1:8000/rest-auth/login/",fetch(a.str_url,{method:"POST",body:JSON.stringify({username:a.state.username.toString(),password:a.state.password.toString()}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){e.key?(a.setState({token:e.key}),alert("Correct Username or Password"),a.props.formClick(a.state.token)):alert("Incorrect Username or Password")}))},a.handleNameChange=function(e){var t=e.target.value;a.setState({name:t})},a.handleEmailChange=function(e){var t=e.target.value;a.setState({username:t})},a.handlePasswordChange=function(e){var t=e.target.value;a.setState({password:t})},a.handleRegister=function(e){a.setState({token:"0"}),e.preventDefault(),a.props.formClick(a.state.token),a.props.toRegistration()},a.state={name:"",username:"",password:"",token:""},a.str_url="",a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(m.a,{className:e.main},o.a.createElement("div",{className:e.Login},o.a.createElement("div",{className:e.center},o.a.createElement("img",{className:e.logo,src:a(115),alt:"disco logo"})),o.a.createElement(d.a,{className:e.title,align:"center"},"Sign in to Disco"),o.a.createElement(g.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},o.a.createElement(g.a,{item:!0,xs:3},o.a.createElement(h.a,{className:e.container},o.a.createElement("form",{className:e.form,onSubmit:this.handleChange},o.a.createElement(p.a,{className:e.input,placeholder:"name",type:"text",name:"name",value:this.state.value,onChange:this.handleNameChange}),o.a.createElement(p.a,{className:e.input,placeholder:"username or email",type:"text",name:"username",value:this.state.value,onChange:this.handleEmailChange}),o.a.createElement(p.a,{className:e.input,placeholder:"password",id:"password",type:"text",name:"password",value:this.state.value,onChange:this.handlePasswordChange}),o.a.createElement("div",{className:e.center},o.a.createElement(f.a,{className:e.button,type:"submit",value:"Submit"},"Sign in"),o.a.createElement(f.a,{className:e.button,onClick:this.handleRegister},"Register Here!"))))))))}}]),n}(n.Component),k=Object(w.a)((function(e){return{main:{fontFamily:"Montserrat"},center:{textAlign:"center"},input:{margin:"10px",color:"#0e1428",fontSize:"20px",padding:"5px",width:"90%"},formName:{textAlign:"center",fontFamily:"Montserrat",fontSize:"35pt",color:"#0e1428"},logo:{justify:"center",width:"15%",height:"15%"},title:{fontFamily:"Montserrat",fontSize:"40pt",color:"#0e1428"},container:{borderColor:"#98C1D9",borderWidth:"3px",borderStyle:"solid",minWidth:"100%",marginTop:"10%",borderRadius:"5px"},button:{fontSize:"17pt",fontFamily:"Montserrat",backgroundColor:"#EE6C4D",margin:"5%",textAlign:"center"}}}))(S),b=a(77),v=a.n(b),E=a(78),C=a.n(E),y=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.stopAnimation()}),3200)}},{key:"render",value:function(){return o.a.createElement("div",{className:C.a.fadeOut},o.a.createElement("img",{src:a(116),alt:"loading..."}))}}]),n}(n.Component),O=a(162),N=a(163),j=a(165),x=a(164),T=Object(O.a)({root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});function I(e){var t=T();if(window.localStorage.getItem("login"))return o.a.createElement(N.a,{className:t.root,variant:"outlined"},o.a.createElement(x.a,null,o.a.createElement(d.a,{className:t.title,color:"textSecondary",gutterBottom:!0},e.name),o.a.createElement(d.a,{variant:"body2",component:"p"},e.description),o.a.createElement(d.a,{className:t.pos,color:"textSecondary"},"Number of skills in course: ",e.num_skills),o.a.createElement(d.a,{className:t.pos,color:"textSecondary"},"Number of cards in course: ",e.num_cards)),o.a.createElement(j.a,null,o.a.createElement(f.a,{className:t.button,variant:"contained",color:"secondary",size:"small",onClick:function(t){return e.clickHandler(t,e.id)}},"Let's Learn")))}var _=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).selectCourse=function(e){n.setState({selection:e})},n.state={selection:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.courses.map((function(t){return o.a.createElement(I,{key:t.id,id:t.id,name:t.name,description:t.description,num_skills:t.num_skills,num_cards:t.num_cards,clickHandler:e.props.clickHandler,token:e.props.token})}));if(window.localStorage.getItem("login"))return o.a.createElement(m.a,null,t)}}]),a}(n.Component),F=a(11),L=a(37),V=a(168),R=a(166),D=a(167),W=a(186),z=Object(O.a)((function(e){return{root:{maxWidth:345},box:{border:1,backgroundColor:"#D2E4EE",padding:"5% 25%",textAlign:"center",margin:5,borderRadius:"10px"}}}));function J(e){var t=o.a.useState({ticked:!1}),a=Object(F.a)(t,2),n=a[0],i=a[1],r=n.ticked,s=z();return o.a.createElement(m.a,{className:s.box},o.a.createElement(R.a,{className:"skill task-wrapper"},o.a.createElement(D.a,null,o.a.createElement(V.a,{control:o.a.createElement(W.a,{checked:r,onClick:function(t){return e.skillUpdate(t,e.id)},onChange:function(e){i(r?Object(L.a)({},n,{ticked:!1}):Object(L.a)({},n,{ticked:!0}))},name:"checked"}),label:e.name}))))}Object(O.a)((function(e){return{root:{display:"flex",flexDirection:"column"},formControl:{margin:e.spacing(3)}}}));function A(e){var t=Object(O.a)((function(e){return{root:{maxWidth:345}}})),a=o.a.useState({title:"SkillList"}),n=Object(F.a)(a,2),i=(n[0],n[1],t(),e.skills.map((function(t){return o.a.createElement(J,{key:t.id,id:t.id,name:t.name,description:t.description,num_levels:t.num_levels,num_cards:t.num_cards,course:t.course,skillUpdate:e.skillUpdate,token:e.token})})));if(window.localStorage.getItem("login")&&"SkillSelect"===JSON.parse(window.localStorage.getItem("view")).subpage)return o.a.createElement(D.a,null,i)}var M=a(170),H=a(79),P=a.n(H),U=a(173),B=a(172),G=a(92),q=a(171),K=a(175),X=a(174),Y=["Select Practice Time","5 minutes","15 minutes","30 minutes","45 minutes","1 hour"];function $(e){var t=Object(n.useState)([]),a=Object(F.a)(t,2),i=a[0],r=a[1],s=Object(n.useState)(!1),l=Object(F.a)(s,2),c=l[0],u=l[1],m=o.a.useRef(null),d=Object(n.useState)(0),h=Object(F.a)(d,2),p=h[0],w=h[1],S=function(e){m.current&&m.current.contains(e.target)||u(!1)};if(Object(n.useEffect)((function(){fetch("http://127.0.0.1:8000/skills/".concat(e.course),{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Token "+e.token}}).then((function(e){return e.json()})).then((function(e){r((function(){return e}))}))}),[e]),window.localStorage.getItem("login")===e.token)return o.a.createElement("main",{className:"d-flex flex-column align-items-center"},o.a.createElement("div",{className:"d-flex flex-column align-items-center"},o.a.createElement("h1",null,"Select which skills you would like to practice."),o.a.createElement(A,{skills:i,skillUpdate:e.skillUpdate,token:e.token})),o.a.createElement(g.a,{container:!0,direction:"column",alignItems:"center"},o.a.createElement(g.a,{item:!0,xs:12},o.a.createElement(M.a,{variant:"contained",color:"primary",ref:m,"aria-label":"split button"},o.a.createElement(f.a,null,Y[p]),o.a.createElement(f.a,{color:"primary",size:"small","aria-controls":c?"split-button-menu":void 0,"aria-expanded":c?"true":void 0,"aria-label":"select merge strategy","aria-haspopup":"menu",onClick:function(){u((function(e){return!e}))}},o.a.createElement(P.a,null))),o.a.createElement(q.a,{open:c,anchorEl:m.current,role:void 0,transition:!0,disablePortal:!0},(function(t){var a=t.TransitionProps,n=t.placement;return o.a.createElement(B.a,Object.assign({},a,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),o.a.createElement(G.a,null,o.a.createElement(U.a,{onClickAway:S},o.a.createElement(X.a,{id:"split-button-menu"},Y.map((function(t,a){return o.a.createElement(K.a,{key:t,selected:a===p,onClick:function(t){return function(t,a){switch(w(a),u(!1),a){case 0:e.time(t,0);break;case 1:e.time(t,5);break;case 2:e.time(t,15);break;case 3:e.time(t,30);break;case 4:e.time(t,45);break;case 5:e.time(t,60)}}(t,a)}},t)}))))))})))),o.a.createElement("button",{onClick:e.doneClick},"Done"))}var Q=a(17),Z=a(3),ee=a(176),te=a(177),ae=a(189),ne=a(169),oe=a(82),ie=a.n(oe),re=a(83),se=a.n(re),le=a(81),ce=a.n(le),ue=a(90),me=Object(ue.a)({palette:{primary:{main:"#3D5A80",light:"#6b87b0",dark:"#093153"},secondary:{main:"#EE6C4D",light:"#ff9d7a",dark:"#b63c23"},disabled:{main:"#F2F4F7",light:"#ffffff",dark:"#bfc1c4"},info:{main:"#98c1d9",light:"#caf4ff",disabled:"#6891a7"},disco:{main:"#E0FBFC",light:"#ffffff",dark:"#aec8c9"},charm:{main:"#293241",light:"#525b6c",dark:"#000a1b"}},typography:{htmlFontSize:16,fontFamily:0,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,h1:{fontFamily:0,fontWeight:300,fontSize:"6rem",lineHeight:1.167,letterSpacing:"-0.01562em"},h2:{fontFamily:0,fontWeight:300,fontSize:"3.75rem",lineHeight:1.2,letterSpacing:"-0.00833em"},h3:{fontFamily:0,fontWeight:400,fontSize:"3rem",lineHeight:1.167,letterSpacing:"0em"},h4:{fontFamily:0,fontWeight:400,fontSize:"2.125rem",lineHeight:1.235,letterSpacing:"0.00735em"},h5:{fontFamily:0,fontWeight:400,fontSize:"1.5rem",lineHeight:1.334,letterSpacing:"0em"},h6:{fontFamily:0,fontWeight:500,fontSize:"1.25rem",lineHeight:1.6,letterSpacing:"0.0075em"},subtitle1:{fontFamily:0,fontWeight:400,fontSize:"1rem",lineHeight:1.75,letterSpacing:"0.00938em"},subtitle2:{fontFamily:0,fontWeight:500,fontSize:"0.875rem",lineHeight:1.57,letterSpacing:"0.00714em"},body1:{fontFamily:0,fontWeight:400,fontSize:"1rem",lineHeight:1.5,letterSpacing:"0.00938em"},body2:{fontFamily:0,fontWeight:400,fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em"},button:{fontFamily:0,fontWeight:500,fontSize:"0.875rem",lineHeight:1.75,letterSpacing:"0.02857em",textTransform:"uppercase"},caption:{fontFamily:0,fontWeight:400,fontSize:"0.75rem",lineHeight:1.66,letterSpacing:"0.03333em"},overline:{fontFamily:0,fontWeight:400,fontSize:"0.75rem",lineHeight:2.66,letterSpacing:"0.08333em",textTransform:"uppercase"}}}),de=Object(O.a)((function(e){return{root:{maxWidth:345,backgroundColor:"#D2E4EE"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:me.palette.primary.main},favorite:{textAlign:"center"}}}));function ge(e){var t=o.a.useState({showMore:!1,favorited:"False"!==e.is_favorited}),a=Object(F.a)(t,2),n=a[0],i=a[1],r=de();if(window.localStorage.getItem("login"))return o.a.createElement(N.a,{className:r.root},o.a.createElement(ee.a,{avatar:o.a.createElement(ae.a,{"aria-label":"card",className:r.avatar},"C"),action:o.a.createElement(ne.a,{"aria-label":"settings"},o.a.createElement(ce.a,null)),title:e.title}),o.a.createElement(x.a,null,o.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},e.content)),o.a.createElement(x.a,null,o.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},"Course: ",e.course," ",o.a.createElement("br",null),"Level: ",e.level)),o.a.createElement(j.a,{disableSpacing:!0},o.a.createElement(ne.a,{className:r.favorite},o.a.createElement(V.a,{control:o.a.createElement(ie.a,{checked:"True"===e.is_favorited,onClick:function(t){e.addToFavorites(t,e.id),n.favorited=!n.favorited},name:"favorited",color:n.favorited?"secondary":"disabled"})})),o.a.createElement(V.a,{control:o.a.createElement(W.a,{checked:"True"===e.is_complete,onChange:function(t){e.pressComplete(t,e.id)},name:"completed"}),label:"Completed"}),o.a.createElement(ne.a,{className:Object(Z.a)(r.expand,Object(Q.a)({},r.expandOpen,n.showMore)),onClick:function(e){console.log(n.showMore);var t=!1;n.showMore||(t=!0),i(Object(L.a)({},n,Object(Q.a)({},e.target.name,t))),console.log(t)},"aria-expanded":n.showMore,"aria-label":"show more",name:"showMore"},o.a.createElement(se.a,null))),o.a.createElement(te.a,{in:n.showMore,timeout:"auto",unmountOnExit:!0},o.a.createElement(x.a,null,o.a.createElement(d.a,{paragraph:!0},"Nothing here for now but eventually we will want to add this.props.description or something like that if it exists (will require a more robust dataset)"),o.a.createElement(d.a,{paragraph:!0},"We can add another paragraph here if we want! Even more instructions"),o.a.createElement(d.a,{paragraph:!0},"Room for yet ANOTHER paragraph! Material UI is really doing the most."))))}var he=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.cards.map((function(t){return o.a.createElement(ge,{key:t.id,id:t.id,title:t.title,course:t.course,skill:t.skill,level:t.level,duration:t.duration,view_count:t.view_count,content:t.content,is_complete:t.is_complete,is_favorited:t.is_favorited,pressComplete:e.props.completed,addToFavorites:e.props.favorited,token:e.props.token})}));if(window.localStorage.getItem("login"))return o.a.createElement("div",null,t)}}]),a}(n.Component),pe=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={cards:JSON.parse(window.localStorage.getItem("cards"))},n}return Object(l.a)(a,[{key:"handleComplete",value:function(e,t){var a=this;console.log(t),fetch("http://127.0.0.1:8000/cardprogress/".concat(t),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Token "+window.localStorage.getItem("login")}}).then((function(e){return e.status})).then((function(e){console.log("I AM HERE"),404===e?alert("Something went wrong, try again!"):a.refresh()}))}},{key:"handleFavorite",value:function(e,t){var a=this;fetch("http://127.0.0.1:8000/cardprogress/favorite/".concat(t),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Token "+window.localStorage.getItem("login")}}).then((function(e){return e.status})).then((function(e){404===e?alert("Something went wrong, try again!"):a.refresh()}))}},{key:"refresh",value:function(){var e=this;console.log("TIME = "+this.props.time.toString()),this.str_url="http://127.0.0.1:8000/cards/refresh/"+this.props.courseid.toString()+"/"+this.props.skills.toString()+"/"+this.props.time.toString(),console.log(window.localStorage.getItem("login")),fetch(this.str_url,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Token "+window.localStorage.getItem("login")}}).then((function(e){return e.json()})).then((function(t){console.log("REFRESH:"+JSON.stringify(t)),window.localStorage.setItem("cards",JSON.stringify(t)),e.setState({cards:t})}))}},{key:"componentDidMount",value:function(){var e=this;console.log("TIME = "+this.props.time.toString()),this.str_url="http://127.0.0.1:8000/cards/cardprogress/"+this.props.courseid.toString()+"/"+this.props.skills.toString()+"/"+this.props.time.toString(),fetch(this.str_url,{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Token "+window.localStorage.getItem("login")}}).then((function(e){return e.json()})).then((function(t){console.log("COMPONENT DID MOUNT:"+t),window.localStorage.setItem("cards",JSON.stringify(t)),e.setState({cards:t})}))}},{key:"render",value:function(){if(window.localStorage.getItem("login"))return o.a.createElement("main",null,o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(he,{cards:this.state.cards,completed:this.handleComplete.bind(this),favorited:this.handleFavorite.bind(this),token:this.props.token})))}}]),a}(n.Component),fe={main:"CourseWrapper",subpage:"CourseSelect"},we={main:"CourseWrapper",subpage:"SkillSelect"},Se={main:"CourseWrapper",subpage:"Deck"},ke=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={courses:JSON.parse(window.localStorage.getItem("courses")),skills:JSON.parse(window.localStorage.getItem("skills")),selectedCourse:JSON.parse(window.localStorage.getItem("selectedCourse")),time:JSON.parse(window.localStorage.getItem("time")),view:JSON.parse(window.localStorage.getItem("view")).subpage},n.selectedSkills=[],n.selectedTime=0,n}return Object(l.a)(a,[{key:"handleCourseClick",value:function(e,t){window.localStorage.setItem("view",JSON.stringify(we)),window.localStorage.setItem("selectedCourse",t),this.setState({view:JSON.parse(window.localStorage.getItem("view")).subpage,selectedCourse:t}),this.props.viewToSkills()}},{key:"skillSelection",value:function(e,t){-1!==this.selectedSkills.indexOf(t)?this.selectedSkills.splice(this.selectedSkills.indexOf(t),1):this.selectedSkills.push(t)}},{key:"handleDonePress",value:function(){window.localStorage.setItem("view",JSON.stringify(Se)),window.localStorage.setItem("skills",JSON.stringify(this.selectedSkills)),window.localStorage.setItem("time",this.selectedTime),this.setState({skills:this.selectedSkills,view:JSON.parse(window.localStorage.getItem("view")).subpage,time:this.selectedTime}),this.props.viewToDeck()}},{key:"timeSelection",value:function(e,t){this.selectedTime=t}},{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:8000/courses/",{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:"Token "+window.localStorage.getItem("login")}}).then((function(e){return e.json()})).then((function(t){window.localStorage.setItem("courses",JSON.stringify(t)),e.setState({courses:t})}))}},{key:"render",value:function(){var e=null;switch(this.props.courseReset?(this.state.view="CourseSelect",this.setState({token:this.state.token}),this.props.resetToCourse(),this.props.viewToCourse()):this.props.skillReset&&(this.state.view="SkillSelect",this.setState({token:this.state.token}),this.props.resetToSkill(),this.props.viewToSkills()),this.state.view){case"CourseSelect":window.localStorage.setItem("view",JSON.stringify(fe)),e=o.a.createElement("div",{className:"div"},o.a.createElement("h1",{className:"h1"},"What would you like to work on today?"),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(_,{courses:this.state.courses,clickHandler:this.handleCourseClick.bind(this),token:this.props.token})));break;case"SkillSelect":window.localStorage.setItem("view",JSON.stringify(we)),console.log("local storage : "+window.localStorage.getItem("view")),console.log("state view: "+this.state.view),e=o.a.createElement($,{skills:this.state.skills,skillUpdate:this.skillSelection.bind(this),doneClick:this.handleDonePress.bind(this),course:this.state.selectedCourse,token:this.props.token,time:this.timeSelection.bind(this)});break;case"Deck":null===JSON.parse(window.localStorage.getItem("cards"))&&(console.log("SETTING CARDS"),window.localStorage.setItem("cards",JSON.stringify([]))),console.log("local storage : "+window.localStorage.getItem("view")),console.log("state view: "+this.state.view),e=o.a.createElement(pe,{courseid:this.state.selectedCourse,skills:this.state.skills,token:window.localStorage.getItem("login"),time:this.state.time})}if(window.localStorage.getItem("login"))return o.a.createElement("main",null,e)}}]),a}(n.Component),be=(a(123),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){e.preventDefault(),a.state.password.toString()!==a.state.confirm.toString()?alert("Passwords do not match"):(console.log("position 1"),console.log(a.state.username),a.str_url="http://127.0.0.1:8000/register/"+a.state.username,fetch(a.str_url,{method:"POST",body:JSON.stringify({name:a.state.name.toString(),username:a.state.username.toString(),password:a.state.password.toString()}),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.status})).then((function(e){console.log(e),400===e?alert("Username already exists"):(console.log("position 2"),a.props.formClick(a.state.token),a.props.toLogin())})))},a.handleNameChange=function(e){var t=e.target.value;a.setState({name:t})},a.handleEmailChange=function(e){var t=e.target.value;a.setState({username:t})},a.handlePasswordChange=function(e){var t=e.target.value;a.setState({password:t})},a.handleConfirmPasswordChange=function(e){var t=e.target.value;a.setState({confirm:t})},a.state={name:"",username:"",password:"",confirm:"",token:""},a.str_url="",a}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(m.a,{className:e.main},o.a.createElement("div",{className:e.Login},o.a.createElement("div",{className:e.center},o.a.createElement("img",{className:e.logo,src:a(120),alt:"disco logo"})),o.a.createElement(d.a,{className:e.title,align:"center"},"Sign in to Disco"),o.a.createElement(g.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center"},o.a.createElement(g.a,{item:!0,xs:3},o.a.createElement(h.a,{className:e.container},o.a.createElement("form",{className:e.form,onSubmit:this.handleChange},o.a.createElement(p.a,{className:e.input,placeholder:"name",type:"text",name:"name",value:this.state.value,onChange:this.handleNameChange}),o.a.createElement(p.a,{className:e.input,placeholder:"username or email",type:"text",name:"username",value:this.state.value,onChange:this.handleEmailChange}),o.a.createElement(p.a,{className:e.input,placeholder:"password",id:"password",type:"text",name:"password",value:this.state.value,onChange:this.handlePasswordChange}),o.a.createElement(p.a,{className:e.input,placeholder:"Confirm password",id:"Confirm password",type:"text",name:"Confirm password",value:this.state.value,onChange:this.handleConfirmPasswordChange}),o.a.createElement("div",{className:e.center},o.a.createElement(f.a,{className:e.button,type:"submit",value:"Submit"},"Sign Up!"))))))))}}]),n}(n.Component)),ve=Object(w.a)((function(e){return{main:{fontFamily:"Montserrat"},center:{textAlign:"center"},input:{margin:"10px",color:"#0e1428",fontSize:"20px",padding:"5px",width:"90%"},formName:{textAlign:"center",fontFamily:"Montserrat",fontSize:"35pt",color:"#0e1428"},logo:{justify:"center",width:"15%",height:"15%"},title:{fontFamily:"Montserrat",fontSize:"40pt",color:"#0e1428"},container:{borderColor:"#98C1D9",borderWidth:"3px",borderStyle:"solid",minWidth:"100%",marginTop:"10%",borderRadius:"5px"},button:{fontSize:"17pt",fontFamily:"Montserrat",backgroundColor:"#EE6C4D",margin:"5%",textAlign:"center"}}}))(be),Ee=a(178),Ce=a(179),ye=a(185),Oe=a(180),Ne=a(127),je=a(128),xe=a(181),Te=a(182),Ie=a(25),_e=a(87),Fe=a.n(_e),Le=a(88),Ve=a.n(Le),Re=a(89),De=a.n(Re),We=a(84),ze=a.n(We),Je=a(86),Ae=a.n(Je),Me=a(85),He=a.n(Me),Pe=a(44),Ue=a.n(Pe),Be=a(51),Ge=a.n(Be),qe=Object(O.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(L.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),Ke=function(e){var t,a=e.parentCourse,n=e.parentCalendar,i=e.parentSettings,r=e.parentLogout,s=e.parentView,l=e.parentCourseView,c=e.parentSkill,u="2",m="3",d="4",g="5",h=qe(),p=Object(Ie.a)(),f=o.a.useState(!1),w=Object(F.a)(f,2),S=w[0],k=w[1],b=function(){k(!0)},v=function(){k(!1)},E=[{text:"Logout",icon:o.a.createElement(Ue.a,null),onClick:function(){return r()}}],C=[{text:"Course Select",icon:o.a.createElement(Ge.a,null),onClick:function(){return a()}},{text:"Logout",icon:o.a.createElement(Ue.a,null),onClick:function(){return r()}}],y=[{text:"Course Select",icon:o.a.createElement(Ge.a,null),onClick:function(){return a()}},{text:"Skill Select",icon:o.a.createElement(ze.a,null),onClick:function(){return c()}},{text:"Logout",icon:o.a.createElement(Ue.a,null),onClick:function(){return r()}}],O=[{text:"Course Select",icon:o.a.createElement(Ge.a,null),onClick:function(){return a()}},{text:"Account Settings",icon:o.a.createElement(He.a,null),onClick:function(){return i()}},{text:"Logout",icon:o.a.createElement(Ue.a,null),onClick:function(){return r()}}],N=[{text:"Course Select",icon:o.a.createElement(Ge.a,null),onClick:function(){return a()}},{text:"See Calender",icon:o.a.createElement(Ae.a,null),onClick:function(){return n()}},{text:"Logout",icon:o.a.createElement(Ue.a,null),onClick:function(){return r()}}],j=[];switch(s){case u:if("1"===l){j=C,t=function(){return b()};break}if("2"===l){j=y,t=function(){return b()};break}j=E,t=function(){return b()};break;case g:j=y,t=function(){return b()};break;case m:j=O,t=function(){return b()};break;case d:j=N,t=function(){return b()};break;default:j=[],t=function(){return v()}}return o.a.createElement("div",{className:h.root},o.a.createElement(Ee.a,{position:"fixed",className:Object(Z.a)(h.appBar,Object(Q.a)({},h.appBarShift,S))},o.a.createElement(Ce.a,null,o.a.createElement(ne.a,{color:"inherit","aria-label":"open drawer",onClick:t,edge:"start",className:Object(Z.a)(h.menuButton,S&&h.hide)},o.a.createElement(Fe.a,null)))),o.a.createElement(ye.a,{className:h.drawer,variant:"persistent",anchor:"left",open:S,classes:{paper:h.drawerPaper}},o.a.createElement("div",{className:h.drawerHeader},o.a.createElement(ne.a,{onClick:v},"ltr"===p.direction?o.a.createElement(Ve.a,null):o.a.createElement(De.a,null))),o.a.createElement(Oe.a,null),o.a.createElement(Ne.a,null,j.map((function(e,t){var a=e.text,n=e.icon,i=e.onClick;return o.a.createElement(je.a,{button:!0,key:a,onClick:i},n&&o.a.createElement(xe.a,null,n),o.a.createElement(Te.a,{primary:a}))})))))},Xe="0",Ye="1",$e="2",Qe="4",Ze=function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeLayoutState=function(e){window.localStorage.setItem("login",e),n.setState({token:e}),n.setState({layoutView:$e}),console.log("Set token: "+n.state.token),n.setState({layoutView:$e}),window.localStorage.setItem("layoutView",$e)},n.stopAnimation=function(){n.setState({layoutView:Ye}),window.localStorage.setItem("layoutView",Ye)},n.toRegistration=function(){n.setState({layoutView:Qe}),window.localStorage.setItem("layoutView",Qe)},n.toLogin=function(){n.setState({layoutView:Ye}),window.localStorage.setItem("layoutView",Ye)},n.resetToCourse=function(){n.setState({courseReset:!n.state.courseReset})},n.resetToSkill=function(){n.setState({skillReset:!n.state.skillReset})},n.goCalendar=function(){window.localStorage.setItem("layoutView",Xe),n.setState({layoutView:Xe}),console.log(n.state.layoutView+" CALENDER"),console.log(window.localStorage.getItem("layoutView")+" asjhfdlkasjdhflka"),console.log(n.state.layoutView+" CALENDER")},n.goSettings=function(){n.setState({layoutView:Xe}),window.localStorage.setItem("layoutView",Xe)},n.goLogout=function(){window.localStorage.clear(),n.setState({token:""}),n.setState({layoutView:Xe}),window.localStorage.setItem("layoutView",Xe)},n.viewToCourse=function(){n.setState({courseView:"0"}),window.localStorage.setItem("courseView","0")},n.viewToSkills=function(){n.setState({courseView:"1"}),window.localStorage.setItem("courseView","1")},n.viewToDeck=function(){n.setState({courseView:"2"}),window.localStorage.setItem("courseView","2")},n.state={layoutView:window.localStorage.getItem("layoutView")||Xe,token:window.localStorage.getItem("login"),courseReset:!1,skillReset:!1,courseView:window.localStorage.getItem("courseView")||"0"},n}return Object(l.a)(a,[{key:"render",value:function(){var e=null;if(window.localStorage.getItem("login")&&this.state.layoutView===$e)if("CourseWrapper"!==JSON.parse(window.localStorage.getItem("view")).main){console.log("is in herr");window.localStorage.setItem("view",JSON.stringify({main:"CourseWrapper",subpage:"CourseSelect"})),window.localStorage.setItem("courses",JSON.stringify([])),window.localStorage.setItem("skills",JSON.stringify([])),e=o.a.createElement(ke,{token:this.state.token,courseReset:this.state.courseReset,skillReset:this.state.skillReset,viewToCourse:this.viewToCourse.bind(this),viewToSkills:this.viewToSkills.bind(this),viewToDeck:this.viewToDeck.bind(this),resetToCourse:this.resetToCourse.bind(this),resetToSkill:this.resetToSkill.bind(this)})}else e=o.a.createElement(ke,{token:this.state.token,courseReset:this.state.courseReset,skillReset:this.state.skillReset,viewToCourse:this.viewToCourse.bind(this),viewToSkills:this.viewToSkills.bind(this),viewToDeck:this.viewToDeck.bind(this),resetToCourse:this.resetToCourse.bind(this),resetToSkill:this.resetToSkill.bind(this)});switch(this.state.layoutView){case Xe:e=o.a.createElement(y,{stopAnimation:this.stopAnimation.bind(this)});break;case Ye:e=o.a.createElement(k,{formClick:this.changeLayoutState.bind(this)});window.localStorage.setItem("view",JSON.stringify({main:"Login",subpage:null}));break;case Qe:e=o.a.createElement(ve,{formClick:this.changeLayoutState.bind(this),toLogin:this.toLogin.bind(this)})}return o.a.createElement("div",null,o.a.createElement("main",{className:v.a.Content},e),o.a.createElement(Ke,{parentCourse:this.resetToCourse.bind(this),parentCalendar:this.goCalendar.bind(this),parentSettings:this.goSettings.bind(this),parentLogout:this.goLogout.bind(this),parentView:this.state.layoutView,parentSkill:this.resetToSkill.bind(this),parentCourseView:this.state.courseView}))}}]),a}(n.Component),et=(a(121),function(e){Object(u.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Ze,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tt=a(183);r.a.render(o.a.createElement(tt.a,{theme:me},o.a.createElement(et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports={Content:"Layout_Content__3EOum"}},78:function(e,t,a){e.exports={Login:"Login_Login__3pVld",button:"Login_button__3C0B0",submit:"Login_submit__3DY5E",fadeIn:"Login_fadeIn__14MIC",name:"Login_name__1KXHS",username:"Login_username__2v2bV",password:"Login_password__1cpmf",fadeOut:"Login_fadeOut__281zA"}}},[[106,1,2]]]);
//# sourceMappingURL=main.9120fe19.chunk.js.map