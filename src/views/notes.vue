<template>
    <div id="notes">
        <Return></Return>
        <div class="notesItem">
            <h2>我的笔记</h2>
            <ul>
                <li v-for="(note,i) in notes" :key="i">
                   <a href="#" @click="toNotesView(i)"> {{ note.title }} </a>
                </li>
            </ul>
        </div>
        <div class="notesWrite">
            <button class="addNotesButton" @click="addNotes" :title="notes.length + ' note(s) already'">
                +写日记
            </button>
            <!-- 标题 -->
            <input v-model="noteTitle"/>
            <!-- 内容区 -->
            <textarea v-model="noteContent"/>
        </div>
    </div>
</template>

<script>
import Return from '../components/return'
export default {
    components:{Return},
    data(){
        return{
            noteTitle: '',
            noteContent: '',
            notes:[]
        }
    },
    watch:{
        notes:{
            handler:function(notes){
                window.localStorage.setItem("notes",JSON.stringify(notes))
            },
            deep:true
     }
    },
    created(){
        if(window.localStorage.getItem("notes") == null) return this.notes.push({
                title:'test',
                content:'test',
                id:'1',
                created:Date.now()
                })
        this.   notes = JSON.parse(window.localStorage.getItem("notes"))
    },
    methods:{

        addNotes(){
            let {notes} = this
            
            notes.push({
                title:this.noteTitle,
                content:this.noteContent,
                id:notes.length+1,
                created:Date.now()
                })
            //console.log(notes)
            this.noteTitle = ''
            this.noteContent = ''
        },
        toNotesView(index){
            this.$router.push({path:'/notesView',query:{
                title:this.notes[index].title,
                content:this.notes[index].content,
                created:this.notes[index].created
                }})
            //console.log(this.notes[index])
            }
    },
}
</script>

<style lang="less" scoped>
#notes{width:80%;height: auto;margin:100px auto;display: flex;
    justify-content: space-between;font-size:20px;}
.notesItem{width:50%;height:auto;
    h2{color:seagreen;margin:0;}
    ul {margin: 0;padding: 0;}
    li{margin:10px 0;}
    a{color:#000;}
    a:hover{color:seagreen;}
}
.notesWrite{width:50%;height:auto;
    input{width:200px;height:30px;display: block;margin:10px 0;font-size:16px;}
    textarea{width:100%;height:400px;overflow: scroll;font-size:16px;}
}
.addNotesButton{width:100px;height:40px;border-radius: 30px;color:#fff;background:seagreen}
</style>