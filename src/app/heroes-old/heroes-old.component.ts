import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes-old',
  templateUrl: './heroes-old.component.html',
  styleUrls: ['./heroes-old.component.css']
})
export class HeroesOldComponent implements OnInit {

  hero1 = 'windStorm';
  hero: Hero = {
    id: 1,
    name: 'WindStorm-Trouper'
  };

  constructor() { }

  ngOnInit() {
  }

}
