import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AddInventoryComponent } from 'src/app/modules/inventory/components/add-inventory/add-inventory.component';
import { ViewInventoriesComponent } from 'src/app/modules/inventory/components/view-inventories/view-inventories.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FeatureIdConstant } from 'src/app/store/store.constant';
import { getInventoryReducers, inventoryReducerToken } from './store/inventory.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InventoryEffect } from './store/inventory.effect';


@NgModule({
  declarations: [
    AddInventoryComponent,
    ViewInventoriesComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FeatureIdConstant.INVENTORY, inventoryReducerToken),
    EffectsModule.forFeature([InventoryEffect])
  ],
  providers: [
    {
      provide: inventoryReducerToken,
      useFactory: getInventoryReducers
    }
  ]
})
export class InventoryModule { }
