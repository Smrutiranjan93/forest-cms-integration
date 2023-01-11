import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentNotificationComponent } from './environment-notification.component';

describe('EnvironmentNotificationComponent', () => {
  let component: EnvironmentNotificationComponent;
  let fixture: ComponentFixture<EnvironmentNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
