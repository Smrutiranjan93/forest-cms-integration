import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentForestComponent } from './environment-forest.component';

describe('EnvironmentForestComponent', () => {
  let component: EnvironmentForestComponent;
  let fixture: ComponentFixture<EnvironmentForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentForestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
