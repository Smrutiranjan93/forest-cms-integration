import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangroveForestComponent } from './mangrove-forest.component';

describe('MangroveForestComponent', () => {
  let component: MangroveForestComponent;
  let fixture: ComponentFixture<MangroveForestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangroveForestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangroveForestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
