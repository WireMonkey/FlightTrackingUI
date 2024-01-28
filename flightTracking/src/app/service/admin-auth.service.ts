import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private readonly msalService: MsalService) { }

  initAuthService() {
    return this.msalService.initialize().subscribe(() =>{});
  }

  isAdminLoggedIn(): boolean{
    return this.msalService.instance.getActiveAccount() ? true : false;
  }

  login(){
    return this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
    })
  }

  logout(){
    return this.msalService.logout();
  }
}
