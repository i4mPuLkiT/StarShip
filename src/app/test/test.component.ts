import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
values = '';

  onKey(event: any) { // without type info
      alert(event.target.value);

    // this.values += event.target.value + ' | ';
  }
}