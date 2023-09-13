import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-profe',
  templateUrl: './inicio-profe.page.html',
  styleUrls: ['./inicio-profe.page.scss'],
})
export class InicioProfePage implements OnInit {

  formularioClase: FormGroup;

  constructor(public navCtrl: NavController,
    public fb: FormBuilder,
    public alertController: AlertController) {

      this.formularioClase = this.fb.group({
        'profesor': new FormControl("",Validators.required),
        'hora': new FormControl("",Validators.required),
        'sala': new FormControl("",Validators.required),
        'dia': new FormControl("",Validators.required)
      })

     }

  ngOnInit() {
  }

  cerrarSesion(){
    localStorage.removeItem('ingresadoProfesor');
    this.navCtrl.navigateRoot('login');

  }

}
