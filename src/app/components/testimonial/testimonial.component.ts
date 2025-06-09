import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }
  // currentSlide = 0;
  // autoSlideInterval: any;

  // testimonials = [
  //   {
  //     quote: 'Switching to solar saved us thousands. The team was professional and the process was smooth!',
  //     author: 'Priya Sharma',
  //     image: '../../../assets/images/smartboy_white.png'
  //   },
  //   {
  //     quote: 'Excellent service and great savings on our electricity bills. Highly recommended!',
  //     author: 'Arjun Patel',
  //     image: '../../../assets/images/smartboy_white.png'
  //   },
  //   {
  //     quote: 'The installation was quick, and the system works perfectly. Solar is the future!',
  //     author: 'Meera Kulkarni',
  //     image: '../../../assets/images/smartboy_white.png'
  //   }
  // ];

  // ngOnInit(): void {
  //   this.startAutoSlide();
  // }

  // ngOnDestroy(): void {
  //   clearInterval(this.autoSlideInterval);
  // }

  // startAutoSlide(): void {
  //   this.autoSlideInterval = setInterval(() => {
  //     this.nextSlide();
  //   }, 5000); // Change slide every 5 seconds
  // }

  // nextSlide(): void {
  //   this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  // }

  // prevSlide(): void {
  //   this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  // }



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






