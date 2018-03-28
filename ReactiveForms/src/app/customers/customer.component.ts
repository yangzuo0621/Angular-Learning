import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-signup',
  templateUrl: './app/customers/customer.component.html',
  styleUrls: ['./app/customers/customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customerForm: FormGroup;
  public customer: Customer = new Customer();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
      phone: '',
      notification: 'email',
      sendCatalog: true
    });
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
}
