import React, { Component } from "react";
import io from "socket.io-client";
var socket = io.connect("http://127.0.0.1:4000");
// var history = require("../../server.js");
export default class ChatContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			message: "",
			messages: ""
		};

		this.handleOnNameChange = this.handleOnNameChange.bind(this);
		this.handleOnMessageChange = this.handleOnMessageChange.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
	}

	componentDidMount() {
		console.log("did mount");
		socket.on("output", function(data) {
			console.log(data);
		});
	}

	componentWillMount() {
		console.log("did mount");
		socket.on("output", function(data) {
			console.log(data);
		});
	}

	componentWillUnmount() {
		console.log("did mount");
		socket.on("output", function(data) {
			console.log(data);
		});
	}

	handleOnNameChange(ev) {
		this.setState({ name: ev.target.value });
		// console.log(ev.target.value);
	}

	handleOnMessageChange(ev) {
		this.setState({ message: ev.target.value });
		// console.log(ev.target.value);
	}

	handleOnSubmit(ev) {
		ev.preventDefault();
		socket.emit("chat message", {
			name: this.state.name,
			message: this.state.message
		});

		socket.on("output", inboundMessage => {
			console.log(inboundMessage, "this is the inboundMessage");
			let messages = [];
			// console.log(body + 'this is the full story')
			inboundMessage.map((info, index) => {
				console.log(info, "fullchatie cathie");
				messages.push(info);
			});
			return messages;
		});

		// socket.on("output", inboundMessage => {
		// 	console.log(inboundMessage, "this is the inboundMessage");
		// 	let messages = [];
		// 	// console.log(body + 'this is the full story')
		// 	inboundMessage.map((info, index) => {
		// 		console.log(info, "fullchatie cathie");
		// 		messages.push(info.name + info.message);
		// 		return messages;
		// 	});
		//
		// 	this.setState({ messages });
		// 	console.log("state object", messages);
		// });
	}

	render() {
		return (
			<div>
				<div className="container form-control">
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
									onChange={this.handleOnNameChange}
									value={this.state.input}
								/>
								<br />
								<div className="card">
									<div className="card-block" id="messages" />
								</div>
								<br />
								<textarea
									id="textarea"
									className="form-control"
									placeholder="Enter message..."
									onChange={this.handleOnMessageChange}
								/>
							</div>
							<button type="submit" onClick={this.handleOnSubmit}>
								Send
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
