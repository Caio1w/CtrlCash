<script setup>
    import HeaderPublic from '../components/HeaderPublic.vue'
    import FooterPublic from '../components/FooterPublic.vue'
</script>
<template>
    <HeaderPublic />
    
   
    <main class="main-no-gap"> 
        
        
        <div class="bg-especial">
            <section class="container p-3 row align-items-center m-auto">
                
                <div class="col-md-6 col-12 py-5">
                    <h1 class="text-white display-10 text fw-bold text-break">Seu dinheiro. <br> Seu controle total.</h1>
                    <p class="text-secondary fs-5">Organize, invista e alcance seus objetivos financeiros com segurança e facilidade. </p>
                    
                    <router-link to="/register" class="btn btn-success btn-lg mt-3 fw-bold me-3">Abra sua conta</router-link>
                    <router-link to="/features" class="btn btn-outline-light btn-lg mt-3">Conheça os recursos</router-link>
                </div>
                
                
                <div class="col-md-6 col-12 d-flex justify-content-center py-5">
                    <img src="@/assets/Hero.png" alt="Ilustração de controle financeiro do CtrlCash" class="img-fluid">
                </div>
            </section>
        </div>
        
       
        <section class="container py-5">
            
            <div class="row text-center mb-5">
                <div class="col-lg-8 mx-auto">
                    
                    <h2 class="fw-bold display-6 text-primary-dark">Concentre-se no que importa. Nós cuidamos do resto.</h2>
                    <p class="lead text-secondary-feature mt-3">Descubra as funcionalidades que dão o controle total da sua vida financeira na palma da sua mão.</p>
                </div>
            </div>

            
            <div class="row g-5"> 
                
               
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-pie-chart-fill display-5 me-5 text-success-feature flex-shrink-0"></i>
                        <div>
                            <h4 class="fw-bold mb-1 text-dark-feature">Orçamento Inteligente</h4>
                            <p class="text-secondary-feature">Crie orçamentos por categoria, receba alertas e visualize seus gastos em tempo real, evitando surpresas no fim do mês.</p>
                        </div>
                    </div>
                </div>

                
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-rocket-takeoff-fill display-5 me-4 text-success-feature flex-shrink-0"></i>
                        <div>
                            <h4 class="fw-bold mb-1 text-dark-feature">Metas e Investimentos</h4>
                            <p class="text-secondary-feature">Defina seus objetivos (viagem, casa, carro) e o CtrlCash te ajuda a poupar, investir e acompanhar seu progresso.</p>
                        </div>
                    </div>
                </div>

                
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-lightning-charge-fill display-5 me-4 text-success-feature flex-shrink-0"></i>
                        <div>
                            <h4 class="fw-bold mb-1 text-dark-feature">PIX e Pagamentos Rápidos</h4>
                            <p class="text-secondary-feature">Envie e receba dinheiro em segundos. Pague contas e boletos com agilidade, tudo em um só lugar.</p>
                        </div>
                    </div>
                </div>

               
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-clock-history display-5 me-4 text-success-feature flex-shrink-0"></i>
                        <div>
                            <h4 class="fw-bold mb-1 text-dark-feature">Histórico Automático</h4>
                            <p class="text-secondary-feature">Chega de planilhas. O app registra todas as transações, categoriza e gera relatórios visuais inteligentes para você.</p>
                        </div>
                    </div>
                </div>

                <!-- Recurso 5: Segurança e Alertas -->
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-lock-fill display-5 me-4 text-success-feature flex-shrink-0"></i>
                        <div>
                            <h4 class="fw-bold mb-1 text-dark-feature">Segurança e Alertas</h4>
                            <p class="text-secondary-feature">Monitoramento 24h e notificações em tempo real. Sua segurança é prioridade máxima com tecnologia de ponta.</p>
                        </div>
                    </div>
                </div>

               
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="d-flex align-items-start">
                        <i class="bi bi-credit-card-2-front-fill display-5 me-4 text-success-feature flex-shrink-0"></i>
                        <div>
                            <h4 class="fw-bold mb-1 text-dark-feature">Central de Cartões</h4>
                            <p class="text-secondary-feature">Controle seus limites, bloqueie e desbloqueie cartões virtuais e físicos diretamente pelo app, com total autonomia.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        
    </main>
    <FooterPublic />
</template>
<style scoped>
    
    .main-no-gap {
        margin-top: 0;
        padding-top: 0;
    }
    
    
    .bg-especial {
        background-color: #122942; 
    }
    .btn-success {
        background-color: #2ECC71; 
        border-color: #2ECC71;
    }
    .btn-success:hover {
        background-color: #26a95f;
        border-color: #26a95f;
    }

    
    .text-secondary {
        color: #D1D5DB !important; 
    }

   
    .text-primary-dark {
        color: #1A3B5E !important; 
    }
    .text-success-feature {
        color: #2ECC71 !important;
    }
    .text-dark-feature {
        color: #343a40 !important; 
    }
    .text-secondary-feature {
        color: #6c757d !important; 
    }
</style>
