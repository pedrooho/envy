import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnvelopeService } from '../../services/envelope.service';
import { TypeEnvelopeEnum } from '../../enum/type-envelope.enum'
import { AccountService } from 'src/app/services/account.service';

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
    public dialogRef: MatDialogRef<CreateEnvelopeComponent>
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
    if (this.createEnvelopeForm.controls.id.value === null) {
        this.envelopeService.create(this.createEnvelopeForm.getRawValue()).toPromise().then(resul => {
          if(resul){
            this._snackBar.open("Envelope inserido com sucesso!", null, {
              duration: 2000,
            });
          }
        }, error => {
          console.log(error);
        });
    } else {
        this.envelopeService.update(this.createEnvelopeForm.getRawValue()).toPromise().then(resul => {

  
        }, error => {

        });
    }
  }

  setFlagGoal(value) {
    this.flagGoal = value;
  }

}
