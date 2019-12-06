import React from "react";
import { Card, Image } from "semantic-ui-react";

const MovieCard = ({ image, title, year }) => {
	return (
		<Card>
			<Image
				src={`https://image.tmdb.org/t/p/w500/${image}`}
				wrapped
				ui={false}
			/>
			<Card.Content extra>
				<Card.Description>{title}</Card.Description>
				<Card.Description>{year}</Card.Description>
			</Card.Content>
		</Card>
	);
};

export default MovieCard;
