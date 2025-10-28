<template>
    <div class="transacoes-page bg-light min-vh-100">
        
        <!-- Componente do Header (Barra de navegação da aplicação) -->
        <HeaderApp />

        <div class="container-fluid py-4 max-w-7xl mx-auto px-4">
            
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h1 class="h3 fw-bold text-primary-dark">Minhas Transações</h1>
                
                <!-- Botão para abrir o Modal de Nova Transação -->
                <button 
                    type="button" 
                    class="btn btn-success-feature fw-bold shadow-sm d-flex align-items-center" 
                    data-bs-toggle="modal" 
                    data-bs-target="#novaTransacaoModal"
                >
                    <i class="bi bi-plus-circle-fill me-2"></i>
                    Nova Transação
                </button>
            </div>

            <!-- Card de Filtros e Pesquisa -->
            <div class="card shadow-sm border-0 mb-4 p-3">
                <div class="row g-3 align-items-center">
                    
                    <!-- Filtro por Tipo -->
                    <div class="col-md-3">
                        <label for="filtroTipo" class="form-label small text-muted">Tipo</label>
                        <select id="filtroTipo" class="form-select">
                            <option selected>Todos</option>
                            <option value="receita">Receitas</option>
                            <option value="despesa">Despesas</option>
                        </select>
                    </div>

                    <!-- Filtro por Categoria -->
                    <div class="col-md-4">
                        <label for="filtroCategoria" class="form-label small text-muted">Categoria</label>
                        <input type="text" id="filtroCategoria" class="form-control" placeholder="Buscar por categoria...">
                    </div>

                    <!-- Filtro por Período -->
                    <div class="col-md-5">
                        <label for="filtroPeriodo" class="form-label small text-muted">Período</label>
                        <div class="input-group">
                            <input type="date" class="form-control">
                            <span class="input-group-text">a</span>
                            <input type="date" class="form-control">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabela de Transações -->
            <div class="card shadow-sm border-0">
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead class="bg-light">
                                <tr>
                                    <th scope="col" class="text-primary-dark fw-bold">Descrição</th>
                                    <th scope="col" class="text-primary-dark fw-bold">Categoria</th>
                                    <th scope="col" class="text-primary-dark fw-bold text-center">Tipo</th>
                                    <th scope="col" class="text-primary-dark fw-bold text-end">Valor</th>
                                    <th scope="col" class="text-primary-dark fw-bold">Data</th>
                                    <th scope="col" class="text-primary-dark fw-bold text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Exemplo de Receita -->
                                <tr>
                                    <td>Salário Mês de Setembro</td>
                                    <td>Renda Principal</td>
                                    <td class="text-center"><span class="badge bg-success-feature"><i class="bi bi-arrow-up"></i> Receita</span></td>
                                    <td class="text-end fw-bold text-success-feature">R$ 4.200,00</td>
                                    <td>28/09/2025</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-link text-primary-dark p-0 me-2" title="Editar"><i class="bi bi-pencil-square"></i></button>
                                        <button class="btn btn-sm btn-link text-danger p-0" title="Excluir"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                                <!-- Exemplo de Despesa -->
                                <tr>
                                    <td>Pagamento do Aluguel</td>
                                    <td>Moradia</td>
                                    <td class="text-center"><span class="badge bg-danger"><i class="bi bi-arrow-down"></i> Despesa</span></td>
                                    <td class="text-end fw-bold text-danger">R$ 1.200,00</td>
                                    <td>05/10/2025</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-link text-primary-dark p-0 me-2" title="Editar"><i class="bi bi-pencil-square"></i></button>
                                        <button class="btn btn-sm btn-link text-danger p-0" title="Excluir"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                                <!-- Mais um Exemplo -->
                                <tr>
                                    <td>Compra no Supermercado</td>
                                    <td>Alimentação</td>
                                    <td class="text-center"><span class="badge bg-danger"><i class="bi bi-arrow-down"></i> Despesa</span></td>
                                    <td class="text-end fw-bold text-danger">R$ 250,50</td>
                                    <td>15/10/2025</td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-link text-primary-dark p-0 me-2" title="Editar"><i class="bi bi-pencil-square"></i></button>
                                        <button class="btn btn-sm btn-link text-danger p-0" title="Excluir"><i class="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Paginação ou Footer -->
                <div class="card-footer bg-white text-center">
                    <small class="text-muted">Exibindo 1 a 10 de 52 transações.</small>
                </div>
            </div>

        </div>

        <!-- Modal de Nova Transação (Formulário Flutuante) -->
        <div class="modal fade" id="novaTransacaoModal" tabindex="-1" aria-labelledby="novaTransacaoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-primary-dark text-white">
                        <h5 class="modal-title fw-bold" id="novaTransacaoModalLabel">Adicionar Nova Transação</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            
                            <!-- Tipo de Transação (Receita/Despesa) -->
                            <div class="mb-3">
                                <label class="form-label fw-medium text-primary-dark">Tipo</label>
                                <div class="btn-group w-100" role="group">
                                    <input type="radio" class="btn-check" name="tipoTransacao" id="tipoReceita" value="receita" checked>
                                    <label class="btn btn-outline-success-feature fw-bold" for="tipoReceita">Receita</label>

                                    <input type="radio" class="btn-check" name="tipoTransacao" id="tipoDespesa" value="despesa">
                                    <label class="btn btn-outline-danger fw-bold" for="tipoDespesa">Despesa</label>
                                </div>
                            </div>
                            
                            <!-- Descrição -->
                            <div class="mb-3">
                                <label for="descricao" class="form-label fw-medium text-primary-dark">Descrição</label>
                                <input type="text" class="form-control" id="descricao" placeholder="Ex: Salário, Aluguel, Supermercado">
                            </div>
                            
                            <!-- Valor e Data -->
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="valor" class="form-label fw-medium text-primary-dark">Valor (R$)</label>
                                    <input type="number" step="0.01" class="form-control" id="valor" placeholder="0.00">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="data" class="form-label fw-medium text-primary-dark">Data</label>
                                    <input type="date" class="form-control" id="data">
                                </div>
                            </div>

                            <!-- Categoria -->
                            <div class="mb-3">
                                <label for="categoria" class="form-label fw-medium text-primary-dark">Categoria</label>
                                <select id="categoria" class="form-select">
                                    <option selected>Selecione uma categoria...</option>
                                    <option value="renda">Renda Principal</option>
                                    <option value="moradia">Moradia</option>
                                    <option value="alimentacao">Alimentação</option>
                                    <option value="transporte">Transporte</option>
                                    <option value="lazer">Lazer</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-primary-dark-feature fw-bold">Salvar Transação</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    import HeaderApp from '@/components/HeaderApp.vue';
    // Lógica para controle de filtros e interação com o modal (será adicionada com o Flask)
</script>

<style scoped>
    /* Definição das cores customizadas para o Bootstrap (Garantia de cores) */
    .bg-primary-dark { background-color: #1A3B5E !important; }
    .text-primary-dark { color: #1A3B5E !important; }
    
    .bg-success-feature { background-color: #2ECC71 !important; }
    .text-success-feature { color: #2ECC71 !important; }
    
    .btn-outline-success-feature {
        --bs-btn-color: #2ECC71;
        --bs-btn-border-color: #2ECC71;
        --bs-btn-hover-bg: #2ECC71;
        --bs-btn-hover-border-color: #2ECC71;
        --bs-btn-active-bg: #2ECC71;
        --bs-btn-active-border-color: #2ECC71;
        --bs-btn-active-color: white;
    }
    
    .btn-primary-dark-feature {
        background-color: #1A3B5E;
        color: white;
        border-color: #1A3B5E;
    }
    .btn-primary-dark-feature:hover {
        background-color: #122841;
        border-color: #122841;
        color: white;
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
