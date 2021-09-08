import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { InventoryService } from '../../services/inventory.service';
import { InventoryAction } from '../../store/inventory.action';
import { Inventory } from '../../store/inventory.reducer';
import { selectInventories } from '../../store/inventory.selector';

@Component({
  selector: 'app-view-inventories',
  templateUrl: './view-inventories.component.html',
  styleUrls: ['./view-inventories.component.scss']
})
export class ViewInventoriesComponent implements OnInit {
  inventories$: Observable<Inventory[]>;

  constructor(
    private readonly service: InventoryService,
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.fetchInventories();
    this.inventories$ = this.store.select(selectInventories);
  }

  update(id: number): void {
    this.router.navigate(['/inventory/add'], { queryParams: { id } });
  }

  deleteInventory(id: number): void {
    this.service.delete(id).pipe(take(1)).subscribe(
      () => this.fetchInventories(),
      (error) => console.error(error)
    );
  }

  private fetchInventories(): void {
    this.store.dispatch(InventoryAction.fetchInventories());
  }

}
