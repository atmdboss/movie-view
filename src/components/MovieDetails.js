import React, { useEffect } from "react";
import { store } from "../store";
import { initMovie, unmountMovie } from "../reducers/singleMovieReducer";
import { connect } from "react-redux";
import RelatedMovieList from "./RelatedMovieList";
import Credits from "./Credits";
import {
	Card,
	Image,
	Grid,
	List,
	Segment,
	Header,
	Embed
} from "semantic-ui-react";
import "../custom styles/MovieDetails.css";

const MovieDetails = ({ id, singleMovie, initMovie }) => {
	useEffect(() => {
		initMovie(id);
		return () => store.dispatch(unmountMovie());
	}, [initMovie, id]);
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
		overview,
		videos,
		similar,
		credits
	} = singleMovie;
	if (!singleMovie) return null;
	return (
		<div>
			<div
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/w780${backdrop_path})`
				}}
				className='MovieHeader'>
				<div className='MovieHeader-overlay'>
					<Grid container columns={4}>
						<Grid.Row style={{ marginTop: 20 }}>
							<Grid.Column>
								<Card>
									<Image
										src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
										rounded
									/>
								</Card>
							</Grid.Column>
							<Grid.Column>
								<List style={{ color: "white" }}>
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
			</div>
			<Grid container columns='equal'>
				<Grid.Row>
					<Grid.Column width={12}>
						<Segment as='section'>
							<Header size='medium'>Overview</Header>
							<p>{overview}</p>
						</Segment>

						{videos.results.length > 1 && (
							<Segment as='section'>
								<Header size='medium'>Trailer</Header>
								<Embed
									id={videos.results[0].key}
									placeholder={`https://image.tmdb.org/t/p/w342/${backdrop_path}`}
									source={videos.results[0].site.toLowerCase()}
								/>
							</Segment>
						)}
						<Credits credits={credits} />
					</Grid.Column>
					<Grid.Column>
						<RelatedMovieList movies={similar.results} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};
const mapStateToProps = ({ singleMovie }) => {
	return { singleMovie };
};
export default connect(mapStateToProps, { initMovie })(MovieDetails);
