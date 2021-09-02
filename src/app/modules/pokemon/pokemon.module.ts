import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPokemonsComponent } from './components/view-pokemons/view-pokemons.component';
import { InventoryRoutingModule } from './pokemon-routing.module';



@NgModule({
  declarations: [
    ViewPokemonsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class PokemonModule { }
