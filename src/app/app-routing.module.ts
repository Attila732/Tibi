import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NavigacioComponent } from './navigacio/navigacio.component';
import { AjanlatkeresComponent } from './ajanlatkeres/ajanlatkeres.component';

const routes: Routes = [
  {path:"", component:KezdolapComponent, pathMatch:'full'},
  {path:"kapcsolat", component:KapcsolatComponent},
  {path:"galeria", component:GaleriaComponent},
  {path:"navigacio", component:NavigacioComponent},
  {path:"kezdolap", component:KezdolapComponent},
  {path:"ajanlat", component:AjanlatkeresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
