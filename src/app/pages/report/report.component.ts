import { Component, OnInit } from '@angular/core';
import { EnvelopeService } from 'src/app/services/envelope.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  lstEnvelopes: any;
  backgroundColor = [];

  constructor(
    private envelopeService: EnvelopeService,
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

  ngOnInit(): void {
    this.loadEnvelopes();
  } 

  loadEnvelopes(){
    this.envelopeService.findAll().subscribe( resul => {
      this.setValuesChart(resul);
    });
  }

  setValuesChart(lstEnvelopes: any){
    for(var i = 0; i < lstEnvelopes.length; i++){
      this.chartLabels.push(lstEnvelopes[i].title);

      this.pieChartDataExpected.push(lstEnvelopes[i].budget)
      this.pieChartDataReality.push(lstEnvelopes[i].spent)

      this.backgroundColor.push(this.gera_cor());
      
    }

    this.chartDatasets = [
      { data: this.pieChartDataReality, label: 'Reality' },
      { data: this.pieChartDataExpected, label: 'Expected' }
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
}
