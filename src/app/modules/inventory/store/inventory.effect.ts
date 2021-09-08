import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { InventoryService } from '../services/inventory.service';
import { InventoryAction } from './inventory.action';

@Injectable()
export class InventoryEffect {
  fetchInventories$ = createEffect(() =>
    this.action$.pipe(
      ofType(InventoryAction.fetchInventories),
      switchMap(() =>
        this.inventoryService.getAll().pipe(
          switchMap((value) => {
            return [
              InventoryAction.setInventories({ inventories: value })
            ];
          })
        )
      ),
      catchError(() => {
        return of(InventoryAction.setInventories({ inventories: [] }));
      })
    )
  );

  constructor(
    private readonly action$: Actions,
    private readonly inventoryService: InventoryService
  ) {}
}
