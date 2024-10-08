// abstract-inventory.component.ts
import { Component } from '@angular/core';

@Component({
  template: ''
})
export abstract class AbstractInventoryComponent {
  items: any[] = []; // Para armazenar os itens do inventário

  constructor() {
    this.initializeComponent();
  }

  // Método Template: Define a sequência de operações
  initializeComponent() {
    this.setup();
    this.loadItems();
    this.finalizeSetup();
  }

  // Métodos que podem ser customizados ou são comuns
  setup() {
    console.log('Configuração inicial do inventário.');
  }

  abstract loadItems(): void; // Carregamento de itens (a ser implementado nas subclasses)

  finalizeSetup() {
    console.log('Finalização da configuração do inventário.');
  }

  addNewItem() {
    const newItem = {
      identificador: 'NovoItem' + this.items.length,
      nome: 'Novo Produto',
      fornecedor: 'Fornecedor X',
      qnt: 1,
      endereco: 'Endereço Y',
      vencimento: '31-12-2030'
    };
    this.items.push(newItem);
    console.log('Item adicionado:', newItem);
  }
}
