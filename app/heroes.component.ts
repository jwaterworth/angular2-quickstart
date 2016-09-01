import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero'; 
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {

    constructor(private router: Router, private heroService: HeroService) { }

    hero: Hero = {
        id: 1,
        name: "Windstorm"
    };
    heroes: Hero[] = [];
    selectedHero: Hero;

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => {
                console.log('here!');
                this.heroes = heroes;
            });
    }

    public ngOnInit(): void {
        this.getHeroes();
    }

    public goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
