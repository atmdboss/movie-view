import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' render={() => <Home />} />
				<Route
					exact
					path='/movie/:id'
					render={({ match }) => <MovieDetails id={match.params.id} />}
				/>
			</Switch>
		</Router>
	);
};

export default App;
