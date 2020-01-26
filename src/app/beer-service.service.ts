import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import beers  from '../assets/beers.json';

@Injectable()
export class BeerService {

  getBeers(): Observable<any> {
    beers.sort((a, b) => a.name.localeCompare(b.name));
    return of(beers);
 }
}
