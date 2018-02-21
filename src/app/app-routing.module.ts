import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './user/addUser.component';
import { LoginComponent } from './user/login.component';
import { AppDashboardComponent } from './appDashboard.component';

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: AppDashboardComponent },
  { path: 'register', component: AddUserComponent }
];
export const routing =RouterModule.forRoot(routes);