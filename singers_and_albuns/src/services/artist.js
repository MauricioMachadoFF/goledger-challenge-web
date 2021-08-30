import axios from 'axios';

const baseUrl = 'http://ec2-100-26-219-1.compute-1.amazonaws.com/api';

const getArtistByKey = async () => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/query/readAsset`,
            method: "post",
            data: {
                "key": {
                    "@assetType": "artist",
                    "@key": "artist:c2e44fab-8b71-56f1-bdc3-1c49435e7a24"
                }
            }
        })
    
        console.log(response.data)
    } catch (error) {
        console.log(error.response.data)
    }
    
}

const getArtists = async () => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/query/search`,
            method: "post",
            data: 
            {
                "query": {
                  "selector": {
                    "@assetType": "artist"
                  }
                }
            }
        })
        return response.data.result
    } catch (error) {
        console.log(error.response.data)
        
    }
}

const deleteArtist = async (value) => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/invoke/deleteAsset`,
            method: "delete",
            data: {
                "key": {
                    "@assetType": "artist",
                    "@key": value
                }
            }
        })
        window.location.reload();
        console.log(response.data.result);
    } catch (error) {
        console.log(error.response.data)
    }
}

const createArtist = async (values) => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/invoke/createAsset`,
            method: "post",
            data: {
                "asset": [
                    {
                      "@assetType": "artist",
                      "name": values.name,
                      "description": values.description,
                      "location": values.location
                    }
                ]
            }
        }) 
        console.log(response.data.result);
    } catch (error) {
        console.log(error.response.data)
    }
}

export {getArtistByKey, getArtists, deleteArtist, createArtist};