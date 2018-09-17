import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGafaComponent } from './dashboard-gafa.component';

describe('DashboardGafaComponent', () => {
  let component: DashboardGafaComponent;
  let fixture: ComponentFixture<DashboardGafaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGafaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
