import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre!: string;
  rut!: string;

  constructor(public navCtrl: NavController) { }

  

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario')!);
    this.nombre = usuario.nombre; 
    this.rut = usuario.rut;
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');

  }

}
