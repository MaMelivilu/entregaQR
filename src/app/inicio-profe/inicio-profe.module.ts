import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioProfePageRoutingModule } from './inicio-profe-routing.module';

import { InicioProfePage } from './inicio-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InicioProfePageRoutingModule
  ],
  declarations: [InicioProfePage]
})
export class InicioProfePageModule {}
