import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildlifeClearanceComponent } from './wildlife-clearance.component';

describe('WildlifeClearanceComponent', () => {
  let component: WildlifeClearanceComponent;
  let fixture: ComponentFixture<WildlifeClearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildlifeClearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildlifeClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
