import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorInteractivoComponent } from './contador-interactivo.component';

describe('ContadorInteractivoComponent', () => {
  let component: ContadorInteractivoComponent;
  let fixture: ComponentFixture<ContadorInteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorInteractivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorInteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
