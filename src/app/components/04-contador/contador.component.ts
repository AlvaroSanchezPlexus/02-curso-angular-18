import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss',
})
export class ContadorComponent {
  clicks = 0;

  contar() {
    this.clicks++;
  }
}
