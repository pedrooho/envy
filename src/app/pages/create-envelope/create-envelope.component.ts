import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-envelope',
  templateUrl: './create-envelope.component.html',
  styleUrls: ['./create-envelope.component.css']
})
export class CreateEnvelopeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateEnvelopeComponent>
  ) { }

  createEnvelopeForm: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void  {
    this.createEnvelopeForm = this.formBuilder.group({
      title: [null, Validators.required],
      budget: [null, Validators.required],
      spent: [null, Validators.required],
      type: [null, Validators.required],
      goalValue: [null, Validators.required],
      dueDate: [null, Validators.required],

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
