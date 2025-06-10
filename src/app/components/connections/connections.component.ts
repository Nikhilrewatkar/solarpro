import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent implements OnInit {

  constructor() { }

  experience: string = '';
  homes: string = '';
  installation: string = '';
  savings: string = '';

  ngOnInit(): void {
    this.updateNumbers();
  }

  updateNumbers(): void {
    this.experience = "10+";
    this.homes = "25,000+";
    this.installation = "150+";
    this.savings = "₹90 Cr+";
  }
}
