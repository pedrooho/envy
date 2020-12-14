import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-authentication-button',
  templateUrl: './authentication-button.component.html',
  styles: [
  ]
})
export class AuthenticationButtonComponent implements OnInit {

  constructor(
    public accountService: AccountService,
  ) { }

  ngOnInit(): void {
  }

}
