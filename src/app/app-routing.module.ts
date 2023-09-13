import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';
import { NoProfeIngresadoGuard } from './no-profe-ingresado.guard';
import { ProfeIngresadoGuard } from './profe-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard,NoProfeIngresadoGuard],
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard,NoProfeIngresadoGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [IngresadoGuard,NoProfeIngresadoGuard]
  },
  {
    path: 'profesor-login',
    loadChildren: () => import('./profesor-login/profesor-login.module').then( m => m.ProfesorLoginPageModule),
    canActivate: [NoIngresadoGuard,NoProfeIngresadoGuard]
  },
  {
    path: 'inicio-profe',
    loadChildren: () => import('./inicio-profe/inicio-profe.module').then( m => m.InicioProfePageModule),
    canActivate: [ProfeIngresadoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
