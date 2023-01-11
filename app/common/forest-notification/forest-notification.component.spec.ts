import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestNotificationComponent } from './forest-notification.component';

describe('ForestNotificationComponent', () => {
  let component: ForestNotificationComponent;
  let fixture: ComponentFixture<ForestNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForestNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
