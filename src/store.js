import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import searchReducer from "./reducers/searchReducer";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/movieReducer";
import singleMovieReducer from "./reducers/singleMovieReducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const persistConfig = {
	key: "root",
	storage
};
const reducer = combineReducers({
	search: searchReducer,
	movies: movieReducer,
	genres: genreReducer,
	singleMovie: singleMovieReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
store.subscribe(() => console.log(store.getState()));
