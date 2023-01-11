import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyForestComponent } from './notify-forest.component';

describe('NotifyForestComponent', () => {
  let component: NotifyForestComponent;
  let fixture: ComponentFixture<NotifyForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyForestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifyForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
