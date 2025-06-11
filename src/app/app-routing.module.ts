import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ConsultationFormComponent } from './components/consultation-form/consultation-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'consultation', component: ConsultationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
