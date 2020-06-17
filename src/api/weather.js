import request from '../utils/request.js'

export function getWeather(data){
    return request({
        url:'/weather_mini?city='+data,
        method:'get'
    })
}