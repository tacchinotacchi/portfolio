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
				null, "corewar description placeholder"
			),
			new ProjectDescription(
				require("./resources/lemin.mp4"),
				"Lem-in is a solver for a routing problem, where a number of resources \(\"ants\"\) have to be routed from a start node to an end node, in an undirected graph where the nodes have capacity of 1 resource. "
			),
			new ProjectDescription(
				require("./resources/filler.mp4"), "genetic algo filler champs"
			),
			new ProjectDescription(
				null, "42 holy tree"
			)
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
