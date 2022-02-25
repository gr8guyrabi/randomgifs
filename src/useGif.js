import { useState, useEffect } from 'react'
import axios from 'axios'

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`

const useGif = (tag) => {
    const [gifUrl, setGifUrl] = useState('')
    
    const fetchGif = async (tag) => {
        
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url)
        const imageSrc = data?.data?.images?.downsized_large.url

        setGifUrl(imageSrc)
    }

    useEffect(() => {
        fetchGif(tag)
    }, [])

    return [gifUrl, fetchGif]
}

export default useGif