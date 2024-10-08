import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent {
  dataSource = new MatTableDataSource<any>([]);
  deleteItem(index: number) {
    this.dataSource.data.splice(index, 1);
    this.dataSource.data = [...this.dataSource.data]; // Atualiza após exclusão
  }
}
