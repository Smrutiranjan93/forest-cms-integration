import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfdcComponent } from './ofdc.component';

describe('OfdcComponent', () => {
  let component: OfdcComponent;
  let fixture: ComponentFixture<OfdcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfdcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
