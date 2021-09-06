import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Inventory } from "../models/inventory.model";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  static URL = 'inventory';

  constructor(private readonly httpClient: HttpClient) {}

  save(inventory: Inventory): Observable<Inventory> {
    return this.httpClient.post<Inventory>(this.getUrl(), inventory);
  }

  getAll(): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(this.getUrl());
  }

  getUrl(): string {
    return `${environment.inventory_server}/${InventoryService.URL}`;
  }

}
