import React from "react";

class MyStories extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myStoryInfo: []
		};
	}

	componentDidMount() {
		var self = this;
		fetch("./api/myStories/1")
			.then(function(response) {
				return response.json();
			})
			.then(function(body) {
				// console.log(body);
				let myStoryInfo = body.map((info, index) => {
					console.log(info);

					return (
						<div key={index}>
							<div>storyTitle:{info.storyTitle}</div>
							<div>author: {info.author.authorName}</div>
						</div>
					);
				});
				self.setState({ myStoryInfo: myStoryInfo });
				// console.log("State", self.state.myStoryInfo);
			});
	}

	render() {
		return (
			<div>
				<div className="myStories">{this.state.myStoryInfo}</div>
			</div>
		);
	}
}

export default MyStories;
