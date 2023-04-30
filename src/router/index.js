import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Panel1 from '../views/Panel1.vue'
import Panel2 from '../views/Panel2.vue'
import Panel3 from '../views/Panel3.vue'
import Panel4 from '../views/Panel4.vue'
import Panel5 from '../views/Panel5.vue'
import Panel6 from '../views/Panel6.vue'



const routes = [
    {
        path: '/',
        name:  'Home',
        component: Home
    },
    {
        path: '/Gallery',
        name: 'Gallery',
        component: Gallery
     
    }
    ,
    {
        path: '/Panel1',
        name:  'Panel1',
        component: Panel1
    }
    ,
    {
        path: '/Panel2',
        name:  'Panel2',
        component: Panel2
    }
    ,
    {
        path: '/Panel3',
        name:  'Panel3',
        component: Panel3
    }
    ,
    {
        path: '/Panel4',
        name:  'Panel4',
        component: Panel4
    }
    ,
    {
        path: '/Panel5',
        name:  'Panel5',
        component: Panel5
    }
    ,
    {
        path: '/Panel6',
        name:  'Panel6',
        component: Panel6
    }
   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router