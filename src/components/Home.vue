<template>
  <div class="">
    <Header></Header>
    <div class="container">
      <div class="image">
        <img src="../assets/home.jpg" />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './footer'
export default {
  components:{Header,Footer},
  methods:{
      
  }
}
</script>

<style lang="less" scoped>
.container{width:100%;height:600px;
  .image{width:100%;height:600px;position:relative;}
  img{width:300px;height:auto;position: absolute;top:50%;left:50%;transform:translate(-50%,-50%)}
  img:hover{-webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -ms-filter: grayscale(100%);
   -o-filter: grayscale(100%); filter: grayscale(100%); filter: gray;}
} 
</style>
