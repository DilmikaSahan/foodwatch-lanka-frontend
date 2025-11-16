import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { KeycloakService } from './app/core/auth/services/keycloak';
import { TokenInterceptor } from './app/core/auth/interceptor/token-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { importProvidersFrom, APP_INITIALIZER  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () => keycloak.init();
}

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers,
    importProvidersFrom(HttpClientModule), 
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      deps: [KeycloakService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
});