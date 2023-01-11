import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityreportsComponent } from './cityreports.component';

describe('CityreportsComponent', () => {
  let component: CityreportsComponent;
  let fixture: ComponentFixture<CityreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
