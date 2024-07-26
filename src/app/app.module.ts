import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigacioComponent } from './navigacio/navigacio.component';

@NgModule({
  declarations: [
    AppComponent,
    KezdolapComponent,
    KapcsolatComponent,
    GaleriaComponent,
    NavigacioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
