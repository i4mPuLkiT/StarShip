import { Component, OnInit } from '@angular/core';
// import { DataServiceService } from './data-service.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
   constructor() { }

  ngOnInit() {
   this.getSales().subscribe(data => {
      this.barChartLabels = Object.keys(data);
      this.barChartLabels.forEach(label => {
        this.barChartData[0].data.push(data[label]['volumeSales']);
        this.barChartData[1].data.push(data[label]['valueSales']);
      });
    });
  }
 public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [], label: 'Volume Sales' },
    { data: [], label: 'Value Sales' }
  ];

 getSales() {
    return of(
      {
      "year1": {
        "volumeSales": "0.09",
        "valueSales": "1.23"
      },
      "year2": {
        "volumeSales": "0.11",
        "valueSales": "1.56"
      },
      "year3": {
        "volumeSales": "0.12",
        "valueSales": "1.69"
      },
      "year4": {
        "volumeSales": "0.12",
        "valueSales": "1.64"
      },
      "year5": {
        "volumeSales": "0.10",
        "valueSales": "1.41"
      },
      "total": {
        "volumeSales": "0.55",
        "valueSales": "7.53"
      }
    });
 }

}
