import React, { Component } from "react";
import Main from "./containers/main/index";
import MyStories from "./containers/myPage/myStories";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<Main />
				<MyStories />
			</div>
		);
	}
}

export default App;