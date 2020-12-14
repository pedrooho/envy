import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { EnvelopeService } from 'src/app/services/envelope.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { CreateEnvelopeComponent } from '../create-envelope/create-envelope.component';
import { CreateTransactionComponent } from '../create-transaction/create-transaction.component';

@Component({
  selector: 'app-open-envelope',
  templateUrl: './open-envelope.component.html',
  styleUrls: ['./open-envelope.component.css']
})
export class OpenEnvelopeComponent implements OnInit {
  
  lstTransaction: any;
  envelopeId: number;
  envelope: any;
  frmDateCreate: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private envelopeService: EnvelopeService,
    private alertify: AlertifyService,
    private transactionService: TransactionService, 
  ) { 
    this.route.params.subscribe(params => this.envelopeId = params['id']);
  }

  private buildForm(): void {
    this.frmDateCreate = this.formBuilder.group({
      createdOnFrom: [null, Validators.required],
      createdOnTo: [null, Validators.required],
      envelopeId: [null, Validators.required],
    });

    this.frmDateCreate.get('envelopeId').setValue(this.envelopeId);
  }

  ngOnInit(): void {
    this.buildForm();
    this.loadEnvelope();
  }

  openNewTransaction(): void{
    const  dialogRef = this.dialog.open(CreateTransactionComponent, {
      width: '500px',
      height: 'auto',
      data: {
        idEnvelope: this.envelopeId
      } 
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.loadTransactions();
      }
    });
  }

  openEditEnvelope(){
    const  dialogRef = this.dialog.open(CreateEnvelopeComponent, {
      width: '500px',
      height: 'auto',
      data: {
        envelopeId: this.envelopeId
      },
    });
    
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.alertify.success('Transaction added successfully');
      }
    });
  }

  edit(idTransaction: number) {
    const  dialogRef = this.dialog.open(CreateTransactionComponent, {
      width: '500px',
      height: 'auto', 
      data: {
        idEnvelope: this.envelopeId,
        idTransaction: idTransaction
      }     
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.loadTransactions();
      }
    });
  }

  delete() {
  }

  loadTransactions(){
    this.transactionService.getReport(this.frmDateCreate.getRawValue()).subscribe( resul => {
      console.log(resul);
      this.lstTransaction = resul;
    });
  }

  loadEnvelope(){
    this.envelopeService.getById(this.envelopeId).subscribe (resul => {
      this.envelope = resul;
    });
  }


}
