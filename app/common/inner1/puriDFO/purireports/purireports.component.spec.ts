import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurireportsComponent } from './purireports.component';

describe('PurireportsComponent', () => {
  let component: PurireportsComponent;
  let fixture: ComponentFixture<PurireportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurireportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurireportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
