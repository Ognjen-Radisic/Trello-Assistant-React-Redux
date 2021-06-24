import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./pages/Board";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/board/:boardid">
					<Board />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
