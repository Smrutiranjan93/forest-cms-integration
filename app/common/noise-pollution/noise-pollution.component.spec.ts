import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoisePollutionComponent } from './noise-pollution.component';

describe('NoisePollutionComponent', () => {
  let component: NoisePollutionComponent;
  let fixture: ComponentFixture<NoisePollutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoisePollutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoisePollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
