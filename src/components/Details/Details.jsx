import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function Details() {
    const history = useHistory()
    const dispatch = useDispatch();
    const currentMovie = useSelector(store => store.currentMovie);


    const goToHome = () => {
        dispatch({
            type: 'RESET_CURENT_MOVIE',
        })
        history.push(`/`)
    }


    return (
        <div>

            {currentMovie.map(movie => {
                return (
                    <div data-testid='movieItem' key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title} />
                    </div>
                );
            })}

            <button onClick={goToHome}>back</button>
        </div>
    );
}


export default Details;