<template>
    <div class="dashboard-page bg-light min-vh-100">
        
        <!-- Componente do Header (Barra de navegação da aplicação) -->
        <HeaderApp />

        <div class="container-fluid py-4 max-w-7xl mx-auto px-4">
            
            <h1 class="h3 fw-bold text-primary-dark mb-4">Visão Geral</h1>

            <!-- Sumário (Cards de Resumo) -->
            <div class="row g-4 mb-5">
                
                <!-- Card Saldo Total -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card shadow-sm border-0 h-100 p-3">
                        <div class="card-body">
                            <h5 class="card-title text-muted mb-3">Saldo Total</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text fs-3 fw-bold text-primary-dark">R$ 15.480,23</p>
                                <i class="bi bi-wallet2 fs-2 text-primary-dark opacity-75"></i>
                            </div>
                            <small class="text-success-feature fw-medium">+2.5% desde o mês passado</small>
                        </div>
                    </div>
                </div>

                <!-- Card Receitas -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card shadow-sm border-0 h-100 p-3">
                        <div class="card-body">
                            <h5 class="card-title text-muted mb-3">Receitas do Mês</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text fs-3 fw-bold text-success-feature">R$ 4.200,00</p>
                                <i class="bi bi-arrow-up-circle-fill fs-2 text-success-feature opacity-75"></i>
                            </div>
                            <small class="text-muted">Meta alcançada: 84%</small>
                        </div>
                    </div>
                </div>

                <!-- Card Despesas -->
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="card shadow-sm border-0 h-100 p-3">
                        <div class="card-body">
                            <h5 class="card-title text-muted mb-3">Despesas do Mês</h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="card-text fs-3 fw-bold text-danger">R$ 1.850,50</p>
                                <i class="bi bi-arrow-down-circle-fill fs-2 text-danger opacity-75"></i>
                            </div>
                            <small class="text-muted">Limite restante: R$ 649,50</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gráfico Principal (Matplotlib) e Atividade Recente -->
            <div class="row g-4">
                
                <!-- Coluna Principal para o Gráfico (Placeholder para Matplotlib) -->
                <div class="col-lg-8">
                    <div class="card shadow-sm border-0 h-100 p-4">
                        <h4 class="fw-bold text-primary-dark mb-3">Evolução Financeira (Gráfico)</h4>
                        <p class="text-muted">Aqui será renderizado o gráfico gerado pelo Matplotlib no Flask.</p>
                        <!-- Área de 400px de altura para o gráfico -->
                        <div class="matplotlib-placeholder bg-light-subtle rounded-3 border border-dashed p-5 text-center d-flex align-items-center justify-content-center" style="min-height: 400px; height: 100%;">
                            <i class="bi bi-bar-chart-fill fs-1 text-primary-dark opacity-25"></i>
                            <p class="ms-3 text-primary-dark opacity-50">Carregando visualização de dados...</p>
                        </div>
                    </div>
                </div>

                <!-- Coluna de Atividade Recente -->
                <div class="col-lg-4">
                    <div class="card shadow-sm border-0 h-100 p-4">
                        <h4 class="fw-bold text-primary-dark mb-3">Atividade Recente</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Pagamento de Aluguel
                                <span class="badge bg-danger">-R$ 1.200,00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Salário - Empresa Y
                                <span class="badge bg-success-feature">+R$ 4.200,00</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Compra Mercado
                                <span class="badge bg-danger">-R$ 250,50</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Recebimento de Freelance
                                <span class="badge bg-success-feature">+R$ 500,00</span>
                            </li>
                            <li class="list-group-item text-center">
                                <router-link to="/transacoes" class="btn btn-link btn-sm text-primary-dark fw-medium">Ver todas as transações</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeaderApp from '@/components/HeaderApp.vue';
    // Importações e lógica do dashboard (serão adicionadas ao integrar com Flask)
</script>

<style scoped>
    .bg-primary-dark { background-color: #1A3B5E !important; }
    .text-primary-dark { color: #1A3B5E !important; }
    .bg-success-feature { background-color: #2ECC71 !important; }
    .text-success-feature { color: #2ECC71 !important; }

    /* Estilos de Card de Destaque */
    .card-body {
        padding: 1.5rem;
    }

    /* Utilitário para limitar largura (usado no header) */
    .max-w-7xl {
        max-width: 80rem; /* 1280px */
    }
    .mx-auto {
        margin-left: auto !important;
        margin-right: auto !important;
    }
</style>
