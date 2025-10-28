<template>
    <div class="sobre-nos-page bg-light min-vh-100">
        
        <!-- Header Público (Links para Login/Cadastro) -->
        <HeaderPublic />

        <div class="container-fluid py-5 max-w-7xl mx-auto px-4">
            
            <div class="row g-5 align-items-center">
                <!-- Seção de Texto (Sobre a Missão) -->
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold text-primary-dark mb-4">
                        Nossa Missão: <span class="text-success-feature">Empoderar</span> Suas Finanças.
                    </h1>
                    <p class="lead text-muted">
                        O CtrlCash nasceu da necessidade de simplificar a gestão financeira pessoal. Acreditamos que controlar suas finanças não deve ser um fardo, mas uma ferramenta para alcançar seus objetivos.
                    </p>
                    <p class="text-muted">
                        Nosso sistema oferece uma visão clara e organizada de onde seu dinheiro está indo, permitindo que você tome decisões informadas. Não se trata apenas de registrar gastos, mas de planejar o futuro.
                    </p>
                    
                    <router-link to="/cadastro" class="btn btn-lg btn-success-feature shadow-lg mt-4">
                        Comece a Controlar Sua Vida Financeira Hoje
                    </router-link>
                </div>

                <!-- Seção de Imagem/Visual -->
                <div class="col-lg-6 d-none d-lg-block">
                    <div class="p-5 bg-white shadow-lg rounded-5 text-center border">
                        <i class="bi bi-wallet2 display-1 text-primary-dark mb-3"></i>
                        <h3 class="fw-bold text-primary-dark">Controle Financeiro Descomplicado</h3>
                        <p class="text-muted">A plataforma ideal para quem busca clareza e inteligência nos gastos diários.</p>
                        <i class="bi bi-graph-up display-4 text-success-feature mt-3"></i>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- FOOTER SIMPLES -->
        <footer class="bg-primary-dark text-white-50 py-3 mt-5">
            <div class="container-fluid text-center small">
                &copy; {{ new Date().getFullYear() }} CtrlCash. Todos os direitos reservados.
            </div>
        </footer>
    </div>
</template>

<script setup>
    import HeaderPublic from '@/components/HeaderPublic.vue';
</script>

<style scoped>
    /* Estilos Customizados do CtrlCash (Garantindo que o TXT funcione) */
    .bg-primary-dark { background-color: #1A3B5E !important; }
    .text-primary-dark { color: #1A3B5E !important; }
    .text-success-feature { color: #2ECC71 !important; }
    .btn-success-feature { background-color: #2ECC71 !important; border-color: #2ECC71 !important; color: white; }
    
    .max-w-7xl { max-width: 80rem; }
    .mx-auto { margin-left: auto !important; margin-right: auto !important; }
</style>