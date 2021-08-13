import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  TVyVideo = 'TV y Video';
  Celulares = 'Celulares';
  LineaBlanca = 'Línea Blanca';
  Videojuegos = 'Videojuegos';
  Electrodomesticos = 'Electrodomésticos';
  ComputacionyTablets = 'Computación y Tablets';
  Audio = 'Audio';
  CamarasyDrones = 'Cámaras y Drones';
  AudifonosyBocinas = 'Audífonos y Bocinas';
  HogarInteligente = 'Hogar Inteligente';
  PrendasElectronicas = 'Prendas Electrónicas';
  CuidadoPersonal = 'Cuidado Personal';
  Climatizacion = 'Climatizacion';
  Carrito = 'Carrito';





  ngOnInit(): void {
  }

}
