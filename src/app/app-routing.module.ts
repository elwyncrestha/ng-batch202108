import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { HomeComponent } from './components/home/home.component';
import { ViewInventoriesComponent } from './components/view-inventories/view-inventories.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-inventory',
    component: AddInventoryComponent
  },
  {
    path: 'view-inventory',
    component: ViewInventoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
