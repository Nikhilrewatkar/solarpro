import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.scss']
})
export class ConsultationFormComponent implements OnInit {

  ngOnInit(): void {
  }
  selectedTab: string = 'residential';

  billRanges = [
    'Less than ₹1500',
    '₹1500 – ₹2500',
    '₹2500 – ₹4000',
    '₹4000 – ₹8000',
    'More than ₹8000'
  ];

  designations = ['Management committee member', 'Resident', 'Builder', 'Facility Manager'];

  residentialForm: FormGroup;
  societyForm: FormGroup;
  commercialForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.residentialForm = this.fb.group({
      fullName: ['', Validators.required],
      whatsapp: ['', Validators.required],
      pinCode: ['', Validators.required],
      monthlyBill: ['', Validators.required],
      terms: [true, Validators.requiredTrue]
    });

    this.societyForm = this.fb.group({
      fullName: ['', Validators.required],
      societyName: ['', Validators.required],
      pinCode: ['', Validators.required],
      whatsapp: ['', Validators.required],
      monthlyBill: ['', Validators.required],
      designation: ['', Validators.required],
      approvalStatus: ['', Validators.required],
      terms: [true, Validators.requiredTrue]
    });

    this.commercialForm = this.fb.group({
      fullName: ['', Validators.required],
      companyName: ['', Validators.required],
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      whatsapp: ['', Validators.required],
      monthlyBill: ['', Validators.required],
      terms: [true, Validators.requiredTrue]
    });
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  submitForm(type: string) {
    let formData;
    switch (type) {
      case 'residential':
        formData = this.residentialForm.value;
        break;
      case 'society':
        formData = this.societyForm.value;
        break;
      case 'commercial':
        formData = this.commercialForm.value;
        break;
    }

    formData['type'] = type;
    formData['userStatus'] = "new";

    console.log('Submitting:', formData);

    this.userService.addUser(formData).subscribe(() => {
      alert("done")
    });
  }


}
