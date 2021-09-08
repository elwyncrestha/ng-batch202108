import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Inventory } from '../store/inventory.reducer';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  static URL = 'inventory';

  constructor(private readonly httpClient: HttpClient) {}

  save(inventory: Inventory): Observable<Inventory> {
    return this.httpClient.post<Inventory>(this.getUrl(), inventory);
  }

  getAll(): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(this.getUrl()).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }

  getOne(id: number): Observable<Inventory> {
    return this.httpClient.get<Inventory>(`${this.getUrl()}/${id}`).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }

  delete(id: number): Observable<number> {
    return this.httpClient.delete<number>(`${this.getUrl()}/${id}`);
  }

  getUrl(): string {
    return `${environment.inventory_server}/${InventoryService.URL}`;
  }
}
