import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDashboardView from '../views/UserDashboardView.vue'
import LoginView from '../views/LoginView.vue'
import CadastroView from '@/views/CadastroView.vue'
import TransacoesView from '@/views/TransacoesView.vue'
import ConfiguracoesView from '@/views/ConfiguracoesView.vue'
import SobreNosView from '@/views/SobreNosView.vue'
import AjudaView from '@/views/AjudaView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: UserDashboardView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView
  },
  {
    path: '/transacoes',
    name: 'transacoes',
    component: TransacoesView
  },
  {
    path: '/configuracoes',
    name: 'configuracoes',
    component: ConfiguracoesView
  },
  {
    path: '/about',
    name: 'about',
    component: SobreNosView
  },
  {
    path: '/help',
    name: 'help',
    component: AjudaView
  },
  

],
})

export default router
