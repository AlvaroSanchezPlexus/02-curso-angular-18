import {
  Component,
  effect,
  EventEmitter,
  inject,
  input,
  Input,
  OnInit,
  output,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  // Nueva forma de injectar servicios en Angular
  private readonly demoService = inject(DemoService);
  @Input() titulo = '';
  @Input() desc = '';
  @Input() ruta = '';
  @Output() CardClick = new EventEmitter<void>();

  // Using Angular's new input() function for strongly typed inputs
  public documentId = input.required<string>();
  public description = input.required<string>();
  public route = input.required<string>();
  public CardClick2 = output();

  public name = this.demoService.name;

  constructor() {
    effect(() => {
      const documentId = this.documentId();
      this.getDocuments(documentId);
    });
  }

  ngOnInit(): void {
    this.getDocuments();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private getDocuments(_id?: string): void {
    // Lógica para obtener documentos
  }
}
