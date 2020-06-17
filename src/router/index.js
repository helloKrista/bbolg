import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Header from '../components/Header.vue'
import Weather from '../views/weather.vue'
import ToDoList from '../views/todoList.vue'
import VueShop from '../views/vueShop.vue'
import Notes from '../views/notes.vue'
import NotesView from '../views/notesView.vue'

Vue.use(VueRouter)

  const routes = [
  //{path: '/',name: 'Home',component: Home},
  {path: '/',redirect:'/home'},
  {path: '/home',name: 'Home',component: Home},
  {path: '/header',name: 'Header',component: Header},
  {path: '/weather',name: 'Weather',component: Weather},
  {path: '/todoList',name: 'ToDoList',component: ToDoList},
  {path: '/vueShop',name: 'VueShop',component: VueShop},
  {path: '/notes',name: 'Notes',component: Notes},
  {path: '/notesView',name: 'NotesView',component: NotesView }
]

const router = new VueRouter({
  routes
})

export default router
