<template>
  <div id="weather">
    <Return></Return>
    <div class="search_form">
        <div class="logo"><img src="../assets/weatherLogo.jpg" alt="logo"/></div>
        <div class="form_group">
          <input type="text" @keyup.enter="searchWeather" class="input_txt"
           placeholder="请输入查询的天气城市" v-model="city"/>
           <button class="input_sub" @click="searchWeather">
             搜索
           </button>
        </div>
        <div class="hotkey">
          <a href="javascript:;"  value="北京" @click="changeCity('北京')">北京</a>
          <a href="javascript:;"  value="上海" @click="changeCity('上海')">上海</a>
          <a href="javascript:;"  value="广州" @click="changeCity('广州')">广州</a>
          <a href="javascript:;"  value="深圳" @click="changeCity('深圳')">深圳</a>
        </div>
      </div>
      <ul class="weather_list">
        <li v-for="item in weatherList" :key="item.date">
            <div class="info_type">
              <span class="iconfont">
                 {{item.type}} 
              </span>
            </div>
            <div class="info_temp">
                <b>{{item.low}}</b>
                ~
                <b>{{item.high}}</b>
            </div>
            <div class="info_date">
               <span>{{item.date}}</span> 
            </div>
        </li>
      </ul>
  </div>
  
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>

 /*
  请求地址：http://wthrcdn.etouch.cn/weather_mini
  请求方法：get
  请求参数：city（城市名）
  响应内容：天气信息

  1.点击回车
  2.查询数据
  3.渲染数据
*/
import axios from 'axios'
import Return from '../components/return'
//import {getWeather} from '../api/weather.js'
import request from '../utils/request.js'
export default {
  components:{Return},
  data() {
    return {
      city: '',
      weatherList:[]
  }
},
  methods:{
    searchWeather:function(){
      var that = this
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then(
        response => {
          that.weatherList = response.data.data.forecast
        }).catch(function(err){
          console.log(err)}
      )
    },
    changeCity:function(city){
      this.city = city;
    },
  
  }
 }

</script>

<style scoped>
      *{margin:0;padding:0;}
      a{color:#000;text-decoration: none;}
      .wrap{width:100%;height:100%;}
      .search_form{width:800px;margin:50px auto;}
      .search_form .logo{width:200px;margin:5px auto;}
      .search_form .logo img{width:200px;height:auto; }
      .search_form .form_group{width:400px;margin:5px auto;}
      .search_form .form_group input{width:350px;height:30px;border: 1px solid cadetblue;
        position:absolute;padding-left:5px;font-size: 13px;}
      .search_form .form_group button{color:#fff;background-color:cadetblue;
        width:52px;height:32px;border: 1px solid darkblue;position: relative;top:0;left:350px;}
      .hotkey{width:400px;margin: 5px auto;}
      .hotkey a{color:gray;font-size: 12px;padding-right: 5px;}
      .weather_list{text-align: center;opacity: 0.8;width:1000px;margin:50px auto;}
      .weather_list div{margin: 20px;}
      .weather_list li{display: inline;color:orangered;float:left;
        font-family: 'Arial Narrow', Arial, sans-serif; border-right: 1px solid #000;
        border-image: -webkit-linear-gradient(#fff,#000,#fff) 1 10}
      .weather_list li:last-child{border:none;}
      .weather_list .info_type span{font-size: 32px;}
      .weather_list .info_temp b{font-size: 16px;}
      .weather_list .info_date span{color:gray;font-size: 14px;}

</style>
