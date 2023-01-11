import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayagarhrtiComponent } from './nayagarhrti.component';

describe('NayagarhrtiComponent', () => {
  let component: NayagarhrtiComponent;
  let fixture: ComponentFixture<NayagarhrtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NayagarhrtiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NayagarhrtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
