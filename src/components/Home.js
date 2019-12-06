import React, { useEffect } from "react";
import { Pagination } from "semantic-ui-react";
import MovieCardList from "./MovieCardList";
import { initUpcoming, changePageUpcoming } from "../reducers/movieReducer";
import { connect } from "react-redux";

const Home = ({ movies, initUpcoming, changePageUpcoming }) => {
	useEffect(() => {
		initUpcoming();
	}, []);
	const handlePageChange = (e, { activePage }) => {
		// activePage is a default on Pagination and is auto-controlled by the component.
		changePageUpcoming(activePage);
	};
	return (
		<main>
			<h2>Upcoming Movies</h2>
			<MovieCardList movies={movies.results} />
			<Pagination
				siblingRange={2}
				defaultActivePage={1}
				totalPages={movies.total_pages}
				onPageChange={handlePageChange}
			/>
		</main>
	);
};

const mapStateToProps = ({ movies }) => {
	return { movies: movies.upcoming };
};

export default connect(mapStateToProps, { initUpcoming, changePageUpcoming })(
	Home
);
