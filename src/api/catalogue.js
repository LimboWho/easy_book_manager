import  axios from "../utils/ajax.js"

const getGoodBycata=function(params){
	return axios.post(`/api/goods/queryByTypeID?typeId=${params}`)
}


export default getGoodBycata;