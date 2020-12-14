import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnvelopeService } from '../../services/envelope.service';
import { TypeEnvelopeEnum } from '../../enum/type-envelope.enum'
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-create-envelope',
  templateUrl: './create-envelope.component.html',
  styleUrls: ['./create-envelope.component.css']
})
export class CreateEnvelopeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private envelopeService: EnvelopeService,
    private _snackBar: MatSnackBar,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<CreateEnvelopeComponent>,
    private alertify: AlertifyService
  ) { }

  envelopeTypeEnum = TypeEnvelopeEnum;
  createEnvelopeForm: FormGroup;
  flagGoal = false;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void  {
    this.createEnvelopeForm = this.formBuilder.group({
      id: [null, Validators.nullValidator],
      title: [null, Validators.required],
      budget: [null, Validators.required],
      spent: [null, Validators.required],
      type: [null, Validators.required],
      goalValue: [null, Validators.required],
      dueDate: [null, Validators.required],
      userId: [null, Validators.nullValidator]
    });
    this.createEnvelopeForm.get('userId').setValue(this.accountService.currentUser.id);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void{
    let envelope:any = this.createEnvelopeForm.value;
    if (this.createEnvelopeForm.controls.id.value === null) {
        this.envelopeService.create(envelope).toPromise().then(resul => {
          if(resul){
            this._snackBar.open("Envelope inserido com sucesso!", null, {
              duration: 2000,
            });
          }
        }, error => {
          var errorMsg;
          if(error.subErrors != null){
            errorMsg = error.subErrors[0].message;
          } else {
            errorMsg = error.message
          }
          this.alertify.error(errorMsg);
        });
    } else {
        this.envelopeService.update(envelope).toPromise().then(resul => {

  
        }, error => {
            var errorMsg;
            if(error.subErrors != null){
              errorMsg = error.subErrors[0].message;
            } else {
              errorMsg = error.message
            }
            this.alertify.error(errorMsg);
        });
    }
  }

  setFlagGoal(value) {
    this.flagGoal = value;
  }

}
