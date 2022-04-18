
import axios from "axios"

export const fetchDataFromApi = async () => {
    try {
        const {data} = await axios({
            url: "/he-public-data/TopRamen8d30951.json",
            baseURL: "https://s3-ap-southeast-1.amazonaws.com",
            method: "get"
        })
        return data
    }
    catch(e) {
        console.error(e)
    }
}


export const fetchImagesFromApi = async () => {
    try {
        const {data} = await axios({
            url: "/he-public-data/noodlesec253ad.json",
            baseURL: "https://s3-ap-southeast-1.amazonaws.com",
            method: "get"
        })
        return data
    }
    catch(e) {
        console.error(e)
    }
}