import React from 'react'

import useGif from '../useGif'

const Random = () => {
    const [gifUrl, fetchGif] = useGif()

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gifUrl} alt="Random Gif" />
            <button onClick={() => fetchGif()}>CLICK FOR NEW</button>
        </div>
    )
}

export default Random