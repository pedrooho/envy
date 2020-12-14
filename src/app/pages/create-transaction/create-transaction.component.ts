import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from 'src/app/services/alertify.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private formBuilder: FormBuilder,
    private transactionService: TransactionService,
    private alertify: AlertifyService,
    public dialogRef: MatDialogRef<CreateTransactionComponent>
  ) {
    this.idTransaction = data.idTransaction,
    this.idEnvelope = data.idEnvelope
   }

  createTransactionForm: FormGroup;
  idEnvelope: number;
  idTransaction: number;

  ngOnInit(): void {
    this.buildForm();
    this.loadTransaction();
  }

  buildForm(): void  {
    this.createTransactionForm = this.formBuilder.group({
      id: [null, Validators.nullValidator],
      type: ["INCOME", Validators.required],
      envelopeId: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required],
      createdOn: [null, Validators.required]
    });
    this.createTransactionForm.get('envelopeId').setValue(this.idEnvelope);
    if(this.data.idTransaction != undefined && this.idTransaction != null)
      this.createTransactionForm.get('id').setValue(this.idTransaction);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void{
    if (this.createTransactionForm.controls.id.value === null) {
        this.transactionService.create(this.createTransactionForm.getRawValue()).toPromise().then(resul => {
          if(resul){
            this.alertify.success('Transaction added successfully');
            this.dialogRef.close(true);
          }
        }, error => {
          console.log(error);
        });
    } else {
        this.transactionService.update(this.createTransactionForm.getRawValue()).toPromise().then(resul => {
          if(resul){
            this.alertify.success('Transaction added successfully');
            this.dialogRef.close(true);
          }  
        }, error => {
          console.log(error);
        });
    }
  }

  loadTransaction(){
    if(this.idTransaction){
      this.transactionService.getById(this.idTransaction).subscribe(resul => {
        this.createTransactionForm.patchValue(resul);
      });      
    }
  }

}
