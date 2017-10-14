import React, { Component } from "react";
import Main from "./containers/main/index";
import MyStories from "./containers/myPage/myStories";
import { BrowserRouter, Route } from "react-router-dom";
import Landing_Main from "./containers/Landing/Landing_Main";
import "./App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Main} />
					<Route exact path="/landingMain" component={Landing_Main} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
