import React, { Component } from "react";
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends Component {
	render () {
		return (
			<HashRouter>
			<div class="sidebar">
				<h1>Alex Amadori</h1>
				<div className="header">
				<NavLink className="sidebar-link" exact to="/">Home</NavLink>
				<NavLink className="sidebar-link" to="/stuff">Projects</NavLink>
				<NavLink className="sidebar-link" to="/contact">Contact</NavLink>
				</div>
			</div><div className="content">
				<Route exact path="/"  component={Home}/>
				<Route path="/stuff"  component={Projects}/>
				<Route path="/contact"  component={Contact}/>
			</div>
			</HashRouter>
		)
	}
}

export default Main;
