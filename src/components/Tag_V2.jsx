import React, { useState } from 'react'

import useGif from '../useGif'

const Tag = () => {
    const [tag, setTag] = useState('dogs')    
    const [gifUrl, fetchGif] = useGif()

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gifUrl} alt="Random Gif" />
            <input placeholder="Gif Keyword" value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchGif(tag)}>CLICK FOR NEW</button>
        </div>
    )
}

export default Tag