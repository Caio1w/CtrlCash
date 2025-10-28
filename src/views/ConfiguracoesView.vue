<template>
    <div class="config-page bg-light min-vh-100">
        
        <!-- Header da Aplicação -->
        <HeaderApp />

        <div class="container-fluid py-4 max-w-7xl mx-auto px-4">
            
            <h1 class="h3 fw-bold text-primary-dark mb-4">Configurações e Gestão da Conta</h1>
            
            <div class="row g-4">
                
                <!-- Coluna de Navegação Lateral -->
                <div class="col-lg-3">
                    <div class="list-group shadow-sm border-0 rounded-3">
                        <a href="#" 
                           @click.prevent="setActiveTab('perfil')" 
                           :class="['list-group-item list-group-item-action', {'active-feature': activeTab === 'perfil'}]">
                            <i class="bi bi-person-circle me-2"></i> Perfil e Dados Pessoais
                        </a>
                        <a href="#" 
                           @click.prevent="setActiveTab('categorias')" 
                           :class="['list-group-item list-group-item-action', {'active-feature': activeTab === 'categorias'}]">
                            <i class="bi bi-tags-fill me-2"></i> Gestão de Categorias
                        </a>
                        <a href="#" 
                           @click.prevent="setActiveTab('seguranca')" 
                           :class="['list-group-item list-group-item-action', {'active-feature': activeTab === 'seguranca'}]">
                            <i class="bi bi-lock-fill me-2"></i> Segurança e Senha
                        </a>
                    </div>
                </div>

                <!-- Área de Conteúdo (Abas) -->
                <div class="col-lg-9">
                    <div class="card shadow-sm border-0 p-4 h-100">
                        
                        <!-- Aba: Perfil e Dados Pessoais -->
                        <div v-if="activeTab === 'perfil'">
                            <h2 class="h4 fw-bold text-primary-dark mb-3">Meu Perfil</h2>
                            <p class="text-muted">Gerencie seu nome, e-mail e outras informações de contato.</p>
                            <!-- Placeholder de Formulário -->
                            <form>
                                <div class="mb-3"><label class="form-label">Nome:</label><input type="text" class="form-control" value="[Nome do Usuário]"></div>
                                <div class="mb-3"><label class="form-label">E-mail:</label><input type="email" class="form-control" value="[Email do Usuário]" disabled></div>
                                <button class="btn btn-primary-feature mt-2">Salvar Alterações</button>
                            </form>
                        </div>
                        
                        <!-- Aba: Gestão de Categorias -->
                        <div v-if="activeTab === 'categorias'">
                            <h2 class="h4 fw-bold text-primary-dark mb-3">Categorias Financeiras</h2>
                            <p class="text-muted">Crie, edite ou remova categorias de receitas e despesas.</p>
                            <button class="btn btn-success-feature mb-3"><i class="bi bi-plus-circle me-2"></i> Nova Categoria</button>
                            <!-- Placeholder de Lista -->
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center">Moradia <span class="badge bg-danger">Despesa</span></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Salário <span class="badge bg-success">Receita</span></li>
                            </ul>
                        </div>
                        
                        <!-- Aba: Segurança e Senha -->
                        <div v-if="activeTab === 'seguranca'">
                            <h2 class="h4 fw-bold text-primary-dark mb-3">Segurança da Conta</h2>
                            <p class="text-muted">Altere sua senha e configure a autenticação de dois fatores.</p>
                            <!-- Placeholder de Formulário -->
                            <form>
                                <div class="mb-3"><label class="form-label">Nova Senha:</label><input type="password" class="form-control"></div>
                                <div class="mb-3"><label class="form-label">Confirmar Nova Senha:</label><input type="password" class="form-control"></div>
                                <button class="btn btn-warning text-white mt-2">Alterar Senha</button>
                            </form>
                        </div>

                        <!-- Aba: Integrações -->
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import HeaderApp from '@/components/HeaderApp.vue';
    
    const activeTab = ref('perfil'); // Aba ativa por padrão

    const setActiveTab = (tabName) => {
        activeTab.value = tabName;
    };
    
    // Lógica para marcar o link "Configurações" como ativo no HeaderApp
    onMounted(() => {
        // Esta lógica é apenas um lembrete. O HeaderApp usa o Vue Router para gerenciar o estado ativo.
    });

</script>

<style scoped>
    /* Estilos Customizados do CtrlCash */
    .bg-primary-dark { background-color: #1A3B5E !important; }
    .text-primary-dark { color: #1A3B5E !important; }
    .btn-primary-feature { background-color: #1A3B5E !important; border-color: #1A3B5E !important; color: white; }
    .btn-success-feature { background-color: #2ECC71 !important; border-color: #2ECC71 !important; color: white; }
    .active-feature { background-color: #1A3B5E !important; color: white !important; }

    .max-w-7xl { max-width: 80rem; }
    .mx-auto { margin-left: auto !important; margin-right: auto !important; }
</style>
