import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  
   getHeroes(): void {
     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }
  
   ngOnInit(): void {
     this.getHeroes();
   }
   heroes: Hero[];
  
  providers: [HeroService];
  title = 'app';
  hero: Hero = {
    id: 1,
    name: "Ashiqur Rahman Emran"
  };
  
  selectedHero=new Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    
  }
  
  
}

export class Hero {
  id: number;
  name: string;
}
