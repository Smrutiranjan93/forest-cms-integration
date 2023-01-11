import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRulesComponent } from './service-rules.component';

describe('ServiceRulesComponent', () => {
  let component: ServiceRulesComponent;
  let fixture: ComponentFixture<ServiceRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
