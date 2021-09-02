import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../model/pokemon.model';

@Component({
  selector: 'app-view-pokemons',
  templateUrl: './view-pokemons.component.html',
  styleUrls: ['./view-pokemons.component.scss']
})
export class ViewPokemonsComponent implements OnInit {
  pokemons: Observable<Pokemon[]>;

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

}
