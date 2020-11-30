import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateTransactionComponent>
  ) { }

  createTransactionForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void  {
    this.createTransactionForm = this.formBuilder.group({
      type: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required],
      created_on: [null, Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
