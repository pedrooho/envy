import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EnvelopeService } from 'src/app/services/envelope.service';
import { TransactionService } from 'src/app/services/transaction.service';
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

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private envelopeService: EnvelopeService,
    private transactionService: TransactionService, 
  ) { 
    this.route.params.subscribe(params => this.envelopeId = params['id']);
  }

  ngOnInit(): void {
    this.loadTransactions();
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
        //this.pesquisar();
      }
    });
  }

  delete() {
  }

  loadTransactions(){
    this.transactionService.getByIdEnvelope(this.envelopeId).subscribe( resul => {
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
