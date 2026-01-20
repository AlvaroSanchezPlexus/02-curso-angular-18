import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporizadorPomodoroComponent } from './temporizador-pomodoro.component';

describe('TemporizadorPomodoroComponent', () => {
  let component: TemporizadorPomodoroComponent;
  let fixture: ComponentFixture<TemporizadorPomodoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemporizadorPomodoroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporizadorPomodoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
