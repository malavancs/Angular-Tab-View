import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  options;
  selectedOptions;
  ngOnInit() {
    this.selectedOptions = 0;
    console.log("malavan");
    this.options = [{
      label: 'Maker',
      value: 0
    },
    {
      label: 'Pending',
      value: 1
    },
    {
      label: 'Disbursed',
      value: 2
    },
    {
      label: 'Error',
      value: 3
    },
     {
      label: 'Rejected',
      value: 4
    }]
  }
  onMenuChanged(event) {

  }
}