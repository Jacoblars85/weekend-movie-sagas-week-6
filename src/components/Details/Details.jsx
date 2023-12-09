import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Details() {
    const history = useHistory()

    const genres = useSelector(store => store.genres);
    const currentMovie = useSelector(store => store.currentMovie);

    const goToHome = () => {

        history.push(`/`)
    }

    return (
        <div data-testid="movieDetails">

            <h2>{currentMovie.title}</h2>

            <br />

            <img src={currentMovie.poster} alt={currentMovie.title} />

            <br />

            <p>{currentMovie.description}</p>

            <br />

            {genres.map(genre => {
                return (
                    <div key={genre.id}>
                        <p>{genre.movie_genre}</p>
                    </div>
                );
            })}

            <br />
            <KeyboardBackspaceIcon data-testid="toList" onClick={goToHome} fontSize='large'/>
        </div>
    );
}


export default Details;