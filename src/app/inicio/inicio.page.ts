import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre!: string;
  rut!: string;
  codigo: any;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) { }

  

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario')!);
    this.nombre = usuario.nombre; 
    this.rut = usuario.rut;
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');

  }

  scanear(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.codigo = barcodeData.text;
      console.log('Barcode data', this.codigo);
    }).catch(err => {
      console.log('Error', err);
    });
  }

}
