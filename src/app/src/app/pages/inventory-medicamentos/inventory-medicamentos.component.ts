import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; // Tabela Angular Material
import { MatButtonModule } from '@angular/material/button'; // Botões Angular Material
import { MatIconModule } from '@angular/material/icon'; // Ícones Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'; // Campos de formulário Angular Material
import { MatInputModule } from '@angular/material/input'; // Inputs Angular Material
import { MatListModule } from '@angular/material/list'; // Para a lista na sidebar
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { DeleteButtonComponent } from '../../buttons/delete-button/delete-button.component';


@Component({
  selector: 'app-inventory-medicamentos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    NavBarComponent, // Importa o MatListModule para usar mat-list e mat-list-item
    DeleteButtonComponent
  ],
  templateUrl: './inventory-medicamentos.component.html',
  styleUrl: './inventory-medicamentos.component.scss'
})
export class InventoryMedicamentosComponent {
  dataSource = new MatTableDataSource<any>([]); // Utiliza MatTableDataSource para os dados da tabela
  displayedColumns: string[] = ['identificador', 'nome', 'fornecedor', 'qnt', 'endereco', 'vencimento', 'acoes'];

  newItem = {
    identificador: '',
    nome: '',
    fornecedor: '',
    qnt: 0,
    endereco: '',
    vencimento: ''
  };

  isModalOpen = false;
  isEditing = false;
  currentItemIndex: number | null = null;

  // Controle para o modal de confirmação de exclusão
  isDeleteModalOpen = false;
  itemToDeleteIndex: number | null = null;

  constructor() {}

  // Abre o modal para criar um novo item
  openModal() {
    this.isEditing = false;
    this.currentItemIndex = null;
    this.newItem = { identificador: '', nome: '', fornecedor: '', qnt: 0, endereco: '', vencimento: '' };
    this.isModalOpen = true;
  }

  // Abre o modal de edição de um item existente
  editItem(index: number) {
    this.currentItemIndex = index;
    this.newItem = { ...this.dataSource.data[index] }; // Preenche o formulário com os dados do item
    this.isEditing = true;
    this.isModalOpen = true;
  }

  // Fecha o modal de criação/edição
  closeModal() {
    this.isModalOpen = false;
  }

  // Submete o novo item ou as alterações
  submitNewItem() {
    if (this.isEditing && this.currentItemIndex != null) {
      this.dataSource.data[this.currentItemIndex] = this.newItem; // Atualiza o item existente
    } else {
      this.dataSource.data.push(this.newItem); // Adiciona um novo item
    }
    this.dataSource.data = [...this.dataSource.data]; // Atualiza a tabela
    this.closeModal();
    this.resetForm();
  }

  // Abre o modal de confirmação de exclusão
  openDeleteConfirmation(index: number) {
    this.isDeleteModalOpen = true;
    this.itemToDeleteIndex = index;
  }

  // Fecha o modal de confirmação de exclusão
  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.itemToDeleteIndex = null;
  }

  // Confirma a exclusão do item
  confirmDelete() {
    if (this.itemToDeleteIndex !== null) {
      this.dataSource.data.splice(this.itemToDeleteIndex, 1); // Remove o item da lista
      this.dataSource.data = [...this.dataSource.data]; // Atualiza a tabela
      this.closeDeleteModal(); // Fecha o modal de confirmação
    }
  }

  // Exclui um item diretamente (sem confirmação)
  deleteItem(index: number) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data]; // Atualiza após exclusão
  }

  // Reseta o formulário
  resetForm() {
    this.newItem = {
      identificador: '',
      nome: '',
      fornecedor: '',
      qnt: 0,
      endereco: '',
      vencimento: ''
    };
    this.currentItemIndex = null;
    this.isEditing = false;
  }
}

