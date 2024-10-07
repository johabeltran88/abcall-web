import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLoginAsComponent} from './auth/auth-login-as/auth-login-as.component';
import {AuthLoginComponent} from './auth/auth-login/auth-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login-as',
    pathMatch: 'full',
  },
  {
    path: 'login-as',
    component: AuthLoginAsComponent,
  },
  {
    path: 'login',
    component: AuthLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
