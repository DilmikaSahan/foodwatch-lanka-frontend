import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { KeycloakService } from './core/auth/services/keycloak';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('keycloak-front-app');
  private router = inject(Router); 
    constructor(public keycloak: KeycloakService) {
    this.redirectAfterLogin();
  }
  redirectAfterLogin() {
    const roles = this.keycloak.getRoles();
    if (roles.includes('admin')) {
      this.router.navigate(['/admin']);
    } else if (roles.includes('officer')) {
      this.router.navigate(['/officer']);
    }else {
      this.router.navigate(['/user']);
    }
  }

  logout() {
    this.keycloak.logout();
  }
}
