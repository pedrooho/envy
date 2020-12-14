import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { EnvelopeService } from 'src/app/services/envelope.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  lstEnvelopes: any;
  backgroundColor = [];
  frmReport: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private envelopeService: EnvelopeService,
    private alertify: AlertifyService
  ) { }

  public chartLabels = [];
  public pieChartType = 'pie';
  public pieChartDataExpected = [];
  public pieChartDataReality = [];
  public chartColors = [];


  public chartType: string = 'bar';
  public chartDatasets: Array<any> = [
    { data: [], label: '' },
    { data: [], label: '' },
  ];

  private buildForm(): void {
    this.frmReport = this.formBuilder.group({
      userId: [null, Validators.required],
      createdOnFrom: [null, Validators.required],
      createdOnTo: [null, Validators.required],
    });

    this.frmReport.get('userId').setValue(this.accountService.currentUser.id);
  }

  ngOnInit(): void {
    this.buildForm();
  }

  setValuesChart(lstEnvelopes: any){
    for(var i = 0; i < lstEnvelopes.length; i++){
      this.chartLabels.push(lstEnvelopes[i].title);

      this.pieChartDataExpected.push(lstEnvelopes[i].budget)
      this.pieChartDataReality.push(lstEnvelopes[i].spent)

      this.backgroundColor.push(this.gera_cor());
      
    }

    this.chartDatasets = [
      { data: this.pieChartDataReality, label: 'Spent' },
      { data: this.pieChartDataExpected, label: 'Budget' }
    ]

    this.chartColors = [{
      backgroundColor: this.backgroundColor,
      borderWidth: 2,
    }]
  }

  gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
  }

  search(){
    this.envelopeService.getByIdUser(this.accountService.currentUser.id).subscribe( resul => {
      this.setValuesChart(resul);
    },error => {
      this.alertify.error(error.message);
    });
  }
}


