import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  frmRecover: FormGroup;
  emailSend: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertify: AlertifyService,
  ) { }

  private buildForm(): void {
    this.frmRecover = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  recover(){
    this.accountService.forgotPassword(this.frmRecover.getRawValue()).toPromise().then(resul => {
      if(resul){
        this.emailSend = true;
      }
    }, error => {
      this.alertify.error(error.message);
    });
  }

}
