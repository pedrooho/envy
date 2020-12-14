import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './models/User';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'auth0-angular-sample';

  jwtHelper = new JwtHelperService();

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    // setting the decodedToken and current user now because this will be executed
    // everytime the user reloads the application.
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.accountService.decodedToken = this.jwtHelper.decodeToken(token);
    }

    if (user) {
      this.accountService.currentUser = user;
    }

  }
}
