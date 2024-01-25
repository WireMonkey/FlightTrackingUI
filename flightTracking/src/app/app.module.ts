import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//PrimeNg modules
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';

//Components
import { PlaneListComponent } from './plane-list/plane-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabViewModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
