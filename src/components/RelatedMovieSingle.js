import React from "react";
import { Card, Image, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RelatedMovieSingle = ({ id, image, title, year, rating }) => {
	return (
		<Segment>
			<Link to={`/movie/${id}`}>
				<Grid container>
					<Grid.Row columns={2}>
						<Grid.Column width={6}>
							<Card>
								<Image
									src={`https://image.tmdb.org/t/p/w92/${image}`}
									rounded
								/>
							</Card>
						</Grid.Column>
						<Grid.Column width={10}>
							<Header as='h5'>{title}</Header>
							<p>{year}</p>
							<p>{rating}/10</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Link>
		</Segment>
	);
};

export default RelatedMovieSingle;
