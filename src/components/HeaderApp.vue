<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary-dark shadow-lg sticky-top">
    <div class="container-fluid max-w-7xl mx-auto px-4">
      
      <!-- Logo e Branding -->
      <!-- O 'd-flex align-items-center' da navbar deve garantir o alinhamento central -->
      <router-link to="/dashboard" class="navbar-brand d-flex align-items-center me-4">
        <img src="@/assets/CtrlCash-white.png" alt="CtrlCash Logo" width="120" class="d-inline-block logo-align">
      </router-link>

      <!-- Botão para Mobile (Hamburguer) -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        
        <!-- Navegação Principal -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/dashboard" :class="['nav-link', route.path === '/dashboard' ? 'active fw-bold text-white' : 'text-white-50', 'hover-success-feature']">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/transacoes" :class="['nav-link', route.path === '/transacoes' ? 'active fw-bold text-white' : 'text-white-50', 'hover-success-feature']">Transações</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/configuracoes" :class="['nav-link', route.path === '/configuracoes' ? 'active fw-bold text-white' : 'text-white-50', 'hover-success-feature']">Configurações</router-link>
          </li>
        </ul>
        
        <!-- Ícones de Ação e Usuário -->
        <div class="d-flex align-items-center ms-auto">
          
          <!-- Botão de Notificações -->
          <button class="btn btn-link text-white me-3 p-0" title="Notificações">
            <i class="bi bi-bell-fill fs-5 position-relative">
              <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
            </i>
          </button>

          <!-- Avatar do Usuário -->
          <div class="dropdown me-3">
            <button class="btn btn-link p-0 d-flex align-items-center text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="rounded-circle border border-white" src="https://placehold.co/36x36/1A3B5E/FFFFFF?text=JP" alt="Avatar" style="width: 36px; height: 36px; object-fit: cover;">
              <span class="ms-2 d-none d-md-inline text-sm">João Pedro</span>
            </button>
            <!-- Dropdown Menu (Placeholder) -->
            <!-- <ul class="dropdown-menu">...</ul> -->
          </div>
          
          <!-- Botão de Logout -->
          <button @click="logout" class="btn btn-outline-light btn-sm d-none d-sm-inline-flex align-items-center" title="Sair">
             <i class="bi bi-box-arrow-right me-1"></i>
             Sair
          </button>
        </div>
        
      </div>
    </div>
  </nav>
</template>

<script setup>
    import { useRouter, useRoute } from 'vue-router';
    import { ref, watch } from 'vue'; // Importando ref e watch

    const router = useRouter();
    const route = useRoute(); // Obtém o objeto de rota atual

    const logout = () => {
        console.log("Usuário desconectado. Redirecionando para o login.");
        // Ação de logout real (ex: limpar token, session) seria aqui.
        router.push('/login');
    };
</script>

<style scoped>
    /* Definição das cores customizadas com Bootstrap */
    .bg-primary-dark { background-color: #1A3B5E !important; }
    .text-primary-dark { color: #1A3B5E !important; }
    .text-success-feature { color: #2ECC71 !important; }
    .hover-success-feature:hover { color: #2ECC71 !important; }
    
  

    /* FORÇA O ALINHAMENTO VERTICAL DA IMAGEM E DO TEXTO */
    .navbar-brand {
        display: flex;
        align-items: center; /* Garante que todos os itens no brand estão centralizados */
    }
    .logo-align {
        vertical-align: middle;
        /* Removendo o ajuste manual para confiar no alinhamento Flexbox do Bootstrap */
    }
</style>
