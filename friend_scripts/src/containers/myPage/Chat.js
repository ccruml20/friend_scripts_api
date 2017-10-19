import React from "react";
import $ from "jquery";
import { chatfunc } from "../../chat";

export default class Chat extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		chatfunc();
	}
	render() {
		return (
			<div>
				<button id="chatBtn" className="btn btn-info">
					Chat
				</button>
				<div id="chatContainer" className="container">
					<div className="row">
						<div className="col-md-6 offset-md-3 col-sm-12">
							<h1 className="text-center">
								Friendscripts Chat
								<button id="clear" className="btn btn-danger">
									Clear
								</button>
							</h1>
							<div id="status" />
							<div id="chat">
								<input
									type="text"
									id="username"
									className="form-control"
									placeholder="Enter name..."
								/>
								<br />
								<div className="card">
									<div class="card-block" id="messages" />
								</div>
								<br />
								<textarea
									id="textarea"
									className="form-control"
									placeholder="Enter message..."
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
