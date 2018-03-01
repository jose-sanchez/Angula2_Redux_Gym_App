import { Component, OnInit,Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input() tabTitle:String;
  @Input() active:boolean = false;
  //The constructor will search in the control parents a instance of type TabsComponent and will inserti automatically
  constructor(tabs:TabsComponent) {
    tabs.addTab(this);
   }

  ngOnInit() {
  }

}
