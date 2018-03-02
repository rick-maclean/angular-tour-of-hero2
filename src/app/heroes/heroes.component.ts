import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero1 = 'windStorm';
  hero: Hero = {
    id: 1,
    name: 'WindStorm-Trouper'
  };

  selectedHero: Hero;

  // heroes = HEROES;
  heroes:  Hero[];

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  onSelectHero(heroClicked: Hero): void {
    this.selectedHero = heroClicked;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
