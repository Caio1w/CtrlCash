<template>
    <footer class="bg-dark-footer text-white pt-5 pb-3">
        <div class="container">
            <div class="row g-4">
                
                <div class="col-md-4 col-12">
                    <img src="@/assets/CtrlCash.png" alt="CtrlCash Logo" width="120" height="35" class="mb-3">
                    <p class="text-secondary-footer mt-2">
                        Seu dinheiro. Seu controle total.
                    </p>
                    <p class="text-secondary-footer small">
                        Um projeto acadêmico de finanças inovadoras.
                    </p>
                </div>
                
                <div class="col-md-2 col-6">
                    <h5 class="fw-bold text-white-footer mb-3">Navegue</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><router-link to="/" class="text-secondary-footer text-decoration-none">Início</router-link></li>
                        <li class="mb-2"><router-link to="/features" class="text-secondary-footer text-decoration-none">Recursos</router-link></li>
                        <li class="mb-2"><router-link to="/about" class="text-secondary-footer text-decoration-none">Sobre Nós</router-link></li>
                        <li class="mb-2"><router-link to="/help" class="text-secondary-footer text-decoration-none">Ajuda</router-link></li>
                    </ul>
                </div>

                <div class="col-md-3 col-6">
                    <h5 class="fw-bold text-white-footer mb-3">Projeto</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2"><a href="https://github.com/Caio1w/CtrlCash" target="_blank" class="text-secondary-footer text-decoration-none">Repósitorio GitHub</a></li>
                        <li class="mb-2"><a href="/termos" class="text-secondary-footer text-decoration-none">Termos de Uso</a></li>
                        <li class="mb-2"><a href="/privacidade" class="text-secondary-footer text-decoration-none">Política de Privacidade</a></li>
                        <li class="mb-2"><a href="/equipe" class="text-secondary-footer text-decoration-none">Equipe de Desenvolvimento</a></li>
                    </ul>
                </div>

                <div class="col-md-3 col-12">
                    <h5 class="fw-bold text-white-footer mb-3">Contato</h5>
                    <p class="text-secondary-footer mb-1">E-mail: contato@ctrlcash.com</p>
                    <p class="text-secondary-footer">Telefone: (XX) XXXX-XXXX</p>
                </div>

            </div>
            
            <hr class="my-4 border-secondary-footer">
            <div class="text-center">
                <p class="text-secondary-footer small mb-0">
                    &copy; 2025 CtrlCash - Todos os direitos reservados. Protótipo desenvolvido para fins acadêmicos.
                </p>
            </div>

        </div>
    </footer>
</template>

<script>
</script>

<style scoped>
    
    .bg-dark-footer {
        background-color: #1A3B5E; 
    }
    
    
    .text-white-footer {
        color: #FFFFFF !important;
    }
    .text-secondary-footer {
        color: #C0CCDA !important; 
        transition: color 0.2s;
    }
    
    
    .text-success-footer {
        color: #2ECC71 !important; 
    }

    
    .text-secondary-footer:hover {
        color: #FFFFFF !important;
    }
    .text-success-footer:hover {
        color: #34D399 !important;
    }
    
    .border-secondary-footer {
        border-color: rgba(255, 255, 255, 0.1) !important;
    }
</style>