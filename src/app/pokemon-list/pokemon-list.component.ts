import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../service/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: any[] = [];
  page = 1;
  totalPokemons: any;
  searchText: string = '';

  constructor(private pokeService: PokeapiService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() {
    this.pokeService.getPokemon(10, this.page + 0).subscribe((res) => {
      this.totalPokemons = res.count;
      res.results.forEach((element: any) => {
        console.log(res.results);
        this.pokeService.getAdditionalInfo(element.name).subscribe((data) => {
          this.pokemonList.push(data);
          console.log(this.pokemonList);
        });
      });
    });
  }

  filterItems() {}
}
