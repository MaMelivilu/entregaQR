import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import {AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profesor-login',
  templateUrl: './profesor-login.page.html',
  styleUrls: ['./profesor-login.page.scss'],
})
export class ProfesorLoginPage implements OnInit {

  formularioLoginProfesor: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 
      
      this.formularioLoginProfesor = this.fb.group({
        'usuario': new FormControl("",Validators.required),
        'password': new FormControl("",Validators.required)
      })

    }

  ngOnInit() {
  }

  async ingresarProfesor(){
    var f = this.formularioLoginProfesor.value;

    var usuario = "jo.sanhueza";
    var password = "12345"


    if(usuario == f.usuario && password == f.password){
      console.log('ingresar');
      localStorage.setItem('ingresadoProfesor','true');
      this.navCtrl.navigateRoot('inicio-profe');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos no se encuentran registrados',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

}
