import React, { Component } from "react";
import Main from "./containers/main/index";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Landing_Main from "./containers/Landing/Landing_Main";
import CreateAccountForm from "./containers/Landing/CreateAccountPage";
import "./App.css";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			userID: null,
			userPic: null,
			accessToken: null
		};
	}

	isLoggedIn() {
// 		var options = {
//     timeout:  3000
//   , pool:     { maxSockets:  Infinity }
//   , headers:  { connection:  "keep-alive" }
// };
//
// graph
// 	.setAccessToken(this.state.accessToken)
//   .setOptions(options)
//   .get("me", function(err, res) {
//     console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
//   });
// console.log(this.state.accessToken)
// console.log(this.state.userPic);
		return this.state.user;
	}

	logInUser(userName, id, pic, token) {

		this.setState({
			user: userName,
			userID: id,
			userPic: pic,
			accessToken: token
		});

	}

	logOutUser(){
		this.setState({
			user: null
		});
		// <Redirect {Landing_Main}/>
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<AuthRoute exact path="/" component={Main} checkAuth={() => this.isLoggedIn()} />
					<Route exact path="/landingMain" render={(props) => <Landing_Main logInUser={this.logInUser.bind(this)} {...props} />} />
					<Route exact path="/CreateAccount" component={CreateAccountForm} />
				</div>
			</BrowserRouter>
		);
	}
}

function AuthRoute({component: Component, checkAuth, ...rest}) {
	console.log(...rest);
	return (
		<Route
			{...rest}
			render={(props) => (
			!checkAuth() ? (
				<Redirect to="/landingMain"/>
			) : (
				<Component />
			)
		)}/>
	);
}

export default App;
