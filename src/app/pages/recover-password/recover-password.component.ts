import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from 'src/app/services/account.service';

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
    private _snackBar: MatSnackBar,
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
      this._snackBar.open(error.error.message, null, {
        duration: 4000,
      });
    });
  }

}
