import { Component, OnInit } from '@angular/core';
import { CreateEnvelopeComponent } from '../create-envelope/create-envelope.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-envelopes',
  templateUrl: './envelopes.component.html',
  styleUrls: ['./envelopes.component.css']
})
export class EnvelopesComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openNewEnvelope(): void{
    const  dialogRef = this.dialog.open(CreateEnvelopeComponent, {
      width: '500px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        //this.pesquisar();
      }
    });
  }
}
