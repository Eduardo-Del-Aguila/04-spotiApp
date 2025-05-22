import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Importa el nuevo provider para http
import { routes } from './app.routes';
import { SpotifyService } from './services/spotify.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //para reenolazar el httpClient
    provideHttpClient(),
  ]
};
