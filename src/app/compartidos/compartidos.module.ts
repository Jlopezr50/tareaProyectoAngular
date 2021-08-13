import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    CabeceraComponent,
    PiePaginaComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CabeceraComponent,PiePaginaComponent,SidebarComponent]
})
export class CompartidosModule { }
