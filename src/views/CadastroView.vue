<template>
    <HeaderPublic />
    <div class="cadastro-container d-flex align-items-center justify-content-center min-vh-100 p-3">
        
        <div class="cadastro-card p-5 shadow-lg rounded-4 bg-white">
            
            

            
            <div class="text-center mb-4">
                
                <img src="@/assets/CtrlCash-blue.png" alt="CtrlCash Logo" width="150" class="mb-3">
                <h2 class="fw-bold text-primary-dark">Abra Sua Conta</h2>
                <p class="text-secondary-dark">Preencha os campos para iniciar seu controle financeiro.</p>
            </div>

           
            <form @submit.prevent="handleCadastro">
                
               
                <div class="mb-3">
                    <label for="nome" class="form-label fw-medium text-primary-dark">Nome Completo</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                        <input type="text" class="form-control" id="nome" v-model="nome" required placeholder="Seu nome">
                    </div>
                </div>

               
                <div class="mb-3">
                    <label for="email" class="form-label fw-medium text-primary-dark">E-mail</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-envelope-fill"></i></span>
                        <input type="email" class="form-control" id="email" v-model="email" required placeholder="seu.email@exemplo.com">
                    </div>
                </div>
                
                
                <div class="mb-3">
                    <label for="password" class="form-label fw-medium text-primary-dark">Crie Sua Senha</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                        <input type="password" class="form-control" id="password" v-model="password" required placeholder="Mínimo 8 caracteres">
                    </div>
                </div>
                
                
                <div class="mb-4">
                    <label for="confirmPassword" class="form-label fw-medium text-primary-dark">Confirmar Senha</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                        <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required placeholder="Repita a senha">
                    </div>
                </div>
                
                
                <button type="submit" class="btn btn-primary-feature w-100 fw-bold py-2 shadow-sm">
                    Criar Minha Conta CtrlCash
                </button>
            </form>

            
        </div>
    </div>
</template>

<script setup>
    import HeaderPublic from '@/components/HeaderPublic.vue'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const nome = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const router = useRouter();

    const handleCadastro = () => {
        
        if (password.value !== confirmPassword.value) {
            console.error("As senhas não coincidem!");
            
            return;
        }

        console.log('Tentativa de Cadastro:', nome.value, email.value); 
        alertSimulado('Conta criada com sucesso! Faça login para acessar o dashboard.');
        router.push('/login'); 
    };

    
    const alertSimulado = (message) => {
        
        console.log(`[ALERTA SIMULADO]: ${message}`);
    };
</script>

<style scoped>
   
    .text-primary-dark {
        color: #1A3B5E !important;
    }
    .text-secondary-dark {
        color: #6c757d !important;
    }

    
    .cadastro-container {
        background-color: #F8F9FA;
    }

    
    .cadastro-card {
        max-width: 450px;
        width: 100%;
        position: relative; 
    }

    
    .back-button {
        position: absolute;
        top: 20px; 
        left: 20px; 
        text-decoration: none;
        transition: opacity 0.2s;
        z-index: 10;
    }
    .back-button:hover {
        opacity: 0.7;
    }

    
    .btn-primary-feature {
        background-color: #1A3B5E; 
        border-color: #1A3B5E;
        color: white;
        transition: background-color 0.2s;
    }
    .btn-primary-feature:hover {
        background-color: #29517b; 
        border-color: #29517b;
    }

   
    .form-control:focus {
        border-color: #1A3B5E;
        box-shadow: 0 0 0 0.25rem rgba(26, 59, 94, 0.25);
    }
    .input-group-text {
        background-color: #e9ecef;
        border-right: none;
        color: #1A3B5E;
    }

    .hover-link:hover {
        text-decoration: underline !important;
    }
</style>
