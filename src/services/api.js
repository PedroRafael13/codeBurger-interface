import axios from "axios"

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCodeBurger.interceptors.request.use(async config => {
  const userDate = await localStorage.getItem('codeburger:userData')
  const token = userDate && JSON.parse(userDate).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurger