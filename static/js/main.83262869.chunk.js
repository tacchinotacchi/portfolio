(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(41)},28:function(e,t,n){e.exports=n.p+"static/media/lemin.e384ad67.mp4"},29:function(e,t,n){e.exports=n.p+"static/media/filler.5a97e3bf.mp4"},30:function(e,t,n){e.exports=n.p+"static/media/42_Logo.65215e74.svg"},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),o=n(2),i=n(3),s=n(5),u=n(4),m=n(6),p=n(12),d=n(10),h=n(13),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderStars",value:function(){for(var e=[],t=1;t<=5;t++)this.props.score>=2*t?e.push(r.a.createElement(h.b,null)):this.props.score===2*t-1?e.push(r.a.createElement(h.c,null)):e.push(r.a.createElement(h.a,null));return e}},{key:"render",value:function(){return r.a.createElement("span",{class:"stars"},this.renderStars())}}]),t}(a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"profile"},r.a.createElement("h1",null,"Profile and Contacts"),r.a.createElement("p",null,"#TODO profile links"),r.a.createElement("p",null,"19 years old student at Ecole 42 (Paris) and professional coffee drinker, Alex Amadori. My specialty is turning raw caffeine into clean code. I will make your code reviewers happy, and your coffee provider happier."),r.a.createElement("p",null,"Experience: Algorithms/ML branch at Ecole 42, remote C++/HSLS/GLSL work on Unreal Engine 4 for ",r.a.createElement("a",{href:"https://www.nowherestudios.com/"},"nowhere studios"),", self-learned binary reversing."),r.a.createElement("p",null,"Programming Languages:"),r.a.createElement("ul",{style:{width:"25%"}},r.a.createElement("li",null,"C ",r.a.createElement(f,{score:10})),r.a.createElement("li",null,"C++ ",r.a.createElement(f,{score:9})),r.a.createElement("li",null,"Python ",r.a.createElement(f,{score:6})),r.a.createElement("li",null,"x86 assembly ",r.a.createElement(f,{score:5})),r.a.createElement("li",null,"Java ",r.a.createElement(f,{score:5})),r.a.createElement("li",null,"C# ",r.a.createElement(f,{score:5})),r.a.createElement("li",null,"GLSL ",r.a.createElement(f,{score:5}))),r.a.createElement("p",null,"Misc knowledge: Computer Science maths, TODO Statistics, Complexity"),r.a.createElement("p",null,"Human Languages:"),r.a.createElement("ul",{style:{width:"25%"}},r.a.createElement("li",null,"English ",r.a.createElement(f,{score:10})),r.a.createElement("li",null,"Italian ",r.a.createElement(f,{score:10})),r.a.createElement("li",null,"Japanese ",r.a.createElement(f,{score:3})),r.a.createElement("li",null,"French ",r.a.createElement(f,{score:2}))),r.a.createElement("p",null,"Hobbies: coding, coffee drinking, languages, binge-watching anything CyberPunk, listening to old-timey electro"),r.a.createElement("p",null,"#TODO profile links"),r.a.createElement("p",null,"<- Click somewhere on the sidebar to see some cool stuff"))}}]),t}(a.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"video-description-wrapper"},r.a.createElement("div",{class:"video-description"},this.props.content))}}]),t}(a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderImage",value:function(){return null!=this.props.src?r.a.createElement("img",{src:this.props.src,alt:""}):r.a.createElement("div",null,"placeholder")}},{key:"render",value:function(){return r.a.createElement("span",{class:"section"},r.a.createElement("div",{class:"video-wrapper"},this.renderImage()),r.a.createElement(b,{content:this.props.content}))}}]),t}(a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderImage",value:function(){return null!=this.props.src?r.a.createElement("video",{controls:!0,muted:!0,autoplay:"true",loop:!0},r.a.createElement("source",{src:this.props.src,type:"video/mp4"}),"Video couldn't load."):r.a.createElement("div",null,"placeholder")}},{key:"render",value:function(){return r.a.createElement("span",{class:"section"},r.a.createElement("div",{class:"video-wrapper"},this.renderImage()),r.a.createElement(b,{content:this.props.content}))}}]),t}(a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderProjects",value:function(){var e=[r.a.createElement("div",null,r.a.createElement("a",{href:"https://github.com/tacchinotacchi/lem-in"},"Lem-in"),' is a solver for a routing problem, where a number of resources ("ants") have to be routed from a start node to an end node, in an undirected graph where the nodes have capacity of 1 resource, with the smallest amount of instructions ("turns") possible. The lowest cost solution is found by first computing the min-cost max-flow of the graph, and then scheduling the movement of the resources with a greedy algorithm to parallelize the instructions as much as possible. In order to facilitate debugging and visualization, the 3d visualizer uses linear regression to try and find a configuration with optimal distances for connected and non connected nodes, trying to make paths more easily visible.'),r.a.createElement("div",null,"In the game of ",r.a.createElement("a",{href:"https://github.com/tacchinotacchi/filler_evolver"},"Filler"),', two "champions" use random tetris-like pieces supplied randomly to try and conquer as much of the field as possible. While a basic min-max algorithm can go a long way, due to the randomness of the game it\'s impossible to look more than one move ahead. In order to get a statistical advantage, fuzzy parameters can be introduced to the algorithm and then evolved with a genetic algorithm. Simulating games takes more computing power than it looks, however due to the number of parameters a handful of generations are enough to get good results.'),r.a.createElement("div",null,"List of projects completed at 42:"),r.a.createElement("div",null,"Corewars coming soon!")];return[r.a.createElement(v,{src:n(28),content:e[0]}),r.a.createElement(v,{src:n(29),content:e[1]}),r.a.createElement(g,{src:n(30),content:e[2]}),r.a.createElement(g,{src:null,content:e[3]})]}},{key:"render",value:function(){return r.a.createElement("div",{class:"projects"},r.a.createElement("h1",null,"Projects"),this.renderProjects())}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{class:"sidebar"},r.a.createElement("h1",null,"Alex Amadori"),r.a.createElement("div",{className:"header"},r.a.createElement(p.b,{className:"sidebar-link",exact:!0,to:"/"},"Home"),r.a.createElement(p.b,{className:"sidebar-link",to:"/stuff"},"Projects"))),r.a.createElement("div",{className:"content"},r.a.createElement(d.a,{exact:!0,path:"/",component:E}),r.a.createElement(d.a,{path:"/stuff",component:y})))}}]),t}(a.Component);n(39),n(40);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.83262869.chunk.js.map