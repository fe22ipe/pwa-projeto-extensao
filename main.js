const { createApp } = Vue; 
 
createApp({ 
  data() {
  return {
    menuAberto: false,
    doacoes: 0,
    agradecer: false,  // ← ADICIONE ESTA LINHA
    itens: [
      { id: 1, nome: 'Ração para cães adultos', prioridade: 'alta', ok: false },
      { id: 2, nome: 'Vermífugos e vacinas', prioridade: 'alta', ok: false },
      { id: 3, nome: 'Coleiras e guias', prioridade: 'média', ok: false },
      { id: 4, nome: 'Cobertores e camas', prioridade: 'média', ok: false },
      { id: 5, nome: 'Produtos de limpeza', prioridade: 'baixa', ok: false }
    ]
  };
}
}).mount('#app'); 