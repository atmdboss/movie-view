import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { Grid, Item } from "semantic-ui-react";

const MovieCardList = ({ movies }) => {
	return (
		<Grid doubling container columns={4}>
			{movies.map(movie => (
				<Grid.Column key={movie.id}>
					<Item as={Link} to={`/movie/${movie.id}`}>
						<MovieCard
							image={movie.poster_path}
							title={movie.title}
							year={movie.release_date.split("-")[0]}
						/>
					</Item>
				</Grid.Column>
			))}
		</Grid>
	);
};

export default MovieCardList;
