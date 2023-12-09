import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function Details() {
    const history = useHistory()

    const genres = useSelector(store => store.genres);
    const currentMovie = useSelector(store => store.currentMovie);

    const goToHome = () => {

        history.push(`/`)
    }

    return (
        <div data-testid="movieDetails">


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

            <button data-testid="toList" onClick={goToHome}>back</button>
        </div>
    );
}


export default Details;