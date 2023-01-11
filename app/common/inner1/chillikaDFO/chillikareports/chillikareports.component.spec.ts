import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChillikareportsComponent } from './chillikareports.component';

describe('ChillikareportsComponent', () => {
  let component: ChillikareportsComponent;
  let fixture: ComponentFixture<ChillikareportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChillikareportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChillikareportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
