import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayagarhreportsComponent } from './nayagarhreports.component';

describe('NayagarhreportsComponent', () => {
  let component: NayagarhreportsComponent;
  let fixture: ComponentFixture<NayagarhreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NayagarhreportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NayagarhreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
