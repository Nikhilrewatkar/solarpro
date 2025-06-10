import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormsModule } from '@angular/forms';
import { ConnectionsComponent } from './components/connections/connections.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
