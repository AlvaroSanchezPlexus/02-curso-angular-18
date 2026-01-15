import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaFiltroComponent } from './galeria-filtro.component';

describe('GaleriaFiltroComponent', () => {
  let component: GaleriaFiltroComponent;
  let fixture: ComponentFixture<GaleriaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
