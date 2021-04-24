import axios from "@/utils/request.js"

const getLogin = function (name, passwrod) {
	return axios.post(`/api/tologin/login?loginusername=${name}&loginpassword=${passwrod}`)
}

export default getLogin