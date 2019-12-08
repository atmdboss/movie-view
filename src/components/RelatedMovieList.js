import React from "react";
import RelatedMovieSingle from "./RelatedMovieSingle";

const RelatedMovieList = ({ movies }) => {
	if (movies.length === 0) return null;
	const moviesToShow = movies => {
		const shownMovies = [];
		if (movies.length > 10) {
			for (let i = 0; i < 10; i++) {
				shownMovies.push(movies[i]);
			}
			return shownMovies;
		} else {
			return movies;
		}
	};
	return (
		<div>
			<h3>Related Movies</h3>
			{moviesToShow(movies).map(movie => (
				<RelatedMovieSingle
					id={movie.id}
					key={movie.id}
					title={movie.title}
					year={movie.release_date.split("-")[0]}
					rating={movie.vote_average}
					image={movie.poster_path}
				/>
			))}
		</div>
	);
};

export default RelatedMovieList;
