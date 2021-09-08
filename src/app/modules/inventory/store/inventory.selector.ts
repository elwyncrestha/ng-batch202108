import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureIdConstant } from 'src/app/store/store.constant';
import { InventoryState } from './inventory.reducer';

export const selectInventory = createFeatureSelector<InventoryState>(FeatureIdConstant.INVENTORY);

export const selectInventories = createSelector(
  selectInventory,
  (state) => state.inventories
);
