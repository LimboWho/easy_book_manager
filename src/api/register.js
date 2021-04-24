import axios from "../utils/ajax.js"

const toRegister=function(name,passwrod){
	return axios.post(`/api/tologin/register?loginusername=${name}&loginpassword=${passwrod}`)
}

export default toRegister