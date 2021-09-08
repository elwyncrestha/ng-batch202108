import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from '../../store/inventory.reducer';

@Component({
  selector: 'app-view-inventories',
  templateUrl: './view-inventories.component.html',
  styleUrls: ['./view-inventories.component.scss']
})
export class ViewInventoriesComponent implements OnInit {
  inventories$: Observable<Inventory[]>;

  constructor(
    private readonly service: InventoryService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.inventories$ = this.service.getAll();
  }

  update(id: number): void {
    this.router.navigate(['/inventory/add'], { queryParams: { id } });
  }

  deleteInventory(id: number): void {
    this.service.delete(id).pipe(take(1)).subscribe(() => {
      this.inventories$ = this.service.getAll();
    }, (error) => console.error(error));
  }

}
