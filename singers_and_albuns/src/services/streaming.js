import axios from 'axios';

const baseUrl = 'http://ec2-100-26-219-1.compute-1.amazonaws.com/api';

const getStreamByKey = async () => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/query/readAsset`,
            method: "post",
            data: {
                "key": {
                    "@assetType": "streaming",
                    "@key": "streaming:c97df359-881b-5fd3-9e46-5b36c7b94bc2"
                }
            }
        })
    
        console.log(response.data)
    } catch (error) {
        console.log(error.response.data)
    }
    
}

const getStreamings = async () => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/query/search`,
            method: "post",
            data: 
            {
                "query": {
                  "selector": {
                    "@assetType": "streaming"
                  }
                }
            }
        })

        console.log(response.data)
    } catch (error) {
        console.log(error.response.data)
        
    }
}

export  {getStreamByKey, getStreamings};