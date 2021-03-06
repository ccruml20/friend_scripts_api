import React from "react";
import * as mdc from "material-components-web/dist/material-components-web";
import "./style.css";

import TinyMCE from 'react-tinymce';


class EditStories extends React.Component {
	constructor(props) {
		super(props);
	}

	handleEditorChange(e) {
		console.log(e.target.getContent());
	}

	render() {
		console.log(this.props.stories);
		return (
			<div className="mdc-radio col-md-12">
				<div
					style={{ height: "120px", margin: "15px 0 15px 0" }}
					className="col-md-6"
					>
						<form onSubmit={this.props.handleSubmit}>
							<div className="mdc-card">
								<section className="mdc-card__primary">
									<h1 className="mdc-card__title mdc-card__title--large">
										{this.props.pickedStory.storyTitle}
									</h1>
								</section>
								<div>

									<TinyMCE
										content={this.props.stories}
										config={{
											plugins: 'autolink link image lists print preview',
											toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
										}}
										onChange={this.handleEditorChange}
									/>
								</div>
								<section className="mdc-card__supporting-text">
									{/* <div >
										{this.props.pickedStory.sentence}
										{this.props.stories.map((info, index) => {
											console.log(
												info,
												"info {{{{{{{{{{{{{{{infomap}}}}}}}}}}}}}}}"
											);
											return <span>{` ${info} `}</span>;
										})}
									</div> */}
								</section>
								<div className="textField mdc-textfield col-md-12">
									<input
										placeholder="Add To Story"
										onChange={(e, value) => this.props.handleChange(e, value)}
										value={this.props.text}
										type="text"
										id="my-textfield"
										className="textField col-md-12 mdc-textfield__input"
									/>
								</div>
								<section className="mdc-card__actions">
									<button
										type="submit"
										className="mdc-button mdc-button--compact mdc-card__action"
										>
											Submit
										</button>
									</section>
								</div>
							</form>
						</div>
					</div>
				);
			}
		}

		export default EditStories;
