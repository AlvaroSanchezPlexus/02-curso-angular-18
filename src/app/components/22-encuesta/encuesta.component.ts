import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.scss'
})
export class EncuestaComponent {
  public formEncuesta: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formEncuesta = this.fb.group({
      tituloEncuesta: ['', Validators.required],
      preguntas: this.fb.array([]) // Array dinámico
    });
  }

  public get preguntas(): FormArray {
    return this.formEncuesta.get('preguntas') as FormArray;
  }

  public agregarPregunta(): void {
    const preguntaForm = this.fb.group({
      texto: ['', Validators.required]
    });
    this.preguntas.push(preguntaForm);
  }

  public eliminarPregunta(index: number): void {
    this.preguntas.removeAt(index);
  }

  public guardar(): void {
    console.log('Encuesta creada:', this.formEncuesta.value);
  }
}
