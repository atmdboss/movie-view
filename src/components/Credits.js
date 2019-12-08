import React, { useState } from "react";
import { Menu, Segment, Grid, List, Header } from "semantic-ui-react";
import SingleCast from "./SingleCast";

const Credits = ({ credits }) => {
	const [showing, setShowing] = useState("cast");
	const handleItemClick = (e, { name }) => {
		setShowing(name);
	};

	return (
		<Segment>
			<Header as='h2'>Credits</Header>
			<Menu>
				<Menu.Item
					name='cast'
					active={showing === "cast"}
					onClick={handleItemClick}>
					Cast
				</Menu.Item>

				<Menu.Item
					name='crew'
					active={showing === "crew"}
					onClick={handleItemClick}>
					Crew
				</Menu.Item>
			</Menu>
			{showing === "cast" ? (
				<Grid container colums={3}>
					<Grid.Row>
						{credits.cast
							.filter(cast => cast.profile_path !== null && cast.character)
							.map(cast => (
								<SingleCast
									key={cast.id}
									image={cast.profile_path}
									name={cast.name}
									character={cast.character}
								/>
							))}
					</Grid.Row>
				</Grid>
			) : (
				<List divided relaxed>
					{credits.crew.map(crew => (
						<List.Item key={crew.credit_id}>
							<List.Content>
								<List.Header>{crew.name}</List.Header>
								<List.Description>
									Department: {crew.department}
									<br />
									Job: {crew.job}
								</List.Description>
							</List.Content>
						</List.Item>
					))}
				</List>
			)}
		</Segment>
	);
};

export default Credits;
