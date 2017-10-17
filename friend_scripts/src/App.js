import React, { Component } from "react";

import Main from "./containers/main/index";
import { BrowserRouter, Route } from "react-router-dom";
import Landing_Main from "./containers/Landing/Landing_Main";
import CreateAccountForm from "./containers/Landing/CreateAccountPage";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={Main} />
					<Route exact path="/landingMain" component={Landing_Main} />
					<Route exact path="/CreateAccount" component={CreateAccountForm} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
