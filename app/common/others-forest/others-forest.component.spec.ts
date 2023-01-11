import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersForestComponent } from './others-forest.component';

describe('OthersForestComponent', () => {
  let component: OthersForestComponent;
  let fixture: ComponentFixture<OthersForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersForestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
