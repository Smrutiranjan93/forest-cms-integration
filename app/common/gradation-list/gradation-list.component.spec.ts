import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradationListComponent } from './gradation-list.component';

describe('GradationListComponent', () => {
  let component: GradationListComponent;
  let fixture: ComponentFixture<GradationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
