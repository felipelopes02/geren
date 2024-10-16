import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatListModule } from '@angular/material/list';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { DeleteButtonComponent } from '../../buttons/delete-button/delete-button.component';
import { InsumosService } from '../../services/insumos.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
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
    NavBarComponent, 
    DeleteButtonComponent
  ]
})
export class InventoryComponent implements OnInit {
  dataSource = new MatTableDataSource<any>([]);
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

  isDeleteModalOpen = false;
  itemToDeleteIndex: number | null = null;

  constructor(private insumosService: InsumosService) {}

  openModal() {
    this.isEditing = false;
    this.currentItemIndex = null;
    this.newItem = { identificador: '', nome: '', fornecedor: '', qnt: 0, endereco: '', vencimento: '' };
    this.isModalOpen = true;
  }

  editItem(index: number) {
    this.currentItemIndex = index;
    this.newItem = { ...this.dataSource.data[index] };
    this.isEditing = true;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitNewItem() {
    if (this.isEditing && this.currentItemIndex != null) {
      this.dataSource.data[this.currentItemIndex] = this.newItem;
    } else {
      this.dataSource.data.push(this.newItem);
    }
    this.dataSource.data = [...this.dataSource.data];
    this.closeModal();
    this.resetForm();
  }

  openDeleteConfirmation(index: number) {
    this.isDeleteModalOpen = true;
    this.itemToDeleteIndex = index;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.itemToDeleteIndex = null;
  }

  confirmDelete() {
    if (this.itemToDeleteIndex !== null) {
      this.insumosService.deleteInsumo(this.itemToDeleteIndex).subscribe();
      this.closeDeleteModal();
    }
  }

  deleteItem(index: number) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data];
  }

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

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.insumosService.getInsumos().subscribe(data => {
      const formattedData = data.map(item => ({
        identificador: item.id,
        nome: item.produto,
        fornecedor: item.fornecedor,
        qnt: item.quantidade,
        endereco: item.contato,
        vencimento: item.vencimento,
      }));
      this.dataSource.data = formattedData;
    });
  }

}
