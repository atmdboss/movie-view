import React, { useEffect } from "react";
import MovieCardList from "./MovieCardList";
import { initUpcoming } from "../reducers/movieReducer";
import { connect } from "react-redux";

const Home = ({ movies, initUpcoming }) => {
	useEffect(() => {
		initUpcoming();
	}, [initUpcoming]);

	return (
		<main>
			<h2 style={{ textAlign: "center" }}>Upcoming Movies</h2>
			<MovieCardList movies={movies} />
		</main>
	);
};

const mapStateToProps = ({ movies }) => {
	return { movies: movies.upcoming };
};

export default connect(mapStateToProps, { initUpcoming })(Home);
