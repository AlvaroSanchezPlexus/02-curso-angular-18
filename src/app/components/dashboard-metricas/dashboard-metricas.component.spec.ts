import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMetricasComponent } from './dashboard-metricas.component';

describe('DashboardMetricasComponent', () => {
  let component: DashboardMetricasComponent;
  let fixture: ComponentFixture<DashboardMetricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMetricasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMetricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
