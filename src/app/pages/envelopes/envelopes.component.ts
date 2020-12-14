import { Component, OnInit } from '@angular/core';
import { CreateEnvelopeComponent } from '../create-envelope/create-envelope.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EnvelopeService } from 'src/app/services/envelope.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-envelopes',
  templateUrl: './envelopes.component.html',
  styleUrls: ['./envelopes.component.css']
})
export class EnvelopesComponent implements OnInit {
  lstEnvelopes: any;

  constructor(
    public dialog: MatDialog,
    private accountService: AccountService,
    private envelopeService: EnvelopeService,
  ) { }

  ngOnInit(): void {
    this.loadEnvelopes();
  }

  openNewEnvelope(): void{
    
    const  dialogRef = this.dialog.open(CreateEnvelopeComponent, {
      width: '500px',
      height: 'auto',
      data: {
        envelopeId: null
      }
    });
    
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.loadEnvelopes();
      }
    });
  }

  loadEnvelopes(){
    this.envelopeService.getByIdUser(this.accountService.currentUser.id).subscribe( resul => {
      this.lstEnvelopes = resul;
    });
  }
}
