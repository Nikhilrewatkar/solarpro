import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    {
      question: 'How does solar panel installation work?',
      answer: 'Our team surveys your site, designs a custom system, installs the panels, and connects it to the grid.',
      open: false
    },
    {
      question: 'How much will I save on electricity bills?',
      answer: 'Most customers save 50–90% on their monthly bills, depending on system size and usage.',
      open: false
    },
    {
      question: 'Do I need to maintain solar panels?',
      answer: 'Solar panels require minimal maintenance. Just keep them clean and check once a year.',
      open: false
    },
    {
      question: 'Is government subsidy available?',
      answer: 'Yes, government subsidies are available for residential solar systems. We help with paperwork too.',
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false
    }));
  }
}
