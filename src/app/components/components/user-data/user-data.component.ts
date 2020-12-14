import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { UserService } from '../../../services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private accountService: AccountService,
    private userService: UserService,
    private alertify: AlertifyService,
  ) {}

  frmUser: FormGroup;
  changePasswordForm: FormGroup;
  isEdit = false;

  ngOnInit(): void {
    this.init();
    this.edit();
  }

  init(): void{
    this.buildForm();
  }

  private buildForm(): void {
    this.frmUser = this.formBuilder.group({
      id: [null, Validators.nullValidator],
      name: [null, Validators.required],
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.nullValidator],
      birthDate: [null, Validators.required]
    });

    this.changePasswordForm = this.formBuilder.group({
      userId: [null, Validators.nullValidator],
      previousPassword: [null, Validators.required],
      newPassword: [null, Validators.required]
    });

    if(this.accountService.currentUser !== undefined && this.accountService.currentUser.id !== undefined)
      this.changePasswordForm.get('userId').setValue(this.accountService.currentUser.id);      
    else 
      this.changePasswordForm.get('userId').setValidators(Validators.required);

  }

  save(): void{
    if (this.frmUser.controls.id.value === null) {
        this.accountService.register(this.frmUser.getRawValue()).toPromise().then(resul => {
          if(resul){
            this.alertify.success('User added successfully');
          }
        }, error => {
          this.alertify.error(error.message);
        });
    } else {
        this.userService.update(this.frmUser.getRawValue()).toPromise().then(resul => {
          this.alertify.success('User updated successfully');	
        }, error => {
          this.alertify.error(error.message);
        });
    }
  }

  changePassword(){
    this.userService.changePassword(this.changePasswordForm.getRawValue()).toPromise().then(resul => {
      console.log(resul);
    }, error => {
      console.log(error);
    });
  }

  edit(){
    if(this.accountService.currentUser === undefined){
      this.isEdit = false;
    }
    else{
      this.isEdit = true;
      this.loadUser();
    }
      
  }
  
  loadUser(){
    this.userService.getById(this.accountService.currentUser.id).subscribe(resul => {
      this.frmUser.patchValue(resul);
    });
  }

    limpar(): void{
      this.frmUser.reset();
    }

}
