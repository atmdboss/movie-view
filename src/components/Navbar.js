import React, { useEffect } from "react";
import { Dropdown, Menu, Form, Input } from "semantic-ui-react";
import { searchUpdate } from "../reducers/searchReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../store";
import { initGenres } from "../reducers/genreReducer";

const Navbar = ({ search, genres, initGenres }) => {
	useEffect(() => {
		initGenres();
	}, [initGenres]);
	const handleSubmit = event => {
		event.preventDefault();
		// searchMovie(search);
		console.log(search);
	};
	const handleChange = event => {
		store.dispatch(searchUpdate(event));
	};
	return (
		<Menu style={{ marginBottom: 0 }} as='nav'>
			<Menu.Item as={Link} to='/' name='Home' />
			<Dropdown item text='Movies'>
				<Dropdown.Menu>
					<Dropdown.Item>Featured Movies</Dropdown.Item>
					<Dropdown.Item>Popular Movies</Dropdown.Item>
					<Dropdown.Item>Top Rated Movies</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown item text='Genres'>
				<Dropdown.Menu>
					{genres.map(genre => (
						<Dropdown.Item key={genre.id} as={Link} to={`/genre/${genre.id}`}>
							{genre.name}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
			<Menu.Menu position='right'>
				<Menu.Item>
					<Form onSubmit={handleSubmit}>
						<Input
							icon='search'
							placeholder='Search...'
							onChange={handleChange}
						/>
						{/* <Button type='submit' icon='search' /> */}
					</Form>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};
const mapStateToProps = ({ search, genres }) => {
	return { search, genres };
};
export default connect(mapStateToProps, { initGenres })(Navbar);
