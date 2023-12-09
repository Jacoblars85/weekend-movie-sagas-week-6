import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';

function MovieForm() {
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [urlInput, setUrlInput] = useState('');

    const dispatch = useDispatch()

    const addPassenger = (e) => {
        dispatch({
            type: 'SAGA_POST_MOVIE',
            payload: {
                title: titleInput,
                poster: urlInput,
                description: descriptionInput

            }
        })
        setTitleInput('')
        setDescriptionInput('')
        setUrlInput('')
    }

    return (
        <div>
            <h2>Add a Movie</h2>

            <input type="text"
                placeholder="Enter Title"
                onChange={(e) => setTitleInput(e.target.value)}
                value={titleInput} />

            <input type="text"
                placeholder="Enter Description"
                onChange={(e) => setDescriptionInput(e.target.value)}
                value={descriptionInput} />

            <input type="text"
                placeholder="Enter URL"
                onChange={(e) => setUrlInput(e.target.value)}
                value={urlInput} />

            <button onClick={addPassenger}>Add Passenger</button>

        </div>
    )

}


export default MovieForm;