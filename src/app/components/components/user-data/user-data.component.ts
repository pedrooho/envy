import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { UserService } from '../../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


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
    private _snackBar: MatSnackBar,
  ) {}

  frmUser: FormGroup;

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
        password: [null, Validators.required],
        birthDate: [null, Validators.required]
    });
  }

  save(): void{
    if (this.frmUser.controls.id.value === null) {
        this.accountService.register(this.frmUser.getRawValue()).toPromise().then(resul => {
          if(resul){
            this._snackBar.open("Usuário inserido com sucesso!", null, {
              duration: 2000,
            });
          }
        }, error => {
          this._snackBar.open(error.error.message, null, {
            duration: 4000,
          });
        });
    } else {
        this.userService.update(this.frmUser.getRawValue()).toPromise().then(resul => {

  
        }, error => {

        });
    }
  }

    edit(): void {
      // this.route.firstChild.params.subscribe(params => {
      //     this._userPagesService.paramId = +params.id;
      // });
      // if (this._userPagesService.paramId) {
      //     await this._userService.get(this._userPagesService.paramId).toPromise().then(result => {
      //         if (!result.didError && result.data !== null) {
      //             this._userPagesService.model = result.data;
      //             this.frmUser.patchValue(result.data);
      //         }
      //     });
      // }
    }

    limpar(): void{
      this.frmUser.reset();
    }

}
