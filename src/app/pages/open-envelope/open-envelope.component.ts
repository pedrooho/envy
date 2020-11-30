import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTransactionComponent } from '../create-transaction/create-transaction.component';

@Component({
  selector: 'app-open-envelope',
  templateUrl: './open-envelope.component.html',
  styleUrls: ['./open-envelope.component.css']
})
export class OpenEnvelopeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openNewTransaction(): void{
    const  dialogRef = this.dialog.open(CreateTransactionComponent, {
      width: '500px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        //this.pesquisar();
      }
    });
  }

  edit() {
    const  dialogRef = this.dialog.open(CreateTransactionComponent, {
      width: '500px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        //this.pesquisar();
      }
    });
  }

  delete() {
  }

}
