<template>
  <div id="todoList">
    <return></return>
    <div>
      <h1>this is a todolist</h1>
      <input v-model="newItem" @keyup.enter="addItem" >
      <ul>
        <li v-for="(item,i) in items" :key="i" @click="changeState(item)" 
            :class="{finished : item.state}">
          <p>{{item.name}}</p>
        <span class="itemDelete" @click="deleteItem(i)">删除</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Return from '../components/return'
export default {
  components:{Return},
  data(){
    return{
      newItem:'',
      items: JSON.parse(window.localStorage.getItem("things"))
    }
  },
  watch:{
     items:{
        handler:function(items){
           window.localStorage.setItem("things",JSON.stringify(items))
        },
        deep:true
     }
  },
  methods:{
    changeState(item){
      item.state = !item.state
      //console.log(item.state)
    },
    addItem(){
      let {items,newItem} = this
      items.push({name:newItem,state:false})
      this.newItem = ''
    },
    deleteItem:function(index){
      console.log(index)
      this.items.splice(index,1)
      window.localStorage.removeItem("things","item.name")
    }
  }
}
</script>

<style lang="less" scoped>
.finished p{text-decoration:line-through;}
p{display:inline;}
#todoList{padding:10px 30px;}
input{width:200px;height:30px;font-size: 18px;}
li{font-size:24px;}
.itemDelete{font-size: 14px;margin-left: 100px;opacity: 0;}
li:hover{
  .itemDelete{color:red;opacity: 1;}
}
</style>
