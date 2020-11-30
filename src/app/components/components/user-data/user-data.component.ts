import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
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
        email: [null, Validators.required, Validators.email],
        password: [null, Validators.required],
        birthdate: [null, Validators.required]
    });
  }

  save(): void{
    // if (this.frmUser.controls.id.value === null) {
    //     this._userService.insert(this.frmUser.getRawValue()).toPromise().then(resul => {
    //         if (!resul.didError) {
    //             this.frmUser.controls.id.setValue(resul.data.id);
    //             this._userPagesService.globalService.notification.success('Usuário inserido com sucesso');
    //         }
    //     }, error => {
    //         this._userPagesService.globalService.errorMessage(error);
    //     });
    // } else {
    //     this._userService.update(this.frmUser.getRawValue()).toPromise().then(resul => {
    //         if (!resul.didError) {
    //             this._userPagesService.globalService.notification.success('Usuário atualizado com sucesso');
    //         }
    //     }, error => {
    //         this._userPagesService.globalService.errorMessage(error);
    //     });
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
