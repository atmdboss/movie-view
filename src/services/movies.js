import axios from "axios";
const API_KEY = "dd0e35d1fcb28d0e90e8bc65999b099b";

const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=`;

const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

const getUpcoming = async (page = "1") => {
	const movies = await axios.get(`${upcomingUrl}${page}`);
	return movies.data;
};
const getGenres = async () => {
	const genres = await axios.get(genresUrl);
	return genres.data;
};

export default { getUpcoming, getGenres };
