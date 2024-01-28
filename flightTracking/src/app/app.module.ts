import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//PrimeNg modules
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

//Components
import { PlaneListComponent } from './plane-list/plane-list.component';
import { LoginComponent } from './login/login.component';
import { MSAL_INSTANCE, MsalModule, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { environment } from '../environments/environment';

export function MsalInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.ClientId,
      redirectUri: environment.redirectUir,
      postLogoutRedirectUri: environment.postLogoutRedirectUri
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    PlaneListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabViewModule,
    CardModule,
    HttpClientModule,
    ToggleButtonModule,
    FormsModule,
    MsalModule,
    ButtonModule,
    PanelModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MsalInstanceFactory
    }, MsalService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
