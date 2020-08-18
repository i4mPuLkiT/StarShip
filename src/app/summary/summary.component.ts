import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
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
  constructor(private _emp: DataServiceService) {
  }
  ngOnInit() {
    this._emp.getSales().subscribe(data => {
      this.barChartLabels = Object.keys(data);
      this.barChartLabels.forEach(label => {
        this.barChartData[0].data.push(data[label]['volumeSales']);
        this.barChartData[1].data.push(data[label]['valueSales']);
      });
    });;
  }

public chartClicked(e:any):void {
console.log(e);
}

public chartHovered(e:any):void {
console.log(e);
}
}
