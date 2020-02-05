import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BeerDropdownComponent } from './beer-dropdown/beer-dropdown.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerDropdownComponent,
    HomeComponent,
    AboutComponent,
    EditBeerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
