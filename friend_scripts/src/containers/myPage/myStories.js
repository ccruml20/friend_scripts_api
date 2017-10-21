import React from "react";
import NewStoryForm from "./NewStoryForm";
import * as mdc from "material-components-web/dist/material-components-web";
import EditStories from "../editStories/editStories.js";
import ChatContainer from "../chat/ChatContainer";

class MyStories extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stories: [],
			text: "",
			storyId: "",
			authorId: "",
			myStoryInfo: [],
			pickedStory: "",
			elementHidden: true,
			elementHidden2: !true
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlePickedStory = this.handlePickedStory.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(e) {
		console.log("full state obj", this.state);
		e.preventDefault();
		const { text, storyId, authorId } = this.state;
		this.setState({ text: text });
		const sentences = {
			sentence: text,
			storyId,
			authorId
		};
		// console.log("this is the sentence object to post", sentences);
		fetch("/api/sentences", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(sentences)
		})
		.then(result => {
			return result;
		})
		.then(response => {
			const stories = response;
		})
		.catch(err => {
			console.log(err);
		});

		fetch(`./api/fullstory-${storyId}`, {})
		.then(response => {
			return response.json();
		})
		.then(body => {
			let stories = [];
			let fullstory = body.map((info, index) => {
				stories.push(info.sentence);
				console.log(stories);
				return stories;
			});



		});
	}


	handlePickedStory(e, info) {
		e.preventDefault();
		let pickedStory = info;
		let text = pickedStory.sentence;
		let storyId = pickedStory.id;
		let authorId = pickedStory.author.id;
		this.setState({
			pickedStory: pickedStory,
			storyId: storyId,
			authorId: authorId
		});
		// this.setState({text: e.target.value})
		this.setState({ elementHidden: !true });
		this.setState({ elementHidden2: true });

		fetch(`./api/fullstory-${storyId}`, {})
		.then(response => {
			return response.json();
		})
		.then(body => {
			let stories = [];
			let fullstory = body.map((info, index) => {
				stories.push(info.sentence);
				return stories;
			});
			this.setState({ stories });
			let formatedStories = stories.join()
			console.log(formatedStories)
			let moreFormatting = ("<p>"+formatedStories+"</p>");
			moreFormatting = '"'+moreFormatting+'"'
			console.log(moreFormatting , ' formatedStories damnit');
			this.setState({ stories: moreFormatting });

		});
	}

	handleChange(e, value) {
		this.setState({ text: e.target.value });
	}

	componentWillMount() {
		const self = this;
		console.log(this.props.userID, 'this is the state as of now bitches===================')
		fetch("/api/myStories/"+this.props.userID)
			.then(function(response) {
				return response.json();
			})
			.then(function(body) {
				// console.log(body);
				let myStoryInfo = body;
				console.log(myStoryInfo)
				self.setState({ myStoryInfo: myStoryInfo });
				// console.log("State", self.state.myStoryInfo);
			});
	}
	render() {
		return (
			<div>
				<div style={{ display: this.state.elementHidden ? "block" : "none" }}>
					<div className="col-md-12">
						<h1 className="col-md-6" style={{ margin: "40px 0 40px 0" }}>
							{" "}
							Latest Stories{" "}
						</h1>
						<h1 className="col-md-6" style={{ margin: "40px 0 40px 0" }}>
							{" "}
							Create Story{" "}
						</h1>
					</div>
					<div className="col-md-6">
						{this.state.myStoryInfo.map((info, index) => {
							return (
								<div key={index} className="stories">
									<div
										style={{ height: "120px", margin: "15px 0" }}
										className="col-md-6"
										>
											<div className="mdc-card">
												<section className="mdc-card__primary">
													<h1 className="mdc-card__title mdc-card__title--large">
														{info.storyTitle}
													</h1>
													<h2 className="mdc-card__subtitle">
														{info.author.authorName}
													</h2>
												</section>
												<section className="mdc-card__supporting-text">
													{info.sentence}
												</section>
												<section className="mdc-card__actions">
													<button
														onClick={e => this.handlePickedStory(e, info)}
														value={info}
														className="mdc-button mdc-button--compact mdc-card__action"
														>
															Edit
														</button>
														<button className="mdc-button mdc-button--compact mdc-card__action">
															Read
														</button>
													</section>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<NewStoryForm />
						</div>
						<div style={{ display: this.state.elementHidden2 ? "block" : "none" }}>
							<EditStories
								stories={this.state.stories}
								storyId={this.state.storyId}
								handleSubmit={this.handleSubmit}
								text={this.state.text}
								elementHidden={this.state.elementHidden}
								elementHidden2={this.state.elementHidden}
								pickedStory={this.state.pickedStory}
								handleChange={this.handleChange}
							/>
						</div>
					</div>
					<NewStoryForm />
				</div>
				<div style={{ display: this.state.elementHidden2 ? "block" : "none" }}>
					<EditStories
						stories={this.state.stories}
						handleSubmit={this.handleSubmit}
						text={this.state.text}
						elementHidden={this.state.elementHidden}
						elementHidden2={this.state.elementHidden}
						pickedStory={this.state.pickedStory}
						handleChange={this.handleChange}
					/>
				</div>
				<ChatContainer />
			</div>
		);
	}
}

		export default MyStories;
