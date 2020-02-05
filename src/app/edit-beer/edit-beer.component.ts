import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BeerService } from '../beer-service.service';
import { Beer } from '../Beer';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {
  beerForm: FormGroup;
  beer: Beer;
  beers: Beer[] = [];
  beerExistsError: boolean;

  constructor(fb: FormBuilder) {
    this.beerForm = fb.group({
      'name': ['', Validators.required],
      'calories': ['', Validators.required],
      'abv': ['', Validators.required],
      'servingSize': ['', Validators.required]
    });

    this.beer = new Beer();
  }

  ngOnInit() {
    let service = new BeerService();
    service.getBeers().subscribe(res =>
      res.map(val => {
        var beer = new Beer(val);
        this.beers.push(beer);
      }));
  }

  onSubmit(value) {
    console.log(value);
    if (this.beers.find(beer => beer.name.toLowerCase().match(value.name.toLowerCase()))) {
      console.log(this.beers.find(beer => beer.name.toLowerCase().match(value.name.toLowerCase())));
      this.beerExistsError = true;
    } else {
      this.beerExistsError = false;
    }
  }
}
