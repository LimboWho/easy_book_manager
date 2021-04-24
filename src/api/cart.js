import axios from "@/utils/request.js"

const getCart = function (params) {
	return axios.post(`/api/carttable/query?userid=${params}`)
}

const addCart = function (params) {
	return axios.post("/api/carttable/add", params)
}


export {
	addCart,
	getCart
}