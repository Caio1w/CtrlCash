<script>
    // A tag <script> pode ficar vazia se não houver lógica (como imports de componentes ou métodos), 
    // mas é bom mantê-la para futuras expansões.
</script>
<template>
    <header>
        <nav class="navbar navbar-expand-lg px-3" :class="['bg-especial', 'navbar-dark']">
            <div class="container-fluid">
                
                <router-link class="navbar-brand p-0" to="/">
                    <img src="@/assets/CtrlCash.png" alt="CtrlCash Logo" width="140" height="40">
                </router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    
                    <div class="navbar-nav ms-auto align-items-center">
                        
                        <router-link to="/about" class="nav-link">Sobre nós</router-link>
                        <router-link to="/help" class="nav-link me-3">Ajuda</router-link> 
                        
                        <router-link to="/register" class="btn btn-success me-2">Abrir Conta</router-link>
                        <router-link to="/login" class="btn btn-light text-primary">Login</router-link>

                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<style scoped>
    .bg-especial {
        background-color: #1A3B5E;
    }
    
    .btn-success {
        background-color: #2ECC71; 
        border-color: #2ECC71;
    }
    .btn-success:hover {
        background-color: #26a95f;
        border-color: #26a95f;
    }
    
    .text-primary {
        color: #1A3B5E !important;
    }
</style>