<template>
  <div class="header">
    <span class="header_name">个人博客</span>
    <div class="header_item">
      <el-input prefix-icon="iconfont icon-sousuo" v-model="input" ></el-input>
      <a class="iconfont icon-fenxiang" @click="items_notes">笔记本</a>
      <a class="iconfont icon-fenxiang" @click="items_weather">天气预报</a>
      <a class="iconfont icon-fenxiang" @click="items_vueShop">vue电商网站</a>
      <a class="iconfont icon-fenxiang">个人简历</a>
      <a class="iconfont icon-fenxiang">GitHub</a>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      input:''
    }
  },
  methods:{
    items_notes(){
     this.$router.push("/notes")
    },
    items_weather(){
    this.$router.push("/weather")
    },
    items_vueShop(){
    this.$router.push("/vueShop")
    }
  }  
}
</script>
<style lang="less">
.el-input--prefix .el-input__inner{border-radius: 30px}
.header{height:100px;background: #fff;border-bottom:1px solid #d1ccc0;
  display: flex;justify-content: space-between;}
.header_name{font-size: 30px;font-weight: bold;
  display: flex;align-items: center;color:#474787;padding:0 20px;}
.header_item{display: flex;align-items: center;padding:0 20px;
  .el-input{width:200px;margin:0 20px;}
  a{color:#474787;padding:0 10px;}
}


</style>