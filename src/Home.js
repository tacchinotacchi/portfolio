import React, { Component } from "react";
import Stars from "./Stars";

class Home extends Component {
	render () {
		return (
			<div class="profile">
				<h1>Profile and Contacts</h1>
				<p>
					19 years old student at Ecole 42 (Paris) and professional coffee drinker, Alex Amadori.
					My specialty is turning raw caffeine into clean code. I will make your code reviewers happy, and your coffee provider happier.
				</p>
				<p>Experience: Algorithms/ML branch at Ecole 42, remote C++/HSLS/GLSL work on Unreal Engine 4 for <a href="https://www.nowherestudios.com/">nowhere studios</a>, self-learned binary reversing.</p>
				<p>Programming Languages:</p>
				<ul style={{ width: '25%'}}>
					<li>C <Stars score={10}/></li>
					<li>C++ <Stars score={9}/></li>
					<li>Python <Stars score={6}/></li>
					<li>x86 assembly <Stars score={5}/></li>
					<li>Java <Stars score={5}/></li>
					<li>C# <Stars score={5}/></li>
					<li>GLSL <Stars score={5}/></li>
				</ul>
				<p>Human Languages:</p>
				<ul style={{ width: '25%'}}>
					<li>English <Stars score={10}/></li>
					<li>Italian <Stars score={10}/></li>
					<li>French <Stars score={2}/></li>
					<li>Japanese <Stars score={2}/></li>
				</ul>
				<p>Hobbies: conding, coffee drinking, languages, binge-watching anything CyberPunk, listening to old-timey electro</p>
				<p>&lt;- Click somewhere on the sidebar to see some cool stuff</p>
			</div>
		)
	}
}

export default Home;
