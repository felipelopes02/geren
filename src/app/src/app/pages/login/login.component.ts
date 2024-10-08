import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true, // Para um componente standalone
  imports: [FormsModule, CommonModule] // Adicionar CommonModule nas importações
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.email.includes("@")) {
      alert('Login bem-sucedido!');
      this.router.navigate(['/inventory-insumos']);
    } else {
      alert('Por favor, insira um email válido.');
    }
  }
  
}
