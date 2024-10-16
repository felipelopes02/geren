import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatListModule } from '@angular/material/list'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router } from '@angular/router'; // Importa o Router para navegação

@Component({
  selector: 'app-nav-bar',
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
    MatSidenavModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  estoqueOpen = false; // Estado inicial fechado para o submenu de Estoque

  constructor(private router: Router) {} // Injeta o Router no construtor

  toggleEstoque() {
    this.estoqueOpen = !this.estoqueOpen; // Alterna a visibilidade do submenu
  }

  // Navega para a rota de Medicamentos
  navigateToMedicamentos() {
    this.router.navigate(['/inventory-medicamentos']);
  }

  // Navega para a rota de Insumos
  navigateToInsumos() {
    this.router.navigate(['/inventory-insumos']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
