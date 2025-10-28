<template>
    <div class="ajuda-page bg-light min-vh-100">
        
        <!-- Header Público (Links para Login/Cadastro) -->
        <HeaderPublic />

        <div class="container-fluid py-5 max-w-7xl mx-auto px-4">
            
            <h1 class="display-5 fw-bold text-primary-dark mb-4 text-center">Central de Ajuda e FAQ</h1>
            <p class="text-center text-muted mb-5">Encontre respostas rápidas para suas dúvidas mais comuns ou envie seu feedback.</p>
            
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    
                    <!-- ACORDEÃO DE PERGUNTAS FREQUENTES -->
                    <div class="accordion" id="faqAccordion">
                        
                        <!-- Pergunta 1 -->
                        <div class="accordion-item shadow-sm mb-3 rounded-3">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button fw-bold text-primary-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Como faço para registrar uma nova transação?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                <div class="accordion-body text-muted small">
                                    No seu Dashboard, clique em "Transações" na barra de navegação. Na View de Transações, use o botão "Nova Transação" (verde) para adicionar Receitas ou Despesas. Certifique-se de categorizar corretamente para as análises futuras.
                                </div>
                            </div>
                        </div>
                    

                        <!-- Pergunta 2 -->
                        <div class="accordion-item shadow-sm mb-3 rounded-3">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed fw-bold text-primary-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Posso adicionar minhas próprias categorias?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                <div class="accordion-body text-muted small">
                                    Sim! Vá para a View "Configurações" e selecione a aba "Gestão de Categorias". Lá você pode criar, editar ou remover categorias personalizadas para se adequar ao seu estilo de vida financeiro.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import HeaderPublic from '@/components/HeaderPublic.vue';
</script>

<style scoped>
    /* Estilos Customizados do CtrlCash */
    .bg-primary-dark { background-color: #1A3B5E !important; }
    .text-primary-dark { color: #1A3B5E !important; }
    .text-success-feature { color: #2ECC71 !important; }
    .btn-success-feature { background-color: #2ECC71 !important; border-color: #2ECC71 !important; color: white; }
    
    .max-w-7xl { max-width: 80rem; }
    .mx-auto { margin-left: auto !important; margin-right: auto !important; }

    .accordion-button:not(.collapsed) {
        color: white !important;
        background-color: #1A3B5E !important;
        box-shadow: none;
    }
    .accordion-button:focus {
        box-shadow: none;
        border-color: #1A3B5E;
    }
</style>