import { Component, OnInit,ContentChildren, QueryList,AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
@Component({
  selector: 'tabs22',
  templateUrl: './tabs-content-children-query-list.component.html',
  styleUrls: ['./tabs-content-children-query-list.component.scss']
})
export class TabsContentChildrenQueryListComponent implements AfterContentInit {
  
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent){
    // desable all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // enable the tab the user has clicked on.
    tab.active = true;
}

}
