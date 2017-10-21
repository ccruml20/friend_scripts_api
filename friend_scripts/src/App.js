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
		this.getUserID = this.getUserID.bind(this)
	}
	getUserID(){
		return this.state.userID
	}

	isLoggedIn() {
console.log(this.state)
console.log(this.state.userPic);
		return this.state.user;
	}

	logInUser(userName, id, pic, token) {
		// userID = id;
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
					<AuthRoute exact path="/" component={Main} checkAuth={() => this.isLoggedIn()} userID={this.state.userID}/>
					<Route exact path="/landingMain" render={(props) => <Landing_Main logInUser={this.logInUser.bind(this)} {...props} />} />
					<Route exact path="/CreateAccount" component={CreateAccountForm} />
				</div>
			</BrowserRouter>
		);
	}
}

function AuthRoute({component: Component, checkAuth, userID, ...rest}) {
	console.log(userID);
	return (
		<Route
			{...rest}
			render={(props) => (
			!checkAuth() ? (
				<Redirect to="/landingMain"/>
			) : (
				<Component userID={userID}/>
			)
		)}/>
	);
}

export default App;
