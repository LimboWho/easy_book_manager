import axios from "@/utils/request.js"

const getGoods = function () {
	return axios.post("/api/goods/allList")
}

export default getGoods