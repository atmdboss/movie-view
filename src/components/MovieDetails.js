import React, { useEffect } from "react";
import { store } from "../store";
import { initMovie, unmountMovie } from "../reducers/singleMovieReducer";
import { connect } from "react-redux";
import {
	Card,
	Image,
	Grid,
	List,
	Segment,
	Header,
	Container
} from "semantic-ui-react";
import "../custom styles/MovieDetails.css";

const MovieDetails = ({ id, singleMovie, initMovie }) => {
	useEffect(() => {
		initMovie(id);
		return () => store.dispatch(unmountMovie());
	}, []);
	const {
		backdrop_path,
		poster_path,
		title,
		release_date,
		vote_average,
		genres,
		budget,
		runtime,
		status,
		overview
	} = singleMovie;
	if (!singleMovie) return null;
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w780${backdrop_path})`
				}}
				className='MovieHeader'>
				<Grid container columns={4}>
					<Grid.Row>
						<Grid.Column>
							<Card>
								<Image
									src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
									rounded
								/>
							</Card>
						</Grid.Column>
						<Grid.Column>
							<List>
								<List.Header as='h2'>{title}</List.Header>
								<List.Content verticalAlign='middle'>
									<List.Item>Released: {release_date}</List.Item>
									<List.Item>Rating: {vote_average}/10</List.Item>
									<List.Item>
										Genres: {genres.map(genre => genre.name)}
									</List.Item>
									<List.Item>Budget: {budget}</List.Item>
									<List.Item>Runtime: {runtime}</List.Item>
									<List.Item>Status: {status}</List.Item>
								</List.Content>
							</List>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
			<Container>
				<Segment as='section'>
					<Header size='medium'>Overview</Header>
					<p>{overview}</p>
				</Segment>
			</Container>
		</div>
	);
};
const mapStateToProps = ({ singleMovie }) => {
	return { singleMovie };
};
export default connect(mapStateToProps, { initMovie })(MovieDetails);
