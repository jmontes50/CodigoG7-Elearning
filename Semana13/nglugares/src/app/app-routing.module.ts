import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresComponent } from './components/lugares/lugares.component';
import { CrearlugarComponent } from './components/crearlugar/crearlugar.component';

//routes va a ser un arreglo donde cada elemento va a representar 01 ruta
//{path:"ruta", component:NombreComponente}
const routes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'crearlugar', component: CrearlugarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
