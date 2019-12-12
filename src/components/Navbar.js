import React, { useEffect } from "react";
import { Dropdown, Menu, Form, Input } from "semantic-ui-react";
import { searchUpdate } from "../reducers/searchReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../store";
import { withRouter } from "react-router-dom";
import { initGenres } from "../reducers/genreListReducer";
import { setCategory } from "../reducers/categoryReducer";

const Navbar = ({ history, keyword, genres, initGenres }) => {
	useEffect(() => {
		initGenres();
	}, [initGenres]);
	const handleSubmit = event => {
		event.preventDefault();
		history.push(`/search/${keyword}`);
	};
	const handleChange = event => {
		store.dispatch(searchUpdate(event));
	};
	return (
		<Menu style={{ marginBottom: 0 }} as='nav'>
			<Menu.Item
				onClick={() => store.dispatch(setCategory("upcoming"))}
				as={Link}
				to='/'
				name='Home'
			/>
			<Dropdown item text='Movies'>
				<Dropdown.Menu>
					<Dropdown.Item
						onClick={() => store.dispatch(setCategory("top_rated"))}
						as={Link}
						to='/category/top_rated'>
						Top Rated Movies
					</Dropdown.Item>
					<Dropdown.Item
						onClick={() => store.dispatch(setCategory("popular"))}
						as={Link}
						to='/category/popular'>
						Popular Movies
					</Dropdown.Item>
					<Dropdown.Item
						onClick={() => store.dispatch(setCategory("now_playing"))}
						as={Link}
						to='/category/now_playing'>
						Now Playing
					</Dropdown.Item>
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
							value={keyword}
							placeholder='Search...'
							onChange={handleChange}
						/>
					</Form>
				</Menu.Item>
			</Menu.Menu>
		</Menu>
	);
};
const mapStateToProps = ({ search, genres }) => {
	return { keyword: search.keyword, genres };
};
const NavRoute = withRouter(Navbar);
export default connect(mapStateToProps, { initGenres })(NavRoute);
