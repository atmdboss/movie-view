import axios from "axios";
const API_KEY = "dd0e35d1fcb28d0e90e8bc65999b099b";

// const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=`;

const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

const getCategory = async (category, page = "1") => {
	const movies = await axios.get(
		`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
	);
	return movies.data;
};
const getGenres = async () => {
	const genres = await axios.get(genresUrl);
	return genres.data;
};
const getSingleMovie = async id => {
	const movie = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos%2Ccredits%2Csimilar`
	);
	return movie.data;
};
const getSingleGenre = async id => {
	const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`;
	const genre = await axios.get(`${genreUrl}`);
	return genre.data;
};
const searchMovies = async (keyword, page = "1") => {
	const movies = await axios.get(`
https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=${page}&include_adult=false`);
	return movies.data;
};

export default {
	getCategory,
	getGenres,
	getSingleMovie,
	getSingleGenre,
	searchMovies
};
