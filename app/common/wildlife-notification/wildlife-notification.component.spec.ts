import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeNotificationComponent } from './wildlife-notification.component';

describe('WildlifeNotificationComponent', () => {
  let component: WildlifeNotificationComponent;
  let fixture: ComponentFixture<WildlifeNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildlifeNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildlifeNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
