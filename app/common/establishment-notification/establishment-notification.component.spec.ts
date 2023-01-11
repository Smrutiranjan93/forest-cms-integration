import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentNotificationComponent } from './establishment-notification.component';

describe('EstablishmentNotificationComponent', () => {
  let component: EstablishmentNotificationComponent;
  let fixture: ComponentFixture<EstablishmentNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
