import axios from 'axios'


//创建axios实例
const request = axios.create({
    timeout:120000
})

//request拦截器

//response拦截器
// request.interceptors.response.use({
//     response => {
//         const code = response.status
//         if(status<200 )
//     }
// })
export default request