import React, { Component } from "react";

class ProjectDescription {
	constructor(img, description) {
		this.img = img
		this.description = description
	}
}

class Project extends Component {
	renderImage() {
		if (this.props.img != null)
			return (
				<video controls muted autoplay="true" loop>
					<source src={this.props.img} type="video/mp4"/>
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
				<div class="video-description-wrapper">
					<div class="video-description">{this.props.description}</div>
				</div>
			</span>
		)
	}
}

class Projects extends Component {
	renderProjects () {
		let test = [
			new ProjectDescription(
				require("./resources/lemin.mp4"),
				"Lem-in is a solver for a routing problem, where a number of resources (\"ants\") have to be routed from a start node to an end node, in an undirected graph where the nodes have capacity of 1 resource, with the smallest amount of instructions (\"turns\") possible. The lowest cost solution is found by first computing the min-cost max-flow of the graph, and then scheduling the movement of the resources with a greedy algorithm to parallelize the instructions as much as possible. In order to facilitate debugging and visualization, the 3d visualizer uses linear regression to try and find a configuration with optimal distances for connected and non connected nodes, trying to make paths more easily visible."
			),
			new ProjectDescription(
				require("./resources/filler.mp4"), "In the game of Filler, two \"champions\" use random tetris-like pieces supplied randomly to try and conquer as much of the field as possible. While a basic min-max algorithm can go a long way, due to the randomness of the game it's impossible to look more than one move ahead. In order to get a statistical advantage, fuzzy parameters can be introduced to the algorithm and then evolved with a genetic algorithm. Simulating games takes more computing power than it looks, however due to the number of parameters a handful of generations are enough to get good results."
			),
			new ProjectDescription(
				null, "42 holy tree"
			),
			new ProjectDescription(
				null, "Corewars coming soon!"
			),
		]
		let result = test.map((elem, index) => {
			return (
				<Project img={elem.img} description={elem.description}/>
			)
		})
		return result
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
