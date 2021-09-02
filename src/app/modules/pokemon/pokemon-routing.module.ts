import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPokemonsComponent } from './components/view-pokemons/view-pokemons.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewPokemonsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
