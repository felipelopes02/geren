// src/app/server.config.ts

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // Supondo que `appConfig` esteja configurado no seu projeto

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), // Ativa a renderização no servidor
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
