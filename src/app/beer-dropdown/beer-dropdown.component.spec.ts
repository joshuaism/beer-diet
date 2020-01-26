import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDropdownComponent } from './beer-dropdown.component';

describe('BeerDropdownComponent', () => {
  let component: BeerDropdownComponent;
  let fixture: ComponentFixture<BeerDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
