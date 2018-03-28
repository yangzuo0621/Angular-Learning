import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Customer } from './customer';
import { ratingRange, emailMatcher } from './custom-validation';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-signup',
  templateUrl: './app/customers/customer.component.html',
  styleUrls: ['./app/customers/customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customerForm: FormGroup;
  public customer: Customer = new Customer();
  public emailMessage: string;

  private validationMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  };

  get addresses(): FormArray {
    return <FormArray> this.customerForm.get('addresses');
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
        confirmEmail: ['', [Validators.required]]
      }, { validator: emailMatcher }),
      phone: '',
      notification: 'email',
      rating: ['', ratingRange(1, 5)],
      sendCatalog: true,
      addresses: this.formBuilder.array([ this.buildAddress() ])
    });

    this.customerForm.get('notification').valueChanges
      .subscribe(value => this.setNotification(value));

    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.debounceTime(1000)
      .subscribe(value => this.setMessage(emailControl));
  }

  public save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  public setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity(); // Must Needed
  }

  public populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'YANG Zuo',
      lastName: 'zyang0508@163.com',
      sendCatalog: true
    });
  }

  buildAddress(): FormGroup {
    return this.formBuilder.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    });
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }
}
