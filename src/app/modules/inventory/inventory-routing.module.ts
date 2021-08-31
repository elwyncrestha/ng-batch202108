import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { ViewInventoriesComponent } from './components/view-inventories/view-inventories.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddInventoryComponent
  },
  {
    path: 'view',
    component: ViewInventoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
