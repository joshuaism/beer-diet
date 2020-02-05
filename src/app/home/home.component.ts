import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../Beer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() selectedBeer: Beer;
  calories = 2000;
  numberOfBeers = 0;
  fractionalBeer = 0;
  error = "";

  ngOnInit() {

  }

  onKey(value: number) {
    this.updateNumberOfBeers();
  }

  setBeer(value: Beer) {
    console.log(value.name + ": " + value.calories + " calories");
    this.selectedBeer = value;
    this.updateNumberOfBeers();
  }

  updateNumberOfBeers() {
    if (this.selectedBeer) {
      this.numberOfBeers =  this.calories / (this.selectedBeer.calories);
      console.log(this.calories + " calories means " + this.numberOfBeers + "beers");
      this.fractionalBeer = (this.numberOfBeers - Math.floor(this.numberOfBeers)) * 100;
    }
  }

  arrayMaker(value: number) {
    return Array(Math.floor(value));
  }

  carbCalculation(beer : Beer) {
    if (beer.carbs > 0) {
      return (beer.carbs * this.numberOfBeers).toFixed(1) + " grams "
    } else {
      return "a negligible amount "
    }
  }

  proteinCalculation(beer: Beer) {
    if (beer.protein > 0) {
      return (beer.protein * this.numberOfBeers).toFixed(1) + " grams "
    } else {
      return "a negligible amount "
    }
  }

}
