import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // Importar o AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule], // Adicionar o HttpClientModule aqui
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    // Verifica se o email é válido
    if (this.email.includes('@')) {
      // Chama o serviço de login passando email e senha
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {
          // Supondo que a resposta tenha um campo 'success' para validar o login
          if (response.success) {
            alert('Login bem-sucedido!');
            this.router.navigate(['/inventory-insumos']);
          } else {
            alert('Credenciais inválidas. Tente novamente.');
          }
        },
        error: (error) => {
          alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
          console.error('Erro:', error);
        },
      });
    } else {
      alert('Por favor, insira um email válido.');
    }
  }
}
