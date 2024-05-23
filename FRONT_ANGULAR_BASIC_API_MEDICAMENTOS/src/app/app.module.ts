import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmsComponent } from './cms/cms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetaActualizarComponent } from './tarjeta-actualizar/tarjeta-actualizar.component';
import {FormsModule} from "@angular/forms";
import { TarjetaCrearComponent } from './tarjeta-crear/tarjeta-crear.component';
import { TwoDimeComponent } from './two-dime/two-dime.component';
import { TwoComponent } from './two/two.component';
import { ClasificadorComponent } from './clasificador/clasificador.component';
import { LayoutComponent } from './layout/layout.component';
import { GraficacionComponent } from './graficacion/graficacion.component';


@NgModule({
  declarations: [
    AppComponent,
    CmsComponent,
    TarjetaComponent,
    TarjetaActualizarComponent,
    TarjetaCrearComponent,
    TwoDimeComponent,
    TwoComponent,
    ClasificadorComponent,
    LayoutComponent,
    GraficacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
