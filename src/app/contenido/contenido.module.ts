import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoIndexComponent } from './contenido-index/contenido-index.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    ContenidoIndexComponent
  ],
  imports: [
    CommonModule,IvyCarouselModule,
  ],
  exports:[ContenidoIndexComponent],

})
export class ContenidoModule { }
