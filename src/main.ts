// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Certifique-se de importar suas rotas

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Configura o HttpClient para usar fetch
    provideRouter(routes), // Adiciona as rotas da aplicação
  ],
}).catch(err => console.error(err));
