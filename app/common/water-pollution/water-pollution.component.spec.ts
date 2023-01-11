import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterPollutionComponent } from './water-pollution.component';

describe('WaterPollutionComponent', () => {
  let component: WaterPollutionComponent;
  let fixture: ComponentFixture<WaterPollutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterPollutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
