import axios from "axios"

const getImages = (query) => {
    if(!query){
        return Promise.resolve([])
    } else {
        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
            const imageResults = response.data.collection.items;
            const parsedImages = imageResults.filter((object) => object.data[0].media_type === "image");
            return parsedImages.map(image => image.links[0].href)
        })
        
        .catch((error) => {
            console.log(error)
        })
    }
}

export default getImages