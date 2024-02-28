import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsRowComponent } from './tabs-row.component';

describe('TabsRowComponent', () => {
  let component: TabsRowComponent;
  let fixture: ComponentFixture<TabsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
