import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [
  ]
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.accountService.loggedIn = false;
  }

}
