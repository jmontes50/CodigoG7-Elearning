import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  //DECLARATIONS: Componentes
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  //IMPORTS: Modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //PROVIDERS: servicios
  providers: [],
  //BOOTSTRAP: porque componente va a iniciar angular
  bootstrap: [AppComponent]
})
export class AppModule { }
