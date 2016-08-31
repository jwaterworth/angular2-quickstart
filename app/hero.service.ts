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
            }, 500);
        });

        return promise; 
    }
}