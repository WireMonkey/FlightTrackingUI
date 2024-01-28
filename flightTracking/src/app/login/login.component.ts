import { Component } from '@angular/core';
import { AdminAuthService } from '../service/admin-auth.service';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private readonly adminAuthService: AdminAuthService) {
    adminAuthService.initAuthService();    
  }

  isAdminLoggedIn(): boolean{
    return this.adminAuthService.isAdminLoggedIn();
  }

  login() {
    this.adminAuthService.login();
  }

  logout() {
    this.adminAuthService.logout();
  }
}
