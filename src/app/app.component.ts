import { Component, OnInit, Input } from '@angular/core';
import { Beer } from './Beer';
import { BeerService } from './beer-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  beers: Beer[] = [];
  @Input() selectedBeer: Beer;
  calories = 2000;
  numberOfBeers = 0;
  fractionalBeer = 0;
  error = "";

  ngOnInit() {
      let service = new BeerService();
      service.getBeers().subscribe(res => 
        res.map(val => {
          var beer = new Beer(val); 
          this.beers.push(beer)
        }));
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
}