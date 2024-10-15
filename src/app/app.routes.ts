// arquivo: app.routes.ts

import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './src/app/pages/login/login.component';
import { InventoryComponent } from './src/app/pages/inventory/inventory.component';
import { InventoryMedicamentosComponent } from './src/app/pages/inventory-medicamentos/inventory-medicamentos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'inventory-insumos', component: InventoryComponent },
  { path: 'inventory-medicamentos', component:InventoryMedicamentosComponent}

];

export const routerProviders = [
  provideRouter(routes)
];