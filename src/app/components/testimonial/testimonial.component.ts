import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }



  testimonials = [
    {
      image: 'https://i.pravatar.cc/150?img=1',
      text: 'Solar energy helped us save 70% on our energy bills. Highly recommend this team!',
      name: 'Anita Deshmukh',
      position: 'Homeowner – Pune',
    },
    {
      image: 'https://i.pravatar.cc/150?img=2',
      text: 'Great installation and support. Reliable and professional!',
      name: 'Rahul Patil',
      position: 'Business Owner – Nagpur',
    },
    {
      image: 'https://i.pravatar.cc/150?img=3',
      text: 'Switched to solar last year and couldn’t be happier with the performance.',
      name: 'Sneha Kulkarni',
      position: 'Architect – Nashik',
    }
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 4000); // every 4 seconds
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}






