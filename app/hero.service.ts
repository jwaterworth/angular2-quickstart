import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        let promise = new Promise<Hero[]>(resolve => {
            setTimeout(() => {
                console.log('Resolving...');
                resolve(HEROES);
            }, 0);
        });

        return promise; 
    }
    
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}