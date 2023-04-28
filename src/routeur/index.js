import { createRouter, createWebHistory } from 'vue-router'
import Biere from '../Views/Biere.vue'
import BiereFiltre from '../Views/BiereFilter.vue'


const routeur = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Biere', component: Biere },
        { path: '/filtree', name: 'BiereFiltre', component: BiereFiltre }
    ]
})

export default routeur