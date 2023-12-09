import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('SAGA_FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('SAGA_FETCH_GENRES', fetchTheGenre);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* fetchTheGenre(action) {
  try {
    // Get the genre:
    const genreResponse = yield axios.get(`/api/genres/${action.payload.id}`);
    // Set the value of the genre reducer:
    yield put({
      type: 'SET_GENRES',
      payload: genreResponse.data
    });
  } catch (error) {
    console.log('fetchTheGenre error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// reducer to colect movie detail you clicked
const currentMovie = (state = {}, action) => {
  if (action.type === 'SAGA_FETCH_GENRES') {
    return action.payload 
}
return state;
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    currentMovie,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
