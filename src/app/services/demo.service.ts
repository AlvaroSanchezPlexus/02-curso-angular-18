import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private readonly _http = inject(HttpClient);

  public name = signal<string>('Angular 18');

  public fetchData(url: string) {
    return this._http.get(url);
  }
}
