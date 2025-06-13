import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ConsultationFormComponent } from './components/consultation-form/consultation-form.component';
import { LoginComponent } from './components/admin/login/login.component';
import { UsersComponent } from './components/admin/users/users.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'consultation', component: ConsultationFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
