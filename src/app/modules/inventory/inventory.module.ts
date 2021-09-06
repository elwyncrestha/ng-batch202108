import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { AddInventoryComponent } from 'src/app/modules/inventory/components/add-inventory/add-inventory.component';
import { ViewInventoriesComponent } from 'src/app/modules/inventory/components/view-inventories/view-inventories.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddInventoryComponent,
    ViewInventoriesComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class InventoryModule { }
