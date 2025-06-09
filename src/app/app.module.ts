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

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    HomeComponent,
    FaqComponent,
    TestimonialComponent,
    TimelineComponent,
    WhychooseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
