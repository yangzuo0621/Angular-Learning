import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageTitle = 'Acme Product Management';

  constructor(private authService: AuthService) { }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
  }
}
