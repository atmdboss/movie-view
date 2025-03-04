import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { changePageCategory } from "../reducers/movieReducer";
import { changePageSearch } from "../reducers/searchReducer";
import { changePageGenre } from "../reducers/singleGenreReducer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Item, Pagination } from "semantic-ui-react";

const MovieCardList = ({
	match,
	movies,
	category,
	changePageCategory,
	changePageSearch,
	changePageGenre
}) => {
	const handlePageChange = (e, { activePage }) => {
		// activePage is a default on Pagination and is auto-controlled by the component.
		if (match.path.includes("category") || match.path === "/") {
			changePageCategory(category, activePage);
		} else if (match.path.includes("search")) {
			changePageSearch(match.params.keyword, activePage);
		} else if (match.path.includes("genre")) {
			changePageGenre(match.params.genreId, activePage);
		}
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
const mapStateToProps = ({ category }) => {
	return { category };
};
const mapDispatchToProps = {
	changePageCategory,
	changePageSearch,
	changePageGenre
};
const MovieCardListRoute = withRouter(MovieCardList);
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardListRoute);
