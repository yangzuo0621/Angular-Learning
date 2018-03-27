import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-signup',
  templateUrl: './app/customers/customer.component.html',
  styleUrls: ['./app/customers/customer.component.css']
})
export class CustomerComponent {
  customer: Customer = new Customer();

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}
