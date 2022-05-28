import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { LugarComponent } from './components/lugar/lugar.component';
import { CrearlugarComponent } from './components/crearlugar/crearlugar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditarlugarComponent } from './components/editarlugar/editarlugar.component';

@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    LugarComponent,
    CrearlugarComponent,
    NavbarComponent,
    EditarlugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
