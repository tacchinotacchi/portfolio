(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(43)},30:function(e,t,a){e.exports=a.p+"static/media/lemin.e384ad67.mp4"},31:function(e,t,a){e.exports=a.p+"static/media/filler.5a97e3bf.mp4"},32:function(e,t,a){e.exports=a.p+"static/media/42_Logo.65215e74.svg"},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=a(3),s=a(2),i=a(5),u=a(4),m=a(6),p=a(13),d=a(10),h=a(14),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderStars",value:function(){for(var e=[],t=1;t<=5;t++)this.props.score>=2*t?e.push(r.a.createElement(h.b,{key:t})):this.props.score===2*t-1?e.push(r.a.createElement(h.c,{key:t})):e.push(r.a.createElement(h.a,{key:t}));return e}},{key:"render",value:function(){return r.a.createElement("span",{className:"stars"},this.renderStars())}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"profile"},r.a.createElement("h1",null,"Profile and Contacts"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/alex-amadori-141203185/"},"LinkedIn Profile")),r.a.createElement("p",null,"19 years old student at Ecole 42 (Paris) and professional coffee drinker, Alex Amadori. My specialty is turning raw caffeine into clean code. I will make your code reviewers happy, and your coffee provider happier."),r.a.createElement("p",null,"Experience: Algorithms/ML branch at Ecole 42, remote C++/HSLS/GLSL work on Unreal Engine 4 for ",r.a.createElement("a",{href:"https://www.nowherestudios.com/"},"nowhere studios"),", self-learned binary reversing."),r.a.createElement("p",null,"Programming Languages:"),r.a.createElement("ul",{style:{width:"25%"}},r.a.createElement("li",null,"C ",r.a.createElement(E,{score:10})),r.a.createElement("li",null,"C++ ",r.a.createElement(E,{score:9})),r.a.createElement("li",null,"Python ",r.a.createElement(E,{score:6})),r.a.createElement("li",null,"x86 assembly ",r.a.createElement(E,{score:5})),r.a.createElement("li",null,"Java ",r.a.createElement(E,{score:5})),r.a.createElement("li",null,"C# ",r.a.createElement(E,{score:5})),r.a.createElement("li",null,"GLSL ",r.a.createElement(E,{score:5}))),r.a.createElement("p",null,"Misc knowledge: Computer Science maths, Statistics, Algorithm Complexity"),r.a.createElement("p",null,"Human Languages:"),r.a.createElement("ul",{style:{width:"25%"}},r.a.createElement("li",null,"English ",r.a.createElement(E,{score:10})),r.a.createElement("li",null,"Italian ",r.a.createElement(E,{score:10})),r.a.createElement("li",null,"Japanese ",r.a.createElement(E,{score:3})),r.a.createElement("li",null,"French ",r.a.createElement(E,{score:2}))),r.a.createElement("p",null,"Hobbies: coding, coffee drinking, languages, binge-watching anything CyberPunk, listening to old-timey electro"),r.a.createElement("p",null,"<- Click somewhere on the sidebar to see some cool stuff"))}}]),t}(n.Component),b=a(24),j=a(11),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"video-description-wrapper"},r.a.createElement("div",{className:"video-description"},this.props.content))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderImage",value:function(){return null!=this.props.src?r.a.createElement("img",{src:this.props.src,alt:""}):r.a.createElement("div",null,"placeholder")}},{key:"render",value:function(){return r.a.createElement("span",{className:"section"},r.a.createElement("div",{className:"video-wrapper"},this.renderImage()),r.a.createElement(v,{content:this.props.content}))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderImage",value:function(){return null!=this.props.src?r.a.createElement("video",{controls:!0,muted:!0,autoPlay:!0,loop:!0},r.a.createElement("source",{src:this.props.src,type:"video/mp4"}),"Video couldn't load."):r.a.createElement("div",null,"placeholder")}},{key:"render",value:function(){return r.a.createElement("span",{className:"section"},r.a.createElement("div",{className:"video-wrapper"},this.renderImage()),r.a.createElement(v,{content:this.props.content}))}}]),t}(n.Component);function g(e){if(!e.ok)throw Error(e.status);return e}var k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={projects:"Loading 42 projects"},fetch("https://1xudvdicd9.execute-api.us-east-1.amazonaws.com/dev/projects/40802").then(g).then(function(e){return e.json()}).then(function(e){return JSON.parse(e.body)}).then(a.projectsState.bind(Object(j.a)(Object(j.a)(a)))).catch(a.projectsError.bind(Object(j.a)(Object(j.a)(a)))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderProjectsHeader",value:function(){return r.a.createElement("div",{key:"header"},"Projects at 42:")}},{key:"renderProject",value:function(e,t){return r.a.createElement("div",{key:t,className:"project-desc"},e.project.name+" (score: "+e.final_mark+")",r.a.createElement("br",null))}},{key:"projectsState",value:function(e){var t=this,a=e.filter(function(e){return/^(?!.*(Day|[Ee]xam|Match|Eval)).*[a-zA-Z]+/.test(e.project.name)&&("finished"===e.status||"in_progress"===e.status)&&e["validated?"]}).map(function(e,a){return t.renderProject(e,a)}).sort(function(e,t){return e.id-t.id});this.setState({projects:[this.renderProjectsHeader()].concat(Object(b.a)(a))})}},{key:"projectsError",value:function(e){console.error(e),this.setState({projects:"Error fetching 42 projects"})}}]),Object(s.a)(t,[{key:"renderProjects",value:function(){var e=[r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/tacchinotacchi/lem-in"},"Lem-in"),' is a solver for a routing problem, where a number of resources ("ants") have to be routed from a start node to an end node, in an undirected graph where the nodes have capacity of 1 resource, with the smallest amount of instructions ("turns") possible.'),r.a.createElement("div",null,"In the game of ",r.a.createElement("a",{href:"https://github.com/tacchinotacchi/filler_evolver"},"Filler"),', two "champions" use random tetris-like pieces supplied randomly to try and conquer as much of the field as possible. I thought it would be a nice addition to write some fuzzy parameters into champion\'s code and write a genetic algorithm to evolve them.'),r.a.createElement("div",null,"placeholder"),r.a.createElement("div",null,"Corewars coming soon!")];return[r.a.createElement(O,{key:1,src:a(30),content:e[0]}),r.a.createElement(O,{key:2,src:a(31),content:e[1]}),r.a.createElement(y,{key:3,src:a(32),content:this.state.projects}),r.a.createElement(y,{key:4,src:null,content:e[3]})]}},{key:"render",value:function(){return r.a.createElement("div",{className:"projects"},r.a.createElement("h1",null,"Projects"),this.renderProjects())}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"sidebar"},r.a.createElement("h1",null,"Alex Amadori"),r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{className:"sidebar-link",exact:!0,to:"/"},"Home"),r.a.createElement(p.b,{className:"sidebar-link",to:"/stuff"},"Projects"))),r.a.createElement("div",{className:"content"},r.a.createElement(d.a,{exact:!0,path:"/",component:f}),r.a.createElement(d.a,{path:"/stuff",component:k})))}}]),t}(n.Component);a(41),a(42);l.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ba4a4eb0.chunk.js.map