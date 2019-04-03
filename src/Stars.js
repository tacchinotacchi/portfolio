import React, { Component } from "react";
import {
	FaStarHalfAlt,
	FaRegStar,
	FaStar
} from "react-icons/fa";

class Stars extends Component {
	constructor(props) {
		super(props)
		this.score = props.score
	}
	renderStars() {
		let stars = []
		for (let i = 1; i <= 5; i++) {
			if (this.score >= i * 2)
				stars.push(<FaStar/>)
			else if (this.score === (i * 2) - 1)
				stars.push(<FaStarHalfAlt/>)
			else
				stars.push(<FaRegStar/>)
		}
		return stars
	}
	render() {
		return (
			<span class="stars">
				{this.renderStars()}
			</span>
		)
	}
}

export default Stars;
