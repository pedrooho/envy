import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  public pieChartLabels = ['Vendas Q1', 'Vendas Q2', 'Vendas Q3', 'Vendas Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  ngOnInit(): void {
  }

  public chartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 157, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [11, 12, 157, 13, 14, 15, 16], label: 'My Second dataset' },
  ];
  
  public chartLabels: Array<any> = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
  
}
