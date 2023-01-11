import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayagarhComponent } from './nayagarh.component';

describe('NayagarhComponent', () => {
  let component: NayagarhComponent;
  let fixture: ComponentFixture<NayagarhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NayagarhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NayagarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
