import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  public name = signal<string>('Angular 18');

  constructor() { }
}
