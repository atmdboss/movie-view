import { Card, Grid, Image, Header } from "semantic-ui-react";
import React from "react";

const SingleCast = ({ name, character, image }) => {
	return (
		<Grid.Column width={4}>
			<Card style={{ marginBottom: 15 }}>
				<Image src={`https://image.tmdb.org/t/p/w154/${image}`} rounded />
				<Card.Content extra>
					<Header as='h5'>{name}</Header>
					<p>as {character}</p>
				</Card.Content>
			</Card>
		</Grid.Column>
	);
};

export default SingleCast;
