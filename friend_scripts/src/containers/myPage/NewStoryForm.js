import React from "react";

export default class NewStoryForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.changeStoryTitle = this.changeStoryTitle.bind(this);
		this.changeStorySentence = this.changeStorySentence.bind(this);
		this.storyInfo = {
			storyTitle: "",
			sentence: ""
		};
	}

	changeStoryTitle(event) {
		this.storyInfo.storyTitle = event.target.value;
	}

	changeStorySentence(event) {
		this.storyInfo.sentence = event.target.value;
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log("POST: " + JSON.stringify(this.storyInfo));
		fetch("./api/stories", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.storyInfo)
		});
	}

	render() {
		return (
			<div className="col-md-7 col-sm-8 bootMain">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="form_main">
								<h4 className="heading">
									<strong>Create </strong> New Story <span />
								</h4>
								<div className="form">
									<form id="contactFrm">
										<input
											id="newStoryTitle"
											placeholder="Title of New Story"
											type="text"
											className="txt userTitle"
											onChange={this.changeStoryTitle}
										/>

										<textarea
											id="newStoryText"
											placeholder="Your Message"
											type="text"
											className="txt_3"
											onChange={this.changeStorySentence}
										/>
										<input
											onClick={this.handleSubmit}
											type="submit"
											// value="Submit"
											name="Submit"
											className="txt2 commitNewStory"
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
