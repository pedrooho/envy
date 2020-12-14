import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private envelopeService: EnvelopeService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<CreateEnvelopeComponent>,
    private alertify: AlertifyService
  ) { 
    this.envelopeId = this.data.envelopeId;
  }

  envelopeTypeEnum = TypeEnvelopeEnum;
  createEnvelopeForm: FormGroup;
  flagGoal = false;
  envelopeId;

  ngOnInit(): void {
    this.buildForm();
    this.loadEnvelope();
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
    if(this.envelopeId != null)      
      this.createEnvelopeForm.get('id').setValue(this.envelopeId);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void{
    let envelope:any = this.createEnvelopeForm.value;
    if (this.createEnvelopeForm.controls.id.value === null) {
        this.envelopeService.create(envelope).toPromise().then(resul => {
          this.alertify.success('Envelope added successfully');
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
          this.alertify.success('Envelope updated successfully');  
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

  loadEnvelope(){
    if(this.envelopeId != null){
      this.envelopeService.getById(this.envelopeId).subscribe(resul => {
        this.createEnvelopeForm.patchValue(resul);
      });      
    }
  }

}
