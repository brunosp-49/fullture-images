import axios from "axios"
import { useInput } from "../global/context/globalState"
import { apiKey } from "./urlBase"

export const getImages = (setState, input) =>{
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&per_page=24&format=json&nojsoncallback=1`)
    .then((res)=>{
        setState(res.data.photos.photo)
    }).catch((err)=>{
    })
}