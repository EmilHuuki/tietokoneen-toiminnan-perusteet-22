(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4KiG":function(t,e,a){"use strict";var n=a("yXPU"),i=a.n(n),s=a("VbXa"),r=a.n(s),o=(a("VSsl"),a("o0o1")),l=a.n(o),u=a("q1tI"),m=a.n(u),c=a("30+C"),d=a("oa/T"),p=a("r9w1"),h=a("ZGBi"),k=a("VmPI"),f=a("O6Ht"),v=a("M4Ey"),g=a("Z3vd"),b=a("Kfvu"),y=a("QLAq"),_=a("uVck"),E=a("vOnD"),j=a("pg4K"),w=a("IP2g"),C=a("i8i4"),S=a.n(C),O=a("KmP9"),I=a("1AYd"),x=a("jjAL"),V=a("ADg1"),F=a("cVXz"),T=Object(E.b)(V.a).withConfig({displayName:"DropdownMenu__StyledFormControl",componentId:"olaryr-0"})(["width:100%;"]),N=Object(j.a)((function(t){var e=t.selectedVariant,a=t.setSelectedVariant,n=Object(u.useState)(0),i=n[0],s=n[1],r=Object(u.useRef)(null);Object(u.useEffect)((function(){s(S.a.findDOMNode(r.current).offsetWidth)}));return m.a.createElement(T,{variant:"outlined"},m.a.createElement(I.a,{ref:r,htmlFor:"course-variant-select"},"Minkä kurssin version pisteet, deadlinet ja kolikot haluat nähdä?"),m.a.createElement(F.a,{value:e,onChange:function(t){a(t.target.value)},input:m.a.createElement(O.a,{labelWidth:i,name:"course-variant",id:"course-variant-select"})},m.a.createElement(x.a,{value:"tietokoneen-toiminnan-perusteet-2022"},"Avoin yliopisto, Tietokoneen toiminnan perusteet, kesä 2022")))})),A=(a("Wbzz"),E.b.div.withConfig({displayName:"CourseOptionsEditor__Row",componentId:"sc-15i8a3h-0"})(["margin-bottom:1.5rem;"])),L=E.b.form.withConfig({displayName:"CourseOptionsEditor__Form",componentId:"sc-15i8a3h-1"})([""]),P=E.b.div.withConfig({displayName:"CourseOptionsEditor__InfoBox",componentId:"sc-15i8a3h-2"})(["margin-bottom:2rem;"]),K=E.b.div.withConfig({displayName:"CourseOptionsEditor__FormContainer",componentId:"sc-15i8a3h-3"})(["height:100%;margin-top:2rem;"]),D=(Object(E.b)(w.a).withConfig({displayName:"CourseOptionsEditor__StyledIcon",componentId:"sc-15i8a3h-4"})(["margin-right:0.25rem;"]),function(t){function e(){for(var e,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))||this).onClick=function(){var t=i()(l.a.mark((function t(a){var n,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.setState({submitting:!0}),n={applies_for_study_right:e.state.applies_for_study_right,digital_education_for_all:e.state.digital_education_for_all,marketing:e.state.marketing,research:e.state.research,course_variant:e.state.currentCourseVariant},i={first_name:e.state.first_name,last_name:e.state.last_name,organizational_id:e.state.student_number},t.next=6,Object(_.l)({extraFields:n,userField:i});case 6:e.setState({submitting:!1}),e.props.onComplete();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={submitting:!1,error:!0,errorObj:{},applies_for_study_right:!1,digital_education_for_all:!1,marketing:!1,research:void 0,first_name:void 0,last_name:void 0,email:void 0,student_number:void 0,loading:!0,focused:null},e.handleInput=function(t){var a,n=t.target.name,i=t.target.value;e.setState(((a={})[n]=i,a),(function(){e.validate()}))},e.handleCheckboxInput=function(t){var a,n=t.target.name,i=t.target.checked;e.setState(((a={})[n]=i,a),(function(){e.validate()}))},e.handleFocus=function(t){var a=t.target.name;e.setState({focused:a})},e.handleUnFocus=function(){e.setState({focused:null})},e.validate=function(){e.setState((function(t){return{error:void 0===t.research}}))},e.setSelectedVariant=function(t){e.setState({currentCourseVariant:t})},e}r()(e,t);var a=e.prototype;return a.componentDidMount=function(){var t=i()(l.a.mark((function t(){var e,a,n,i,s,r,o,u,m,c=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.m)();case 2:m=t.sent,this.setState({first_name:null===(e=m.user_field)||void 0===e?void 0:e.first_name,last_name:null===(a=m.user_field)||void 0===a?void 0:a.last_name,email:m.email,student_number:null===(n=m.user_field)||void 0===n?void 0:n.organizational_id,applies_for_study_right:"t"===(null===(i=m.extra_fields)||void 0===i?void 0:i.applies_for_study_right),digital_education_for_all:"t"===(null===(s=m.extra_fields)||void 0===s?void 0:s.digital_education_for_all),marketing:"t"===(null===(r=m.extra_fields)||void 0===r?void 0:r.marketing),research:null===(o=m.extra_fields)||void 0===o?void 0:o.research,currentCourseVariant:null===(u=m.extra_fields)||void 0===u?void 0:u.course_variant,loading:!1},(function(){c.validate()}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),a.render=function(){return m.a.createElement(K,null,m.a.createElement(y.a,{loading:this.state.loading,heightHint:"490px"},m.a.createElement(P,null,m.a.createElement(c.a,null,m.a.createElement(d.a,null,"Olet kirjautunut tunnuksella ",this.state.email," sisään")))),m.a.createElement("h1",null,"Opiskelijan tiedot"),m.a.createElement(L,null,m.a.createElement(P,null,'Kerro itsestäsi. Nämä tiedot auttavat suoritusten merkitsemisessä ja kurssin järjestämisessä. Voit muokata tietoja myöhemmin kurssin asetuksista. Tietojen täyttämisen jälkeen paina "Tallenna" sivun alareunasta.'),m.a.createElement(y.a,{loading:this.state.loading,heightHint:"490px"},m.a.createElement("div",null,m.a.createElement(A,null,m.a.createElement(p.a,{variant:"outlined",type:"text",label:"Etunimi",autoComplete:"given-name",name:"first_name",InputLabelProps:{shrink:this.state.first_name||"first_name"===this.state.focused},fullWidth:!0,value:this.state.first_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),m.a.createElement(A,null,m.a.createElement(p.a,{variant:"outlined",type:"text",label:"Sukunimi",autoComplete:"family-name",name:"last_name",InputLabelProps:{shrink:this.state.last_name||"last_name"===this.state.focused},fullWidth:!0,value:this.state.last_name,onChange:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleUnFocus})),m.a.createElement(A,null,m.a.createElement(p.a,{variant:"outlined",type:"text",label:"Helsingin yliopiston opiskelijanumero",name:"student_number",InputLabelProps:{shrink:this.state.student_number||"student_number"===this.state.focused},fullWidth:!0,value:this.state.student_number,onChange:this.handleInput,helperText:"Jätä tyhjäksi, jos et ole tällä hetkellä Helsingin yliopiston opiskelija.",onFocus:this.handleFocus,onBlur:this.handleUnFocus})),m.a.createElement(A,null,m.a.createElement(N,{selectedVariant:this.state.currentCourseVariant||this.props.courseVariant||"tietokoneen-toiminnan-perusteet-2022",setSelectedVariant:this.setSelectedVariant})),m.a.createElement(A,null,m.a.createElement(h.a,{control:m.a.createElement(k.a,{checked:this.state.digital_education_for_all,onChange:this.handleCheckboxInput,name:"digital_education_for_all",value:"1"}),label:"Olen tällä hetkellä opiskelijana Digital Education for All -hankkeessa. Jätä tämä valitsematta mikäli et tiedä kyseisestä hankkeesta."})),m.a.createElement(A,null,m.a.createElement(h.a,{control:m.a.createElement(k.a,{checked:this.state.marketing,onChange:this.handleCheckboxInput,name:"marketing",value:"1"}),label:"Minulle voi lähettää tietoa uusista kursseista"})))),m.a.createElement("h2",null,"Kurssilla tehtävästä tutkimuksesta"),m.a.createElement("p",null,"Kurssilla tehdään oppimiseen liittyvää tutkimusta. Tällä tutkimuksella on useampia tavoitteita:"),m.a.createElement("ol",null,m.a.createElement("li",null,"luoda oppimateriaali, joka ottaa yksilölliset erot huomioon ja reagoi tarvittaessa tarjoten kohdennetumpaa oppisisältöä"),m.a.createElement("li",null,"kehittää digitaalisissa ympäristöissä tapahtuvaan oppimiseen liittyvää ymmärrystä ja tietoa, sekä"),m.a.createElement("li",null,"tukea tutkimustiedon kautta muita oppimateriaalien kehittäjiä ja oppimisen tutkijoita. Tämä johtaa luonnollisesti myös parempaan oppimiskokemukseen opiskelijoille.")),m.a.createElement("p",null,"Tällaisesta oppimisanalytiikaksi kutsutusta tutkimuksesta kiinnostuneiden kannattaa tutustua esimerkiksi artikkeliin"," ",m.a.createElement(b.OutboundLink,{href:"https://dl.acm.org/citation.cfm?id=2858798",target:"_blank",rel:"noopener noreferrer"},"Educational Data Mining and Learning Analytics in Programming: Literature Review and Case Studies"),"."),m.a.createElement("p",null,"Tutkimusdatan hallinnasta vastaa Helsingin yliopiston tietojenkäsittelytieteen laitoksen Agile Education Research -ryhmän Arto Hellas. Anonymisoimattomaan tutkimusdataan eivät pääse käsiksi muut tutkijat. Voit myös pyytää milloin tahansa sinusta kerätyn datan poistamista lähettämällä sähköpostin osoitteeseen arto.hellas@cs.helsinki.fi"),m.a.createElement("p",null,"Työskentelystä kerättyä tietoa käytetään tutkimuksessa. Kerätty tieto sisältää tietoa oppimateriaalien käytöstä, kurssitehtävien tekemisestä sekä kokeissa pärjäämisestä. Tutkimustuloksista ei pystytä tunnistamaan yksittäisiä opiskelijoita. Jos et osallistu tutkimukseen, siitä ei tule minkäänlaisia seuraamuksia."),m.a.createElement(A,null,m.a.createElement(y.a,{loading:this.state.loading,heightHint:"115px"},m.a.createElement(f.a,{"aria-label":"Tutkimukseen osallistuminen",name:"research",value:this.state.research,onChange:this.handleInput},m.a.createElement(h.a,{value:"1",control:m.a.createElement(v.a,{color:"primary"}),label:"Osallistun oppimiseen liittyvään tutkimukseen. Valitsemalla tämän autat sekä nykyisiä että tulevia opiskelijoita."}),m.a.createElement(h.a,{value:"0",control:m.a.createElement(v.a,null),label:"En osallistu oppimiseen liittyvään tutkimukseen."})))),m.a.createElement(A,null,m.a.createElement(g.a,{onClick:this.onClick,disabled:this.state.submitting||this.state.error,loading:this.state.submitting,variant:"contained",color:"primary",fullWidth:!0},"Tallenna"))),this.state.error&&m.a.createElement(P,null,m.a.createElement("b",null,"Täytä vaaditut kentät.")))},e}(m.a.Component));e.a=Object(j.a)(D)},NLwr:function(t,e,a){t.exports=a.p+"static/email-example-e3d05414bf68e89f670423b3427e112d.png"},ub6p:function(t,e,a){"use strict";a.r(e);var n=a("VbXa"),i=a.n(n),s=a("q1tI"),r=a.n(s),o=a("TJpk"),l=a.n(o),u=a("RJaA"),m=a("yXPU"),c=a.n(m),d=a("o0o1"),p=a.n(d),h=(a("Pw7m"),a("5l6m"),a("VSsl"),a("Wbzz")),k=a("r9w1"),f=a("Z3vd"),v=a("uVck"),g=a("Xs5t"),b=a("Kfvu"),y=a("vOnD"),_=a("pg4K"),E=y.b.div.withConfig({displayName:"CreateAccountForm__Row",componentId:"jadb0u-0"})(["margin-bottom:1.5rem;"]),j=y.b.form.withConfig({displayName:"CreateAccountForm__Form",componentId:"jadb0u-1"})([""]),w=y.b.div.withConfig({displayName:"CreateAccountForm__InfoBox",componentId:"jadb0u-2"})(["margin-bottom:2rem;"]),C=y.b.div.withConfig({displayName:"CreateAccountForm__FormContainer",componentId:"jadb0u-3"})(["height:100%;margin-top:2rem;"]),S=function(t){function e(){for(var e,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).onClick=function(){var t=c()(p.a.mark((function t(a){var n,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),e.setState({submitting:!0,triedSubmitting:!0}),e.validate()){t.next=5;break}return e.setState({canSubmit:!1,submitting:!1}),t.abrupt("return");case 5:return t.prev=5,t.next=8,Object(v.d)({email:e.state.email,password:e.state.password,password_confirmation:e.state.password_confirmation});case 8:return n=t.sent,console.log("Created an account:",JSON.stringify(n)),t.next=12,Object(v.b)({username:e.state.email,password:e.state.password});case 12:e.props.onComplete(),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5);try{i="",Object.entries(t.t0).forEach((function(t){var e=t[0];t[1].forEach((function(t){var a=Object(g.a)(e.replace(/_/g," ")+" "+t+".");"Email has already been taken."===a&&(a="Sähköpostiosoitteesi on jo käytössä. Oletko tehnyt aikaisemmin mooc.fi:n kursseja?"),i=i+" "+a}))})),""===i&&(i="Ongelma tunnuksen luonnissa. Virhe oli: "+JSON.stringify(t.t0)),e.setState({error:i,submitting:!1,errorObj:t.t0})}catch(s){e.setState({error:JSON.stringify(t.t0),submitting:!1})}e.setState({submitting:!1});case 19:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleInput=function(t){var a,n=t.target.name,i=t.target.value;e.setState(((a={})[n]=i,a),(function(){e.validate()}))},e.validate=function(){var t={error:"",errorObj:{}},a=e.state,n=a.email,i=a.password,s=a.password_confirmation,r=a.validatePassword,o=a.validateEmail,l=a.triedSubmitting;return n&&o&&(-1===n.indexOf("@")&&(t.error+="Sähköpostiosoitessa ei ole '@'-merkkiä. ",t.errorObj.email="Sähköpostiosoitessa ei ole '@'-merkkiä. "),n&&-1===n.indexOf(".")&&(t.error+="Sähköpostiosoitessa ei ole '.'-merkkiä. ",t.errorObj.email="Sähköpostiosoitessa ei ole '.'-merkkiä. ")),i&&s&&r&&i!==s&&(t.error+="Salasana ja salasana uudestaan eivät olleet samoja. ",t.errorObj.password="Salasana ja salasana uudestaan eivät olleet samoja.",t.errorObj.password_confirmation="Salasana ja salasana uudestaan eivät olleet samoja."),""===t.error&&(t.error=!1,t.canSubmit=!0),n&&i&&s?(e.setState(t),!t.error):(l&&(t.canSubmit=!1),!1)},e.state={email:void 0,password:void 0,password_confirmation:void 0,submitting:!1,error:!1,errorObj:{},validatePassword:!1,validateEmail:!1,canSubmit:!0,triedSubmitting:!0},e}return i()(e,t),e.prototype.render=function(){var t=this;return this.context.loggedIn?(Object(h.navigate)("/"),r.a.createElement("div",null,"Redirecting...")):r.a.createElement(C,null,r.a.createElement("h1",null,"Luo käyttäjätunnus"),r.a.createElement(j,{onChange:this.validate},r.a.createElement(w,null,"Tämä kurssi käyttää"," ",r.a.createElement(b.OutboundLink,{href:"https://mooc.fi",target:"_blank",rel:"noopener noreferrer"},"mooc.fi")," ","käyttäjätunnuksia. Jos olet aikaisemmin tehnyt mooc.fi -kursseja, voit käyttää sisäänkirjautumissivulla olemassaolevia tunnuksiasi. Tällä sivulla voit luoda uuden tunnuksen, joka toimii suurimmassa osassa mooc.fi:n kursseissa ja palveluissa."),r.a.createElement(E,null,r.a.createElement(k.a,{variant:"outlined",type:"email",name:"email",autoComplete:"email",label:"Sähköpostiosoite",error:this.state.errorObj.email,fullWidth:!0,value:this.state.email,onChange:this.handleInput,onBlur:function(){t.setState({validateEmail:!0},(function(){t.validate()}))}})),r.a.createElement(E,null,r.a.createElement(k.a,{variant:"outlined",type:this.state.showPassword?"text":"password",label:"Salasana",name:"password",error:this.state.errorObj.password,fullWidth:!0,value:this.state.password,onChange:this.handleInput})),r.a.createElement(E,null,r.a.createElement(k.a,{variant:"outlined",type:this.state.showPassword?"text":"password",label:"Salasana uudestaan",name:"password_confirmation",error:this.state.errorObj.password_confirmation,fullWidth:!0,value:this.state.password_confirmation,onChange:this.handleInput,onBlur:function(){t.setState({validatePassword:!0},(function(){t.validate()}))}})),r.a.createElement(E,null,r.a.createElement(f.a,{onClick:this.onClick,disabled:this.state.submitting||!this.state.canSubmit,variant:"contained",color:"primary",fullWidth:!0,type:"submit"},"Luo käyttäjätunnus"))),r.a.createElement(E,null,r.a.createElement(h.Link,{to:"/sign-in"},"Onko sinulla jo käyttäjätunnus? Kirjaudu sisään")),this.state.error&&r.a.createElement(w,null,r.a.createElement("b",null,"Virhe: ",this.state.error)))},e}(r.a.Component),O=Object(_.a)(S),I=a("4KiG"),x=a("NLwr"),V=a.n(x),F=y.b.div.withConfig({displayName:"ConfirmEmail__InfoBox",componentId:"sc-1t4zqh3-0"})(["margin-bottom:2rem;"]),T=y.b.div.withConfig({displayName:"ConfirmEmail__FormContainer",componentId:"sc-1t4zqh3-1"})(["height:100%;margin-top:2rem;"]),N=y.b.img.withConfig({displayName:"ConfirmEmail__StyledImage",componentId:"sc-1t4zqh3-2"})(["width:100%;padding:1rem 0;"]),A=function(t){function e(){for(var e,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).onClick=function(){var t=c()(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={email:void 0,password:void 0,submitting:!1,error:!1},e}return i()(e,t),e.prototype.render=function(){return r.a.createElement(T,null,r.a.createElement("h1",null,"Tervetuloa kurssille!"),r.a.createElement(F,null,r.a.createElement("p",null,"Olemme lähettäneet sähköpostiisi sähköpostiosoitteen varmistuslinkin. Käy nyt sähköpostissasi ja varmista osoitteesi."," "),r.a.createElement("p",null,"Sähköpostin pitäisi näyttää tälläiseltä:"),r.a.createElement(N,{src:V.a,alt:"Esimerkki sähköpostista"})),r.a.createElement("p",null,"Tämän jälkeen voit jatkaa ",r.a.createElement(h.Link,{to:"/osa-1"},"materiaaliin"),"."))},e}(r.a.Component),L=Object(_.a)(A),P=a("eczs"),K=a("VUD3"),D=function(t){function e(){for(var e,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).state={step:1},e.onStepComplete=function(){e.setState((function(t){return{step:t.step+1}})),"undefined"!=typeof window&&window.scrollTo(0,0)},e}return i()(e,t),e.prototype.render=function(){var t;return t=1===this.state.step?r.a.createElement(O,{onComplete:this.onStepComplete}):2===this.state.step?r.a.createElement(I.a,{courseVariant:"nodl",onComplete:this.onStepComplete}):r.a.createElement(L,{onComplete:this.onStepComplete}),r.a.createElement(u.a,null,r.a.createElement(l.a,{title:"Luo käyttäjätunnus"}),r.a.createElement(K.a,null,t))},e}(r.a.Component);D.contextType=P.b;e.default=Object(P.c)(D)}}]);
//# sourceMappingURL=component---src-pages-sign-up-js-de24c260207a13237ed3.js.map