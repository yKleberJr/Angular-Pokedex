import { Pokemon } from './../pokemon-card/pokemon';
import { Component, OnInit, OnChanges } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css'],
})
export class PokemonInfoComponent implements OnInit, OnChanges {
  constructor() {}

  pokemonInputInfo: any;

  _opened: boolean = false;

  pokemon = new Pokemon();
  poke_id: Number;
  poke_data: any;
  active: any = 0;
  pokemonStats: any;

  ngOnInit(): void {}

  changeActive() {
    this.active = 0;
    this.pokemonInputInfo = '';
  }

  ngOnChanges() {
    this.poke_data = this.pokemon;
  }

  _toggleOpened(): void {
    this._opened = true;
  }

  _closeDetail() {
    this._opened = false;
  }

  receiveIndex(pokemon: Pokemon) {
    this.pokemon.id = pokemon.id;
    this.poke_id = pokemon.id;
    this.pokemon.name = pokemon.name;
    this.pokemon.type = pokemon.type;
    this.pokemon.height = pokemon.height;
    this.pokemon.weight = pokemon.weight;
    this.pokemon.base_experience = pokemon.base_experience;
    this.pokemonStats = pokemon.stats;
    this.active = pokemon.active;
  }
}
