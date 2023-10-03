import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';
import { DatallesComponent } from './paginas/datalles/datalles.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'buscar',component:BuscarComponent},
  {path:'movie/:id',component:DatallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
