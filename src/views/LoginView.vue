<template>
    <HeaderPublic />
    <div class="login-container d-flex align-items-center justify-content-center min-vh-100 p-3">
        
        <div class="login-card p-5 shadow-lg rounded-4 bg-white">
            
           
            <div class="text-center mb-4">
                
                <img src="@/assets/CtrlCash-blue.png" alt="CtrlCash Logo" width="150" class="mb-3">
                <h2 class="fw-bold text-primary-dark">Login</h2>
                <p class="text-secondary-dark">Insira seus dados para continuar o controle.</p>
            </div>

           
            <form @submit.prevent="handleLogin">
                
                
                <div class="mb-3">
                    <label for="email" class="form-label fw-medium text-primary-dark">E-mail</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-envelope-fill"></i></span>
                        <input type="email" class="form-control" id="email" v-model="email" required placeholder="seu.email@exemplo.com">
                    </div>
                </div>
                
               
                <div class="mb-4">
                    <label for="password" class="form-label fw-medium text-primary-dark">Senha</label>
                    <div class="input-group">
                        <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                        <input type="password" class="form-control" id="password" v-model="password" required placeholder="********">
                    </div>
                    <div class="text-end mt-2">
                        <a href="/recuperar-senha" class="text-secondary-dark small text-decoration-none hover-link">Esqueceu a senha?</a>
                    </div>
                </div>
                
                
                <button type="submit" class="btn btn-primary-feature w-100 fw-bold py-2 shadow-sm">
                    Acessar Minha Conta
                </button>
            </form>

            
        </div>
    </div>
</template>

<script setup>
    import HeaderPublic from '@/components/HeaderPublic.vue'
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const email = ref('');
    const password = ref('');
    const router = useRouter();

    const handleLogin = () => {
        
        
        console.log('Tentativa de Login:', email.value);
        router.push('/dashboard'); 
    };
</script>

<style scoped>
    
    .text-primary-dark {
        color: #1A3B5E !important;
    }
    .text-secondary-dark {
        color: #6c757d !important;
    }
    .text-success-feature {
        color: #2ECC71 !important;
    }

    
    .login-container {
        background-color: #F8F9FA;
    }

    
    .login-card {
        max-width: 420px;
        width: 100%;
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

    
    .btn-outline-primary-feature {
        color: #1A3B5E;
        border-color: #1A3B5E;
        background-color: transparent;
        transition: all 0.2s;
        margin-top: 15px; 
    }
    .btn-outline-primary-feature:hover {
        background-color: #1A3B5E;
        color: white;
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
