import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

function Details() {
    const history = useHistory()
    const dispatch = useDispatch();
    const currentMovie = useSelector(store => store.currentMovie);

    console.log('this is current current movie', currentMovie);
    
    const goToHome = () => {
       
        history.push(`/`)
    }


    return (
        <div key={currentMovie.id}>

            <h3>{currentMovie.title}</h3>
            <img src={currentMovie.poster} alt={currentMovie.title} />
            <p>{currentMovie.description}</p>


            <button onClick={goToHome}>back</button>
        </div>
    );
}


export default Details;