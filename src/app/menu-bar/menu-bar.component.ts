import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() options;
  @Input() selectedOptions;
  @Output() changeMenu = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  changeMenuFun(i){
    this.selectedOptions = i;
    this.changeMenu.emit({value:this.selectedOptions});
  }

}