import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { KeycloakService } from '../../../core/auth/services/keycloak';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private keycloak: KeycloakService) {}
  logout(){
    this.keycloak.logout();
  }
}
