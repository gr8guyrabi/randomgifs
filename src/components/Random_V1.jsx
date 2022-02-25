import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {
    const [gifUrl, setGifUrl] = useState('')
    
    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`
        
        const { data } = await axios.get(url)
        const imageSrc = data?.data?.images?.downsized_large.url

        setGifUrl(imageSrc)
    }

    useEffect(() => {
        fetchGif()
    }, [])

    const handleClick = () => {
        fetchGif()
    }

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img width="500" src={gifUrl} alt="Random Gif" />
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    )
}

export default Random