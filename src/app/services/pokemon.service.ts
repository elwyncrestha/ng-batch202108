import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../modules/pokemon/model/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private readonly httpClient: HttpClient) { }

  getPokemons(limit: number = 100, offset: number = 0): Observable<Pokemon[]> {
    return this.httpClient
      .get<any>(`${environment.pokemon_server_v2}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        tap((v) => console.log(v)),
        map((v) => v.results)
      );
  }

}
