import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentProtectionComponent } from './environment-protection.component';

describe('EnvironmentProtectionComponent', () => {
  let component: EnvironmentProtectionComponent;
  let fixture: ComponentFixture<EnvironmentProtectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentProtectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
