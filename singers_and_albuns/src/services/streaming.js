import axios from 'axios';

const baseUrl = 'http://ec2-100-26-219-1.compute-1.amazonaws.com/api';

const getStreamByKey = async (value) => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/query/readAsset`,
            method: "post",
            data: {
                "key": {
                    "@assetType": "streaming",
                    "@key": value
                }
            }
        })
    
        return response.data.name
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
        return response.data.result
    } catch (error) {
        console.log(error.response.data)
    }
}

const createStream = async (value) => {
    try {
        const response = await axios.request({
            url:`${baseUrl}/invoke/createAsset`,
            method: "post",
            data: 
            {
                "asset": [
                    {
                      "@assetType": "streaming",
                      "name": value 
                    }
                ]
            }
        })

        console.log(response.data)
        return response.data.result
    } catch (error) {
        console.log(error.response)
    }
}

const deleteStream = async (value) => {
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

export  {getStreamByKey, getStreamings, createStream, deleteStream};