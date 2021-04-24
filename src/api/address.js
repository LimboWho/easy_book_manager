import axios from "../utils/ajax.js"

const getAddress=function(params){
	return axios.post(`/api/address/query?userid=${params}`)
}

const addAddress=function(params){
	return axios.post("/api/address/add",params)
}

const editAddress=function(params){
	return axios.post("/api/address/update",params)
}


export {addAddress,getAddress,editAddress} 