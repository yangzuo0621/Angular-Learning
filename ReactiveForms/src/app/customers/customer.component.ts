import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-signup',
  templateUrl: './app/customers/customer.component.html',
  styleUrls: ['./app/customers/customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customerForm: FormGroup;
  public customer: Customer = new Customer();

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    });
  }

  public save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  public populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'YANG Zuo',
      lastName: 'zyang0508@163.com',
      sendCatalog: true
    });
  }
}
