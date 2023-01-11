import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersClearanceComponent } from './others-clearance.component';

describe('OthersClearanceComponent', () => {
  let component: OthersClearanceComponent;
  let fixture: ComponentFixture<OthersClearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersClearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
