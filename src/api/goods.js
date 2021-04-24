import axios from "@/utils/request.js"

const getGoods = function () {
	return axios.post(`/api/goods/checkList`)
}

const getGoodById = function (params) {
	return axios.post(`/api/goods/queryByID?id=${params}`)
}

const modifyGood = function (params) {
	return axios.post(`/api/goods/update`, params)
}

const postGood = function (data) {
	console.log(data)
	return axios.post("/api/goods/add", data)
}

export {
	modifyGood,
	getGoodById,
	postGood,
	getGoods
};