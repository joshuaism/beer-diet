import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { BeerService } from '../beer-service.service';
import { Beer } from '../Beer';

@Component({
  selector: 'app-beer-dropdown',
  templateUrl: './beer-dropdown.component.html',
  styleUrls: ['./beer-dropdown.component.css']
})
export class BeerDropdownComponent implements OnInit {
  @Output() notify: EventEmitter<Beer> = new EventEmitter<Beer>();
  myControl = new FormControl();
  beers: Beer[] = [];
  filteredOptions: Observable<Beer[]>;

  ngOnInit() {
    let service = new BeerService();
      service.getBeers().subscribe(res => 
        res.map(val => {
          var beer = new Beer(val); 
          this.beers.push(beer);
        }));
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.myControl.valueChanges.subscribe(val => {
      if (val instanceof Beer) {
        this.notify.emit(val);
      }
    });
  }

  private _filter(value: any): Beer[] {
    let name = value;
    if (value instanceof Beer) {
      name = value.name;
    }
    const filterValue = name.toLowerCase();

    return this.beers.filter(option => option.name.toLowerCase().indexOf(filterValue) != -1);
  }

  displayFn(beer: Beer): string {
    if (beer) {
      return beer.name;
    }
    return '';
  }
}
