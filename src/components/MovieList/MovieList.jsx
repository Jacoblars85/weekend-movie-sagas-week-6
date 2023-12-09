import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {
  const history = useHistory()
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'SAGA_FETCH_MOVIES' });
  }, []);

  const goToDescription = (movie) => {
    dispatch({
      type: 'SAGA_FETCH_GENRES',
      payload: movie
    })

    history.push(`/details`)
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img data-testid="toDetails" onClick={() => goToDescription(movie)} src={movie.poster} alt={movie.title} />
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
