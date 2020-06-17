<template>
   <div class="notesView">
        <div class="content">
            <h1>{{ $route.query.title }}</h1>
            <span> {{ $route.query.created }} </span>
            <p> {{ $route.query.content }} </p>
        </div>
   </div>
</template>
<script>
export default {
    //props:{}
}
</script>
<style lang="less" scoped>
#notesView{width:100%;height:100%;}
.content{width:80%;height:auto;margin:100px auto;
    h1{color:seagreen}
    span{color:gray;font-size: 12px;}
    p{font-size:16px;white-space: pre-wrap;}
}
</style>