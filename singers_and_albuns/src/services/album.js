import axios from 'axios';

const baseUrl = 'http://ec2-100-26-219-1.compute-1.amazonaws.com/api';

const getAlbumByKey = async () => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/query/readAsset`,
            method: "post",
            data: {
                "key": {
                    "@assetType": "album",
                    "@key": "album:23c12584-0375-506b-afdf-51c0ec904894"
                }
            }
        })
    
        console.log(response.data)
    } catch (error) {
        console.log(error.response.data)
    }
    
}

const getAlbums = async () => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/query/search`,
            method: "post",
            data: 
            {
                "query": {
                  "selector": {
                    "@assetType": "album"
                  }
                }
            }
        })
        return response.data.result
    } catch (error) {
        console.log(error.response.data)
        
    }
}

const deleteAlbum = async (value) => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/invoke/deleteAsset`,
            method: "delete",
            data: 
            {
                "key": {
                    "@assetType": "streaming",
                    "@key": value
                }
            }
        })

        return response.data.result
    } catch (error) {
        console.log(error.response)
    }
}

const createAlbum = async (values) => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/invoke/createAsset`,
            method: "post",
            data: {
                "asset": [
                    {
                      "@assetType": "album",
                      "year": values.year,
                      "name": values.name,
                      "explicit": values.explicit,
                      "nTracks": values.nTracks,
                      "genre": values.genre,
                      "artist": {
                          "@key": values.artistKey
                      },
                      "strOptions": [
                          {
                              "@key": values.responseKey
                          }
                      ]
                    }
                ]
            }
        })
        console.log(response.data.result)
        return response.data.result
    } catch (error) {
        console.log(error.response)
    }
}

export {getAlbums, getAlbumByKey, deleteAlbum, createAlbum};
