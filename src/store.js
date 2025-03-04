import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import searchReducer from "./reducers/searchReducer";
import genreListReducer from "./reducers/genreListReducer";
import movieReducer from "./reducers/movieReducer";
import singleMovieReducer from "./reducers/singleMovieReducer";
import singleGenreReducer from "./reducers/singleGenreReducer";
import categoryReducer from "./reducers/categoryReducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const reducer = combineReducers({
	search: searchReducer,
	movies: movieReducer,
	genres: genreListReducer,
	singleMovie: singleMovieReducer,
	category: categoryReducer,
	singleGenre: singleGenreReducer
});
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["login"] //for when i implement login functionality
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
store.subscribe(() => console.log(store.getState()));
