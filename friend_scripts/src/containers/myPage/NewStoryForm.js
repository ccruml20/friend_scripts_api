import React from "react";

export default class NewStoryForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStoryTitle = this.changeStoryTitle.bind(this);
    this.storyInfo = {
      newStoryTitle: this.newStoryTitle.value,
      newStoryText: this.newStoryText.value,
      sentence: "sentence"

    }
	}

changeStoryTitle (event) {
  this.
}

	handleSubmit(event) {
		event.preventDefault();
		fetch("./api/stories", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: {
				newStoryTitle: this.newStoryTitle.value,
				newStoryText: this.newStoryText.value,
				sentence: "sentence"
			}
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
											ref={ref => {
												this.newStoryTitle = ref;
											}}
											name="newStoryTitle"
											type="text"
											className="txt userTitle"
											OnChange={this.changeStoryTitle}
										/>

										<textarea
											id="newStoryText"
											ref={ref => {
												this.newStoryText = ref;
											}}
											placeholder="Your Message"
											name="newStoryText"
											type="text"
											className="txt_3"
										/>
										<input
											onSubmit={this.handleSubmit}
											type="submit"
											value="Submit"
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
