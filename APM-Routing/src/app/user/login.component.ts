import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public errorMessage: string;
  public pageTitle = 'Log In';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }

}
