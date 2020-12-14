import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {LoginModel} from '../../models/login.models';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  model = new LoginModel({});
  error = null;
 
  constructor(
    public formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertify: AlertifyService,
    private router: Router) { }
 
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
    this.accountService.login(this.loginForm.getRawValue()).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error.message);
    }, () => {
      this.router.navigate(['/findTasks']);
    });
  }


 
}