import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/navigation/topnav/topnav.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { WhychooseComponent } from './components/whychoose/whychoose.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { ConsultationFormComponent } from './components/consultation-form/consultation-form.component';
import { TeamsComponent } from './components/teams/teams.component';
import { LoginComponent } from './components/admin/login/login.component';
import { UsersComponent } from './components/admin/users/users.component';
import { environment } from 'src/environments/environment';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    TestimonialComponent,
    TimelineComponent,
    WhychooseComponent,
    CalculatorComponent,
    ConnectionsComponent,
    ConsultationFormComponent,
    TeamsComponent,
    LoginComponent,
    UsersComponent,
    AboutusComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
