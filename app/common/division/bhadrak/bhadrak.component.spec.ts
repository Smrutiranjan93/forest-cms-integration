import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhadrakComponent } from './bhadrak.component';

describe('BhadrakComponent', () => {
  let component: BhadrakComponent;
  let fixture: ComponentFixture<BhadrakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhadrakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhadrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
