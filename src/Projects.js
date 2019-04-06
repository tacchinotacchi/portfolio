import React, { Component } from "react";

class ProjectDescription extends Component {
	render () {
		return (
			<div class="video-description-wrapper">
				<div class="video-description">{this.props.content}</div>
			</div>
		)
	}
}

class PicProject extends Component {
	renderImage() {
		if (this.props.src != null)
			return (
				<img src={this.props.src} alt=""/>
			)
		else
			return (
				<div>placeholder</div>
			)
	}
	render () {
		return (
			<span class="section">
				<div class="video-wrapper">{this.renderImage()}</div>
				<ProjectDescription content={this.props.content}/>
			</span>
		)
	}
}

class VideoProject extends Component {
	renderImage() {
		if (this.props.src != null)
			return (
				<video controls muted autoplay="true" loop>
					<source src={this.props.src} type="video/mp4"/>
					Video couldn't load.
				</video>
			)
		else
			return (
				<div>placeholder</div>
			)
	}
	render () {
		return (
			<span class="section">
				<div class="video-wrapper">{this.renderImage()}</div>
				<ProjectDescription content={this.props.content}/>
			</span>
		)
	}
}

class Projects extends Component {
	renderProjects () {
		let descriptions = [
			<div>
				<a href="https://github.com/tacchinotacchi/lem-in">Lem-in</a> is a solver for a routing problem, where a number of resources ("ants") have to be routed from a start node
				to an end node, in an undirected graph where the nodes have capacity of 1 resource, with the smallest amount of instructions
				("turns") possible. The lowest cost solution is found by first computing the min-cost max-flow of the graph, and then
				scheduling the movement of the resources with a greedy algorithm to parallelize the instructions as much as possible.
				In order to facilitate debugging and visualization, the 3d visualizer uses linear regression to try and find a configuration
				with optimal distances for connected and non connected nodes, trying to make paths more easily visible."
			</div>,
			<div>
				"In the game of <a href="https://github.com/tacchinotacchi/filler_evolver">Filler</a>, two "champions" use random tetris-like pieces supplied randomly
				to try and conquer as much of the field as possible. While a basic min-max algorithm can go a long way,
				due to the randomness of the game it's impossible to look more than one move ahead. In order to get a statistical
				advantage, fuzzy parameters can be introduced to the algorithm and then evolved with a genetic algorithm.
				Simulating games takes more computing power than it looks, however due to the number of parameters a handful
				of generations are enough to get good results."
			</div>,
			<div>42 holy tree</div>,
			<div>Corewars coming soon!</div>
		]
		let projects = [
			<VideoProject src={require("./resources/lemin.mp4")} content={descriptions[0]}/>,
			<VideoProject src={require("./resources/filler.mp4")} content={descriptions[1]}/>,
			<PicProject src={require("./resources/42_Logo.svg")} content={descriptions[2]}/>,
			<PicProject src={null} content={descriptions[3]}/>
		]
		return projects
	}
	render () {
		return (
			<div class="projects">
				<h1>Projects</h1>
				{this.renderProjects()}
	 		 </div>
		)
	}

}

export default Projects;
