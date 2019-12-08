import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { changePageUpcoming } from "../reducers/movieReducer";
import { connect } from "react-redux";
import { Grid, Item, Pagination } from "semantic-ui-react";

const MovieCardList = ({ movies, changePageUpcoming }) => {
	const handlePageChange = (e, { activePage }) => {
		// activePage is a default on Pagination and is auto-controlled by the component.
		changePageUpcoming(activePage);
	};
	return (
		<>
			<Grid doubling container columns={4}>
				{movies.results.map(movie => (
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
			<Pagination
				siblingRange={2}
				defaultActivePage={1}
				totalPages={movies.total_pages}
				onPageChange={handlePageChange}
			/>
		</>
	);
};

export default connect(null, { changePageUpcoming })(MovieCardList);
