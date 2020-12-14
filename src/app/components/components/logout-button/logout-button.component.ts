import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [
  ]
})
export class LogoutButtonComponent implements OnInit {

  constructor(private accountService: AccountService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit(): void {
  }
  logOut() {
    this.accountService.logOut();
    this.alertify.message('Logged out');
    this.router.navigate(['/']);
  }
}
