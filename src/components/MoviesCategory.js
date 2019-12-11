import React, { useEffect } from "react";
import MovieCardList from "./MovieCardList";
import { initCategory } from "../reducers/movieReducer";
import { connect } from "react-redux";

const MoviesCategory = ({ movies, initCategory, category }) => {
	useEffect(() => {
		initCategory(category);
	}, [initCategory, category]);
	if (!movies) return null;
	return (
		<main>
			<h2 style={{ textAlign: "center" }}>
				{category[0].toUpperCase() + category.slice(1)} Movies
			</h2>
			<MovieCardList movies={movies} />
		</main>
	);
};
const mapStateToProps = ({ movies, category }) => {
	return { movies: movies[category], category };
};

export default connect(mapStateToProps, { initCategory })(MoviesCategory);
