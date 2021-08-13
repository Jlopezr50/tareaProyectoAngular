import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CompartidosModule} from "./compartidos/compartidos.module";
import {ContenidoModule} from "./contenido/contenido.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CompartidosModule,
    ContenidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
