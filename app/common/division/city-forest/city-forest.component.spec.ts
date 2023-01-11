import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForestComponent } from './city-forest.component';

describe('CityForestComponent', () => {
  let component: CityForestComponent;
  let fixture: ComponentFixture<CityForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityForestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
