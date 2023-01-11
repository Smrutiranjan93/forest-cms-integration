import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityrtiComponent } from './cityrti.component';

describe('CityrtiComponent', () => {
  let component: CityrtiComponent;
  let fixture: ComponentFixture<CityrtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityrtiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityrtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
