import React, { useEffect } from "react";
import MovieCardList from "./MovieCardList";
import { initSingleGenre, unsetGenre } from "../reducers/singleGenreReducer";
import { connect } from "react-redux";
import { store } from "../store";

const MoviesGenre = ({ id, singleGenre, initSingleGenre }) => {
	useEffect(() => {
		// todo - seems not to be working
		initSingleGenre(id);
		return () => store.dispatch(unsetGenre());
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
