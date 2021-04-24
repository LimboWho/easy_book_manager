import axios from "@/utils/request.js"

const getGoodBySear = function (params) {
	return axios.post(`/api/goods/search?str=${params}`)
}


export default getGoodBySear;