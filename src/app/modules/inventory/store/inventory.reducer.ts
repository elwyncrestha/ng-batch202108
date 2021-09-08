import { InjectionToken } from '@angular/core';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { REDUCER_TOKEN } from 'src/app/store/store.constant';
import { InventoryAction } from './inventory.action';

export interface Inventory {
  id?: number;
  name: string;
  quantity: number;
  createdAt?: Date;
  lastModifiedAt?: Date;
}

export interface InventoryState {
  inventories: Inventory[];
}

const inventoriesReducer = createReducer(
  [],
  on(InventoryAction.setInventories, ( state, { inventories }) => ([...inventories]))
);

export const reducers: ActionReducerMap<InventoryState> = {
  inventories: inventoriesReducer
}

export const inventoryReducerToken = new InjectionToken<ActionReducerMap<AppState>>(REDUCER_TOKEN.inventoryReducer);

export function getInventoryReducers(): ActionReducerMap<InventoryState> {
  return reducers;
}
