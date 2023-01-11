import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandakareportsComponent } from './chandakareports.component';

describe('ChandakareportsComponent', () => {
  let component: ChandakareportsComponent;
  let fixture: ComponentFixture<ChandakareportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChandakareportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChandakareportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
