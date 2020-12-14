import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-authentication-button',
  templateUrl: './authentication-button.component.html',
  styles: [
  ]
})
export class AuthenticationButtonComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  loggedIn() {
    return this.accountService.loggedIn();
  }
}
