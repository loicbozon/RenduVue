import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../Views/Home.vue'
import Biere from '../Views/Biere.vue'


const routeur = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Accueil', component: Accueil },
        { path: '/biere', name: 'Biere', component: Biere }
    ]
})

export default routeur