import React, { useEffect } from "react";
import MovieCardList from "./MovieCardList";
import { initSingleGenre } from "../reducers/singleGenreReducer";
import { connect } from "react-redux";

const MoviesGenre = ({ id, singleGenre }) => {
	useEffect(() => {
		// todo - seems not to be working
		initSingleGenre(id);
	}, [initSingleGenre, id]);
	if (!singleGenre) return null;
	return (
		<main>
			<h2 style={{ textAlign: "center" }}>Movie Genre</h2>
			<MovieCardList movies={singleGenre} />
		</main>
	);
};
const mapStateToProps = ({ singleGenre }) => {
	return { singleGenre };
};
export default connect(mapStateToProps, { initSingleGenre })(MoviesGenre);
