(function(){"use strict";var e={2034:function(e,t,a){var n=a(144),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",[t("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"danger"}},[t("b-navbar-brand",{attrs:{to:"/"}},[e._v("MyMovieApp")]),t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),t("b-nav-item-dropdown",{attrs:{text:"Library"}},[t("b-dropdown-item",{attrs:{to:"/movies"}},[e._v("Movies")]),t("b-dropdown-item",{attrs:{to:"/shows"}},[e._v("Shows")]),t("b-dropdown-item",{attrs:{to:"/standups"}},[e._v("Standups")]),t("b-dropdown-item",{attrs:{to:"/animes"}},[e._v("Animes")])],1)],1),t("b-navbar-nav",{staticClass:"ml-auto"},[e.token?e._e():t("b-nav-item",{attrs:{to:"/register"}},[e._v("Register")]),e.token?t("b-nav-item",{on:{click:function(t){return e.logout()}}},[e._v("Log Out")]):t("b-nav-item",{attrs:{to:"/login"}},[e._v("Log In")]),t("b-nav-form",[t("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",color:"black",type:"button"},on:{click:function(t){return e.browse()}}},[e._v("Search")])],1)],1)],1)],1)],1),t("router-view",{staticClass:"stranica"})],1)},s=[],i=a(629),r={name:"App",data(){return{search:""}},methods:{...(0,i.nv)(["GET_MOVIES","GET_SHOWS","GET_STANDUPS","GET_ANIMES"]),...(0,i.OI)(["removeToken","setToken","searchMovie","searchShow","searchStandup","searchAnime"]),logout(){this.removeToken()},browse(){this.searchMovie(this.search),this.searchShow(this.search),this.searchStandup(this.search),this.searchAnime(this.search)}},computed:{...(0,i.rn)(["token"])},mounted(){localStorage.token&&this.setToken(localStorage.token),this.GET_MOVIES(),this.GET_SHOWS(),this.GET_STANDUPS(),this.GET_ANIMES()},sockets:{error(e){alert(e)}}},l=r,m=a(1001),u=(0,m.Z)(l,o,s,!1,null,null,null),c=u.exports,p=a(8345),d=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Welcome to MyMovieApp!"}}),t("img",{staticClass:"img",attrs:{src:a(3287)}}),t("hr"),t("br"),t("div",{staticClass:"container"},[t("h3",{on:{click:e.movies}},[e._v("Movies")]),t("h3",{on:{click:e.shows}},[e._v("Shows")]),t("h3",{on:{click:e.standups}},[e._v("Standups")]),t("h3",{on:{click:e.animes}},[e._v("Animes")])])],1)},h=[],v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"naslov"},[e.subtitle?t("h1",[t("b",[e._v(e._s(e.subtitle))])]):e._e()])},g=[],f={name:"Header",props:{subtitle:String}},w=f,S=(0,m.Z)(w,v,g,!1,null,"25370836",null),b=S.exports,y={name:"Home",components:{Header:b},methods:{movies(){this.$router.push({name:"MovieDepartment"})},shows(){this.$router.push({name:"ShowDepartment"})},standups(){this.$router.push({name:"StandupDepartment"})},animes(){this.$router.push({name:"AnimeDepartment"})}}},_=y,A=(0,m.Z)(_,d,h,!1,null,"3e82599f",null),M=A.exports,C=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Movies"}}),t("Movies")],1)},T=[],E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"movies"},e._l(e.getMovies,(function(a){return t("div",{key:a.id,staticClass:"movie"},[t("div",{staticClass:"card",staticStyle:{width:"15rem"}},[t("img",{staticStyle:{width:"15rem","align-self":"center"},attrs:{src:"https://img.freepik.com/premium-vector/clapper-film-movie-icon-design_24877-23150.jpg"}}),t("ul",{staticClass:"list"},[t("li",[e._v("Title: "),t("b",[e._v(e._s(a.title))]),e._v(" ("+e._s(a.year)+")")]),t("li",[e._v("Genre: "+e._s(a.genre))]),t("li",[e._v("Main Actor: "+e._s(a.mainActor))]),t("li",[e._v("Rating: "+e._s(a.rating))])]),t("div",{staticClass:"btn"},[e.token?t("button",{on:{click:function(t){return e.playMovie(a)}}},[e._v("Play")]):e._e()])])])})),0)},x=[],P={name:"Movies",computed:{...(0,i.rn)(["movies","token"]),...(0,i.Se)(["getMovies"])},methods:{...(0,i.OI)(["setMovie"]),playMovie(e){this.setMovie(e),this.$router.push({name:"SingleMovie"})}}},G=P,k=(0,m.Z)(G,E,x,!1,null,"037f3de5",null),O=k.exports,R={name:"MovieDepartment",components:{Header:b,Movies:O},methods:{...(0,i.nv)(["GET_MOVIES"])},mounted(){this.GET_MOVIES()}},N=R,H=(0,m.Z)(N,C,T,!1,null,null,null),q=H.exports,j=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Shows"}}),t("Shows")],1)},D=[],Y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"shows"},e._l(e.getShows,(function(a){return t("div",{key:a.id,staticClass:"show"},[t("div",{staticClass:"card",staticStyle:{width:"15rem"}},[t("img",{staticStyle:{width:"14rem","align-self":"center"},attrs:{src:"data:image/png;base64,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"}}),t("ul",{staticClass:"list"},[t("li",[e._v("Title: "+e._s(a.title)+" ("+e._s(a.year)+")")]),t("li",[e._v("Genre: "+e._s(a.genre))]),t("li",[e._v("S"+e._s(a.season)+"E"+e._s(a.episode))]),t("li",[e._v("Rating: "+e._s(a.rating))])]),t("div",{staticClass:"btn"},[e.token?t("button",{on:{click:function(t){return e.playShow(a)}}},[e._v("Play")]):e._e()])])])})),0)},I=[],Z={name:"Shows",computed:{...(0,i.rn)(["shows","token"]),...(0,i.Se)(["getShows"])},methods:{...(0,i.OI)(["setShow"]),playShow(e){this.setShow(e),this.$router.push({name:"SingleShow"})}}},V=Z,B=(0,m.Z)(V,Y,I,!1,null,"19f4cab0",null),U=B.exports,F={name:"ShowDepartment",components:{Header:b,Shows:U},methods:{...(0,i.nv)(["GET_SHOWS"])},mounted(){this.GET_SHOWS()}},X=F,z=(0,m.Z)(X,j,D,!1,null,null,null),L=z.exports,W=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Standups"}}),t("Standups")],1)},K=[],$=function(){var e=this,t=e._self._c;return t("div",{staticClass:"standups"},e._l(e.getStandups,(function(a){return t("div",{key:a.id,staticClass:"standup"},[t("div",{staticClass:"card",staticStyle:{width:"15rem"}},[t("img",{staticStyle:{width:"14rem","align-self":"center"},attrs:{src:"https://sommersetretirement.com/assets/comedy-club.jpg"}}),t("ul",{staticClass:"list"},[t("li",[e._v("Title: "),t("b",[e._v(e._s(a.title))])]),t("li",[e._v("("+e._s(a.year)+")")]),t("li",[e._v("Creator: "+e._s(a.mainActor))]),t("li",[e._v("Rating: "+e._s(a.rating))])]),t("div",{staticClass:"btn"},[e.token?t("button",{on:{click:function(t){return e.playStandup(a)}}},[e._v("Play")]):e._e()])])])})),0)},J=[],Q={name:"Standups",computed:{...(0,i.rn)(["standups","token"]),...(0,i.Se)(["getStandups"])},methods:{...(0,i.OI)(["setStandup"]),playStandup(e){this.setStandup(e),this.$router.push({name:"SingleStandup"})}}},ee=Q,te=(0,m.Z)(ee,$,J,!1,null,"57db2be2",null),ae=te.exports,ne={name:"StandupDepartment",components:{Header:b,Standups:ae},methods:{...(0,i.nv)(["GET_STANDUPS"])},mounted(){this.GET_STANDUPS()}},oe=ne,se=(0,m.Z)(oe,W,K,!1,null,null,null),ie=se.exports,re=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Animes"}}),t("Animes")],1)},le=[],me=function(){var e=this,t=e._self._c;return t("div",{staticClass:"animes"},e._l(e.getAnimes,(function(a){return t("div",{key:a.id,staticClass:"anime"},[t("div",{staticClass:"card",staticStyle:{width:"15rem"}},[t("img",{staticStyle:{width:"14rem","align-self":"center"},attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Anime_film_icon.svg/1200px-Anime_film_icon.svg.png"}}),t("ul",{staticClass:"list"},[t("li",[e._v("Title: "),t("b",[e._v(e._s(a.title))]),e._v(" ("+e._s(a.year)+")")]),t("li",[e._v("S"+e._s(a.season)+"E"+e._s(a.episode))]),t("li",[e._v("Creator: "+e._s(a.creator))]),t("li",[e._v("Rating: "+e._s(a.rating))])]),t("div",{staticClass:"btn"},[e.token?t("button",{on:{click:function(t){return e.playAnime(a)}}},[e._v("Play")]):e._e()])])])})),0)},ue=[],ce={name:"Animes",computed:{...(0,i.rn)(["animes","token"]),...(0,i.Se)(["getAnimes"])},methods:{...(0,i.OI)(["setAnime"]),playAnime(e){this.setAnime(e),this.$router.push({name:"SingleAnime"})}}},pe=ce,de=(0,m.Z)(pe,me,ue,!1,null,"4f8be586",null),he=de.exports,ve={name:"AnimeDepartment",components:{Header:b,Animes:he},methods:{...(0,i.nv)(["GET_ANIMES"])},mounted(){this.GET_ANIMES()}},ge=ve,fe=(0,m.Z)(ge,re,le,!1,null,null,null),we=fe.exports,Se=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Add Streams"}}),t("div",{staticClass:"addMovies"},[t("h2",[e._v("Add Movies")]),t("form",{on:{submit:e.onMovieSubmit}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.movieTitle,expression:"movieTitle"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:e.movieTitle},on:{input:function(t){t.target.composing||(e.movieTitle=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.movieYear,expression:"movieYear"}],attrs:{type:"year",placeholder:"Year"},domProps:{value:e.movieYear},on:{input:function(t){t.target.composing||(e.movieYear=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.movieGenre,expression:"movieGenre"}],attrs:{type:"text",placeholder:"Genre"},domProps:{value:e.movieGenre},on:{input:function(t){t.target.composing||(e.movieGenre=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.movieMainActor,expression:"movieMainActor"}],attrs:{type:"text",placeholder:"Main Actor"},domProps:{value:e.movieMainActor},on:{input:function(t){t.target.composing||(e.movieMainActor=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.movieRating,expression:"movieRating"}],attrs:{type:"number",min:"0",max:"10",step:"0.1",placeholder:"Rating"},domProps:{value:e.movieRating},on:{input:function(t){t.target.composing||(e.movieRating=t.target.value)}}}),t("input",{attrs:{type:"submit",value:"Submit"}})])]),t("hr"),t("div",{staticClass:"addShows"},[t("h2",[e._v("Add Shows")]),t("form",{on:{submit:e.onShowSubmit}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.showTitle,expression:"showTitle"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:e.showTitle},on:{input:function(t){t.target.composing||(e.showTitle=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.showYear,expression:"showYear"}],attrs:{type:"year",placeholder:"Year"},domProps:{value:e.showYear},on:{input:function(t){t.target.composing||(e.showYear=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.showGenre,expression:"showGenre"}],attrs:{type:"text",placeholder:"Genre"},domProps:{value:e.showGenre},on:{input:function(t){t.target.composing||(e.showGenre=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.showSeason,expression:"showSeason"}],attrs:{type:"number",placeholder:"Season"},domProps:{value:e.showSeason},on:{input:function(t){t.target.composing||(e.showSeason=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.showEpisode,expression:"showEpisode"}],attrs:{type:"number",placeholder:"Episode"},domProps:{value:e.showEpisode},on:{input:function(t){t.target.composing||(e.showEpisode=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.showRating,expression:"showRating"}],attrs:{type:"number",min:"0",max:"10",step:"0.1",placeholder:"Rating"},domProps:{value:e.showRating},on:{input:function(t){t.target.composing||(e.showRating=t.target.value)}}}),t("input",{attrs:{type:"submit",value:"Submit"}})])]),t("hr"),t("div",{staticClass:"addStandups"},[t("h2",[e._v("Add Standups")]),t("form",{on:{submit:e.onStandupSubmit}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.standupTitle,expression:"standupTitle"}],attrs:{type:"text",placeholder:"Title "},domProps:{value:e.standupTitle},on:{input:function(t){t.target.composing||(e.standupTitle=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.standupYear,expression:"standupYear"}],attrs:{type:"year",placeholder:"Year "},domProps:{value:e.standupYear},on:{input:function(t){t.target.composing||(e.standupYear=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.standupMainActor,expression:"standupMainActor"}],attrs:{type:"text",placeholder:"Main Actor "},domProps:{value:e.standupMainActor},on:{input:function(t){t.target.composing||(e.standupMainActor=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.standupRating,expression:"standupRating"}],attrs:{type:"number",min:"0",max:"10",step:"0.1",placeholder:"Rating"},domProps:{value:e.standupRating},on:{input:function(t){t.target.composing||(e.standupRating=t.target.value)}}}),t("input",{attrs:{type:"submit",value:"Submit"}})])]),t("hr"),t("div",{staticClass:"addAnimes"},[t("h2",[e._v("Add Animes")]),t("form",{on:{submit:e.onAnimeSubmit}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.animeTitle,expression:"animeTitle"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:e.animeTitle},on:{input:function(t){t.target.composing||(e.animeTitle=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.animeYear,expression:"animeYear"}],attrs:{type:"year",placeholder:"Year"},domProps:{value:e.animeYear},on:{input:function(t){t.target.composing||(e.animeYear=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.animeSeason,expression:"animeSeason"}],attrs:{type:"number",placeholder:"Season"},domProps:{value:e.animeSeason},on:{input:function(t){t.target.composing||(e.animeSeason=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.animeEpisode,expression:"animeEpisode"}],attrs:{type:"number",placeholder:"Episode"},domProps:{value:e.animeEpisode},on:{input:function(t){t.target.composing||(e.animeEpisode=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.animeCreator,expression:"animeCreator"}],attrs:{type:"text",placeholder:"Creator"},domProps:{value:e.animeCreator},on:{input:function(t){t.target.composing||(e.animeCreator=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.animeRating,expression:"animeRating"}],attrs:{type:"number",min:"0",max:"10",step:"0.1",placeholder:"Rating"},domProps:{value:e.animeRating},on:{input:function(t){t.target.composing||(e.animeRating=t.target.value)}}}),t("input",{attrs:{type:"submit",value:"Submit"}})])])],1)},be=[],ye={name:"AddDepartment",components:{Header:b},data(){return{movieTitle:"",showTitle:"",standupTitle:"",animeTitle:"",movieYear:"",showYear:"",standupYear:"",animeYear:"",movieRating:"",showRating:"",standupRating:"",animeRating:"",showSeason:"",showEpisode:"",animeSeason:"",animeEpisode:"",movieMainActor:"",standupMainActor:"",movieGenre:"",showGenre:"",animeCreator:""}},methods:{...(0,i.nv)(["addMovie","addShow","addStandup","addAnime"]),onMovieSubmit(){const e={title:this.movieTitle,year:this.movieYear,genre:this.movieGenre,mainActor:this.movieMainActor,rating:this.movieRating};this.addMovie(e)},onShowSubmit(){const e={title:this.showTitle,year:this.showYear,genre:this.showGenre,season:this.showSeason,episode:this.showEpisode,rating:this.showRating};this.addShow(e)},onStandupSubmit(){const e={title:this.standupTitle,year:this.standupYear,mainActor:this.standupMainActor,rating:this.standupRating};this.addStandup(e)},onAnimeSubmit(){const e={title:this.animeTitle,year:this.animeYear,creator:this.animeCreator,season:this.animeSeason,episode:this.animeEpisode,rating:this.animeRating};this.addAnime(e)}}},_e=ye,Ae=(0,m.Z)(_e,Se,be,!1,null,"41c9058c",null),Me=Ae.exports,Ce=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:e.subtitle}}),t("Movie",{attrs:{movie:e.movie}}),t("hr"),t("Comments",{attrs:{obj:e.movie}})],1)},Te=[],Ee=function(){var e=this;e._self._c;return e._m(0)},xe=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"movie"},[t("div",[t("section",{staticStyle:{position:"center"}},[t("iframe",{attrs:{width:"1100",height:"600",src:"https://www.youtube.com/embed/JfVOs4VSpmA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])}],Pe={name:"Movie",props:{movie:[]}},Ge=Pe,ke=(0,m.Z)(Ge,Ee,xe,!1,null,"6321be24",null),Oe=ke.exports,Re=function(){var e=this,t=e._self._c;return t("div",[t("h4",[e._v("User Comments")]),e.token?t("div",[t("div",{staticStyle:{display:"flex"}},[t("b-form-input",{attrs:{placeholder:"Say something..."},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}}),t("button",{attrs:{type:"button"},on:{click:e.onSubmit}},[e._v("Submit")])],1),e._l(e.currentComments,(function(a){return t("b-card",{key:a.id,attrs:{title:a.user}},[t("b-card-text",[e._v(" "+e._s(a.body)+" ")])],1)}))],2):t("p",[e._v("You must be signed in to leave a comment")])])},Ne=[],He={name:"Comments",props:{obj:[],currentComments:[]},data(){return{comment:""}},computed:{...(0,i.rn)(["comments","token"])},methods:{...(0,i.OI)(["getComments","addComment"]),onSubmit(){if(""==this.comment)return alert("Cannot post empty comment!"),!1;this.$socket.emit("comment",{content:this.comment,object:this.obj.id,token:this.token}),this.comment="",this.currentComments=this.getComments(this.obj.id)}},mounted(){this.currentComments=this.getComments(this.obj.id)}},qe=He,je=(0,m.Z)(qe,Re,Ne,!1,null,"6203e7f2",null),De=je.exports,Ye={name:"SingleMovie",components:{Header:b,Movie:Oe,Comments:De},data(){return{movie:[],subtitle:""}},computed:{...(0,i.Se)(["getMovie"])},methods:{...(0,i.nv)(["GET_COMMENTS"])},mounted(){this.movie=this.getMovie,this.subtitle=this.movie.title,this.GET_COMMENTS()}},Ie=Ye,Ze=(0,m.Z)(Ie,Ce,Te,!1,null,null,null),Ve=Ze.exports,Be=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:e.subtitle}}),t("Show",{attrs:{show:e.show}}),t("hr"),t("Comments",{attrs:{obj:e.show}})],1)},Ue=[],Fe=function(){var e=this;e._self._c;return e._m(0)},Xe=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"show"},[t("div",[t("section",{staticStyle:{position:"center"}},[t("iframe",{attrs:{width:"1100",height:"600",src:"https://www.youtube.com/embed/9GgxinPwAGc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])}],ze={name:"Show",props:{show:[]}},Le=ze,We=(0,m.Z)(Le,Fe,Xe,!1,null,"a2780822",null),Ke=We.exports,$e={name:"SingleShow",components:{Header:b,Show:Ke,Comments:De},data(){return{show:[],subtitle:""}},computed:{...(0,i.Se)(["getShow"])},methods:{...(0,i.nv)(["GET_COMMENTS"])},mounted(){this.show=this.getShow,this.subtitle=this.show.title,this.GET_COMMENTS()}},Je=$e,Qe=(0,m.Z)(Je,Be,Ue,!1,null,null,null),et=Qe.exports,tt=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:e.subtitle}}),t("Standup",{attrs:{standup:e.standup}}),t("hr"),t("Comments",{attrs:{obj:e.standup}})],1)},at=[],nt=function(){var e=this;e._self._c;return e._m(0)},ot=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"standup"},[t("div",[t("section",{staticStyle:{position:"center"}},[t("iframe",{attrs:{width:"1100",height:"600",src:"https://www.youtube.com/embed/HlHg8aUCmtw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])}],st={name:"Standup",props:{standup:[]}},it=st,rt=(0,m.Z)(it,nt,ot,!1,null,"ecea5662",null),lt=rt.exports,mt={name:"SingleStandup",components:{Header:b,Standup:lt,Comments:De},data(){return{standup:[],subtitle:""}},computed:{...(0,i.Se)(["getStandup"])},methods:{...(0,i.nv)(["GET_COMMENTS"])},mounted(){this.standup=this.getStandup,this.subtitle=this.standup.title,this.GET_COMMENTS()}},ut=mt,ct=(0,m.Z)(ut,tt,at,!1,null,null,null),pt=ct.exports,dt=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:e.subtitle}}),t("Anime",{attrs:{anime:e.anime}}),t("hr"),t("Comments",{attrs:{obj:e.anime}})],1)},ht=[],vt=function(){var e=this;e._self._c;return e._m(0)},gt=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"anime"},[t("div",[t("section",{staticStyle:{position:"center"}},[t("iframe",{attrs:{width:"1100",height:"600",src:"https://www.youtube.com/embed/S8_YwFLCh4U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])}],ft={name:"Anime",props:{anime:[]}},wt=ft,St=(0,m.Z)(wt,vt,gt,!1,null,"75e1b90d",null),bt=St.exports,yt={name:"SingleAnime",components:{Header:b,Anime:bt,Comments:De},data(){return{anime:[],subtitle:""}},computed:{...(0,i.Se)(["getAnime"])},methods:{...(0,i.nv)(["GET_COMMENTS"])},mounted(){this.anime=this.getAnime,this.subtitle=this.anime.title,this.GET_COMMENTS()}},_t=yt,At=(0,m.Z)(_t,dt,ht,!1,null,null,null),Mt=At.exports,Ct=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Create account"}}),t("b-form",{attrs:{name:"mainForm"},on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",placeholder:"Enter username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",placeholder:"Enter password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("br"),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)},Tt=[],Et={name:"Register",components:{Header:b},data(){return{form:{email:"",username:"",password:"",isAdmin:!1,isModerator:!1}}},methods:{...(0,i.nv)(["register"]),onSubmit(e){e.preventDefault();let t=document.forms["mainForm"]["email"].value;if(t.length<3|!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t))return alert("Email is not valid"),!1;let a=document.forms["mainForm"]["password"].value;if(a.length<3|a.length>16)return alert("Password is not valid!"),!1;this.register(this.form),this.$router.push({name:"Home"})}}},xt=Et,Pt=(0,m.Z)(xt,Ct,Tt,!1,null,"62fa185f",null),Gt=Pt.exports,kt=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{subtitle:"Log In"}}),t("b-form",{attrs:{name:"mainForm"},on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{label:"Email:","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",placeholder:"Enter email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",placeholder:"Enter password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)},Ot=[],Rt={name:"Login",components:{Header:b},data(){return{form:{email:"",password:""}}},methods:{...(0,i.nv)(["login"]),onSubmit(e){e.preventDefault();let t=document.forms["mainForm"]["email"].value;if(t.length<3|!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t))return alert("Email is not valid"),!1;let a=document.forms["mainForm"]["password"].value;if(a.length<3|a.length>16)return alert("Password is not valid!"),!1;this.login(this.form),this.$router.push({name:"Home"})}}},Nt=Rt,Ht=(0,m.Z)(Nt,kt,Ot,!1,null,"4f9d86e0",null),qt=Ht.exports;n["default"].use(p.ZP);const jt=[{path:"/",name:"Home",component:M},{path:"/movies",name:"MovieDepartment",component:q},{path:"/shows",name:"ShowDepartment",component:L},{path:"/standups",name:"StandupDepartment",component:ie},{path:"/animes",name:"AnimeDepartment",component:we},{path:"/add",name:"AddDepartment",component:Me},{path:"/movie",name:"SingleMovie",component:Ve},{path:"/show",name:"SingleShow",component:et},{path:"/standup",name:"SingleStandup",component:pt},{path:"/anime",name:"SingleAnime",component:Mt},{path:"/register",name:"Register",component:Gt},{path:"/login",name:"Login",component:qt}],Dt=new p.ZP({mode:"history",base:"/",routes:jt});var Yt=Dt,It=a(5069),Zt=a(3017),Vt=a(2445),Bt=a.n(Vt),Ut=(a(7024),a(9669)),Ft=a.n(Ut);n["default"].use(i.ZP);var Xt=new i.ZP.Store({state:{movie:[],movies:[],shows:[],show:[],standups:[],standup:[],animes:[],anime:[],comments:[],token:""},getters:{getMovies:e=>e.movies,getMovie:e=>e.movie,getShows:e=>e.shows,getShow:e=>e.show,getStandups:e=>e.standups,getStandup:e=>e.standup,getAnimes:e=>e.animes,getAnime:e=>e.anime},mutations:{setMovies:(e,t)=>e.movies=t,newMovie:()=>alert("movie added"),removeMovie:(e,t)=>e.movies=e.movies.filter((e=>e!==t)),addMovie:(e,t)=>e.movies.push(t),setMovie:(e,t)=>e.movie=t,searchMovie:(e,t)=>e.movies=e.movies.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))),setShows:(e,t)=>e.shows=t,newShow:()=>alert("show added"),removeShow:(e,t)=>e.shows=e.shows.filter((e=>e!==t)),addShow:(e,t)=>e.shows.push(t),setShow:(e,t)=>e.show=t,searchShow:(e,t)=>e.shows=e.shows.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))),setStandups:(e,t)=>e.standups=t,newStandup:()=>alert("standup added"),removeStandup:(e,t)=>e.standups=e.standups.filter((e=>e!==t)),addStandup:(e,t)=>e.standups.push(t),setStandup:(e,t)=>e.standup=t,searchStandup:(e,t)=>e.standups=e.standups.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))),setAnimes:(e,t)=>e.animes=t,newAnime:()=>alert("anime added"),removeAnime:(e,t)=>e.animes=e.animes.filter((e=>e!==t)),addAnime:(e,t)=>e.animes.push(t),setAnime:(e,t)=>e.anime=t,searchAnime:(e,t)=>e.animes=e.animes.filter((e=>e.title.toLowerCase().includes(t.toLowerCase()))),getComments:(e,t)=>e.comments.filter((e=>e.object===t)),setComments:(e,t)=>e.comments=t,addComment:(e,t)=>e.comments.push(t),removeComment:(e,t)=>e.comments=e.comments.filter((e=>e!==t)),setToken(e,t){e.token=t,localStorage.token=t,console.log(t)},removeToken(e){e.token="",localStorage.token=""}},actions:{async GET_MOVIES({commit:e}){await Ft().get("http://localhost:3000/api/movies").then((t=>{const a=t.data;e("setMovies",a),console.log(a)})).catch((e=>{alert(e)}))},async addMovie({commit:e},t){await Ft().post("http://localhost:3000/api/movies",{title:t.title,year:t.year,genre:t.genre,mainActor:t.mainActor,rating:t.rating}).then((t=>{console.log(t.data),e("")})).catch((e=>{alert(e)}))},async deleteOneMovie({commit:e},t){await Ft()["delete"](`http://localhost:3000/api/movies/${t}`).then((t=>{console.log(t.data),e("removeMovie",title)})).catch((e=>{alert(e)}))},async searchMovie({commit:e},t){await Ft().get(`http://localhost:3000/api/movies/find/${t}`).then((t=>{const a=t.data;e("setMovies",a)})).catch((e=>{alert(e)}))},async GET_SHOWS({commit:e}){await Ft().get("http://localhost:3000/api/shows").then((t=>{const a=t.data;e("setShows",a)})).catch((e=>{alert(e)}))},async addShow({commit:e},t){await Ft().post("http://localhost:3000/api/shows",{title:t.title,year:t.year,genre:t.genre,season:t.season,episode:t.episode,rating:t.rating}).then((t=>{console.log(t.data),e("")})).catch((e=>{alert(e)}))},async deleteOneShow({commit:e},t){await Ft()["delete"](`http://localhost:3000/api/shows/${t}`).then((t=>{console.log(t.data),e("removeShow",title)})).catch((e=>{alert(e)}))},async searchShow({commit:e},t){await Ft().get(`http://localhost:3000/api/shows/find/${t}`).then((t=>{const a=t.data;e("setShows",a)})).catch((e=>{alert(e)}))},async GET_STANDUPS({commit:e}){await Ft().get("http://localhost:3000/api/standups").then((t=>{const a=t.data;e("setStandups",a),console.log(a)})).catch((e=>{alert(e)}))},async addStandup({commit:e},t){await Ft().post("http://localhost:3000/api/standups",{title:t.title,year:t.year,mainActor:t.mainActor,rating:t.rating}).then((t=>{console.log(t.data),e("")})).catch((e=>{alert(e)}))},async deleteOneStandup({commit:e},t){await Ft()["delete"](`http://localhost:3000/api/standups/${t}`).then((t=>{console.log(t.data),e("removeStandup",title)})).catch((e=>{alert(e)}))},async searchStandup({commit:e},t){await Ft().get(`http://localhost:3000/api/standups/find/${t}`).then((t=>{const a=t.data;e("setStandups",a)})).catch((e=>{alert(e)}))},async GET_ANIMES({commit:e}){await Ft().get("http://localhost:3000/api/animes").then((t=>{const a=t.data;e("setAnimes",a),console.log(a)})).catch((e=>{alert(e)}))},async addAnime({commit:e},t){await Ft().post("http://localhost:3000/api/animes",{title:t.title,year:t.year,genre:t.genre,creator:t.creator,season:t.season,episode:t.episode,rating:t.rating}).then((t=>{console.log(t.data),e("")})).catch((e=>{alert(e)}))},async deleteOneAnime({commit:e},t){await Ft()["delete"](`http://localhost:3000/api/animes/${t}`).then((t=>{e("removeAnime",title)})).catch((e=>{alert(e)}))},async searchAnime({commit:e},t){await Ft().get(`http://localhost:3000/api/animes/find/${t}`).then((t=>{const a=t.data;e("setAnime",a)})).catch((e=>{alert(e)}))},async register({commit:e},t){fetch("http://localhost:2000/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((t=>e("setToken",t.token)))},async login({commit:e},t){const a={email:t.email,password:t.password};fetch("http://localhost:2000/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((e=>e.json())).then((t=>{t.msg?alert(t.msg):e("setToken",t.token)}))},async GET_COMMENTS({commit:e},t){await Ft().get("http://localhost:3000/api/comments/"+t).then((t=>{const a=t.data;e("setComments",a)})).catch((e=>{alert(e)}))},async postComment({commit:e},t){await Ft().post("http://localhost:3000/api/comments",{object:t.object,content:t.content}).then((t=>{console.log(t.data),e("")})).catch((e=>{alert(e)}))},socket_comment({commit:e},t){const a=JSON.parse(t);e("addComment",{content:a.content,object:a.object})}}});n["default"].use(It.XG7),n["default"].use(Zt.A7),n["default"].use(new(Bt())({debug:!1,connection:"ws://localhost:8080",vuex:{store:Xt,actionPrefix:"socket_"}})),n["default"].config.productionTip=!1,new n["default"]({router:Yt,store:Xt,render:e=>e(c)}).$mount("#app")},3287:function(e,t,a){e.exports=a.p+"img/favicon.66e5b302.jpg"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,s){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<i&&(i=s));if(r){e.splice(u--,1);var m=o();void 0!==m&&(t=m)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,i=n[0],r=n[1],l=n[2],m=0;if(i.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(l)var u=l(a)}for(t&&t(n);m<i.length;m++)s=i[m],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},n=self["webpackChunkprojekat"]=self["webpackChunkprojekat"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(2034)}));n=a.O(n)})();
//# sourceMappingURL=app.c7eb72d8.js.map