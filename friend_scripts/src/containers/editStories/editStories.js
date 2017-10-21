import React from "react";
import * as mdc from "material-components-web/dist/material-components-web";
import "./style.css";

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class EditStories extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// console.log(this.props, 'this is the entire props object');
const contentEditablefunc = function () {
	console.log(document.getElementById("contentEditable1").value);
}


		return (
			<div className="mdc-radio col-md-12">
				<div
					style={{ height: "120px", margin: "15px 0 15px 0" }}
					className="col-md-6"
				>
					<div onSubmit={this.props.handleSubmit}>
						<div className="mdc-card">
							<section className="mdc-card__primary">
								<h1 className="mdc-card__title mdc-card__title--large">
									{this.props.pickedStory.storyTitle}
								</h1>
							</section>
							<div>
								<Editor
								  toolbarClassName="toolbarClassName"
								  wrapperClassName="wrapperClassName"
								  editorClassName="editorClassName"
								  onEditorStateChange={this.onEditorStateChange}
								/>
							</div>
							<form
								<input className="mdc-card__supporting-text" id='contentEditable1' onChange={this.contentEditablefunc} contentEditable="true" >

									{this.props.pickedStory.sentence}
									{this.props.stories.map((info, index) => {
										console.log(
											info,
											"info {{{{{{{{{{{{{{{infomap}}}}}}}}}}}}}}}"
										);
										return <span>{` ${info} `}</span>;
									})}

							</input>
							</form>
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
					</div>
				</div>
			</div>
		);
	}
}

export default EditStories;
