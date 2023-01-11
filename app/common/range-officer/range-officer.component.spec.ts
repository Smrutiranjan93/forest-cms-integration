import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeOfficerComponent } from './range-officer.component';

describe('RangeOfficerComponent', () => {
  let component: RangeOfficerComponent;
  let fixture: ComponentFixture<RangeOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
