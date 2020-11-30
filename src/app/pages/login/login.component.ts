import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {LoginModel} from '../../models/login.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn = false;
  model = new LoginModel({});

  constructor(
    public formBuilder: FormBuilder,
    private accountService: AccountService) { }

    loginForm: FormGroup;

  ngOnInit(): void {
    this.init();
  }

  init(): void{
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
        username: [null, [Validators.required]],
        senha: [null, Validators.required]
    });
  }

  login(){
    this.accountService.login(this.loginForm.getRawValue()).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

}
