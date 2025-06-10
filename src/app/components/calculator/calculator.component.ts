import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  ngOnInit(): void {

  }
  avgBill: number = 100;
  state: string = 'Maharashtra';
  rooftopArea: number = 500;
  emiTenure: number = 5;

  // Constants (can be made configurable)
  private readonly costPerKw: number = 50000; // Rs per kW
  private readonly subsidyPercentage: number = 0.4; // 40% subsidy
  private readonly electricityRate: number = 8; // Rs per unit
  private readonly sunlightHours: number = 5; // average daily sunlight hours
  private readonly systemEfficiency: number = 0.75; // 75% efficiency
  private readonly inflationRate: number = 0.06; // 6% annual electricity price increase
  private readonly systemLifetime: number = 25; // years
  private readonly loanInterestRate: number = 0.09; // 9% p.a.

  // Cache for calculations to avoid recomputing
  private _systemSize: number | null = null;
  private _totalCost: number | null = null;
  private _subsidy: number | null = null;
  private _netCost: number | null = null;
  private _minDownPayment: number | null = null;

  calculateResults() {
    // Calculate all values without circular dependencies
    this._systemSize = this.calculateSystemSize();
    this._totalCost = this.calculateTotalCost();
    this._subsidy = this.calculateSubsidy();
    this._netCost = this.calculateNetCost();
    this._minDownPayment = this.calculateMinDownPayment();

    return {
      // System Size calculations
      requiredSystemSize: this._systemSize,
      roofAreaRequired: this.calculateRoofAreaRequired(),

      // Savings calculations
      monthlySavings: this.calculateMonthlySavings(),
      yearlySavings: this.calculateYearlySavings(),

      // Investment calculations
      totalCost: this._totalCost,
      centralSubsidy: this._subsidy,
      netCost: this._netCost,
      lifetimeSavings: this.calculateLifetimeSavings(),
      roi: this.calculateROI(),

      // Financing options
      minDownPayment: this._minDownPayment,
      netDownPayment: this.calculateNetDownPayment(),
      emiTenure: this.emiTenure,
      emi: this.calculateEMI()
    };
  }

  private calculateSystemSize(): number {
    // Simplified calculation: 1 kW system produces about 120-150 units per month
    // We'll use 130 units per kW as average
    const monthlyUnits = this.avgBill / this.electricityRate;
    return parseFloat((monthlyUnits / 130).toFixed(2));
  }

  private calculateRoofAreaRequired(): number {
    // Approximately 100 sq.ft. per kW
    return parseFloat((this._systemSize! * 100).toFixed(2));
  }

  private calculateMonthlySavings(): number {
    return this.avgBill * 0.8; // Assuming 80% of bill can be offset
  }

  private calculateYearlySavings(): number {
    return this.calculateMonthlySavings() * 12;
  }

  private calculateTotalCost(): number {
    return this.calculateSystemSize() * this.costPerKw;
  }

  private calculateSubsidy(): number {
    return this.calculateTotalCost() * this.subsidyPercentage;
  }

  private calculateNetCost(): number {
    return this.calculateTotalCost() - this.calculateSubsidy();
  }

  private calculateLifetimeSavings(): number {
    let savings = 0;
    let currentSavings = this.calculateYearlySavings();

    for (let year = 1; year <= this.systemLifetime; year++) {
      savings += currentSavings;
      currentSavings *= (1 + this.inflationRate);
    }

    return parseFloat(savings.toFixed(2));
  }

  private calculateROI(): number {
    const annualSavings = this.calculateYearlySavings();
    const netCost = this._netCost!;
    return parseFloat(((annualSavings / netCost) * 100).toFixed(2));
  }

  private calculateMinDownPayment(): number {
    // 20% of net cost
    return this._netCost! * 0.2;
  }

  private calculateNetDownPayment(): number {
    // After subsidy
    return this._minDownPayment! - this._subsidy!;
  }

  private calculateEMI(): number {
    const principal = this._netCost! - this._minDownPayment!;
    const monthlyInterest = this.loanInterestRate / 12;
    const months = this.emiTenure * 12;

    const emi = principal * monthlyInterest *
      Math.pow(1 + monthlyInterest, months) /
      (Math.pow(1 + monthlyInterest, months) - 1);

    return parseFloat(emi.toFixed(2));
  }
}