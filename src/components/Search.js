import React, { useEffect } from "react";
import { searchMovie } from "../reducers/searchReducer";
import MovieCardList from "./MovieCardList";
import { connect } from "react-redux";

const Search = ({ search, searchMovie }) => {
	useEffect(() => {
		searchMovie(search.keyword);
	}, []);
	if (!search.movies) return null;
	return (
		<main>
			<h2 style={{ textAlign: "center" }}>Movie Search</h2>
			<MovieCardList movies={search.movies} />
		</main>
	);
};
const mapStateToProps = ({ search }) => {
	return { search };
};
export default connect(mapStateToProps, { searchMovie })(Search);
