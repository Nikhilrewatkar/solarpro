import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  monthlyUsage: number = 877; // Average US household
  roofSpace: number = 500;
  sunlightHours: number = 5;
  electricityRate: number = 0.16;

  // Results
  panelsNeeded: number = 0;
  systemSize: number = 0;
  monthlySavings: number = 0;
  paybackPeriod: number = 0;
  showResults: boolean = false;

  // Constants
  private readonly PANEL_WATTAGE = 400; // 400W panels
  private readonly PANEL_SIZE_SQFT = 19.25; // 3.5ft x 5.5ft
  private readonly EFFICIENCY_FACTOR = 0.75;
  private readonly INSTALLATION_COST_PER_WATT = 2.50;
  private readonly FEDERAL_TAX_CREDIT = 0.30;

  constructor() {
    this.calculate();
  }

  ngOnInit(): void {
  }

  calculate(): void {
    if (!this.monthlyUsage || !this.roofSpace || !this.electricityRate) {
      this.showResults = false;
      return;
    }

    // Calculate daily kWh needed
    const dailyUsage = this.monthlyUsage / 30;

    // Calculate system size needed (in kW)
    this.systemSize = (dailyUsage / (this.sunlightHours * this.EFFICIENCY_FACTOR)) / 1000;

    // Calculate number of panels needed
    this.panelsNeeded = Math.ceil((this.systemSize * 1000) / this.PANEL_WATTAGE);

    // Adjust for roof space if needed
    const maxPanelsBySpace = Math.floor(this.roofSpace / this.PANEL_SIZE_SQFT);
    if (maxPanelsBySpace < this.panelsNeeded) {
      this.panelsNeeded = maxPanelsBySpace;
      this.systemSize = (this.panelsNeeded * this.PANEL_WATTAGE) / 1000;
    }

    // Calculate monthly savings
    this.monthlySavings = this.monthlyUsage * this.electricityRate;

    // Calculate system cost and payback period
    const systemCost = this.systemSize * 1000 * this.INSTALLATION_COST_PER_WATT;
    const costAfterTaxCredit = systemCost * (1 - this.FEDERAL_TAX_CREDIT);
    this.paybackPeriod = costAfterTaxCredit / (this.monthlySavings * 12);

    this.showResults = true;
  }

  // Format number with commas
  formatNumber(num: number): string {
    return num.toLocaleString();
  }

}
