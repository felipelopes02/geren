import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.email.includes('@')) {
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {if (response.userId > 0) {
            alert(response.status);
            this.router.navigate(['/inventory-insumos']);
          } else {
            alert(response.status);
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
