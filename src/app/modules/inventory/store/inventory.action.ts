import { createAction, props } from '@ngrx/store';
import { Inventory } from './inventory.reducer';

export class InventoryAction {
  static fetchInventories = createAction('[InventoryAction] FETCH INVENTORIES');
  static setInventories = createAction('[InventoryAction] SET INVENTORIES', props<{ inventories: Inventory[] }>());
}
