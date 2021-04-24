import  axios from "../utils/ajax.js"

const getOrder=function(params){
	return axios.post(`/api/order/query?userid=${params}`)
}

const addOrder=function(params){
	return axios.post("/api/order/add",params)
}

const updateOrder=function(params){
	return axios.post("/api/order/update",params)
}

export {addOrder,getOrder,updateOrder} 