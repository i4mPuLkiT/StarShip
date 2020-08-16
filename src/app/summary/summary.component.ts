import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
let labels1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let data1 = [2200, 0, 475, 600, 200, 700, 0];
let colors1 = ['#49A9EA', '#36CAAB', '#34495E', '#8370CF', '#36CAAB', '#0AF583', '#0A8AF5'];
let myChart1 = document.getElementById("myChart1").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'bar',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "This Weeks's Total Credit",
            display: true

        },
        legend: {
            display: false
        }
    }

});

let labels2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let data2 = [2400, 800, 560, 0, 400, 900, 1200];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#8370CF', '#36CAAB', '#0AF583', '#8370CF'];
let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title: {
            text: "This Weeks's Total Debit",
            display: true

        },
        legend: {
            display: false
        }
    }

});


let labels3 = ['Cedit', 'Debit'];
let data3 = [2100, 7000];
let colors3 = ['#F54E0A', '#49A9EA'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'doughnut',
    data: {
        labels: labels3,
        datasets: [{
            data: data3,
            backgroundColor: colors3
        }]
    },
    options: {
        title: {
            text: "This Week's Credit & Debit",
            display: true

        }
    }

});


Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Monthly Credit & Debit'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Expenses'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'Debit',
        data: [400, 600, 800, 1200, 575, 0, 900, 630, 1020, 2000, 850, 1100]
    }, {
        name: 'Credit',
        data: [200, 375, 900, 1400, 900, 400, 550, 300, 0, 950, 600, 770]
    }]
});
}
