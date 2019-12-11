import React from "react";
import Navbar from "./components/Navbar";
import MoviesCategory from "./components/MoviesCategory";
import MovieCardList from "./components/MovieCardList";
import MoviesGenre from "./components/MoviesGenre";
import Search from "./components/Search";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route
					exact
					path='/'
					render={() => <MoviesCategory category='upcoming' />}
				/>
				<Route
					exact
					path='/category/:category'
					render={({ match }) => (
						<MoviesCategory category={match.params.category} />
					)}
				/>
				<Route exact path='/search/:keyword' render={() => <Search />} />
				<Route
					exact
					path='/genre/:genreId'
					render={({ match }) => <MoviesGenre id={match.params.genreId} />}
				/>
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
