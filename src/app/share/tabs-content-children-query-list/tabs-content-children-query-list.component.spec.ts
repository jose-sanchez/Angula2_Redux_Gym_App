import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsContentChildrenQueryListComponent } from './tabs-content-children-query-list.component';

describe('TabsContentChildrenQueryListComponent', () => {
  let component: TabsContentChildrenQueryListComponent;
  let fixture: ComponentFixture<TabsContentChildrenQueryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsContentChildrenQueryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsContentChildrenQueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
