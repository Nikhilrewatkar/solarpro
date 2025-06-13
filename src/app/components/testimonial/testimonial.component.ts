import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {


  ngOnInit(): void {

  }
  testimonials = [
    {
      name: 'Kishore Reddy',
      location: 'Telangana',
      text: `My aspiration to create a sustainable, carbon-free world... I wholeheartedly recommend Thinkearth360!`
    },
    {
      name: 'Braj Bhushan',
      location: 'Uttar Pradesh',
      text: `I am a working person, but the Thinkearth360 team did everything perfectly... they did everything else.`
    },
    {
      name: 'Gandharv Chauhan',
      location: 'Rajasthan',
      text: `Being an engineer myself, I am extremely satisfied with the team... I highly recommend Thinkearth360.`
    }
  ];

}
