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

export {getAlbums, getAlbumByKey};
