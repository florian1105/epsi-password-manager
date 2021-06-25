import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
import Connexion from './components/forms/Connexion.vue'
export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/hello',
            component: HelloWorld
        },
        {
            path:'/connexion',
            component: Connexion
        },
    ]
})