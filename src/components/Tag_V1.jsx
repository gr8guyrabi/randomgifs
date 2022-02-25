import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {
    const [tag, setTag] = useState('dogs')
    const [gifUrl, setGifUrl] = useState('')
    
    const fetchGif = async (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}`
        
        const { data } = await axios.get(url)
        const imageSrc = data?.data?.images?.downsized_large.url

        setGifUrl(imageSrc)
    }

    useEffect(() => {
        fetchGif(tag)
    }, [])

    const handleClick = () => {
        fetchGif(tag)
    }

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img width="500" src={gifUrl} alt="Random Gif" />
            <input placeholder="Gif Keyword" value={tag} onChange={(e) => setTag(e.target.value)} />
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    )
}

export default Tag