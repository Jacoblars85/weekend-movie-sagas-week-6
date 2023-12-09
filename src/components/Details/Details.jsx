import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function Details() {
    const history = useHistory()
    const dispatch = useDispatch();

    const genres = useSelector(store => store.genres);
    const currentMovie = useSelector(store => store.currentMovie);


    console.log('this is current current movie', genres);

    const goToHome = () => {
       
        history.push(`/`)
    }

    console.log('this is the genres', genres);

    return (
        <div key={currentMovie.id}>

            <h3>{currentMovie.title}</h3>
            <img src={currentMovie.poster} alt={currentMovie.title} />
            <p>{currentMovie.description}</p>

            {genres.map(genre => {
          return (
            <div key={genre.id}>
              <p>{genre.movie_genre}</p>
            </div>
          );
        })}


            <button onClick={goToHome}>back</button>
        </div>
    );
}


export default Details;